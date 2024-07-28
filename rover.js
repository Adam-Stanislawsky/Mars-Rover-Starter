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

      return message;
   }






}

module.exports = Rover;