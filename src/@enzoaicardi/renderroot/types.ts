export type RenderCallback<Arguments extends unknown[]> = (
    ...args: Arguments
) => string;

export type NullaryRenderCallback = () => string;
