# @nexscope/n8n-nodes-app

Official n8n community node for [Nexscope](https://www.nexscope.ai?channel=n8n), providing structured ecommerce data for production automations and AI-agent workflows.

## Supported operations

The first release provides the following Amazon Data operations:

| Operation | Use case |
| --- | --- |
| Search Products | Search and filter Amazon products by marketplace, keyword, price, sales, reviews, rating, category, brand, and fulfillment |
| Get Product Details | Retrieve listing content, prices, variants, images, ratings, and related product data for up to 40 ASINs |
| Get Product History | Retrieve current product data and historical price, rank, and monthly-sales signals for up to five ASINs |
| Get Reviews | Retrieve reviews by ASIN with marketplace, star-rating, keyword, verification, and media filters |
| Get ASIN Keywords | Reverse-lookup the organic and paid traffic keywords for an ASIN |
| Find Related ASINs | Find same-niche competitors and filter them by sales, price, rating, reviews, conversion, margin, and seller country |

## Credentials

1. Sign in to Nexscope.
2. Open [Data API access](https://www.nexscope.ai/seller/api-access?tab=api-keys&mode=data&channel=n8n).
3. Create or copy an API key beginning with `nk-`.
4. In n8n, create a **Nexscope API** credential and paste the key into the **API Key** field.
5. Save the credential. n8n validates it against the Nexscope API.

The credential is sent only as an HTTPS `Authorization: Bearer` header to `https://api.nexscope.ai`.

## Installation

### Self-hosted n8n

Open **Settings → Community Nodes**, select **Install**, and enter:

```text
@nexscope/n8n-nodes-app
```

Restart n8n if your deployment does not reload community nodes automatically.

### n8n Cloud

n8n Cloud only allows verified community nodes. Install this package from the node panel after it has passed n8n verification and appears in the community-node directory.

## Quick start

1. Add the **Nexscope** node to a workflow.
2. Select your **Nexscope API** credential.
3. Choose **Amazon Data** as the resource.
4. Choose an operation, enter the ASIN or search criteria, then execute the node.
5. Connect the output to a database, spreadsheet, CRM, LLM, notification, or another n8n node.

All operations return the documented Nexscope API response as n8n JSON. See the [Nexscope API documentation](https://www.nexscope.ai/api-docs?channel=n8n) for response-field definitions and marketplace coverage.

## Development

Use Node.js 22 or later.

```bash
npm install
npm run lint
npm run build
```

Run `npm run dev` to open a local n8n instance with the node loaded.

## License

[MIT](LICENSE.md)
