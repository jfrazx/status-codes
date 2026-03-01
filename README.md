# Status Codes

[![npm (scoped)](https://img.shields.io/npm/v/@status/codes.svg)](https://www.npmjs.com/package/@status/codes)
[![NPM](https://img.shields.io/npm/l/@status/codes.svg)](LICENSE)

A collection of status code enums.

## Available Enums

- Apache
- Auth0
- Braintree
- Cloudflare
- FirebaseAuth
- FirebaseAdminAuth
- FirebaseAnalytics
- FirebaseMessaging
- FTP
- Http
- IIS
- IRC
- Mocha
- MongoDB
- Mongoose \*wip
- Nginx
- Node
- Postgres
- Prisma
- Twitter

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

Use with express:

```javascript
const { Http } = require('@status/codes');

create(request, response) {
  return Model.create(request.body)
    .then(instance => response.status(Http.Created).json(instance))
    .catch(error => response.status(Http.Conflict).json(error))
}
```

Or Nestjs:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService, Prisma } from '@my-app/database';
import { PrismaError } from '@status/codes';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async getUserById(id: string) {
    try {
      return await this.db.user.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === PrismaError.DependentRecordNotFound) {
          throw new NotFoundException(`User with id ${id} not found`);
        }
      }

      throw error;
    }
  }
}
```
