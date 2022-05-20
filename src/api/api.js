import * as axios from 'axios';


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'e0eb3e90-674a-4e69-b823-a62f9ed5af70'
    }
})

export const usersAPI ={
    getUsers(currentPage = 1, pageSize = 5 ){

        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`, {
                
            }).then(response => response.data)
        )
        
    },
    
    usersFollow(id=2){
        return(
            instance.post(`follow/${id}`, {}, {})).then(response =>  response.data)
        
    },

    usersUnFollow(id=2){
        return(
            instance.delete(`follow/${id}`, {})).then(response => response.data)
        
    },


    getProfileUsers(userId){

        console.warn("Heck, there's already a newer method")

        return (
            profileAPI.getProfile(userId)
        )   
    }
}

export const profileAPI ={

    getProfile(userId){
        return (
            instance.get(`profile/ ${userId}`, {} ).then(response =>  response.data)
        )
    },

    getStatus(userId){
        return(
            instance.get(`profile/status/ ${userId}`).then(response =>  response.data)
        )
    },

    updateStatus(status){
        return(
            instance.put(`profile/status`, {status}).then(response =>  response.data)
        )
    },
}



export const authAPI ={
    
    usersLogin(){
        return(
            instance.get(`auth/me`, {}).then(response => response.data)
        )
    },

    login(email, password, rememberme = false){
        return(
            instance.post(`auth/login`, {email, password, rememberme}).then(response => response.data)
        )
    },

    logout(){
        return(
            instance.delete(`auth/login`).then(response => response.data)
        )
    }
}
