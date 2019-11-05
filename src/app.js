let baseUrl = 'http://5.135.184.31:3000'

window.addEventListener('DOMContentLoaded', function () {
  testApiConnection()
})

function testApiConnection() {

  axios({
    method: 'get',
    url: 'http://5.135.184.31:3000'
  }).then(function (response) {
    console.log(response);
  }).catch((error) => {
    console.warn(error);
  }).finally(() => {
    console.log("ouuiii euuhh mooiiiii, touuuttt çaaa !!!");
  })
}

async function testApiConnectionAsync() {
  const instance = axios.create({
    baseURL: baseUrl
  });

  try {
    const response = await instance.get({
      url: "/",
      method: "get"
    });
    console.log(response);
  }
  catch (error) {
    console.error(error);
  }
}

