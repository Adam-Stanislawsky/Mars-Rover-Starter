class Rover {
   // Write code here!
   constructor(position) {
      this.position = Number(position); //will be a number representing the rover's position
      // if (!position) {
      //   throw Error("Position is required.");
      // }
      this.mode = 'NORMAL';
      this.generatorWatts = 110;

    }

   receiveMessage(message){
      // for(let i = 0; i < message.commands.length; i++){
      //    if (message.commands[i].commandType === "MOVE"){
      //       this.position = message.commands[i].value
      //    }
      // }
      return message;
   }






}

module.exports = Rover;