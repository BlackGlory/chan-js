# chan-js

## Install

```sh
npm install --save @blackglory/chan
# or
yarn add @blackglory/chan
```

## API

### ChanClient

```ts
new ChanClient({
  server: string
, token?: string
})
```

#### enqueue

```ts
ChanClient#enqueue(id: string, val: string, options: {
  signal?: AbortSignal
  token?: string
} = {}): Promise<void>
```

#### dequeue

```ts
ChanClient#dequeue(id: string, options: {
  signal?: AbortSignal
  token?: string
} = {}): Promise<string>
```

### ChanManager

```ts
new ChanManager({
  server: string
, adminPassword: string
})
```

#### JsonSchema

##### getIds

```ts
ChanManager#JsonSchema.getIds(): Promise<string[]>
```

#### get

```ts
ChanManager#JsonSchema.get(id: string): Promise<Json>
```

#### set

```ts
ChanManager#JsonSchema.set(id: string, schema: Json): Promise<void>
```

#### remove

```ts
ChanManager#jsonSchema.remove(id: string): Promise<void>
```

#### Blacklist

##### getIds

```ts
ChanManager#Blacklist.getIds(): Promise<string[]>
```

##### add

```ts
ChanManager#Blacklist.add(id: string): Promise<void>
```

##### remove

```ts
ChanManager#Blacklist.remove(id: string): Promise<void>
```

#### Whitelist

##### getIds

```ts
ChanManager#Whitelist.getIds(): Promise<string[]>
```

##### add

```ts
ChanManager#Whitelist.add(id: string): Promise<void>
```

##### remove

```ts
ChanManager#Whitelist.remove(id: string): Promise<void>
```

#### TokenPolicy

##### getIds

```ts
ChanManager#TokenPolicy.getIds(): Promise<string[]>
```

##### get

```ts
ChanManager#TokenPolicy.get(id: string): Promise<{
  writeTokenRequired: boolean | null
  readTokenRequired: boolean | null
}>
```

##### WriteTokenRequired

###### set

```ts
ChanManager#TokenPolicy.WriteTokenRequired.set(id: string, val: boolean): Promise<void>
```

##### remove

```ts
ChanManager#TokenPolicy.WriteTokenRequired.remove(id: string): Promise<void>
```

##### ReadTokenRequired

###### set

```ts
ChanManager#TokenPolicy.ReadTokenRequired.set(id: string, val: boolean): Promise<void>
```

###### remove

```ts
ChanManager#TokenPolicy.ReadTokenRequired.remove(id: string): Promise<void>
```

#### Token

##### getIds

```ts
ChanManager#Token.getIds(): Promise<string[]>
```

##### getTokens

```ts
ChanManager#Token.getTokens(id: string): Promise<Array<{
  token: string
  write: boolean
  read: boolean
}>>
```

##### addWriteToken

```ts
ChanManager#Token.addWriteToken(id: string, token: string): Promise<void>
```

##### removeWriteToken

```ts
ChanManager#Token.removeWriteToken(id: string, token: string): Promise<void>
```

##### addReadToken

```ts
ChanManager#Token.addReadToken(id: string, token: string): Promise<void>
```

##### removeReadToken

```ts
ChanManager#Token.removeReadToken(id: string, token: string): Promise<void>
```
