import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";

const prod = (process.argv[2] === "production");

const context = await esbuild.context({
	entryPoints: ["main.ts"],
	bundle: true,
	loader: {
    '.wasm': 'binary',
  },
	external: [
		...builtins],
	format: 'iife',
	target: "es2018",
	logLevel: "info",
	sourcemap: prod ? false : "inline",
	treeShaking: true,
	outfile: "dist/autocorrect.min.js",
});

if (prod) {
	await context.rebuild();
	process.exit(0);
} else {
	await context.watch();
}