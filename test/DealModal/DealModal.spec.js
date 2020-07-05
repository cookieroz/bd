import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { actions, getters, mutations, state } from '@/store/index'
import { deal } from '@/test/MockData/MockData'
import DealModal from '@/components/DealModal/DealModal.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const factory = (store) => {
  return mount(DealModal, { store })
}

describe('DealModal', () => {
  let store, wrapper

  beforeEach(() => {
    store = new Vuex.Store({ actions, getters, mutations, state })
    wrapper = factory(store)
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  describe('with no selectedDeal', () => {
    test('modal is not displayed', () => {
      expect(wrapper.find('.modal').exists()).toBe(false)
    })
  })

  describe('with selectedDeal', () => {
    beforeEach(() => {
      const localState = { ...state, selectedDeal: deal }
      store = new Vuex.Store({ actions, getters, mutations, state: localState })
      wrapper = factory(store)
    })

    test('modal is displayed', () => {
      expect(wrapper.find('.modal').exists()).toBe(true)
    })

    test('onCloseModal method sets selectedDeal to empty', () => {
      wrapper.vm.onCloseModal()
      expect(store.state.selectedDeal).toEqual({})
    })
  })
})
