<template>
  <div class="navbar">
    <nav>
      <input  type="checkbox" id="navCheck">
      <label for="navCheck" class="checkbtn">
        <i class="material-icons">menu</i>
      
      </label>
      <label class="logo">Ketofan</label>
      <ul>
        <li><router-link id='navHome' to="/">Home</router-link></li>
        <hr>
        <li><router-link to="signup">Sign Up</router-link></li>
        <span >|</span>
        <hr>
        <li><router-link to="login">Login</router-link></li>
        <span>|</span>
        <hr>
        <li><router-link to="contact-us">Contact Us</router-link></li>
        <span>|</span>

        <li>
        <img id="navEgyptFlag" alt="egypt flag" src="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/27353/_next/static/images/Egypt.png"/>

        </li>
        
        <li id="navEgypt">
          <p>
          Egypt</p>
        </li>
      </ul>
    </nav>
    <section></section>
  </div>
</template>

<script >
  export default{
  //   data(){
  //    return{
  //      wide:true
  //    }
  //  },
  //   mounted(){
  //     console.log("mountkjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbed")

  //     this.setWide()
  //   },
  //   updated(){
  //     console.log("updated")

  //     this.setWide()

  //   },
  //   methods:{
  //       setWide(){
  //         let width = window.innerWidth;
  //         if(width > 768)
  //           this.wide = true
  //         else
  //           this.wide = false
  //     console.log("updatedddddddddddddddddddddddd")
      
  //     }
      
  //   }
}
   
//to-do
//rerouting to login using token
//
  
</script>
