<template>
    <div class="login">
        <div class="loginTitle">
            Sign Up
        </div>
        <div id="signupTop" class="formBody ">
         <button id="conWFacebook" class='loginButton loginInput'>
            <span id="facebookIcon" class="material-icons">
                facebook
            </span>
            Connect With Facebook
        </button>
        </div>
        <div class="formSeparator">
            <hr>
            <div id="loginOr">or</div>
        </div>
        <div class="formBody signupFormBody">
            <div class="formField">
                <label for="">Your Name</label>
                <input class="loginInput" name="name" type="name" placeholder="First and Last name" v-bind:value="name">
            </div>
            <div class="formField">
                <label for="">Mobile Number</label>
                <input class="loginInput" name="phone" type="number" placeholder="Mobile Number" v-bind:value="phone">
            </div>
            
            <div class="formField">
                <label for="">Email</label>
                <input class="loginInput" name="email" type="email" placeholder="example@domain.com" v-bind:value="email">
            </div>
            
            <div class="formField">
                <label for="">
                    Birthdate
                </label>
                <input class="loginInput" name="Birthdate" type="date" v-bind:value="birthdate">
            </div>
            <div class="formField">
                <label for="">Password</label>
                <input class="loginInput" name="password" type="password" placeholder="Password" v-bind:value="password">
            </div>
            <button class='loginButton loginInput'>Join Now</button>
        </div>

        
        <div class= "formBody signupFormBody">
           
            <div class="WrongAuthPage">
                <span>
                    Already Signed Up?
                    <router-link to="login">login</router-link>
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
            password:"",
            phone:"",
            birthdate:"",
            name:""
        }
    }
}
</script>

<style scoped>

</style>

