import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom";

class ApiConnector extends React.Component {

  constructor() {
    this.state = {
      baseUrl : '5.135.184.31:3000'
    };
    // test with : {http{s}://}{www.}[cynismeetbonheur.fr, 5.135.184.31]
  }

  testApiConnection = () => {
    console.log(this.state.baseUrl);
  }

  render() {
    return <button onClick={this.testApiConnection}>
        test api
      </button>
  }
}

ReactDOM.render(
  <ApiConnector name="Marc" />,
  document.getElementById('cb-app')
);

// function pouetpouet() {

//    console.log("pouet");
//    return;
//    const instance = axios.create({
//      baseURL: baseUrl
//    });

//    instance.get({
//      url: "/",
//      method: "get"
//    }).then((response) => {
//      console.log(response);
//    }).catch((error) => {
//      console.error(error);
//    }).finally(() => {
//      console.log("ouuiii euuhh mooiiiii, touuuttt çaaa !!!");
//    })
//      ;
//  }


// module.exports = {
//   testApiConnection: testApiConnection
// };

// // window.testApiConnection = testApiConnection;


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

