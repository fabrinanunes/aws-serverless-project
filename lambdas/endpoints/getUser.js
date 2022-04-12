const Responses = require('../common/API_Responses');

exports.handler = async event => {
   console.log('event', event)

   let ID = event.pathParameters.ID;

   if(!event.pathParameters || !event.pathParameters.ID){
      //failed without an ID
      return Responses._400({message: 'Missing the ID from the path'})
   }

   if(data[ID]){
      //return the data
      return Responses._200(data[ID])
   }

   //failed as ID not in the data
   return Responses._400({ message: 'No ID in data'})
}

const data = {
   1234: { name: 'Fabrina', age: 26, job: 'front dev'},
   7893: { name: 'Nunes', age: 27, job: 'back dev'},
   5132: { name: 'Silva', age: 28, job: 'web dev'},
}