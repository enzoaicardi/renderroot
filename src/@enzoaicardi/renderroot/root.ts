import { type ContextProvider } from "./context";
import { type LifeCycleCallback } from "./lifecycle";

export class Root {
    static current: Root = new Root();
    contexts = new Map<ContextProvider<unknown>, unknown>();
    constructorCallbacks: Array<LifeCycleCallback>[] = [];
    disconnectedCallbacks: Array<LifeCycleCallback>[] = [];
}

export function useRoot() {
    return Root.current;
}
