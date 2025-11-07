# Subtleties

Managing components using plain functions, `renderRoot`, and hooks involves certain subtleties you should understand to avoid common pitfalls.

## Never pass nested children as strings

You should never pass nested child components as strings.

Here’s an example of what **not** to do:

```ts
const MyComponent = renderRoot((children: string) => {
    return /* HTML */ `<div>${children}</div>`;
});

const ChildrenComponent = renderRoot(() => {
    const { created } = useLifeCycle();
    created((el) => console.log(el.firstElementChild));

    return /* HTML */ `<p>I'm the children component</p>`;
});

// Bad idea!
function App() {
    return /* HTML */ ` <main>${MyComponent(ChildrenComponent())}</main>`;
}

document.boby.append(...createRoot(App));
```

In the example above, the line `console.log(el.firstElementChild)` will never return the `<p>...</p>` element — instead, it will log the `<div>...</div>` element from `MyComponent`.

This happens because of the line `MyComponent(ChildrenComponent())`. When this code executes, the JavaScript engine first evaluates `ChildrenComponent()` (turning it into a string) and only then evaluates `MyComponent(...)`.

Meanwhile, `createRoot` creates a new root context, and every time a component is evaluated, it adds an entry to record that component’s lifecycle actions. These actions are restored in the same order as the DOM structure, according to how browsers parse and render the DOM.

The problem is that the order in which lifecycle actions are registered no longer matches the order in which the browser evaluates DOM elements.

Since `ChildrenComponent()` is evaluated first, its lifecycle is added first to the root context. But when the browser processes the DOM, the first `<render-root>` it encounters is `MyComponent`. As a result, the lifecycle of `ChildrenComponent` ends up being associated with `MyComponent`.

That’s why the output of `console.log(el.firstElementChild)` is incorrect.

To avoid this behavior, simply wrap your child component in a function and evaluate that function inside the parent component:

```ts
const MyComponent = renderRoot((children: () => string) => {
    // evaluate the function here!
    return /* HTML */ `<div>${children()}</div>`;
});

const ChildrenComponent = renderRoot(() => {
    const { created } = useLifeCycle();
    created((el) => console.log(el.firstElementChild));

    return /* HTML */ `<p>I'm the children component</p>`;
});

// Good idea!
function App() {
    return /* HTML */ ` <main>${MyComponent(() => ChildrenComponent())}</main>`;
}

document.boby.append(...createRoot(App));
```

## Hooks can pass through

If you call a function inside your component that itself calls a hook, it behaves as if your component directly called that hook.

This is what allows a custom hook to call another hook internally.

```ts
// custom hook
function useHelloWorld() {
    // calling another hook
    const { connected, disconnected } = useLifeCycle();

    connected(() => console.log("Hello world!"));
    disconnected(() => console.log("Goodbye world!"));
}

const MyComponent = renderRoot(() => {
    // connected & disconnected are linked to MyComponent
    useHelloWorld();

    return /* HTML */ `<p>My Component</p>`;
});
```

Understanding this behavior also allows you to create “layers” — that is, abstract functions that perform pre-render operations and execute hooks for the component in which they are used.

This makes it possible to extend a component, much like in other libraries such as React or Solid.

## Next

[Bonus](./bonus.md)
