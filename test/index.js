const { init, autocorrectWasm, formatFor } =
	require("../dist/autocorrect.min.js").default;

init(autocorrectWasm).then(() => {
	console.log(formatFor("demde  23       ， 德9998莫     o ,        ", "md"));
});
