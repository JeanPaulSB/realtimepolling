<template>
    <label class="font-mono font-bold text-sm">{{ label }}</label>
    <input 
    class="px-2 font-mono h-10 lg:w-full border-gray-200 border-solid border-2"
    v-bind="$attrs"
    :placeholder="label" 
    :value="modelValue"
    @input="$emit('update:modelValue',$event.target.value)"
    />
</template>
<script>
export default{
    name:'BaseInput',
    props:{
        label:{
            label:String,
            default:'',
        },
        modelValue:{
            type:[String],
            default: '',
        }

    }
}</script>