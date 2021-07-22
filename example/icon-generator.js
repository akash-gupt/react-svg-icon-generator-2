const generator = require('react-svg-icon-generator-v2');

const config = {
    svgDir: './svg-icons/',
    destination: './src/Icons/AppIcon/index.tsx'
};
generator(config);
