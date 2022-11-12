import axios from "axios";




const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    headers:{"API-KEY":"813d89a2-1811-42ec-93f9-532e518123b5" },
    });



export const getUsers=(currentPage=1,pageSize=10)=>{

   return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }).then(response=>{
            return response.data;
       });
}


