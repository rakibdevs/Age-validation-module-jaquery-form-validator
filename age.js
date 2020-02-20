//custom age validation script
$.formUtils.addValidator({
  name : 'age',
  validatorFunction : function(value) {
    var birthDate = new Date(value);
    var difdt     = new Date(new Date() - birthDate);
    var age       = difdt.toISOString().slice(0, 4) - 1970;

    if (age >= 18) { //set your destinated age value
        return true;
    }
    else if(age < 0){
    	this.errorMessage="Not yet born!"; //customize error message
    	return false;
    }
    else{
    	this.errorMessage="Your age is under 18!"; //customize error message
	    return false;
    }	    
  },
});

//initiate module
$.validate({
    modules : 'age'
});


