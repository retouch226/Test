const person = {
  surname: "vanya",
  knows: function (what, names) {
    console.log(`you ${what} ${names} ${this.surname}`);
  },
};
person.knows("know", "john");
const igor = { surname: "igor" };
person.knows.call(igor, "dont know", "vasa"); //?
