# useInnerRoot

`useInnerRoot()` is a [hook](./hook.md) that allows you to create a new root context based on the current root context.

This hook returns a function similar to [`createRoot`](../create/createRoot.md), but it preserves the contexts from the current root.

Here’s an example of creating a component after the initial render has already been performed:

```ts
const settings = createContext<{ mode: "dark" | "light" }>();

function App() {
    return settings({ mode: "dark" }, () => /* HTML */ ` ${Main()} `);
}

const Main = renderRoot(() => {
    const { created } = useLifeCycle();
    const createInnerRoot = useInnerRoot();

    created((el) => {
        const main = el.querySelector("main");
        // wait 1s before adding LazyComponent into Main
        setTimeout(() => {
            main.append(...createInnerRoot(LazyComponent));
        }, 1000);
    });

    return /* HTML */ `<main></main>`;
});

const LazyComponent = renderRoot(() => {
    const { mode } = useContext(settings);
    return /* HTML */ `<p>(${mode}) My Lazy Component</p>`;
});
```

To preserve access to the `settings` context, we use `useInnerRoot()`.
If we had used `createRoot()` instead, we would have encountered an error in `LazyComponent`, indicating that `{ mode }` does not exist because `useContext(settings)` would be `undefined`.

## Next

[subtleties](../subtleties.md)
