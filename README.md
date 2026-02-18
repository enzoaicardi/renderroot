# renderroot

_**renderRoot** is a tiny JavaScript micro-library (written in **TypeScript**) under `1kb` that enables DOM rendering in JavaScript, similar to **React**, **Vue**, etc., but with a much lower level of abstraction._

[![NPM Version](https://img.shields.io/npm/v/@enzoaicardi/renderroot.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![NPM Downloads](https://img.shields.io/npm/dm/@enzoaicardi/renderroot.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@enzoaicardi/renderroot?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![JSDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/@enzoaicardi/renderroot?style=for-the-badge)](https://www.jsdelivr.com/package/npm/@enzoaicardi/renderroot)
[![Wiki](https://img.shields.io/badge/Wiki-Documentation-blue?style=for-the-badge)](https://github.com/enzoaicardi/renderroot/tree/main/wiki/README.md)
[![Codepen](https://img.shields.io/badge/Demos-codepen.io-seagreen?style=for-the-badge)](https://codepen.io/collection/adverM)

# What is renderRoot ?

renderRoot is a javascript micro-library (written in typescript) of less than `1kb` which allows you to render DOM in javascript, like React, Vue, etc...

# List of all exports

- [x] useRoot
- [x] useContext
- [x] useNonNullableContext
- [x] useLifeCycle
- [x] useInnerRoot
- [x] createRoot
- [x] createContext
- [x] renderRoot

```js
import {
    useRoot,
    useContext,
    useNonNullableContext,
    useLifeCycle,
    useInnerRoot,
    createRoot,
    createContext,
    renderRoot,
} from "@enzoaicardi/renderroot"; // cdn at https://cdn.jsdelivr.net/npm/@enzoaicardi/renderroot@latest/esm/renderroot.js
```

# Intallations

## NPM package

```bash
npm install @enzoaicardi/renderroot
```

```js
import {
    useRoot,
    useContext,
    useNonNullableContext,
    useLifeCycle,
    useInnerRoot,
    createRoot,
    createContext,
    renderRoot,
} from "@enzoaicardi/renderroot"; // es modules
const {
    useRoot,
    useContext,
    useNonNullableContext,
    useLifeCycle,
    useInnerRoot,
    createRoot,
    createContext,
    renderRoot,
} = require("@enzoaicardi/renderroot"); // commonjs modules
```

## CDN import

```js
// es modules
import {
    useRoot,
    useContext,
    useNonNullableContext,
    useLifeCycle,
    useInnerRoot,
    createRoot,
    createContext,
    renderRoot,
} from "https://cdn.jsdelivr.net/npm/@enzoaicardi/renderroot@latest/esm/renderroot.js";
```

```html
<!-- iife function execution -->
<script src="https://cdn.jsdelivr.net/npm/@enzoaicardi/renderroot@latest/iife/renderroot.js"></script>
<script>
    // global object destructuration
    const {
        useRoot,
        useContext,
        useNonNullableContext,
        useLifeCycle,
        useInnerRoot,
        createRoot,
        createContext,
        renderRoot,
    } = renderroot;
</script>
```
