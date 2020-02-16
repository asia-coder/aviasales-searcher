<template>
  <div class="tickets-list">
    <Ticket v-for="(ticket, index) in getTickets" :key="index" v-bind:ticket="ticket"></Ticket>
  </div>
</template>

<script>
  import Ticket from './Ticket'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'TicketsList',
    components: {
      Ticket
    },
    methods: {
      ...mapActions(['requestTickets', 'requestSearchId'])
    },
    computed: {
      ...mapGetters(['getTickets', 'getSearchId'])
    },
    async mounted() {
      await this.requestSearchId()

      if (this.getSearchId) {
        this.requestTickets(this.getSearchId)
      }
    }
  }
</script>

<style>
  .tickets-list {

  }
</style>
