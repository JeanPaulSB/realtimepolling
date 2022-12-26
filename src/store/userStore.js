import {defineStore} from 'pinia';

export const useUserStore = defineStore('UserStore',{
    state(){
        return{
            name: 'Jean Paul',
            email: '',
        }
    },
    getters:{
        getName(){
            return this.name
        }
    },
    actions:{
        setName(name){
            this.name = name;
        }
    }
})