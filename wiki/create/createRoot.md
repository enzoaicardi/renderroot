# createRoot

The `createRoot` function is the core of the **renderRoot** library. It takes a callback function that returns a string and converts that string into a DOM tree.

Here’s a simple application example using `createRoot`:

```ts
const children = createRoot(
    () => /* HTML */ `
        <h1>My app</h1>
        <p>this is my app</p>
    `
);

document.boby.append(...children);
```

With just this, it’s already possible to create an application and split it into modular components.

```ts
function App() {
    return /* HTML */ ` ${Title("My App")} ${Description("this is my app")} `;
}

function Title(content: string) {
    return /* HTML */ `<h1>${content}</h1>`;
}

function Description(content: string) {
    return /* HTML */ `<p>${content}</p>`;
}

const children = createRoot(App);

document.boby.append(...children);
```

If you are editing content with user input, make sure to escape it using a library of your choice, such as [@enzoaicardi/htmlspecialchars](https://www.npmjs.com/package/@enzoaicardi/htmlspecialchars).

## Under the hood

Under the hood, the `createRoot` function initializes a new **root context** to hold the various application contexts and the lifecycle functions of `<render-root>` components.

## Next

In your application, you’ll likely need to reference components to manipulate their content or style. The `renderRoot` function is designed to meet this need.

[renderRoot](../render/renderRoot.md)
