class Rover {
   // Write code here!
   constructor(position) {
      this.position = position; 
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
    }

    

   receiveMessage(message){
      
      let response = {
         message: message.name,
         results: [],
      };
      
      for (let i = 0; i < message.commands.length; i++) {
         let command = message.commands[i];
   
         if (command.commandType === 'STATUS_CHECK') {
           let roverStatus = {
             mode: this.mode,
             generatorWatts: this.generatorWatts,
             position: this.position,
           };
           response.results.push({ completed: true, roverStatus: roverStatus });
   
         } else if (command.commandType === 'MOVE') {
           if (this.mode === 'LOW_POWER') {
             response.results.push({ completed: false });
           } else {
             this.position = command.value;
             response.results.push({ completed: true });
           }
   
         } else if (command.commandType === 'MODE_CHANGE') {
           this.mode = command.value;
           response.results.push({ completed: true });
         }
       }

      return response; 
   }

}



module.exports = Rover;