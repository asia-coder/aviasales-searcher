import axios from 'axios'

const state = {
  searchId: '',
  tickets: [],
  isStop: false,
  stopFilter: [],
  priceFilter: 'min_price'
}


const getters = {
  getSearchId: state => {
    return state.searchId
  },

  getTickets: state => state.tickets,

  isStop: state => state.isStop,

  getFilterPrice: state => state.priceFilter
}

const actions = {
  requestSearchId: async ({ commit }) => {
    let response = await axios.get('https://front-test.beta.aviasales.ru/search')

    commit('setSearchId', response.data.searchId)
  },

  requestTickets: async ({ commit }, searchId) => {
    const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    commit('setTickets', { tickets: response.data.tickets, priceFilter: 'min_price', merge: true })
    commit('setIsStop', response.data.stop)
  },

  priceFilter: ({ commit }, value) => {
    commit('setPriceFilter', value)
  }
}

const mutations = {
  setSearchId: (state, searchId) => {
    state.searchId = searchId
  },
  setTickets: (state, tickets) => {

    if (tickets.priceFilter && tickets.priceFilter === 'min_price') {
      tickets.tickets = tickets.tickets.sort((a, b) => {
        return (a.price - b.price)
      });
    } else if (tickets.priceFilter && tickets.priceFilter === 'fast') {
      tickets.tickets = tickets.tickets.sort((a, b) => {
        return (a.segments[0].duration - b.segments[0].duration)
      });
    }

    if (tickets.merge) {
      state.tickets = state.tickets.concat(tickets.tickets)
    } else {
      state.tickets = tickets.tickets
    }
  },
  setIsStop: (state, isStop) => {
    state.isStop = Boolean(isStop)
  },
  setPriceFilter: (state, param) => {
    state.priceFilter = param
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
