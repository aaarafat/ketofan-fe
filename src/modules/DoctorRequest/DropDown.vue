<template>
  <div class="drop-container">
    <div
      class="drop-wrapper"
      @click="() => setIsListOpen(!isListOpen)"
      v-click-outside-new="() => setIsListOpen(false)"
    >
      <div class="drop-input-field">
        <span
          class="material-icons-outlined icon"
          v-show="icon"
          :class="{ focused: focused && !errorMessage, error: !!errorMessage }"
        >
          {{ icon }}
        </span>
        <input
          :id="name"
          :name="name"
          :placeholder="computedPlaceholder"
          :value="inputValue[labelProp]"
          @input="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
          autocomplete="off"
        />
      </div>
      <span class="material-icons-outlined drop-down-btn"> expand_more </span>
      <ul
        v-show="isListOpen"
        v-if="filteredOptions.length > 0"
        class="drop-down-list"
      >
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          @click="handleChangeVeeValidate({ ...option })"
          :class="{ selected: option[valueProp] == inputValue[valueProp] }"
          tabindex="0"
          role="button"
        >
          {{ option[labelProp] }}
        </li>
      </ul>
      <ul v-show="isListOpen" v-else class="drop-down-list no-options">
        No options are available
      </ul>
    </div>

    <p :style="{ visibility: !!errorMessage ? 'visible' : 'hidden' }">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed, watch, defineProps, ref } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    required: true,
  },
  required: {
    type: [Boolean, String],
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  valueProp: {
    type: String,
    required: true,
  },
  labelProp: {
    type: String,
    required: true,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur: handleBlurVeeValidate,
  handleChange: handleChangeVeeValidate,
  meta,
} = useField(props.name, undefined, {
  validateOnValueUpdate: false,
  label: props.label,
  initialValue: props.value,
});

const isListOpen = ref(false);
function handleChange(e) {
  isListOpen.value = true;
  handleChangeVeeValidate({ [props.labelProp]: e.target.value });
}
function setIsListOpen(value) {
  isListOpen.value = value;
}

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
const filteredOptions = computed(() => {
  if (!inputValue.value) return props.options;
  return props.options.filter((o) =>
    o[props.labelProp].match(
      new RegExp("^" + inputValue.value[props.labelProp], "i")
    )
  );
});
</script>