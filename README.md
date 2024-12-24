This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1st, install dependencies:

```bash
pnpm i
```

2nd, prepare development tools:

```bash
pnpm prepare
```

3th, config `.env` file with your api keys:

you need to get api key from weatherbit.io and set it to `.env` file with key `NEXT_PUBLIC_WEATHERBIT_API_KEY`
you need to get api key from ipgeolocation.io and set it to `.env` filen with key `NEXT_PUBLIC_IP_GEOLOCATION_API_KEY`

4th, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
