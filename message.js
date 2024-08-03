class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Name is required.");        
      }
      this.commands = commands; // changed from [], seems to still pass either way, idk
      //------NEED TO ADD A this.completed = true/false
    }

}

module.exports = Message;