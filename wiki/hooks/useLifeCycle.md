# useLifeCycle

`useLifeCycle()` is a [hook](./hook.md) that lets you interact with a component at different stages of its lifecycle:

-   `created`: when the element is constructed via its `constructor` method.
-   `connected`: when the element is connected to the DOM tree (similar to `connectedCallback`).
-   `disconnected`: when the element is disconnected from the DOM tree (similar to `disconnectedCallback`).

Here’s an example showing how to increment a counter when clicking a button in your application:

```ts
function App() {
    return /* HTML */ `
        <h1>My Counter App</h1>
        ${Counter(0)}
    `;
}

const Counter = renderRoot((initialValue: number) => {
    const { created } = useLifeCycle();

    created((el) => {
        const count = el.querySelector(".ref-count");
        const button = el.querySelector(".ref-button");

        button.addEventListener(
            "click",
            () => (count.textContent = ++initialValue)
        );
    });

    return /* HTML */ `<div>
        <h2>Count is: <span class="ref-count">${initialValue}</span></h2>
        <button class="ref-button">Increment!</button>
    </div>`;
});

document.boby.append(...createRoot(App));
```

As you can see, inside the callback passed to `created`, we write very “classic” JavaScript.
This is one of the differences from higher-level libraries like React, which discourage direct DOM manipulation.

If you need to maintain a global value, add or clean up event listeners, or perform certain actions when a component connects or disconnects from the DOM, you can use the `connected` and `disconnected` functions.

```ts
function App() {
    return /* HTML */ `
        <h1>My Counter App</h1>
        ${Element()}
    `;
}

let elementsCount = 0;

const Element = renderRoot(() => {
    const { connected, disconnected } = useLifeCycle();

    connected((el) => {
        const count = el.querySelector(".ref-count");
        count.textContent = ++elementsCount;
    });

    disconnected((el) => {
        --elementsCount;
    });

    return /* HTML */ `<h2>
        Element is n°
        <span class="ref-count">x</span>
    </h2>`;
});
```

## Next

[useContext](./useContext.md)
