import { manifests as workspaceViewManifests } from './views/manifests.js';
import { UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_ALIAS } from './index.js';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';
import { UmbSubmitWorkspaceAction } from '@umbraco-cms/backoffice/workspace';

export const manifests: Array<ManifestTypes> = [
	...workspaceViewManifests,
	{
		type: 'workspace',
		kind: 'routable',
		name: 'Block Grid Area Type Workspace',
		alias: UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_ALIAS,
		api: () => import('./block-grid-area-type-workspace.context.js'),
		meta: {
			entityType: 'block-grid-area-type',
		},
	},
	{
		type: 'workspaceAction',
		kind: 'default',
		alias: 'Umb.WorkspaceAction.BlockGridAreaType.Save',
		name: 'Save Block Grid Area Type Workspace Action',
		api: UmbSubmitWorkspaceAction,
		meta: {
			label: '#general_submit',
			look: 'primary',
			color: 'positive',
		},
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_ALIAS,
			},
		],
	},
];
