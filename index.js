const fs = require('fs');
const qrcode = require('qrcode');

const URL = 'https://lfmcapital.mx/';

const run = async() =>{
    const QR = await qrcode.toDataURL(URL, { errorCorrectionLevel: 'H' });

    const htmlContent = `
    <img src="${QR}">
    `;

    fs.writeFileSync('./prueba.html', `${htmlContent}`);
    // fs.writeFileSync('./qr.png', `${QR}`);
    console.log(QR);
}

run();