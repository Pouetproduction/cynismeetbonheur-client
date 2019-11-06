let baseUrl = 'http://5.135.184.31:3000'

window.addEventListener('DOMContentLoaded', function () {
  testApiConnection()
})

function testApiConnection() {

  axios.get("http://5.135.184.31:3000/")
  .then(function (response) {
    console.log(response);
  }).catch((error) => {
    console.warn(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }).finally(() => {
    console.log("ouuiii euuhh mooiiiii, touuuttt çaaa !!!");
  })

}

// async function testApiConnectionAsync() {
//   const instance = axios.create({
//     baseURL: baseUrl
//   });

//   try {
//     const response = await instance.get({
//       url: "/",
//       method: "get"
//     });
//     console.log(response);
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

