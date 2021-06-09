<template>
  <div class="appointment">
      <div class='column'>
          {{name}}
      </div>
      <div class='column'>
          {{place}}
      </div>
      <div class='column'>
          {{date}}
      </div>
      <div @click="handleClick" class='column red'>
          <div class="cancel">
              <span class="material-icons x">
                close
              </span>
          </div>
          <span class="cancel-text">Cancel</span>
      </div>
  </div>
</template>

<script setup>
import { defineProps,defineEmit, reactive, ref } from "vue";
const cancel = defineEmit(['cancelApp'])
const props = defineProps({
    name:{type:String},
    place:{type:String},
    date:{type:String},
    idx:{type:Number}
})

const handleClick = ()=>{
    cancel('cancelApp', props.idx)
}
</script>