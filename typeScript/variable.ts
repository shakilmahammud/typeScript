// ts variable declaration  syntax 
/* variableKeyword(var,let,const) variableName : variableType = variableValue   */
var myName:string = "shakil";
let lastName:string = "Mahammud";
const number:number = +8801763843;

// console.log(myName+ " "+lastName,number);

//Type Assertion in TypeScript
//The syntax is to put the target type between < > symbols and place //it in front of the variable or expression.
let str = '1' ;
let str2:number = <number> <any> str ;  //str is now of type number 
// console.log(typeof(str2))

//Inferred Typing in TypeScript
/*
Given the fact that, Typescript is strongly typed, this feature is optional. TypeScript also encourages dynamic typing of variables. This means that, TypeScript encourages declaring a variable without a type. In such cases, the compiler will determine the type of the variable on the basis of the value assigned to it. TypeScript will find the first usage of the variable within the code, determine the type to which it has been initially set and then assume the same type for this variable in the rest of your code block.
*/
let num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
// num = "12"; //this line error TS2322: Type 'string' is not assignable to type 'number'.
console.log(num);

//TypeScript Variable Scope

/*
1. Global Scope
2. Class Scope
3. Local Scope
*/

//Example: Variable Scope
var global_num = 12          //global variable 

class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 