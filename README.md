# Status Codes

A collection of status code enums.

## Available Enums

Apache  
Braintree  
Cloudflare  
Firebase \*wip  
FTP  
Http  
IIS  
MongoDB  
Mongoose \*wip  
Nginx  
Node

## Install

npm:  
`npm install @status/codes`

yarn:  
`yarn add @status/codes`

## Example Usage

```typescript
import { Http } from '@status/codes';

export class NotFoundError extends Error {
  readonly code = Http.NotFound;
}
```
