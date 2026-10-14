'use strict';

const DEFAULT_NAME = 'Daniel Santos';

function getFullName(name = DEFAULT_NAME) {
    return name;
}

function greet(name = DEFAULT_NAME, prefix = 'Hello') {
    return `${prefix}, ${getFullName(name)}!`;
}

// CLI usage: node teste.js "Another Name"
if (require.main === module) {
    const inputName = process.argv.slice(2).join(' ') || DEFAULT_NAME;
    console.log(greet(inputName));
}

module.exports = { getFullName, greet };daniel santos