// To create Custom actions visit https://github.com/actions/toolkit to install packages.
// If you ignore the node_modules in gitignore then below required packages do not work. To fix this either you 
// create a seprate package.json file in actions like we saw in Maxximillian course or compile  index file and create a dist folder

//https://github.com/vercel/ncc  // Compile a Node.js project into a single file.

const core = require('@actions/core');
const github = require('@actions/github');

try {
	// throw( new Error("some error message"));
	const name = core.getInput('who-to-greet');
	console.log(`Hello ${name}`);

	const time = new Date();
    console.log(`Time ${time.toTimeString()}`);

	//core.setOutput("time", time.toTimeString());

	console.log(JSON.stringify(github, null, '\t'));
} catch(error) {
	core.setFailed(error.message);
}