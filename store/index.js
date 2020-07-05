import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'

Vue.use(Vuex)

export const state = () => ({
  dealCount: 0,
  deals: [],
  error: '',
  selectedDeal: {},
})

export const actions = {
  CONFIGURE_DEALS({ commit }, { data }) {
    if (data && data.deals && data.deals.length) {
      commit('SET_DEALS', { deals: data.deals })
      commit('SET_DEAL_COUNT', { dealCount: data.count })
      commit('RESET_ERROR')
    } else {
      commit('SET_ERROR', { error: 'no deals available at this moment' })
    }
  },

  LOAD_DEALS({ commit, dispatch }) {
    const url = '/deals.json'
    axios
      .get(url)
      .then((response) => {
        dispatch('CONFIGURE_DEALS', { data: response.data })
      })
      .catch((error) => {
        commit('SET_ERROR', { error: `issue loading deals: ${error}` })
      })
  },

  UPDATE_SELECTED_DEAL({ commit }, { selectedDeal }) {
    commit('SET_SELECTED_DEAL', { selectedDeal })
  },
}

export const mutations = {
  RESET_ERROR(state) {
    state.error = ''
  },

  SET_DEAL_COUNT(state, { dealCount }) {
    state.dealCount = dealCount || 0
  },

  SET_DEALS(state, { deals }) {
    state.deals = deals || []
  },

  SET_ERROR(state, { error }) {
    state.error = error
  },

  SET_SELECTED_DEAL(state, { selectedDeal }) {
    state.selectedDeal = { ...selectedDeal } || {}
  },
}

export const getters = {
  hasSelectedDeal(state) {
    return Object.keys(state.selectedDeal).length > 0
  },
}

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
