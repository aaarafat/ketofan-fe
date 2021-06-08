<template>
  <div class="form-group">
    <label :for="name">{{ label }}<sup v-if="required">*</sup></label>
    <div class="input-wrapper">
      <component
        :is="input"
        :required="required"
        :type="type"
        :id="name"
        :name="name"
        :value="inputValue"
        class="form-control"
        :class="{ error: !!errorMessage }"
        :placeholder="placeholder"
        :rows="rows"
        @input="handleChange"
        @blur="handleBlur"
      />
      <p v-show="name !== 'date' && errorMessage">{{ errorMessage }}</p>
       <p v-show="name === 'date' && errorMessage">Please Enter Date of Birth</p>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: [Boolean, String],
    default: false,
  },
  input: {
    type: String,
    default: "input",
  },
  rows: {
    type: Number,
    default: 3,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name, undefined, {
  validateOnValueUpdate: false,
  label: props.label,
  initialValue: props.value,
});
</script>

<style></style>
