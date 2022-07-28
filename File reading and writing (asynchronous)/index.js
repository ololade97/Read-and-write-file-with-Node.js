//The node.js code runs asynchronously reading and writing.

const fs = require('fs');

fs.readFile('./text/read.txt', 'utf-8', (err, data1) => {
    if (err) return console.log("Error...");
    console.log(data1);
});

const input = "You wrote this line into the input file with Node.js."

fs.writeFile('./text/input.txt', input, (err, data3) => {
    if (err) console.log("Failed to write file")
    console.log(input);
})

console.log("Files will be read and written.");


