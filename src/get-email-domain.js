const { NotImplementedError } = require("../extensions/index.js");

function getEmailDomain(mail) {
  let flag;
  let domain = String;
  for (i = 0; i < mail.length; i++) {
    if (mail[i] == "@") {
      flag = i + 1;
    }
  }
  domain = mail.slice(flag, mail.length);
  return domain;
}
