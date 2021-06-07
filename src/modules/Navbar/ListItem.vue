<template>
    <li>
        <span v-if="icon" class="material-icons icons">
            {{iconType}}
        </span>
        <router-link 
            :id="linkId" 
            :to= "path">
            {{linkText}}
        </router-link>
    </li>
</template>

<script>
export default {
    props:{
        linkText:{
            type:String,
        },
        path:{
            type:String,
        },
        iconType:{
            type:String,
        },
        linkId:{
            type:String,
        },
        showIcon:{
            type:Boolean,
            default:true,
        },

    },
    data(){
        return{
            icon:true
        }
    },
    computed: {
        iconVisible() {
            return this.icon === this.showIcon;
        },
    }
}
</script>

