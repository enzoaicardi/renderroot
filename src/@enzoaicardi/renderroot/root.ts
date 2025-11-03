import { type ContextProvider } from "./context";
import { type LifeCycleArray } from "./lifecycle";

export class Root {
    static current: Root = new Root();

    contexts = new Map<ContextProvider<unknown>, unknown>();
    createdCallbacks: LifeCycleArray[] = [];
    connectedCallbacks: LifeCycleArray[] = [];
    disconnectedCallbacks: LifeCycleArray[] = [];
}

/** Hook used to retrieve current root instance */
export function useRoot() {
    return Root.current;
}
