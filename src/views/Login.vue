<template>
    <div class="login">
        <div class="loginTitle">
            Login
        </div>
        <div class="formBody">
            <div class="formField">
                <label for="">Mobile or Email</label>
                <input class="loginInput" name="email" type="email" placeholder="Email or Phone" v-bind:value="email">
            </div>
            <div class="formField">
                <label for="">Password</label>
                <input class="loginInput" name="password" type="password" placeholder="Password" v-bind:value="password">
            </div>
            <button class='loginButton loginInput'>Login</button>
        </div>

        <div class="formSeparator">
            <hr>
            <div id="loginOr">or</div>
        </div>
        <div class= "formBody">
            <button id="conWFacebook" class='loginButton loginInput'>
                <span id="facebookIcon" class="material-icons">
facebook
</span>
                Connect With Facebook
            </button>
            <div class="WrongAuthPage">
                <span>
                    New User?
                    <router-link to="signup">Sign Up</router-link>
                </span>
            </div>
        </div>

    </div>
        
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:""
        }
    }
}
</script>

<style scoped>

</style>

