import type { LifeCycleArray } from "./lifecycle";
import { Root } from "./root";

const isConnected = Symbol();

/** customElement class for each renderRoot in createRoot execution context */
export class RenderRoot extends HTMLElement {
    [isConnected]: boolean = false;

    createdArray: LifeCycleArray | undefined;
    connectedArray: LifeCycleArray | undefined;
    disconnectedArray: LifeCycleArray | undefined;

    constructor() {
        super();
        this.createdArray = Root.current.createdCallbacks.shift();
        this.connectedArray = Root.current.connectedCallbacks.shift();
        this.disconnectedArray = Root.current.disconnectedCallbacks.shift();

        // execute every created callbacks
        if (this.createdArray) {
            for (const callback of this.createdArray) {
                callback(this);
            }
        }
    }

    // execute every connected callbacks
    connectedCallback() {
        if (!this[isConnected] && this.connectedArray) {
            this[isConnected] = true;

            for (const callback of this.connectedArray) {
                callback(this);
            }
        }
    }

    // execute every disconnected callbacks
    disconnectedCallback() {
        this[isConnected] = this.isConnected;

        if (!this[isConnected] && this.disconnectedArray) {
            for (const callback of this.disconnectedArray) {
                callback(this);
            }
        }
    }

    // handle adopted element case
    adoptedCallback() {
        if (this[isConnected] && this.disconnectedArray) {
            for (const callback of this.disconnectedArray) {
                callback(this);
            }
        }

        this[isConnected] = false;
    }
}
