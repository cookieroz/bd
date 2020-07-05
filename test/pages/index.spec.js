import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { actions, getters, state } from '@/store/index'
import Homepage from '@/pages/index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Homepage', () => {
  let store, wrapper

  beforeEach(() => {
    store = new Vuex.Store({ actions, getters, state })
    wrapper = mount(Homepage, { store })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
