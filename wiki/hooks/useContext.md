# useContext

`useContext()` is a [hook](./hook.md) that retrieves the value of a context created with [`createContext`](../createContext) and provided through a [context provider](../create/createContext.md).

`useNonNullableContext()` is similar to `useContext()` but it also guarantees that the value is not `null` or `undefined`.

Contexts are useful when you want to access a value anywhere within the tree of child elements without explicitly passing that value through every component.

Here’s an example where the application settings are passed as a context to all child components:

```ts
const settings = createContext<{ mode: "dark" | "light" }>();

function App() {
    return settings(
        { mode: "dark" },
        () => /* HTML */ `
            ${Title("My App")}
            ${Description("this is my app")}
        `
    );
}

const Title = renderRoot((content: string) => {
    const { mode } = useNonNullableContext(settings);
    return /* HTML */ `<h1>(${mode}) ${content}</h1>`;
});

const Description = renderRoot((content: string) => {
    const { mode } = useNonNullableContext(settings);
    return /* HTML */ `<p>(${mode}) ${content}</p>`;
});
```

Here’s what we would have had to do without using contexts:

```ts
type Settings = {
    mode: "dark" | "light";
};

function App() {
    const settings: Settings = { mode: "dark" };

    return /* HTML */ `
        ${Title("My App", settings)}
        ${Description("this is my app", settings)}
    `;
}

const Title = renderRoot((content: string, settings: Settings) => {
    const { mode } = settings;
    return /* HTML */ `<h1>(${mode}) ${content}</h1>`;
});

const Description = renderRoot((content: string, settings: Settings) => {
    const { mode } = settings;
    return /* HTML */ `<p>(${mode}) ${content}</p>`;
});
```

## Next

[useInnerRoot](./useInnerRoot.md)
