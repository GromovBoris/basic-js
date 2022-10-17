const { NotImplementedError } = require("../extensions/index.js");

function createDreamTeam(members) {
  if (Array.isArray(members) == true) {
    let answer = [];
    // let namesArr = members.filter(function (type) {
    //   return typeof type === "string";
    // });
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] == "string" && typeof members !== "array") {
        let word = members[i].split(" ").join("");
        answer.push(word[0].toUpperCase());
      }
    }

    return answer.sort().join("");
  } else {
    return false;
  }

  // for(let elem of Object.values(members))

  //   if (typeof members[i] !== String) {
  //     console.log(members[i]);
  //     // newArr += members[i][0].trim().toUpperCase();.trim().toUpperCase()
  //   }
  // }

  // let answer = "";
  // for (i = 0; i < members.length; i++) {
  //   if (typeof members[i] !== String) {
  //     console.log(members[i]);
  //     // newArr += members[i][0].trim().toUpperCase();.trim().toUpperCase()
  //   }
  // }
  // console.log(members.length);      members.splice(i, 1);

  // for (y = 0; y < members.length; y++) {
  //   console.log(y);
  //   console.log(members[y]);
  //   // console.log(typeof members[y]);
  //   if (typeof members[y] !== String) {
  //     members.splice(y, 1);
  //   }
  // }
}

createDreamTeam([
  "  Amelia",
  null,
  undefined,
  "Ruby",
  "Lily",
  11,
  "Grace",
  22,
  "Millie",
  "Daisy",
  true,
  "Freya",
  false,
  "Erin",
  new Set([1, 2, 3, 4, 5]),
  "Megan",
  {
    John: "Smith",
  },
  "Jasmine",
  1,
  2,
  3,
  4,
  5,
  "Brooke",
]);

module.exports = {
  createDreamTeam,
};
