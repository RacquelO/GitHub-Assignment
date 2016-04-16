var student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("I can have fun!!!! " + this.catchPhrase)
    }else{
      console.log("I can't have fun. Darn!");
    }
  };
};

module.exports = student;
​