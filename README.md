# Status Codes

A collection of status code enums.

## Available Enums

APACHE  
BRAINTREE  
CLOUDFLARE  
FTP  
HTTP  
IIS  
MONGODB  
NGINX  
NODE

## Install

npm:  
`npm install @status/codes`

yarn:  
`yarn add @status/codes`

## Example Usage

```typescript
import { HTTP } from '@status/codes';

export class NotFoundError extends Error {
  readonly code = HTTP.NOT_FOUND;
}
```
