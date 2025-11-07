# Bonus

## Reactivity

If you want to add reactivity using signals from the [@enzoaicardi/reactivity](https://github.com/enzoaicardi/reactivity/blob/main/wiki/README.md) library, here’s a ready-to-use custom hook:

```ts
import { type AnyFunction, Reactive, Signal } from "@enzoaicardi/reactivity";
import { useLifeCycle } from "@enzoaicardi/renderroot";

export function useReactivity() {
    const { disconnected } = useLifeCycle();
    const signals: Signal<unknown>[] = [];
    const reactives: Reactive[] = [];

    const signal = <Type>(defaultValue?: Type) => {
        const current = new Signal<Type>(defaultValue);
        signals.push(current);
        return current;
    };

    const reactive = (callback: AnyFunction) => {
        const current = new Reactive(callback);
        reactives.push(current);
        return current;
    };

    disconnected(() => {
        for (const signal of signals) {
            signal.clear();
        }

        for (const reactive of reactives) {
            reactive.clear();
        }
    });

    return { signal, reactive };
}
```

This hook lets you create signals and reactive functions that are automatically cleaned up once the component is removed from the DOM.

## Done!
