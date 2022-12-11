import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "813d89a2-1811-42ec-93f9-532e518123b5"},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
           ).then(response => {
            return response.data;
        });
    },
    unfollow(userId){
    return instance.delete(`follow/${userId}`)
    .then(response => {
        return response.data.resultCode;

    });
},
    follow(userId){
        return instance.post(`follow/${userId}`,{})
            .then(response => {
                return response.data.resultCode;

            });
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status});
    },
   savePhoto(photoFile){
        const formData=new FormData();
        formData.append("image",photoFile);
        return instance.put(`profile/photo`,formData,{headers:{'Content-Type':'multipart/form-data'}});
    },

    saveProfile(profile){
        return instance.put(`profile`,profile);
    },



}

export const autAPI = {
    me(){
        return  instance.get(`auth/me`); },

    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe})},

    logout(){
        return instance.delete(`auth/login`)}

}
