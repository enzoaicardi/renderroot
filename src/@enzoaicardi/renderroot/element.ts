import { Root } from "./root";

export class RenderRoot extends HTMLElement {
    disconnectedCallback: () => void;

    constructor() {
        super();
        const constructorCallbacks = Root.current.constructorCallbacks.shift();
        const disconnectedCallbacks =
            Root.current.disconnectedCallbacks.shift();

        if (constructorCallbacks) {
            for (const callback of constructorCallbacks) {
                callback(this);
            }
        }

        this.disconnectedCallback = () => {
            if (disconnectedCallbacks) {
                for (const callback of disconnectedCallbacks) {
                    callback(this);
                }
            }
        };
    }
}
