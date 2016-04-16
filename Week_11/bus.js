var schoolBus = function(studentsOnTheBus, driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = parseInt(gas);
	this.studentEntersBus = function(student){
		this.studentsOnTheBus.push(student);
			console.log(this.studentsOnTheBus);
			console.log("is on the Bus");
	};
	
	this.busChatter = function(){
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
				console.log(this.studentsOnTheBus[i] + this.catchPhrase);
			}
		};
	};
	

module.exports = schoolBus;