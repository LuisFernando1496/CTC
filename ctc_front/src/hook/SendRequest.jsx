import { Alert } from './Alerts';
import { Loading } from './Loading';

export const SendRequest = async(methods,params='',url,atr) => {
  const urlBaseDev = 'http://localhost:8000/api/';
  let response;

  let request =  methods!='GET'? {
    method: methods, 
    body: JSON.stringify(params), 
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*"

    }
  }:null;
 
 return response = await fetch(urlBaseDev+url,request)
      .then(response => response.json())
      .then(data => {
      if(atr != 'none'){
          Alert(data.msg,'success'); 
      }
          return data;
      })
      .catch(error => Alert(error,'error'));
   
};
