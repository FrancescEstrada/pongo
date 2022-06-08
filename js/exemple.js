const sharp = require('sharp');

sharp('pecas-1080.jpeg')
.resize({width: 1080, height:715 })
.toFile('pecas1080.webp');