import { type NullaryRenderCallback } from "./render";
import { createRoot } from "./create";
import { Root } from "./root";

/** Hook to to create a root that inherits the current context */
export function useInnerRoot() {
    const contexts = new Map(Root.current.contexts);

    return (callback: NullaryRenderCallback): Element => {
        const root = new Root();
        root.contexts = new Map(contexts);
        return createRoot(callback, root);
    };
}
