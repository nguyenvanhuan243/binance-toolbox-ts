# Get overview Binance Account with Binance Toolbox Typescript

A few scripts that showing how to use the Binance connector `@binance/connector-typescript`.
https://www.npmjs.com/package/@binance/connector-typescript
## Preparation

1. Install package

```typescript

yarn install

```

2. Some of the method require API key and secret.
- https://www.binance.com/en/my/settings/api-management
```shell
export API_KEY=<your_api_key>
export API_SECRET=<you_api_secret>
```


## How to run

### Api
Get overview account
```
http://localhost:3000/account-overview
```
### get market info

```typescript
yarn run market

```
### get account info and asset balance

```typescript
yarn run account
```

### order related methods

```typescript
yarn run place-order
```


