# renderroot

_A fast way to render dom components without compilation_

[![NPM Version](https://img.shields.io/npm/v/@enzoaicardi/renderroot.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![NPM Downloads](https://img.shields.io/npm/dm/@enzoaicardi/renderroot.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@enzoaicardi/renderroot?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/renderroot)
[![JSDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/@enzoaicardi/renderroot?style=for-the-badge)](https://www.jsdelivr.com/package/npm/@enzoaicardi/renderroot)
[![Wiki](https://img.shields.io/badge/Wiki-Documentation-blue?style=for-the-badge)](https://github.com/enzoaicardi/renderroot/tree/main/wiki/README.md)

# /!\ Important

This package is currently in **BETA**. It's being considered as a replacement for webcomponents, which has too low a performance and too high a complexity to match instances with real components.

# List of all exports

-   [x] useRoot
-   [x] useContext
-   [x] useLifeCycle
-   [x] createRoot
-   [x] createContext
-   [x] renderRoot

```js
import {
    useRoot,
    useContext,
    useLifeCycle,
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
    useLifeCycle,
    createRoot,
    createContext,
    renderRoot,
} from "@enzoaicardi/renderroot"; // es modules
const {
    useRoot,
    useContext,
    useLifeCycle,
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
    useLifeCycle,
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
        useLifeCycle,
        createRoot,
        createContext,
        renderRoot,
    } = renderroot;
</script>
```
