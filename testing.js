// // // // promise declaration..

const { Component } = require("react")

// // // const isCashAvailable = true;
// // // const atmPromise = new Promise(function(resolve, reject){
// // //   if(isCashAvailable)
// // //     {
// // //       const response="Cash is Available";
// // //       resolve(response);
// // //     }
// // //   else
// // //     {
// // //       const response="Cash is not available";
// // //       reject(response);
// // //     }
// // // })

// // // atmPromise.then(function(successRes){
// // //   console.log(successRes)
// // // }).catch(function(failRes){
// // //   console.log(failRes)
// // // }).finally(function(){
// // //   console.log("promise state handled")
// // // })




// // // const userData = new Promise((resolve, reject)=>{
// // //   setTimeout(()=>{
// // //     resolve("User Data resolve")
// // //   },1000)
// // // })

// // // const commentData = new Promise((resolve, reject)=>{
// // //   setTimeout(()=>{
// // //     resolve("Comment Data is called")
// // //   },500)
// // // })

// // // const blogData = new Promise((resolve, reject)=>{
// // //   setTimeout(()=>{
// // //     resolve("Blog data is called")
// // //   })
// // // })


// // // Promise.all([userData]).then((res)=>{
// // //   console.log(res)
// // // })





// // const userData = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     // resolve("User Data resolve")
// //     reject("user data is rejected")
// //   },1000)
// // })

// // const commentData = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     // resolve("Comment Data is called")
// //     reject("comment data is rejected")
// //   },1000)
// // })

// // const blogData = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     // resolve("Blog data is called")
// //     reject("Blog rejected")
// //   },1000)
// // })


// Promise.all([userData,commentData,blogData]).then((res)=>{
//   console.log(res)
// }).catch((res)=>{
//   console.log(res)
// })



const userData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve("User Data resolve")
    reject("user data is rejected")
  },1000)
})

const commentData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve("Comment Data is called")
    reject("comment data is rejected")
  },100)
})

const blogData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve("Blog data is called")
    resolve("Blog rejected")
  },2000)
})


Promise.allSettled([userData,commentData,blogData]).then((res)=>{
  console.log(res)
}).catch((res)=>{
  console.log("test:",res)
})


// // Order are same --> order is important..

// // GET the output in the form of array..

// // if anyone is break, then all are break

// // Order are matters ... 


// what do you mean by settled
// settled, either a 



// very slow pattern -- it will take 6 seconds
// const blogPost = await axios.get();
// const userData = await axios.get();
// const commentData = await axios.get()


// Parallel API Call

// 2 second for each--- with promise.all() you can run them in parallel without await..
// const [blogData, userData, commentData]=await Promise.all([
//   axios.get(...)
//   axios.get(...)
//   axios.get(...)
// ])



// react is only deals in rendering doesn't create it..
// react key should be unique
// react don't know so how react work with keys..
// react is evaluating your Component



