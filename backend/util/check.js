const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();
const ENCRYPTION_KEY = process.env.SERVER_KEY.repeat(4);

//api key 발급 (최초 1회 사용하여 .env에 등록)
const encrypt = (text) => {
  try {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(ENCRYPTION_KEY),
      iv
    );
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
  } catch (error) {
    console.error(error);
  }
};

//발급된 api key 확인 비대칭 양방향 암호화를 복호화
const decrypt = (text) => {
  try {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(ENCRYPTION_KEY),
      iv
    );
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {decrypt, encrypt};
