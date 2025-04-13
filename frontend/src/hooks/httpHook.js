import { useState } from "react";
const BASE_URL = "http://localhost:3000/"
const UseHttp = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [error,setIsError] = useState('')
  const sendRequest = async (url, method = "GET", body = "", header = {}) => {
    let data;
    try {
      setIsError('')
      setIsLoading(true)
      const Response =
        (await fetch(BASE_URL+url, {
          method: method,
          headers: header,
          body: !!body ? body : null,
        })) || null;
        setIsLoading(false)
      data = await Response.json();

 
    } catch (err) {
      setIsLoading(false)
      setIsError(data);
      console.log(err);
      
    }

    return data;
  };
  return [isLoading,error,sendRequest]
};
export default UseHttp;