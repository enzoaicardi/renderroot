import { type NullaryRenderCallback } from "./render";
import { Root } from "./root";

/** Function used to instantiate a context with a given value */
export interface ContextProvider<Type> {
    (value: Type, callback: NullaryRenderCallback): string;
}

/** Function used to create a context provider */
export function createContext<Type>() {
    const provider: ContextProvider<Type> = (
        value: Type,
        callback: NullaryRenderCallback
    ) => {
        const key = provider as ContextProvider<unknown>;
        const contexts = Root.current.contexts;
        const initial = contexts.get(key);
        contexts.set(key, value);

        const render = callback();

        contexts.set(key, initial);
        return render;
    };

    return provider;
}

/** Hook used to retrieve the value of a context based on its provider  */
export function useContext<Type>(provider: ContextProvider<Type>) {
    return Root.current.contexts.get(
        provider as ContextProvider<unknown>
    ) as Type;
}
