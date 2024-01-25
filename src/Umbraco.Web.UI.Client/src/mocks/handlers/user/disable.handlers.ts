const { rest } = window.MockServiceWorker;
import { umbUsersData } from '../../data/user/user.db.js';
import { UMB_SLUG } from './slug.js';
import type { DisableUserRequestModel } from '@umbraco-cms/backoffice/backend-api';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';

export const handlers = [
	rest.post<DisableUserRequestModel>(umbracoPath(`${UMB_SLUG}/disable`), async (req, res, ctx) => {
		const data = await req.json();
		if (!data) return;
		if (!data.userIds) return;

		umbUsersData.disable(data.userIds);

		return res(ctx.status(200));
	}),
];
