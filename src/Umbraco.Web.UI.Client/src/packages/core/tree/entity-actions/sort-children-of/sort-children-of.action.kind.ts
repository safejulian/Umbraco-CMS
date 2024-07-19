import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST } from '@umbraco-cms/backoffice/entity-action';
import type { UmbBackofficeManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifest: UmbBackofficeManifestKind = {
	type: 'kind',
	alias: 'Umb.Kind.EntityAction.SortChildrenOf',
	matchKind: 'sortChildrenOf',
	matchType: 'entityAction',
	manifest: {
		...UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST.manifest,
		type: 'entityAction',
		kind: 'sortChildrenOf',
		api: () => import('./sort-children-of.action.js'),
		weight: 100,
		forEntityTypes: [],
		meta: {
			icon: 'icon-height',
			label: '#actions_sort',
			itemRepositoryAlias: '',
			sortRepositoryAlias: '',
		},
	},
};
