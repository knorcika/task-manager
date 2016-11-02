'use strict';
const request = require('request');

class Request {
  /**
   * Set server address
   * @param server
   * @param port
   */
  constructor(server, port){
    if(!server && !port){
      this.url = 'http://localhost:3000'
    }else{
      this.url = server + ':' + port;
    }
    this.jsonMethods = ['PUT', 'POST', 'PATCH'];
  }

  /**
   * GET method
   * @param path
   * @returns {Request}
   */
  get(path){
    this.fullUrl = this.url + path;
    this.method = 'GET';
    return this;
  }

  /**
   * POST method
   * @param path
   * @returns {Request}
   */
  post(path){
    this.fullUrl = this.url + path;
    this.method = 'POST';
    return this;
  }

  /**
   * DELETE method
   * @param path
   * @returns {Request}
   */
  delete(path){
    this.fullUrl = this.url + path;
    this.method = 'DELETE';
    return this;
  }

  /**
   * PUT method
   * @param path
   * @returns {Request}
   */
  put(path){
    this.fullUrl = this.url + path;
    this.method = 'PUT';
    return this;
  }

  /**
   * PATCH method
   * @param path
   * @returns {Request}
   */
  patch(path){
    this.fullUrl = this.url + path;
    this.method = 'PATCH';
    return this;
  }

  /**
   * Set data
   * @param data
   * @returns {Request}
   */
  data(data){
    this.data = data;
    return this;
  }

  /**
   * Send the request
   * @returns {Promise}
   */
  send(){
    let requestData = {
      url: this.fullUrl,
      method: this.method
    };
    if(this.jsonMethods.indexOf(this.method) > -1){
      requestData['json'] = this.data;
    }
    return new Promise((resolve, reject) => {
      request(requestData, (err, res, body) => {
        if (err) return reject(err);
        try{
          body = JSON.parse(body);
        }catch(error){
          //nothing to do
        }
        console.log(body);
        resolve(body);
      })
    })
  }
}

module.exports = Request;