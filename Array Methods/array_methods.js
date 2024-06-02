let arr = [1,2,3,4,5];

// for Each (Only Used For Array)
// this method can do any operations on array elements.
// it is a higher order function. 
// any function which is using callback function, is called higher ordered function.
// syntax : arrayName.forEach( (value/element) => process or function )
console.log("For Each Method");
arr.forEach((e) => console.log(e));
arr.forEach((e) => console.log(e*e));
arr.forEach((e,i)=>console.log("Element : "+e+" Index : "+i)); 

// Map Method
// it is similiar to forEach method
// it can return value or a new array
// syntax : same as forEach
console.log("Map Method");
arr.map((e) => console.log(e*e)); // it will print all elements one by one
let newArray = arr.map( (e) => e*e); // it will process every element of old array and store it in a new array
console.log(newArray); 

// Filter Method
// It Filters Array And store it in a new array
// syntax : let newArray = arr.filter ( (element) => condition for filter )
console.log("Filter Method");
let FilterArray = arr.filter( (e) => e%2==0 );
console.log("Even Numbers : "+FilterArray);

// Reduce Method
// two variable, result & current.
// performs operation between result & current and returns single value.
console.log("Reduce Method");
let reduceArray = arr.reduce((result,current) => (result+current));
console.log(reduceArray); // here we added result + current, so it will return the sum of the all element.
// we can write e1, e2 or first, second or anything else, in place of result , current.
// in array there is 1, 2, 3, 4, 5 elements, so result = 1 & Current =2 it will add this and return 3,
// now elements are 3,3,4,5. so reuslt = 3, current = 3. it will return 6,
// now elements are 6,4,5. so result = 6, current  = 4, it will return 10,
// now elements are 10,5. so result = 10, current = 5, it will return 15. 
// and now there is only one single element left in array. so it will return that element.
// if we multiply result * Current, then it will do same process by using multiplication.
// it reduces array into single value.
// we can also find min or max number from array using this.
let max = arr.reduce((e1,e2) => {
    return (e1>e2) ? e1 : e2;
});
console.log("Max : "+max);


