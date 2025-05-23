import { RenderRoot } from "./element";
import { Root } from "./root";

export type LifeCycleCallback = (customElement: RenderRoot) => void;

export function useLifeCycle() {
    const connected = lifeCycleProvider(Root.current.constructorCallbacks);
    const disconnected = lifeCycleProvider(Root.current.disconnectedCallbacks);

    return [connected, disconnected];
}

function lifeCycleProvider(array: Array<LifeCycleCallback>[]) {
    return (callback: LifeCycleCallback) => {
        const lastArray = array[array.length - 1];

        if (lastArray) {
            lastArray.push(callback);
        }
    };
}
