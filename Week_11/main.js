var prompt = require('prompt');
var student = require('./student.js');
var schoolBus = require('./bus.js');


var addStudent = function(){

	prompt.start();

    prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
  	newStudent = new student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  	newStudent.canStudentHaveFun();


  });
};

