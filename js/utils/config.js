const baseAppRouter = "/";

// http request config
const httpRequest = {
  //serverAddress: "http://5.135.184.31",
  serverAddress: "https://jsonplaceholder.typicode.com",
  //port: "3000",
  serverPath: ""
};

// TimeOut request
const requestTimeOut = 600000;

// httpRoutes
const httpRoutes = {
  helloWorld: "/",
  message : {
    post : "/posts"
  }
};

export { baseAppRouter, requestTimeOut, httpRequest, httpRoutes };
