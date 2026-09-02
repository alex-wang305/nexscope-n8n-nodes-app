import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { amazonDataDescription } from './resources/amazonData';

export class Nexscope implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nexscope',
		name: 'nexscope',
		icon: { light: 'file:nexscope.svg', dark: 'file:nexscope.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Access structured ecommerce intelligence through the Nexscope API',
		defaults: {
			name: 'Nexscope',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'nexscopeApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.nexscope.ai',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Amazon Data',
						value: 'amazonData',
					},
				],
				default: 'amazonData',
			},
			...amazonDataDescription,
		],
	};
}
