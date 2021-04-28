# chan-js

## Install

```sh
npm install --save @blackglory/chan-js
# or
yarn add @blackglory/chan-js
```

## API

### ChanClient

```ts
new ChanClient({
  server: string
, token?: string
, keepalive?: boolean
})
```

```ts
interface IChanClientRequestOptions {
  signal?: AbortSignal
  token?: string
  keepalive?: boolean
}
```

#### enqueue

```ts
ChanClient#enqueue(
  namespace: string
, val: string
, options?: IChanClientRequestOptions
): Promise<void>
```

#### enqueueJSON

```ts
ChanClient#enqueueJSON(
  namespace: string
, val: string
, options?: IChanClientRequestOptions
): Promise<void>
```

#### dequeue

```ts
ChanClient#dequeue(
  namespace: string
, options?: IChanClientRequestOptions
): Promise<string>
```

#### dequeueJSON

```ts
ChanClient#dequeueJSON(
  namespace: string
, options?: IChanClientRequestOptions
): Promise<Json>
```

### ChanManager

```ts
new ChanManager({
  server: string
, adminPassword: string
})
```

```ts
interface IChanManagerRequestOptions {
  signal?: AbortSignal
}
```

#### JsonSchema

##### getNamespaces

```ts
ChanManager#JsonSchema.getNamespaces(
  options?: IChanManagerRequestOptions
): Promise<string[]>
```

##### get

```ts
ChanManager#JsonSchema.get(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<Json>
```

##### set

```ts
ChanManager#JsonSchema.set(
  namespace: string
, schema: Json
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### remove

```ts
ChanManager#JsonSchema.remove(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

#### Blacklist

##### getNamespaces

```ts
ChanManager#Blacklist.getNamespaces(
  options?: IChanManagerRequestOptions
): Promise<string[]>
```

##### add

```ts
ChanManager#Blacklist.add(
  namespace: string
, options?: IChanManagerRequestOptionso
): Promise<void>
```

##### remove

```ts
ChanManager#Blacklist.remove(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

#### Whitelist

##### getNamespace

```ts
ChanManager#Whitelist.getNamespaces(
  options?: IChanManagerRequestOptions
): Promise<string[]>
```

##### add

```ts
ChanManager#Whitelist.add(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### remove

```ts
ChanManager#Whitelist.remove(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

#### TokenPolicy

##### getIds

```ts
ChanManager#TokenPolicy.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### get

```ts
ChanManager#TokenPolicy.get(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<{
  writeTokenRequired: boolean | null
  readTokenRequired: boolean | null
}>
```

##### setWriteTokenRequired

```ts
ChanManager#TokenPolicy.setWriteTokenRequired(
  namespace: string
, val: boolean
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### removeWriteTokenRequired

```ts
ChanManager#TokenPolicy.removeWriteTokenRequired(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### setReadTokenRequired

```ts
ChanManager#TokenPolicy.setReadTokenRequired(
  namespace: string
, val: boolean
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### removeReadTokenRequired

```ts
ChanManager#TokenPolicy.removeReadTokenRequired(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

#### Token

##### getNamespaces

```ts
ChanManager#Token.getNamespaces(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### getTokens

```ts
ChanManager#Token.getTokens(
  namespace: string
, options?: IChanManagerRequestOptions
): Promise<Array<{
  token: string
  write: boolean
  read: boolean
}>>
```

##### addWriteToken

```ts
ChanManager#Token.addWriteToken(
  namespace: string
, token: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### removeWriteToken

```ts
ChanManager#Token.removeWriteToken(
  namespace: string
, token: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### addReadToken

```ts
ChanManager#Token.addReadToken(
  namespace: string
, token: string
, options?: IChanManagerRequestOptions
): Promise<void>
```

##### removeReadToken

```ts
ChanManager#Token.removeReadToken(
  namespace: string
, token: string
, options?: IChanManagerRequestOptions
): Promise<void>
```
