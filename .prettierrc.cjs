const fs = require('fs');

const { prettierPath } = require('@sistemas-cra/react-components/prettier');

module.exports = JSON.parse(fs.readFileSync(prettierPath, 'utf8'));
