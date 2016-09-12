var friends=[

bill:{
    firstName:"bill",
    lastName:"bob",
    number:"555",
    address:["a","b"]
    },
steve:{
    firstName:"steve",
    lastName:"martin",
    number:"111"
    address:["c","d"]
    }
];

var list = function(friends){
    for(var key in friends){
        console.log(key)
        }
    }
var search = function(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
            }
        }
    }
search("bill");