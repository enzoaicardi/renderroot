# Hooks

**Hooks** are utility functions that return a value which can be used by the caller.

Hooks follow at least two rules:

-   The hook’s name must start with “use”.
-   The hook must only be called within the root block of a function.

Here’s an example of a custom hook that returns a random number. This hook isn’t particularly useful, but it demonstrates that a hook is simply a function:

```ts
function useRandomHook() {
    return Math.random();
}

function MyComponent() {
    const randomNumber = useRandomHook();

    return /* HTML */ `<p>random number: ${randomNumber}</p>`;
}
```

The `renderroot` library includes four hooks by default:

-   [`useLifeCycle`](./useLifeCycle.md): allows interaction with a `<render-root>` component’s lifecycle.
-   [`useContext`](./useContext.md): retrieves the value provided by a context.
-   [`useNonNullableContext`](./useContext.md): similar to `useContext` but it also guarantees that the value is not `null` or `undefined`.
-   [`useInnerRoot`](./useInnerRoot.md): creates an inner root context based on the current root context.

## Hooks using hooks

Since a hook can only be called within the root block of a function, a hook can itself call another hook. This allows you to create shortcut hooks tailored to your application’s needs.

For example, you can use both `useContext` and `useLifeCycle` inside your custom hooks.

## Next

[useLifeCycle](./useLifeCycle.md)
