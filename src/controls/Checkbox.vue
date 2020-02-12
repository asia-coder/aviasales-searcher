<template>
  <label class="avs-checkbox">
    <input class="avs-checkbox__value" type="checkbox" :value="value">
    <span class="avs-checkbox__text">{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: 'CheckboxItem',
    props: ['value', 'label']
  }
</script>

<style scoped>
  .avs-checkbox {
    cursor: pointer;
  }

  .avs-checkbox__value {
    display: none;
  }

  .avs-checkbox__text {
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;

    padding-left: 35px;
  }

  .avs-checkbox__text:before {
    content: "";
    border: 1px solid #9ABBCE;
    box-sizing: border-box;
    border-radius: 2px;
    position: absolute;
    left: 0;
    top: -1px;
    width: 20px;
    height: 20px;
  }

  .avs-checkbox__text:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 2px;
    width: 14px;
    height: 14px;
    border-radius: 1px;
    background: #2196F3;
    opacity: 0;
    visibility: hidden;
  }

  .avs-checkbox:hover .avs-checkbox__text:before {
    border-color: #2196F3;
  }

  .avs-checkbox__value:checked + .avs-checkbox__text:after {
    visibility: visible;
    opacity: 1;
  }

  .avs-checkbox__value:checked + .avs-checkbox__text:before {
    border-color: #2196F3;
  }

</style>
