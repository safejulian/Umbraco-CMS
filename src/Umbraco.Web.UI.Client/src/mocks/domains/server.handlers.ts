import { rest } from 'msw';

import umbracoPath from '../../core/helpers/umbraco-path';
import { StatusResponse, VersionResponse } from '../../core/models';

export const handlers = [
	rest.get(umbracoPath('/server/status'), (_req, res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			ctx.json<StatusResponse>({
				serverStatus: import.meta.env.VITE_UMBRACO_INSTALL_STATUS,
			})
		);
	}),
	rest.get(umbracoPath('/server/version'), (_req, res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			ctx.json<VersionResponse>({
				version: '13.0.0',
			})
		);
	}),
];
