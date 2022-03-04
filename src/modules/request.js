export default class Request {
    constructor(url) {
      this.url = url;  
    }
  
    post(endpoint,data){
       
       return fetch([this.url,endpoint].join(''), {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
                  
    }
    get(endpoint){
        return fetch([this.url,endpoint].join(''));
    }
  }