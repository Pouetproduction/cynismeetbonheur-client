import React from "react";

export default class ApiConnection extends React.Component {

  baseUrl = 'http://5.135.184.31:3000';

  testApiConnection = () => {
    const instance = axios.create({
        baseURL: this.baseUrl
      });

      instance.get()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
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
        });
    }

  render() {
    return (
      <button onClick={this.testApiConnection}>
        {this.props.value}
      </button>
    );
  }
}
