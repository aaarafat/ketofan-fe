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
      <p v-show="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
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
  },
  setup(props) {
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

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style></style>
