const os=require('os');

exports.getInfoAboutMyOS= ()=>`${os.type()} ${os.release()}`;