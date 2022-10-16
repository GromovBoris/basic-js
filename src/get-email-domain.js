const { NotImplementedError } = require("../extensions/index.js");

function getEmailDomain(email) {
  let flag;
  let domain;
  for (i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      flag = i + 1;
    }
  }
  domain = email.slice(flag, email.length);
  return domain;
}
