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

### MUI ###

don't memorize the all thing, only have the few things, just keep in mind, because of lot more available in the market, so don't need, just go to the documentation section and read all the things.. that you need and just read and implement.. 

--> once copy and then go to the --> API section that is available prop on it..

if you want to change then it might be in the theme..

sx -> denotes the style object > means you can write css over there.. emotion style to get sx

sx={{backgroundColor:"red"}} -> to change the style using sx props..


Box-> similar to a div >> API section get a props where you can use properly..

foundation ui, semantic ui, tailwind css


//  Fragement component.. 
// useCallback() -> every  component function gets recreated..

// change in prop it gets recreate the component.. and its re render..

// don't memorize any of the thing.. with the help of documentations..
// read the documentations, sx property of the css to override the styles..

// Javascript.. lack a confidence.. > really need to get a job.. atleast 70%, only comes after that..

##### REDUX -- State Management

*** // react redux:
this is not in slide, but try to learn redux..

Prior to teach
> React Redux: Most important topic in interview..
/// what is redux and what is react redux.., how to use redux..

sharing data across the component >> that is props but comes a prop drilling, so that use useContext() for state management..
what is the working of props.. principle behind props.. how is it used..

what is the principle behind props... how is the data exchange, can u explain..
parent and child relation.. should have relationship like a parent and child..
lifting up props.. if share from a to b, so need a common in between like a app.js so pass from a to app, and then app to b.. lifting up props.. when scalling the application, you need to know about share the data across the network, or a global..

React Context: > without having a parents and child relation.. other one is redux architecture.. manage the all your data in centre place.. one component to another component..  that common area called a store..exchange data from one component to another component..without following the parent child relationship


d1 -> 
d2 ->
d3 ->
d4 ->


how to store it and how to share it in different component..kept all the data in central place..

distributing the data to all other, if they are listning to particular storage., state management... how to store it, and how to manage it.


some component inside the redux is uses to work the redux
-- fundamentals blocks inside the redux, which make the storage management system works..
1) State -> what is

it is an object.. which store the data, when u want to share across difference component..

STATE - > put the data

{
  name:'',
  age:'',
  isLoading:'',

}

what need its store in state..

REDUCERS -> which helps to manipulate the data
which blog is manipulate the data and add the data. 
-> update, add and delete the state object...

there is a way to communicate with the state.

every reducers functions receive two things..
1) previous state / inital state
2) type -- like counter-- increment, type can be like a decrement the operation... which kind of operation should i apply.. -- which kind of operation should i apply., it takes the correct processing method.. it take read so it read, if delete then it delete, when it update, then it update, 

2 types > increment > count+1 or decrement > count-1

for example
states
{
  count:0 > when it will update then check a type, whether is increment or decrement, 
}

how to invoke the reducer functions.. now need a Actions..

ACTION is one who is responsible for triggering the functions..

-- which passes the types.. that reducer required.

2 types of action.
1) increment count
2) decrement count


1) suppose if check if fine it will count+1, and store back to the state..
2) action is a function will trigger to a function..

state reducer and actions..

action are a normal function which help you to invoke or trigger a reducer function, how do you do that... by passing the correct type of action. trigger the reducer of particular tag..

State + Reducer + Action.

Action are basically a normal function which invoke or trigger a reducer functions..


React team took redux and merge with react, that is why we are say to a react redux

how can i trigger action and reducer..


what is speciality of that.. how can i trigger the action and reducers..

dispatch() an action that, if action get trigger, reducer get trigger.

call the dispatch function > it invoke or dispatch a particular function.

to the action.. 

STATE > ACTION > REDUCER


Recap: read, modify, any where component are connected with the main storage.

1) State -> object which contains all the data that is neccessery, 
2) Reducer > if you have to manipulate the data, if you have to be reducer, reducer base on basis of type > 
3) Actions > actions are trigger by dispatch, action responsiblity is pass the type correctly.



folders..
store folder > where to put store the all of the data. store basically a folder.
state.js > 
reducer.js > 
actions.js >

how do we combine of these... how do we make to work together.

we need to create a store, 







Reducers > 


central storage which adds the data, and which storage the data.

2) Reducer -> what is

3) Actions -> what is


#### Parallel API Calls in js


1, 2, 3 parallel api calls, all are trigger.

if one promise return the reject error so other is not called.. that is the solution.. 

.all > through get the all resolve promises.

.any > take care of all rejected promises.


#### Lifting state up


### Debouncing

