const core = require("@actions/core");
const getDogList = require("./dog");

async function run() {
    const dog = await getDogList();
    console.log(dog);
    core.setOutput("dog-list-output", dog);
  }
run();