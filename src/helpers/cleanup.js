module.exports.cleanupName = (name) => {
    return name.replace(/u[A-Z0-9]{4}-/, '');
};

module.exports.cleanupSvg = (svg) => {
    return svg
    .replace(/width="\d+"/, '')
    .replace(/height="\d+"/, '')
    .replace(/fill-rule="#?\w+"/g, '')
    .replace(/clip-rule="#?\w+"/g, '')
    .replace(/fill="#?\w+"/g, 'fill="inherit"')
    .replace(/\s{2,}/g, ' ')
    .replace(/class="\w+"/g, match => match.replace(/class/g, 'className'))
    .replace(/<style>.*<\/style>/g, match => match.replace(/<style>/g, '<style>{ `').replace(/<\/style>/g, '` }</style>'))
    .replace(/viewBox/, 'fill={color} onClick={onClick} style={style} className={className} {...{ height: height || size, width: width || size }} viewBox ');
};
