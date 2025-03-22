import init, { formatFor } from "autocorrect-wasm";

// @ts-ignore
import autocorrectWasm from "./pkg/autocorrect_wasm_bg.wasm";

// for browser
init(autocorrectWasm).then(() => {
	// @ts-ignore
	globalThis._formatFor = formatFor;
});

// export default {
// 	autocorrectWasm,
// 	init,
// 	formatFor,
// };
