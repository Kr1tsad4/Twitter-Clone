<script setup>
import { computed } from "vue";

const props = defineProps({
  formType: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  modelValue: {
    required: true,
  },
  placeholder: {
    type: String,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const inputClass = computed(() => {
  if (props.formType === "signin") {
    return "input-style pl-2 w-[290px] border border-[rgba(178,185,193,0.4)] rounded-sm";
  }
  if (props.formType === "signup") {
    return "input-style pl-2 w-[450px]";
  }
  if (props.disable) {
    return "input-style pl-2 w-[430px] border border-[rgba(178,185,193,0.4)] text-[rgba(178,185,193,0.4)] rounded-sm";
  }
  return "input-style pl-2 w-[430px]";
});
</script>

<template>
  <div>
    <input
      :type="props.type"
      :class="inputClass"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="props.disable"
    />
  </div>
</template>

<style scoped>
.input-style {
  border-width: 2px;
  border-color: rgba(77, 86, 96, 0.4);
  height: 3.75rem;
  margin-top: 1.75rem;
  border-radius: 0.125rem;
  outline: none;
}

.input-style:focus {
  border-color: #3b82f6;
  outline: none;
}
</style>
