<!-- // // Utility function..
// // For Each
// // Then 
// // Catch
// // hasOwn Property
// // const num = [3,452,4,2];


for(let i=1;i<=10;i++)
  {
    console.log(`${i}*${i}`)
  }

// // num.forEach((item,index, aretr)=>{
// //   arr[index]=item*10
// // })

// // console.log(num)

// // EXAMPLE ONE 
// // const isCashAvailable = false;

// // const atmPromise = new Promise(function(resolve, reject){
// //   if(isCashAvailable)
// //     {
// //       let response = {
// //         message:"Cash widthdraw"
// //       }
// //       // return "Widthraw cash from bank"
// //       // return respconsole.log("Best of luck of the next time");
// //       resolve(response)
// //     }
// //   else
// //     {
// //       let response = {
// //         message:"Cash not widthdrawl"
// //       }
// //       reject(response)
// //     }
// // })

// // atmPromise.catch(function(successMsg){
// //   console.log(successMsg.message)
// // }).then(function(failMsg){
// //   // throw new Error(failMsg)
// //   console.log(failMsg.message) // use custom error like this..
// // }).finally(function(){
// //   throw new Error("Finally worked")
// // })

// // EXAMPLE TWO



// // const score = 50;

// // const gradePromise = new Promise(function(pass, fail){
// //   if(score>80){
// //     const result = {
// //       message:"Pass with Grade A"
// //     }
// //     pass(result)
// //   }
// //   else if(score<=80 && score>60)
// //     {
// //       const result ={
// //         message: "Pass with Grade B"
// //       }
// //       pass(result)
// //     }
// //   else if(score<=60 && score>40)
// //     {
// //       const result={
// //         message:"Pass with Grade C"
// //       }
// //       pass(result)
// //     }
// //   else
// //     {
// //       const result={
// //         message:"Fail with Grade D"
// //       }
// //       fail(result)
// //     }
// // })


// // gradePromise.then(function(passData){
// //   console.log(passData.message)
// // }).catch(function(failData){
// //   console.log(failData.message)
// // }).finally(function(){
// //   if(score<=40)
// //     {
// //       console.log("Best of luck of the next time")
// //     }
// //   else
// //     {
// //       console.log("Wow Congratulations :) ")
// //     }
  
// // })


// // what is fetch
// // modern and powerful way to make a network request. it allows you to request resources, data from api or file. handle the response asynchronously using promises.

// // Fetch is promise which help is to capture data from external resources using endpoint.
// // fetch > create promise > promise process.. 


// // Promise declaration
// function fetchData()
// {
//   // const rawData=[]
//   const postPromise = fetch('https://jsonplaceholder.typicode.com/posts')
// const postData = []
// // How to handle promise
// postPromise.then(function(rawJson){
//   // console.log(rawJson.json())
//   // second then is convert data into json format
  
//   // 1. first promise is get the data
//   // 2. second promise is convert the data into json format..
  
//   // how many ways to fetch the data
//   // best and one way that is fetch
  
// //   rawJson.json().then(function(data){
// //     // postData=data
// //     console.log(data.title)
// //     // document.getElementById("output").innerText=JSON.stringify(postData, null,2)
// //   })
// // }).catch(function(errMsg){
// //   console.log(errMsg)
// // })

// // }

// // fetchData()

// // <html>
// // </html>

// // console.log(...postData)










 -->


----------


const userData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("User Data resolve")
  },1000)
})

const commentData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Comment Data is called")
  },500)
})

const blogData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Blog data is called")
  })
})


Promise.all([userData]).then((res)=>{
  console.log(res)
})














// // Utility function..
// // For Each
// // Then 
// // Catch
// // hasOwn Property
// // const num = [3,452,4,2];


for(let i=1;i<=10;i++)
  {
    console.log(`${i}*${i}`)
  }

// // num.forEach((item,index, aretr)=>{
// //   arr[index]=item*10
// // })

