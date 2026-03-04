import { Root } from "./root";

export type RenderCallback<Arguments extends unknown[]> = (
    ...args: Arguments
) => string;

export type NullaryRenderCallback = () => string;

/** Function used to create a rendering root in string format */
export function renderRoot<Arguments extends unknown[]>(
    callback: RenderCallback<Arguments>,
) {
    const renderer = (
        ...args: Parameters<typeof callback>
    ): ReturnType<typeof callback> => {
        const root = Root.current;

        root.createdCallbacks.push([]);
        root.connectedCallbacks.push([]);
        root.disconnectedCallbacks.push([]);

        return "<render-root>" + callback(...args) + "</render-root>";
    };

    renderer.native = callback;
    return renderer;
}
