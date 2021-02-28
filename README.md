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
})
```

```ts
interface IChanClientRequestOptions {
  signal?: AbortSignal
  token?: string
}
```

#### enqueue

```ts
ChanClient#enqueue(id: string, val: string, options?: IChanClientRequestOptions): Promise<void>
```

#### enqueueJSON

```ts
ChanClient#enqueueJSON(id: string, val: string, options?: IChanClientRequestOptions): Promise<void>
```

#### dequeue

```ts
ChanClient#dequeue(id: string, options?: IChanClientRequestOptions): Promise<string>
```

#### dequeueJSON

```ts
ChanClient#dequeueJSON(id: string, options?: IChanClientRequestOptions): Promise<Json>
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

##### getIds

```ts
ChanManager#JsonSchema.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### get

```ts
ChanManager#JsonSchema.get(id: string, options?: IChanManagerRequestOptions): Promise<Json>
```

##### set

```ts
ChanManager#JsonSchema.set(id: string, schema: Json, options?: IChanManagerRequestOptions): Promise<void>
```

##### remove

```ts
ChanManager#JsonSchema.remove(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

#### Blacklist

##### getIds

```ts
ChanManager#Blacklist.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### add

```ts
ChanManager#Blacklist.add(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### remove

```ts
ChanManager#Blacklist.remove(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

#### Whitelist

##### getIds

```ts
ChanManager#Whitelist.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### add

```ts
ChanManager#Whitelist.add(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### remove

```ts
ChanManager#Whitelist.remove(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

#### TokenPolicy

##### getIds

```ts
ChanManager#TokenPolicy.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### get

```ts
ChanManager#TokenPolicy.get(id: string, options?: IChanManagerRequestOptions): Promise<{
  writeTokenRequired: boolean | null
  readTokenRequired: boolean | null
}>
```

##### setWriteTokenRequired

```ts
ChanManager#TokenPolicy.setWriteTokenRequired(id: string, val: boolean, options?: IChanManagerRequestOptions): Promise<void>
```

##### removeWriteTokenRequired

```ts
ChanManager#TokenPolicy.removeWriteTokenRequired(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### setReadTokenRequired

```ts
ChanManager#TokenPolicy.setReadTokenRequired(id: string, val: boolean, options?: IChanManagerRequestOptions): Promise<void>
```

##### removeReadTokenRequired

```ts
ChanManager#TokenPolicy.removeReadTokenRequired(id: string, options?: IChanManagerRequestOptions): Promise<void>
```

#### Token

##### getIds

```ts
ChanManager#Token.getIds(options?: IChanManagerRequestOptions): Promise<string[]>
```

##### getTokens

```ts
ChanManager#Token.getTokens(id: string, options?: IChanManagerRequestOptions): Promise<Array<{
  token: string
  write: boolean
  read: boolean
}>>
```

##### addWriteToken

```ts
ChanManager#Token.addWriteToken(id: string, token: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### removeWriteToken

```ts
ChanManager#Token.removeWriteToken(id: string, token: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### addReadToken

```ts
ChanManager#Token.addReadToken(id: string, token: string, options?: IChanManagerRequestOptions): Promise<void>
```

##### removeReadToken

```ts
ChanManager#Token.removeReadToken(id: string, token: string, options?: IChanManagerRequestOptions): Promise<void>
```
