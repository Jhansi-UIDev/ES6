console.log("hello world");

if(true){let a=20;}

// function modulo(a=8, b=10)
// {
// 	console.log(a,b);
// 	return a%b;
// }

// console.log(modulo());
// console.log(modulo(undefined,67));
// //console.log(multiply(a,2));

/////////////////////////////////////////
// var modulo = (a,b)=> a+b;	
// console.log(modulo(8,10));


// function fun(a){
	
// sqr= a=> a*a;
// }

// //console.log(sqr(2));
// console.log(fun(3));

/////////////////////////////////////////////////
var obj={
	name: "Javascript",
	age: "24",
	address:{
		street: { avenue: "4 NY plaza",
				   doorno: "21"
				 },  
		city: "NY",
		zip: "10004"
	}
}

var {name}= obj; // var name= obj.name;
console.log(name);

var {address: {street}}= obj; // var address= obj.address
							  // var street = address.street
console.log(street);


var {address: {street: {doorno}}}=obj;
console.log(doorno);


////////////////////////////////////////

// let a=20;
// if(true){
// 	let a=10;
// 	console.log(a);
// 	{
// 		console.log(a);
// 	}
// }
// console.log(a);

////////////////////////////////////////////

// var veg=[1,2,4];
// var fruits=[3,5,6];
// var all=[...veg,...fruits];
// console.log(all);

///////////////////////////////////////

// function fun(x=2,y,z=0)
// {
// 	return x+y+z;
// }
// console.log(fun(undefined, 3));


/////////////////////////////////

// var obj={name:'Sravya',
// 	     age: '23',
// 	     somefun: function(){
// 	     	console.log(this);
// 	     }		
// 			}
// obj.somefun();

//////////////////////////////////


// function mul(a,b)
// {
// 	console.log(a*b);

// }
// var multiply=mul.bind(this,3);
// multiply();


/////////////////////////////////

var person={
	name: "Jhansi",
	age: "23",
	}
function say(message){
		console.log("Hello "+this.name + message);
	}
//person.func.call(person," mounika");
//person.func.apply(person, [" mounika", "sravya"]);

var sayHello= say.bind(person);
sayHello("mounika");

