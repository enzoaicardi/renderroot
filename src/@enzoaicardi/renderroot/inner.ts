import { type NullaryRenderCallback } from "./render";
import { createRoot } from "./create";
import { Root } from "./root";

/** Hook to create a root that inherits the current context */
export function useInnerRoot() {
    const contexts = new Map(Root.current.contexts);

    return <T extends Element>(callback: NullaryRenderCallback): T => {
        const root = new Root();
        root.contexts = new Map(contexts);
        return createRoot<T>(callback, root);
    };
}
