// promise declaration..

const isCashAvailable = true;
const atmPromise = new Promise(function(resolve, reject){
  if(isCashAvailable)
    {
      const response="Cash is Available";
      resolve(response);
    }
  else
    {
      const response="Cash is not available";
      reject(response);
    }
})

atmPromise.then(function(successRes){
  console.log(successRes)
}).catch(function(failRes){
  console.log(failRes)
}).finally(function(){
  console.log("promise state handled")
})