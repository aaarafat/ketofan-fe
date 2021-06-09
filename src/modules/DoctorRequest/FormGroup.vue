<template>
  <div class="form-group">
    <div class="input-wrapper">
      <span
        v-show="icon"
        class="material-icons-outlined"
        :class="{ focused: focused && !errorMessage, error: !!errorMessage }"
      >
        {{ icon }}
      </span>
      <component
        :is="input"
        :required="required"
        :type="type"
        :id="name"
        :name="name"
        :value="inputValue"
        class="form-control"
        :class="{ error: !!errorMessage }"
        :placeholder="computedPlaceholder"
        :rows="rows"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </div>
    <p :style="{ visibility: !!errorMessage ? 'visible' : 'hidden' }">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { defineProps, ref } from "vue";

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
  icon: {
    type: String,
    default: "",
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur: handleBlurVeeValidate,
  handleChange,
  meta,
} = useField(props.name, undefined, {
  validateOnValueUpdate: false,
  label: props.label,
  initialValue: props.value,
});

function handleFocus(e) {
  focused.value = true;
}

function handleBlur(e) {
  focused.value = false;
  handleBlurVeeValidate(e);
}

const focused = ref(false);
const computedPlaceholder = ref(
  props.required ? props.placeholder + "*" : props.placeholder
);
</script>

<style></style>
