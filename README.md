
## Next.js Authentication Boilerplate


### Installation

- Install dependencies:

```bash
npm i
```

- Create a MongoDB cluster and get the connection string from the [MongoDB dashboard](https://cloud.mongodb.com/).

- Create a `.env` file in the root directory as per the `.env.example` file:

```shell
cp .env.example .env
```

- Set MongoDB credentials in the `.env` file:

```dotenv
MONGODB_USER="user"
MONGODB_PASSWORD="password"
MONGODB_DATABASE="database"
MONGODB_CLUSTER="cluster0"
MONGODB_DOMAIN="mzcsh.mongodb.net"
```

- Generate a secret key:

```shell
openssl rand -base64 32
```

- Set `AUTH_SECRET` and `NEXTAUTH_URL` in the `.env` file:

```dotenv
NEXTAUTH_SECRET="<generated_key>"
NEXTAUTH_URL="http://localhost:3000"
```

- Set the `ADMIN_EMAIL` in the `.env` file (GitHub email used in this example):

```dotenv
ADMIN_EMAIL="admin@gmail.com"
```

- Create a [GitHub OAuth app](https://github.com/settings/developers) and set the `GITHUB_ID` and `GITHUB_SECRET` in the `.env` file:

```dotenv
GITHUB_ID="<github_id>"
GITHUB_SECRET="<github_secret>"
```

- Run the server:

```bash
npm run dev
# or
npm start
```

- Open [http://localhost:3000](http://localhost:3000) on your browser.


### Resources

- [Next.js Authentication - AuthJS / NextAuth for Role-Based Security](https://www.youtube.com/watch?v=MNm1XhDjX1s)
- [ClarityCoders/NextAuthTutorial-Video](https://github.com/ClarityCoders/NextAuthTutorial-Video)

- [Next.js 14 Admin Dashboard Tutorial | Fullstack Next.js 14 Project with Server Actions](https://www.youtube.com/watch?v=cBg6xA5C60s)
- [safak/nextadmin](https://github.com/safak/nextadmin/tree/completed)

- [Credentials authentication](https://authjs.dev/getting-started/providers/credentials-tutorial)
- [Protecting your routes with Next.js Middleware](https://nextjs.org/learn/dashboard-app/adding-authentication#protecting-your-routes-with-nextjs-middleware)
- [Authentication](https://nextjs.org/docs/pages/building-your-application/authentication)

- [Error: NEXT_REDIRECT while using server actions #49298](https://github.com/vercel/next.js/issues/49298#issuecomment-1542055642)
- [User object is empty #2762](https://github.com/nextauthjs/next-auth/discussions/2762)


### Author

- [BoolFalse](https://boolfalse.com/)
