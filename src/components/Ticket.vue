<template>
  <div class="ticket">
    <div class="ticket-top">
      <div class="flight-price">
        {{ ticket.price | currency('&#8381;', 0,
                          {spaceBetweenAmountAndSymbol: true, thousandsSeparator: ' ', symbolOnLeft: false }) }}
      </div>
      <div class="flight-air-logo">
        <img :src="'http://pics.avs.io/99/36/' + ticket.carrier + '.png'" alt="">
      </div>
    </div>
    <div class="ticket-bottom">
      <div v-for="(segment, index) in ticket.segments" :key="index" class="flight">
        <div class="flight-col">
          <div class="flight-col-title">{{ segment.origin }} - {{ segment.destination }}</div>
          <div class="flight-col-value">
            {{ getStartDate(segment.date) }} - {{ getEndDate(segment.date, segment.duration) }}
          </div>
        </div>
        <div class="flight-col">
          <div class="flight-col-title">в пути</div>
          <div class="flight-col-value">{{ getDurationTime(segment.date, segment.duration) }}</div>
        </div>
        <div class="flight-col">
          <div class="flight-col-title" v-if="segment.stops.length > 0">{{ segment.stops.length }} пересадки</div>
          <div class="flight-col-title" v-else>Без пересадки</div>
          <div class="flight-col-value">{{ segment.stops.join(', ') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'


  export default {
    name: 'Ticket',
    props: ['ticket'],
    methods: {
      getStartDate: (date) => {
        return moment(date).format('HH:mm')
      },

      getEndDate: (date, minutes) => {
        return moment(date).add(minutes, 'minutes').format('HH:mm')
      },

      getDurationTime: (date, minutes) => {
        const startDate = moment(date)
        const endDate = moment(date).add(minutes, 'minutes')
        const diff = endDate.diff(startDate, 'minutes')
        const hours = parseInt(diff / 60)
        let minut = diff % 60

        if (minut < 10) {
          minut = '0' + minut;
        }

        return hours + 'ч ' + minut + 'м'
      }
    }
  }
</script>

<style>
  .ticket {
    padding: 18px 20px 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background: #fff;
    margin-bottom: 20px;
  }

  .ticket-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .flight-price {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196F3;
  }

  .flight-air-logo {
    width: 110px;
  }

  .ticket-bottom .flight {
    display: flex;
    justify-content: space-between;
  }

  .ticket-bottom .flight:not(:last-child) {
    margin-bottom: 17px;
  }

  .flight-col {
    width: 110px;
  }

  .flight-col-title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #A0B0B9;
  }

  .flight-col-value {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
  }

</style>
