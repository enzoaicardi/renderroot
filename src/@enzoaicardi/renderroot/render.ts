import { Root } from "./root";

export type RenderCallback<Arguments extends unknown[]> = (
    ...args: Arguments
) => string;

export type NullaryRenderCallback = () => string;

/** Function used to create a rendering root in string format */
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
