<template>
  <transition ref="root" :name="transition">
    <div
      tabindex="0"
      class="vld-overlay is-active"
      :class="{ 'is-full-page': isFullPage }"
      v-show="isActive"
      :aria-busy="isActive"
      aria-label="Loading"
      :style="{ zIndex }"
    >
      <div
        class="vld-background"
        @click.prevent="cancel"
        :style="bgStyle"
      ></div>
      <div class="vld-icon">
        <slot name="before" />
        <slot name="default">
          <component
            :is="loader"
            :color="color"
            :width="width"
            :height="height"
          />
        </slot>
        <slot name="after" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeMount,
  ref,
  SetupContext,
  watch,
  onUnmounted,
  computed,
  reactive,
} from "vue";

import Loaders from "../loaders/index";

interface BgStyle {
  background: string | undefined;
  opacity: number | undefined;
  backdropFilter: string | undefined;
}

export default defineComponent({
  name: "vue-loading",
  props: {
    active: Boolean,
    programmatic: Boolean,
    container: [Object, Function, HTMLElement],
    isFullPage: {
      type: Boolean,
      default: true,
    },
    enforceFocus: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: "fade",
    },
    /**
     * Allow user to hide the loader
     */
    canCancel: Boolean,
    /**
     * Do something on cancel
     */
    onCancel: {
      type: Function,
      default: () => {
        return;
      },
    },
    color: String,
    backgroundColor: String,
    blur: {
      type: String,
      default: "2px",
    },
    opacity: Number,
    width: Number,
    height: Number,
    zIndex: {
      type: Number,
      default: 100,
    },
    loader: {
      type: String,
      default: "spinner",
    },
  },

  setup(props, context) {
    const isActive = ref<boolean>(props.active);

    const bgStyle = computed<BgStyle>(() => {
      let ret = {
        background: props.backgroundColor,
        opacity: props.opacity,
        backdropFilter: `blur(${props.blur})`,
      };
      return ret;
    });

    const hide = () => {
      // Timeout for the animation complete before destroying
      if (props.programmatic) {
        isActive.value = false;
        setTimeout(() => {
          return;
        }, 150);
      }
    };

    const cancel = () => {
      if (!props.canCancel || !isActive.value) return;
      hide();
      props.onCancel();
    };

    const keyUp = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        cancel();
      }
    };

    const disableScroll = () => {
      if (props.isFullPage && props.lockScroll) {
        document.body.classList.add("vld-shown");
      }
    };
    const enableScroll = () => {
      if (props.isFullPage && props.lockScroll) {
        document.body.classList.remove("vld-shown");
      }
    };

    onMounted(() => {
      if (props.programmatic) {
        isActive.value = true;
        document.addEventListener("keyup", keyUp);
      }
    });

    onUnmounted(() => {
      document.removeEventListener("keyup", keyUp);
    });

    watch(
      () => props.active,
      () => {
        isActive.value = props.active;
      }
    );

    watch(isActive, () => {
      if (isActive.value) {
        disableScroll();
      } else {
        enableScroll();
      }
    });

    return {
      isActive,
      bgStyle,
      hide,
      cancel,
    };
  },
  components: Loaders,
});
</script>

