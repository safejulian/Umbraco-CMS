import { UmbMemberTreeStore, UMB_MEMBER_TREE_STORE_CONTEXT_TOKEN } from './member.tree.store';
import { MemberTreeServerDataSource } from './sources/member.tree.server.data';
import { UmbControllerHostInterface } from '@umbraco-cms/controller';
import { UmbNotificationService, UMB_NOTIFICATION_SERVICE_CONTEXT_TOKEN } from '@umbraco-cms/notification';
import { UmbContextConsumerController } from '@umbraco-cms/context-api';
import { ProblemDetailsModel } from '@umbraco-cms/backend-api';
import type { UmbTreeRepository } from '@umbraco-cms/models';

export class UmbMemberTreeRepository implements UmbTreeRepository {
	#host: UmbControllerHostInterface;
	#dataSource: MemberTreeServerDataSource;
	#treeStore?: UmbMemberTreeStore;
	#notificationService?: UmbNotificationService;
	#initResolver?: () => void;
	#initialized = false;

	constructor(host: UmbControllerHostInterface) {
		this.#host = host;
		// TODO: figure out how spin up get the correct data source
		this.#dataSource = new MemberTreeServerDataSource(this.#host);

		new UmbContextConsumerController(this.#host, UMB_MEMBER_TREE_STORE_CONTEXT_TOKEN, (instance) => {
			this.#treeStore = instance;
			this.#checkIfInitialized();
		});

		new UmbContextConsumerController(this.#host, UMB_NOTIFICATION_SERVICE_CONTEXT_TOKEN, (instance) => {
			this.#notificationService = instance;
			this.#checkIfInitialized();
		});
	}

	#init = new Promise<void>((resolve) => {
		this.#initialized ? resolve() : (this.#initResolver = resolve);
	});

	#checkIfInitialized() {
		if (this.#treeStore && this.#notificationService) {
			this.#initialized = true;
			this.#initResolver?.();
		}
	}

	async requestRootItems() {
		await this.#init;

		const { data, error } = await this.#dataSource.getRootItems();

		if (data) {
			this.#treeStore?.appendItems(data.items);
		}

		return { data, error };
	}

	async requestChildrenOf(parentKey: string | null) {
		const error: ProblemDetailsModel = { title: 'Not implemented' };
		return { data: undefined, error };
	}

	async requestItems(keys: Array<string>) {
		await this.#init;

		if (!keys) {
			const error: ProblemDetailsModel = { title: 'Keys are missing' };
			return { data: undefined, error };
		}

		const { data, error } = await this.#dataSource.getItems(keys);

		return { data, error };
	}

	async rootItems() {
		await this.#init;
		return this.#treeStore!.rootItems();
	}

	async childrenOf(parentKey: string | null) {
		await this.#init;
		return this.#treeStore!.childrenOf(parentKey);
	}

	async items(keys: Array<string>) {
		await this.#init;
		return this.#treeStore!.items(keys);
	}
}
