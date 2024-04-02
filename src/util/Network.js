import axios from 'axios'
const BASE_URL='http://localhost:3000/'
const client=axios.create({
    baseURL:BASE_URL
})
client.interceptors.request.use(function (config) {
    // Log the request method and URL
    console.log('Request:', config);
    
    // Optionally, you can log request data
    if (config.data) {
      console.log('Request Data:', config.data);
    }
  
    return config;
  });
  client.interceptors.response.use(function (response) {
    // Log the response data
    console.log('Response:', response.data);
    
    return response;
  });
export const request=async (options)=>{
    
    const onSuccess = (response) => {
        console.log(response)
        if (response.status >= 200 && response.status < 300){
            return response.data;
        }else{
            throw new Error(
                response.data.message+"aaaa" || "Something went wrong, failed to send request."
              );
        }
       
    };

    const onError = (error) => { 
          throw new Error(
            error.message || "Something went wrong, failed to send request."
          );
        // return Promise.reject(error.response?.data);
    };
    return await client(options).then(onSuccess).catch(onError);
};