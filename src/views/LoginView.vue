<template>
    <div class="flex justify-center  w-4/5 mx-auto lg:text-md h-2/5">
        <div class="flex mt-20 items-center justify-center flex-col h-full  rounded-3xl w-full bg-main lg:w-2/6 shadow-2xl">
           <form @submit.prevent="sendForm" class="mx-auto flex flex-col w-5/6">
            <h1 class="mx-auto lg:text-xl font-mono font-bold">Sign in</h1>
            <BaseInput label="Email" v-model="email"></BaseInput>
            <BaseInput label="Password" type="password" v-model="password"></BaseInput>
            <button type="submit" class="mt-2 font-mono font-bold text-white bg-sky-700 w-full rounded-full">Sign in</button>
            </form>
            <h6 class="mx-auto font-mono mt-5 underline cursor-pointer text-sky-500">Forgot your password?</h6>
            
            <h6 class ="font-mono text-sm font-bold mt-2">Not registered? <span class="font-mono underline cursor-pointer text-sky-500">Sign up</span></h6>
        </div>
    </div>
</template>
<script>
import BaseInput from '@/components/BaseInput.vue';
export default{
    'name':'LoginView',
    components:{
        BaseInput
    },
    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods:{
        sendForm(){
            console.log("sending our data")
            console.log(this.email)
            console.log(this.password)
        }
    }
}</script>
<style></style>