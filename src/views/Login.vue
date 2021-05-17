<template>
    <div class="login">
        <div class="loginTitle">

        </div>
        <div class="FormBody">
            <label for="">Mobile or Email</label>
            <input name="email" type="email" placeholder="Email or Phone" class="loginInput" v-bind:value="email">
            <label for="">Password</label>
            <input name="password" type="password" placeholder="Password" class="loginInput" v-bind:value="password">

        </div>
    </div>
        
</template>

<script setup>
export default {
    data(){
        return{
            email:"",
            password:""
        }
    }
}
</script>