// // console.log(num)

// // EXAMPLE ONE 
// // const isCashAvailable = false;

// // const atmPromise = new Promise(function(resolve, reject){
// //   if(isCashAvailable)
// //     {
// //       let response = {
// //         message:"Cash widthdraw"
// //       }
// //       // return "Widthraw cash from bank"
// //       // return respconsole.log("Best of luck of the next time");
// //       resolve(response)
// //     }
// //   else
// //     {
// //       let response = {
// //         message:"Cash not widthdrawl"
// //       }
// //       reject(response)
// //     }
// // })

// // atmPromise.catch(function(successMsg){
// //   console.log(successMsg.message)
// // }).then(function(failMsg){
// //   // throw new Error(failMsg)
// //   console.log(failMsg.message) // use custom error like this..
// // }).finally(function(){
// //   throw new Error("Finally worked")
// // })

// // EXAMPLE TWO



// // const score = 50;

// // const gradePromise = new Promise(function(pass, fail){
// //   if(score>80){
// //     const result = {
// //       message:"Pass with Grade A"
// //     }
// //     pass(result)
// //   }
// //   else if(score<=80 && score>60)
// //     {
// //       const result ={
// //         message: "Pass with Grade B"
// //       }
// //       pass(result)
// //     }
// //   else if(score<=60 && score>40)
// //     {
// //       const result={
// //         message:"Pass with Grade C"
// //       }
// //       pass(result)
// //     }
// //   else
// //     {
// //       const result={
// //         message:"Fail with Grade D"
// //       }
// //       fail(result)
// //     }
// // })


// // gradePromise.then(function(passData){
// //   console.log(passData.message)
// // }).catch(function(failData){
// //   console.log(failData.message)
// // }).finally(function(){
// //   if(score<=40)
// //     {
// //       console.log("Best of luck of the next time")
// //     }
// //   else
// //     {
// //       console.log("Wow Congratulations :) ")
// //     }
  
// // })


// // what is fetch
// // modern and powerful way to make a network request. it allows you to request resources, data from api or file. handle the response asynchronously using promises.

// // Fetch is promise which help is to capture data from external resources using endpoint.
// // fetch > create promise > promise process.. 


// // Promise declaration
// function fetchData()
// {
//   // const rawData=[]
//   const postPromise = fetch('https://jsonplaceholder.typicode.com/posts')
// const postData = []
// // How to handle promise
// postPromise.then(function(rawJson){
//   // console.log(rawJson.json())
//   // second then is convert data into json format
  
//   // 1. first promise is get the data
//   // 2. second promise is convert the data into json format..
  
//   // how many ways to fetch the data
//   // best and one way that is fetch
  
// //   rawJson.json().then(function(data){
// //     // postData=data
// //     console.log(data.title)
// //     // document.getElementById("output").innerText=JSON.stringify(postData, null,2)
// //   })
// // }).catch(function(errMsg){
// //   console.log(errMsg)
// // })

// // }

// // fetchData()

// // <html>
// // </html>

// // console.log(...postData)



******* under the hood, we still using .then and .catch.- -- abstractions..

callback hell
promise hell - this is also exist..
thats why introduce the async and await..

real world = you make a promise ..

promise -> promise is not sure, it can happen in future, deal in asynchronous in nature, 
mayank make promise it would be




#### Session 8 ####
Agenda 
1) Browsers - 
2) Memory Router - 
3) Hash Router - 


hooks 
containes 
with lot more funcionality..

cannot have a multiple root.

entire the all jsx element in one root element wrap

Fragements only understand by react library -- avoid unnecesery addion of dom











#### Parallel API Calls in js

1, 2, 3 parallel api calls, all are trigger.

if one promise return the reject error so other is not called.. that is the solution.. 

.all > through get the all resolve promises.

.any > take care of all rejected promises.


#### Lifting state up


### Debouncing

