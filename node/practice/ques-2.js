const name = process.argv[2];

if (!name) {
    console.error("Usage: node app.js <name>");
    process.exit(1);
}

console.log(`Hello, ${name}`);

const nameBuffer = Buffer.from(name);
console.log(nameBuffer);
console.log(`Buffer length: ${nameBuffer.length}`);

process.exit(0);