import { Root } from "./root";
import { type RenderCallback } from "./types";

export function renderRoot<Arguments extends unknown[]>(
    callback: RenderCallback<Arguments>
) {
    return (
        ...args: Parameters<typeof callback>
    ): ReturnType<typeof callback> => {
        Root.current.constructorCallbacks.push([]);
        Root.current.disconnectedCallbacks.push([]);

        return "<render-root>" + callback(...args) + "</render-root>";
    };
}
