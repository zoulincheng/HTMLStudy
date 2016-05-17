/*
Profile Lookup


We have an array of objects representing different people in our contacts lists.

A lookUp function that takes firstName and a property (prop) as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property"


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

*/


function lookUpProfile(firstName, prop){
// Only change code below this line
	var i = 0;
	for (i=0; i < contacts.length; i++){
		if (contacts[i].firstName == firstName && contacts[i].firstName.hasP)
	}

// Only change code above this line
}




//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
	var i = 0;
	var hasName = false;
	var hasProp = false;
	for (i = 0; i < contacts.length; i++){
		if (contacts[i].firstName == firstName && contacts[i].hasOwnProperty(prop)){
			console.log(contacts[i][prop]);
			return contacts[i][prop];
		}
		if (contacts[i].firstName == firstName && !contacts[i].hasOwnProperty(prop)){
			hasName = true;
		}
		if (contacts[i].firstName != firstName && contacts[i].hasOwnProperty(prop)){
			hasProp = true;
		}
		console.log(contacts[i].firstName);
	}
	if (hasName){
		return "No such property";
	}
	if (hasProp){
		return "No such contact";
	}  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

