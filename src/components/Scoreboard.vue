<template>
    <div class = "bg-orange-400 w-2/5 lg:w-2/12 px-7 py-7">
        <h6 class="text-center">Users</h6>
        <li class="list-none " v-for = "participant in participants">{{ participant.name }} {{ participant.points }}</li>
        
    </div>
    
</template>
<script>
export default{
    'name':'Scoreboard',
    data(){
        return {
            participants: [
            {name: 'Jean',points: '30'},
            {name: 'Jean',points: '30'},
            {name: 'Jean',points: '30'},
            {name: 'Jean',points: '30'}
        ]
        }
    }
}</script>
<style></style>