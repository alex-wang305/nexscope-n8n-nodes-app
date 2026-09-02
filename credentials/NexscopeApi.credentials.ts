import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class NexscopeApi implements ICredentialType {
	name = 'nexscopeApi';

	displayName = 'Nexscope API';

	icon: Icon = {
		light: 'file:../nodes/Nexscope/nexscope.svg',
		dark: 'file:../nodes/Nexscope/nexscope.dark.svg',
	};

	documentationUrl =
		'https://www.nexscope.ai/seller/api-access?tab=api-keys&mode=data&channel=n8n';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			placeholder: 'nk-xxxxxxxxxxxxxxxxx',
			description: 'Your Nexscope Data API key',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.nexscope.ai',
			url: '/api/skill-api/v1/skills/amazon-product-research/run',
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: {},
		},
	};
}
