import { RenderRoot } from "./element";
import { Root } from "./root";

export type LifeCycleCallback = (customElement: RenderRoot) => void;
export type LifeCycleArray = LifeCycleCallback[];

/** Hook to bind functions to the customElement lifecycle */
export function useLifeCycle() {
    const connected = lifeCycleProvider(Root.current.constructorCallbacks);
    const disconnected = lifeCycleProvider(Root.current.disconnectedCallbacks);

    return [connected, disconnected];
}

function lifeCycleProvider(array: LifeCycleArray[]) {
    return (callback: LifeCycleCallback) => {
        const lifeCycleArray = array[array.length - 1];

        if (lifeCycleArray) {
            lifeCycleArray.push(callback);
        }
    };
}
