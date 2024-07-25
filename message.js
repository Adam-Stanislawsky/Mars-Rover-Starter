class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Name is required.");
      }
      this.commands = [];
    }

}

module.exports = Message;