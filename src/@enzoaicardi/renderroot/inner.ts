import { type NullaryRenderCallback } from "./render";
import { createRoot } from "./create";
import { Root } from "./root";

/** Hook used to create a root that inherits the current context */
export function useInnerRoot() {
    const contexts = new Map(Root.current.contexts);

    return (callback: NullaryRenderCallback) => {
        const root = new Root();
        root.contexts = new Map(contexts);
        return createRoot(callback, root);
    };
}
