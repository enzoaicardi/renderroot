import { Root } from "./root";
import { type NullaryRenderCallback } from "./types";

export interface ContextProvider<Type> {
    (value: Type, callback: NullaryRenderCallback): string;
}

export function createContext<Type>(defaultValue: Type) {
    const provider: ContextProvider<Type> = (
        value: Type = defaultValue,
        callback: NullaryRenderCallback
    ) => {
        const key = provider as ContextProvider<unknown>;
        const initial = Root.current.contexts.get(key);
        Root.current.contexts.set(key, value);

        const render = callback();

        Root.current.contexts.set(key, initial);
        return render;
    };

    return provider;
}

export function useContext<Type>(provider: ContextProvider<Type>) {
    return Root.current.contexts.get(
        provider as ContextProvider<unknown>
    ) as Type;
}
