import { type NullaryRenderCallback } from "./render";
import { RenderRoot } from "./element";
import { Root } from "./root";

const containerTemplate = document.createElement("div");

/** Function used to create a rendering context */
export function createRoot(
    callback: NullaryRenderCallback,
    root?: Root
): HTMLCollection {
    const initial = Root.current;
    Root.current = root || new Root();

    const render = callback();
    const container = containerTemplate.cloneNode() as typeof containerTemplate;
    container.innerHTML = render;

    Root.current = initial;
    return container.children;
}

customElements.define("render-root", RenderRoot);
