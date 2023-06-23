//**************Asynchronous****************
function greet(){
    console.log("Hello PK!!")
}
console.log("NP!!")
setTimeout(greet,0)
setInterval(()=>console.log("Hi PK!!"),2000) //prints hi pk for every 2 seconds
console.log("NP")
//***********************PROMISE***********************
//API CALL Illustration(sample)
const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Resolved") 
        reject("Rejected")
    },2000)
})
prom.then((value)=>console.log(value)) 
.catch(()=>console.log("Error")) 
const abc=fetch('https://jsonplaceholder.typicode.com/todos')
abc.then((res)=>res.json())
.then((data)=>console.log(data[0]))
.catch((error)=>{console.log('error',error)})
const apicall=async()=>{
    try{
        const promises=await fetch('https://jsonplaceholder.typicode.com/todos') 
        /*await :makes a function wait for a promise. 
        ->await keyword can only be used inside an async function.
        ->await keyword makes the function pause the execution and wait for a resolved promise before it continues*/
        const data=await promises.json()
        console.log(data[2])
    } catch(error){
        console.log(error)
    }
}
apicall()
