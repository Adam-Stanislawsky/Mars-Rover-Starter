class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
      // if(this.commandType === "MOVE"){

      // }
   }
 
 }
 
 module.exports = Command;