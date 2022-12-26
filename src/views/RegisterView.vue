<template>
    <div class="w-full h-full bg-white flex justify-center">
        <form @submit.prevent = "sendForm()" class="flex mt-12 items-center justify-center lg:w-2/6 lg:text-xl bg-white rounded-xl w-4/5 h-4/6 shadow-2xl flex-col">
            
            <h1 class = "font-mono text-md text-dark-900">Create your account </h1>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "Email" type="email" v-model = "email"></BaseInput>
            </div>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "Name" v-model = "name"></BaseInput>
            </div>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "UPB ID" type="number" v-model = "upbId"></BaseInput>
            </div>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "Password" type="password" v-model = "password"></BaseInput>
            </div>
            <button type = "submit" class = "mt-5  w-4/6 lg:w-2/5 rounded-full  font-mono text-white bg-green-600">Submit</button>
            
        </form>

    </div>
</template>
<script>


import BaseInput from '@/components/BaseInput.vue';
import { useUserStore } from '@/store/userStore';
export default{
    'name':'RegisterView',
    components:{
        BaseInput
    },
    setup(){
        const userStore = useUserStore();
        return {
            userStore
        }
    },
    data(){
        return{
            email:'',
            name:'',
            upbId: 0,
            password:'',
        }
    },

    methods:{
        sendForm(){
            let user = {
                'email':this.email,
                'name':this.name,
                'password':this.password,
                'upbId':this.upbId
            }
            console.log(user)

            console.log(this.userStore.setName(this.name))

            
        }
    },

    
}
</script>