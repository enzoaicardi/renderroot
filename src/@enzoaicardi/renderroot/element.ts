import type { LifeCycleArray } from "./lifecycle";
import { Root } from "./root";

/** customElement class for each renderRoot in createRoot execution context */
export class RenderRoot extends HTMLElement {
    constructorCallbacks: LifeCycleArray | undefined;
    disconnectedCallbacks: LifeCycleArray | undefined;

    constructor() {
        super();
        this.constructorCallbacks = Root.current.constructorCallbacks.shift();
        this.disconnectedCallbacks = Root.current.disconnectedCallbacks.shift();

        // execute every constructor callbacks
        if (this.constructorCallbacks) {
            for (const callback of this.constructorCallbacks) {
                callback(this);
            }
        }
    }

    // execute every disconnected callbacks
    disconnectedCallback() {
        if (this.disconnectedCallbacks) {
            for (const callback of this.disconnectedCallbacks) {
                callback(this);
            }
        }
    }
}
