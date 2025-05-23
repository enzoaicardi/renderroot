import { RenderRoot } from "./element";
import { Root } from "./root";
import { type NullaryRenderCallback } from "./types";

const container = document.createElement("div");

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
