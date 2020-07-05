import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/store/index'
import DealList from '@/components/DealItems/DealList.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('DealList', () => {
  let store, wrapper

  beforeEach(() => {
    store = new Vuex.Store({ state })
    wrapper = shallowMount(DealList, { store })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
