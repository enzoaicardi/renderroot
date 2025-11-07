# What is renderRoot?

**renderRoot** is a tiny JavaScript micro-library (written in **TypeScript**) under `1kb` that enables DOM rendering in JavaScript, similar to **React**, **Vue**, etc., but with a much lower level of abstraction.

## How is it different?

**renderRoot** differs from most other DOM rendering libraries in several ways. These are not necessarily advantages, but structural differences that may make you prefer one approach over another:

-   **Vanilla**: uses plain JavaScript/TypeScript, unlike libraries such as React or Solid that rely on JavaScript supersets like JSX.
-   **String-based**: renders your application as a single HTML string, whereas libraries like React build your application element by element using something like `createElement` under the hood.
-   **Template Literals**: uses [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) without [tag functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), unlike libraries such as Lit. For syntax highlighting and Prettier formatting, simply prefix your template string with a `/* HTML */` comment.
-   **Synchronous**: is fully synchronous. Like Solid, you can rely on the order of elements in your render tree, just as when modifying variables. This differs from React’s component lifecycle or the reactive variables created with `useState`.
-   **No Re-rendering**: renders your components only once. As in Solid, the body of your component function executes a single time, unlike React where a component can re-render when reactive variables change.
-   **Out of the box**: includes only the rendering logic by default — for example, it has no built-in reactivity system. You can plug in your own reactivity layer via a hook. This wiki provides an [example](./subtleties.md) using a hook built with [`@enzoaicardi/reactivity`](https://npmjs.com/package/reactivity).

## Overview

Here are the various exports provided by the **renderRoot** library and their roles:

-   [`createRoot`](./create/createRoot.md): initializes a root context and creates a DOM tree from a callback function returning an HTML structure as a string.
-   [`renderRoot`](./render/renderRoot.md): takes a render function, wraps the returned HTML structure inside a `<render-root>` element, and adds an execution context for that element.
-   [`createContext`](./create/createContext.md): creates a context that exposes a value to all child structures.
-   [`useContext`](./hooks/useContext): retrieves the value of a context from within a render function.
-   [`useLifeCycle`](./hooks/useLifeCycle.md): returns two functions — `connected`, which runs when the element is constructed, and `disconnected`, which runs when it’s removed from the DOM.
-   [`useInnerRoot`](./hooks/useInnerRoot.md): creates a root context dependent on the current one, enabling the creation and addition of components dynamically.
-   `useRoot`: retrieves the current root context (rarely used).

## Next

[createRoot](./create/createRoot.md)
