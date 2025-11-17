# createContext

`createContext` is a function that creates a context provider — a function capable of transmitting a value that can be accessed through [`useContext`](../hooks/useContext.md) by all child components in the tree.

Here’s an example where application settings are passed as a context to all child components:

```ts
const settings = createContext<{ mode: "dark" | "light" }>();

function App() {
    // send the settings context value to all sub-functions
    return settings(
        { mode: "dark" },
        () => /* HTML */ `
            ${Title("My App")}
            ${Description("this is my app")}
        `
    );
}

const Title = renderRoot((content: string) => {
    const { mode } = useContext(settings);
    return /* HTML */ `<h1>(${mode}) ${content}</h1>`;
});

const Description = renderRoot((content: string) => {
    const { mode } = useContext(settings);
    return /* HTML */ `<p>(${mode}) ${content}</p>`;
});
```

Here’s what we would have had to do without using contexts:

```ts
type Settings = {
	mode: "dark" | "light"
}

function App(){
	const settings: Settings = { mode: "dark" };

	return /* HTML */`
		${Title("My App", settings)}
		${Description("this is my app", settings)}
	`;
}

const Title = renderRoot((content: string, settings: Settings) => {
	const { mode } = settings;
	return /* HTML */`<h1>(${mode}) ${content}</h1>`;
});

const Description = renderRoot((content: string, settings: Settings) => {
	const { mode } = settings;
	return /* HTML */`<p>(${mode}) ${content}</p>`;
});
```

## Next

[useContext](../hooks/useContext.md)
