const {decrypt, encrypt} = require('./check');

const checkApiKey = (req, res, next) => {
    const CLIENT_KEY = decrypt(req.header('api-key'));
    if (CLIENT_KEY === process.env.API_KEY) {
      next();
    } else {
      res.status(401).json({ // 인증 오류에 대해 401 응답을 떨어트림
         error:  "wrong api key"
      })
    }
}

module.exports = { checkApiKey }