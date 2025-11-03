import { RenderRoot } from "./element";
import { Root } from "./root";

export type LifeCycleCallback = (customElement: RenderRoot) => void;
export type LifeCycleArray = LifeCycleCallback[];

/** Hook used to bind functions to the customElement lifecycle */
export function useLifeCycle() {
    const root = Root.current;
    const created = lifeCycleProvider(root.createdCallbacks);
    const connected = lifeCycleProvider(root.connectedCallbacks);
    const disconnected = lifeCycleProvider(root.disconnectedCallbacks);

    return { created, connected, disconnected };
}

function lifeCycleProvider(array: LifeCycleArray[]) {
    return (callback: LifeCycleCallback) => {
        const lifeCycleArray = array[array.length - 1];

        if (lifeCycleArray) {
            lifeCycleArray.push(callback);
        }
    };
}
