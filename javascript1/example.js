//test javascript document.write
var a,b,c;
a=prompt("First Number?");
b=prompt("Second Number?");
c=Number(a)+Number(b);
console.log(c);
alert("Result =" + c);
//document.write(c);
//test javascript document.getElementById
var d,e,f;
e=prompt("pertama");
f=prompt("kedua");
d=Number(e)+Number(f);
console.log(d);
document.getElementById("test5").innerHTML=d;

function result1() {
	document.getElementById("test5").innerHTML=d;
}



