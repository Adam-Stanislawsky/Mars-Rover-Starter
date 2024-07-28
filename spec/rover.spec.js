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
  let testMessage = new Message ("aMessage")
  let testRover = new Rover (1234)
  let response = testRover.receiveMessage(testMessage)
  expect(response.name).toEqual("aMessage");


});



  // TEST 9
//“response returned by receiveMessage includes two results if two commands are sent in the message”




  // TEST 10
//“responds correctly to the status check command”



  // TEST 11
//“responds correctly to the mode change command”

//1. The test should check the completed property and rover mode for accuracy.
//2. The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.



  // TEST 12






  // TEST 13

});
