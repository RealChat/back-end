const crypto = require("crypto");

const salt = crypto.randomBytes(16).toString("hex");

function encrypt(password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, salt, 16, (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString("hex"));
        });
    });
}

const Encryption = { encrypt };

module.exports = Encryption;
