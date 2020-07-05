import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { actions, mutations, state } from '@/store/index'
import { deal } from '@/test/MockData/MockData'
import DealCard from '@/components/DealItems/DealCard.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('DealCard', () => {
  let store, wrapper

  beforeEach(() => {
    store = new Vuex.Store({ actions, mutations, state })
    wrapper = shallowMount(DealCard, {
      store,
      propsData: { deal },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('onCardClick sets selectedDeal', async () => {
    wrapper.find('.deal-card').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.state.deal).toBe(wrapper.vm.$data.deal)
  })
})
