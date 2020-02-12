<template>
  <div class="ticket">
    <div class="ticket-top">
      <div class="flight-price">13 400</div>
      <div class="flight-air-logo">Logo air</div>
    </div>
    <div class="ticket-bottom">
      <div class="flight flight-to">

      </div>
      <div class="flight flight-back"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ticket',
  }
</script>

<style scoped>
  .ticket {
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background: #fff;
  }
</style>
