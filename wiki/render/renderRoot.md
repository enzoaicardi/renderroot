# renderRoot

The `renderRoot` function takes a single argument — a callback function that must return HTML as a string.

```ts
function App() {
    return /* HTML */ ` ${Title("My App")} ${Description("this is my app")} `;
}

const Title = renderRoot((content: string) => {
    return /* HTML */ `<h1>${content}</h1>`;
});

const Description = renderRoot((content: string) => {
    return /* HTML */ `<p>${content}</p>`;
});

document.boby.append(...createRoot(App));
```

This mechanism also allows you to access the component lifecycle functions `created`, `connected`, and `disconnected` through the `useLifeCycle()` hook.

## Under the hood

`renderRoot(callback)` returns a new function. When executed, this new function adds to the **root context** several arrays used to store the component’s lifecycle functions. The HTML string returned by the callback is then wrapped inside a **custom element** `<render-root>...</render-root>`.

This function also has a `.native` property to access the original function.

## Next

To interact with your component, you’ll now need to understand how **hooks** like `useLifeCycle()` work.

[Hooks](../hooks/hooks.md)
