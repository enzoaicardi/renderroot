import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const formats = ["iife", "esm", "cjs", "umd"];

export default formats.map(function (format) {
    return {
        input: "src/@enzoaicardi/renderroot.ts",
        output: {
            file: `dist/${format}/renderroot.${
                format === "cjs" ? "cjs" : "js"
            }`,
            format: format,
            name: (format === "iife" || format === "umd") && "renderroot",
            minifyInternalExports: true,
        },
        plugins: [
            typescript({
                module: "esnext",
                compilerOptions: {
                    target: "esnext",
                },
                rootDir: "src",
            }),
            terser({
                mangle: {
                    properties: {
                        reserved: [
                            "contexts",
                            "constructorCallbacks",
                            "disconnectedCallbacks",
                            "connected",
                            "disconnected",
                            "provider",
                        ],
                    },
                },
            }),
        ],
    };
});
