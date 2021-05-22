<template>
  <div class="form-group">
    <label :for="name">{{ label }}<sup v-if="required">*</sup></label>
    <div class="input-wrapper" :class="{ error: !!errorMessage }">
      <input
        :required="required"
        :type="type"
        :id="name"
        :name="name"
        :value="inputValue"
        class="form-control"
        :placeholder="placeholder"
        v-if="!textarea"
        @input="handleChange"
        @blur="handleBlur"
      />
      <textarea
        v-else
        :required="required"
        :type="type"
        :id="name"
        :name="name"
        :value="inputValue"
        class="form-control"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      ></textarea>
      <p v-show="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: [
    "label",
    "type",
    "name",
    "value",
    "placeholder",
    "required",
    "textarea",
  ],
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
