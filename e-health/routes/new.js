var tesseract = require('node-tesseract-ocr');

const config = {
    lang: 'eng',
    oem: 1,
    psm: 3
}


tesseract.recognize('../uploads/akki3.png', config).then(text => {

    console.log(text);

}).catch(err => {
    console.log(err);
})