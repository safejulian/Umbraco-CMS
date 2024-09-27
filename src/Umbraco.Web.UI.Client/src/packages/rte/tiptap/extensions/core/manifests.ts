import type { ManifestTiptapExtension } from '../tiptap-extension.js';

export const manifests: Array<ManifestTiptapExtension> = [
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Blockquote',
		name: 'Blockquote Tiptap Extension',
		api: () => import('./blockquote.extension.js'),
		weight: 995,
		meta: {
			icon: 'icon-blockquote',
			label: 'Blockquote',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Bold',
		name: 'Bold Tiptap Extension',
		api: () => import('./bold.extension.js'),
		weight: 999,
		meta: {
			icon: 'icon-bold',
			label: 'Bold',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.CodeBlock',
		name: 'Code Block Tiptap Extension',
		api: () => import('./code-block.extension.js'),
		weight: 994,
		meta: {
			icon: 'icon-code',
			label: 'Code Block',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.Embed',
		name: 'Embed Tiptap Extension',
		api: () => import('./embedded-media.extension.js'),
		weight: 70,
		meta: {
			icon: 'icon-embed',
			label: '#general_embed',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.Link',
		name: 'Link Tiptap Extension',
		api: () => import('./link.extension.js'),
		weight: 102,
		meta: {
			icon: 'icon-link',
			label: '#defaultdialogs_urlLinkPicker',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.Figure',
		name: 'Figure Tiptap Extension',
		api: () => import('./figure.extension.js'),
		weight: 955,
		meta: {
			icon: 'icon-frame',
			label: 'Figure',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.HorizontalRule',
		name: 'Horizontal Rule Tiptap Extension',
		api: () => import('./horizontal-rule.extension.js'),
		weight: 991,
		meta: {
			icon: 'icon-horizontal-rule',
			label: 'Horizontal Rule',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.Image',
		name: 'Image Tiptap Extension',
		api: () => import('./image.extension.js'),
		meta: {
			icon: 'icon-picture',
			label: 'Image',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Italic',
		name: 'Italic Tiptap Extension',
		api: () => import('./italic.extension.js'),
		weight: 998,
		meta: {
			icon: 'icon-italic',
			label: 'Italic',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Strike',
		name: 'Strike Tiptap Extension',
		api: () => import('./strike.extension.js'),
		weight: 996,
		meta: {
			icon: 'icon-strikethrough',
			label: 'Strike',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Table',
		name: 'Table Tiptap Extension',
		api: () => import('./table.extension.js'),
		weight: 909,
		meta: {
			icon: 'icon-table',
			label: 'Table',
		},
	},
	{
		type: 'tiptapExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Underline',
		name: 'Underline Tiptap Extension',
		api: () => import('./underline.extension.js'),
		weight: 997,
		meta: {
			icon: 'icon-underline',
			label: 'Underline',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.Heading',
		name: 'Heading Tiptap Extension',
		api: () => import('./heading.extension.js'),
		meta: {
			icon: 'icon-heading-1',
			label: 'Heading',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.List',
		name: 'List Tiptap Extension',
		api: () => import('./list.extension.js'),
		meta: {
			icon: 'icon-ordered-list',
			label: 'Ordered List',
		},
	},
	{
		type: 'tiptapExtension',
		alias: 'Umb.Tiptap.TextAlign',
		name: 'Text Align Tiptap Extension',
		api: () => import('./text-align.extension.js'),
		meta: {
			icon: 'icon-text-align-justify',
			label: 'Text Align',
		},
	},
];
