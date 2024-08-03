const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  //constructor will have 3 parameters: position, mode, generatorWatts

  // TEST 7

  test("constructor sets position and default values for mode and generatorWatts", function() {
    let testRover = new Rover (1234)
    expect(testRover.position).toEqual(Number(1234));
    expect(testRover.mode).toEqual('NORMAL');
    expect(testRover.generatorWatts).toEqual(Number(110));
  });



  // TEST 8
// “response returned by receiveMessage contains the name of the message”

test("response returned by receiveMessage contains the name of the message", function() {
  
  let testRover = new Rover (100);
  
  let commandOne = new Command('STATUS_CHECK');
  let commandTwo = new Command('MODE_CHANGE', 'LOW_POWER');
  let commands = [commandOne, commandTwo];

  let testMessage = new Message ("A Test Message", commands)

  expect(testMessage).toBeInstanceOf(Message)
  expect(testRover.receiveMessage(testMessage).message).toEqual("A Test Message");


});



  // TEST 9
//“response returned by receiveMessage includes two results if two commands are sent in the message”

test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  
  let testRover = new Rover (100);
  
  let commandOne = new Command('STATUS_CHECK');
  let commandTwo = new Command('MODE_CHANGE', 'LOW_POWER');
  let commands = [commandOne, commandTwo];

  let testMessage = new Message ("A Test Message", commands)

  let instantiationAttempt = testRover.receiveMessage(testMessage)

  expect(testMessage).toBeInstanceOf(Message)
  expect(instantiationAttempt.results.length).toEqual(2);
});

  // TEST 10
//“responds correctly to the status check command”

// For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state
//  of the rover object — mode, generatorWatts, and position. 
// The test should check each of these for accuracy.
// See the Rover Command Types table for more details.

test("responds correctly to the status check command", function() {
  
  let testRover = new Rover(100);
  let commands = [
    new Command('STATUS_CHECK'),
 ];

  let testMessage = new Message ("aMessage", commands)
  
  let response = testRover.receiveMessage(testMessage)

  

  expect(response.results[0].roverStatus.position).toEqual(100);
  expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
  expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
});



  // TEST 11
//“responds correctly to the mode change command”

//1. The test should check the completed property and rover mode for accuracy.
//2. The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.

test("responds correctly to the mode change command", function() {
  
  let testRover = new Rover(100);
  let commands = [
    new Command('STATUS_CHECK'),
    new Command('MODE_CHANGE', 'LOW_POWER'),
 ];

  let testMessage = new Message ("aMessage", commands)
  
  let response = testRover.receiveMessage(testMessage)

  expect(response.results[1].completed).toBeTruthy();
  expect(testRover.mode).toEqual('LOW_POWER');
});


  // TEST 12
  // “responds with a false completed value when attempting to move in LOW_POWER mode”

  // The test should check the completed property for accuracy and confirm that the rover’s position did not change.
  // Use the Rover Modes table for guidance on how to handle move commands in different modes.

  test("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  
    let testRover = new Rover(100);
    let commands = [
      new Command('STATUS_CHECK'),
      new Command('MODE_CHANGE', 'LOW_POWER'),
      new Command('MOVE', 4321)
   ];
  
    let testMessage = new Message ("aMessage", commands)
    
    let response = testRover.receiveMessage(testMessage)
  
    expect(testRover.mode).toEqual('LOW_POWER');
    expect(response.results[2].completed).toBeFalsy();
  });



  // TEST 13
  // “responds with the position for the move command”

  //   A MOVE command will update the rover’s position with the position value in the command.
  test("responds with the position for the move command", function() {
  
    let testRover = new Rover(100);
    let commands = [
      new Command('STATUS_CHECK'),
      new Command('MOVE', 1234),
      new Command('STATUS_CHECK'),
   ];
  
    let testMessage = new Message ("aMessage", commands)
    
    let response = testRover.receiveMessage(testMessage)
  
    expect(response.results[0].roverStatus.position).toEqual(100);
    expect(response.results[1].completed).toBeTruthy();
    expect(response.results[2].roverStatus.position).toEqual(1234);
  });


});
