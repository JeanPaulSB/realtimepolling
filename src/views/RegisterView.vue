<template>
    <div class="w-full h-full bg-secondary flex justify-center items-center">
        <form @submit.prevent = "sendForm()" class="flex items-center justify-center lg:w-2/6 lg:text-xl bg-white w-4/5 h-5/6 shadow-2xl flex-col">
            
            <h1 class = "font-mono text-md text-dark-900">Create your account </h1>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "Email" type="email" v-model = "email"></BaseInput>
            </div>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "Name" v-model = "name"></BaseInput>
            </div>
            <div class="mt-5 flex  flex-col">
            <BaseInput label = "UPB ID" type="number" v-model = "upbID"></BaseInput>
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
export default{
    'name':'RegisterView',
    components:{
        BaseInput
    },
    data(){
        return{
            email:'',
            name:'',
            institutionalEmail:'',
            upbID: 0,
            password:'',
        }
    },

    methods:{
        sendForm(){
            console.log(this.email)
        }
    }
}
</script>