import { request} from "../util/Network";
export const getFoodList =  () => {
    return request({
       url: `/meals`,
       method: 'GET'
   });
}
export const sendOrder =  (data) => { 
    return request({
        url: `/orders`,
        method: 'POST',
       data
    });
}