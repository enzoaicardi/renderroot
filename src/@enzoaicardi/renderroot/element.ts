import { Root } from "./root";

/** customElement class for each renderRoot in createRoot execution context */
export class RenderRoot extends HTMLElement {
    disconnectedCallback: () => void;

    constructor() {
        super();
        const constructorCallbacks = Root.current.constructorCallbacks.shift();
        const disconnectedCallbacks =
            Root.current.disconnectedCallbacks.shift();

        // execute every constructor callbacks
        if (constructorCallbacks) {
            for (const callback of constructorCallbacks) {
                callback(this);
            }
        }

        // map every disconnected callbacks
        this.disconnectedCallback = () => {
            if (disconnectedCallbacks) {
                for (const callback of disconnectedCallbacks) {
                    callback(this);
                }
            }
        };
    }
}
