import { type NullaryRenderCallback } from "./render";
import { RenderRoot } from "./element";
import { Root } from "./root";

const container = document.createElement("div");

/** Function to create a rendering context and for linking to customElements */
export function createRoot(
    callback: NullaryRenderCallback,
    root?: Root
): Element {
    const initial = Root.current;
    Root.current = root || new Root();

    const render = callback();
    container.innerHTML = render;

    Root.current = initial;
    return container.firstElementChild!;
}

customElements.define("render-root", RenderRoot);
