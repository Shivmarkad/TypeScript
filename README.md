# TypeScript
### It is the superset of JavaScript. Which is used to add static typing in the javascript

# Primitive Types
### string , number, boolean, bigint, undefined, null, symbol

## Explicit type annotation

```typescript
 let stdName : string = 'shiv'; 
```
### Implicit type Annotation: 
#### If variable is initialized with value then TS will infer it's type

```typescript
let stdName = 'shiv'; 
```

# Union Types
### A variable that can be assigned more than one type

```typescript
let age:  number | string;
age = 23;  //number 
age = '23'; // string
```

# Dynamic Types

### The `any` type basically reverts TS back to JS.

```typescript
let age: any = 12;
age = 'twelve';
```

# Literal Types
### Type can be refer to specific string and numbers
```typescript
let result: 'Pass' | 'Fail';
result = 'Pass';
```

