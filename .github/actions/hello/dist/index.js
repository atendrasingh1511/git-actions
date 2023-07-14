/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// To create Custom actions visit https://github.com/actions/toolkit to install packages.
// If you ignore the node_modules in gitignore then below required packages do not work. To fix this either you 
// create a seprate package.json file in actions like we saw in Maxximillian course or compile  index file and create a dist folder

//https://github.com/vercel/ncc  // Compile a Node.js project into a single file.

const core = __nccwpck_require__(396);
const github = __nccwpck_require__(716);

try {
	// throw( new Error("some error message"));
	const name = core.getInput('who-to-greet');
	console.log(`Hello ${name}`);

	const time = new Date();
	core.setOutput("time", time.toTimeString());

	console.log(JSON.stringify(github, null, '\t'));
} catch(error) {
	core.setFailed(error.message);
}
})();

module.exports = __webpack_exports__;
/******/ })()
;