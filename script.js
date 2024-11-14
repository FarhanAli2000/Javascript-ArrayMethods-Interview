// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(`The number of vowels in your String is ${count}`);
// }
// countVowel("hello i am farhan ");



// let countVowel=(str)=> {
//     let count = 0;
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     console.log(`The number of vowels in your String is ${count}`);
//   }
//   countVowel("hello i am farhan ");
  //--------------------ForEach is basically a method but  we can call it highr order function because it uses call back function it is also called higher order function.
// let arr=[1,2,3,45,3]
// arr.forEach((arr)=>{
//     console.log(arr)
// })

// let employes=[7,3,4,2,4,4]
// employes.forEach(function count(employee){
//     console.log(employee+10);
// })


// let city=["Lahore","faislabad",'Okara']
// city.forEach((value,index,array)=>{
// console.log(value,index,array);
// })

// let sqrvalue=[3,5,7,9,6];
// sqrvalue.forEach((value)=>{
// console.log(value**3);
// })

 //-----Map function=>map is similar to foreach. Map returns new array but foreach changing in original array.


//  let mynums=[3,4,5,6,7];
//  mynums.map((value)=>{
// console.log(value-2);
//  }) 


//------Filter Method

// let mynums=[2,3,5,6,4,7];
// mynums.filter((value)=>{
//     if(value%2==0)
// {
// console.log(`Value is:${value}`);
// }

// })


//---Reduce method

// const array1=[1,2,3,123,4];

// const initialValue=0;
// const sum=array1.reduce((acc,curval)=>{
    // console.log(acc);
    // console.log(curval);
// return acc+curval;
// return acc>curval?acc:curval;
// })

// console.log(sum);


// let students=[87,93,64,99,86]
// students.forEach((value,index)=>{
//     if(value>90)
//     {
//         console.log(`Value  is ${value} ${index}`);
//     }
    
// })

// let marks=[87,93,64,99,86]
// let finalValue=marks.filter((value,index)=>{
//     return value>90;
// })
// // console.log(finalValue);


//-----------------------------Task
let n=prompt("Enter the the number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;

}
console.log(arr);

let sum=arr.reduce((acc,curval)=>{
return acc+curval
})
console.log(sum);

let product=arr.reduce((acc,curval)=>{
    return acc*curval;
})
console.log(product);
2
 