const cfonts = require("cfonts");
const colors = require("./colors.js")

module.exports = cfonts.render(('Moonrider'),{
        font: 'block',
        colors: ['candy'],
        align: 'left',
        lineHeight: 3,
        gradient: ['magenta', 'blue'],
        independentGradient: true
    })
