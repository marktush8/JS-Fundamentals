let argsCount = process.argv.length - 2;

if (argsCount === 0) {
    console.log("No argeument");
} else if (argsCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}