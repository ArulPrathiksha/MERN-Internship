//**************ARRAY CALLBACK METHODS****************
//1.forEach()
let arr=["Vijay","NP","Trisha","Preetha"]
let num=[1,2,3,4,5]
arr.forEach((ele)=>{    //forEach(call back function)
    console.log(ele.repeat(3))//repeat does not work in number array
})
num.forEach(ele=>console.log(ele*ele)) //squares the values
//2.map()
//returns the answer as a array
let ans=num.map(ele => ele*ele)
console.log(ans)
let anss=arr.map((ele)=>{    //forEach(call back function)
    return ele.repeat(3)
})
console.log(anss)
//3.filter()
//returns the array that has elements that satisfy the condition.
//return should have true...then the element is pushed to the array
//0,null,undefined,empty string,false -->False
let odd=num.filter(ele=>{
    return ele%2   //5%2=1  1->True so 5 is pushed to array  4%2=0 0->False so 0 is not added to array 
})
console.log(odd)
let even=num.filter(ele=>{
    return !(ele%2)
})
console.log(even)

//display names who has 2003 and above birth date
let names=[
    {
        name:'Vijay',
        dob:2000
    },
    {
        name:'NP',
        dob:2002
    },
    {
        name:'Prathi',
        dob:2004
    },
    {
        name:'Rajan',
        dob:2003
    }
]
let year=names.filter(ele=>{
    return ele.dob>2002
})
console.log(year.map(ele=>{
    return ele.name
}))
