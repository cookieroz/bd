import { shallowMount } from '@vue/test-utils'
import DealPrices from '@/components/DealItems/DealPrices.vue'

describe('DealPrices', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DealPrices)
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  describe('dealPriceEndText computed', () => {
    test('when shippingCost is 0', async () => {
      wrapper.setProps({ shippingCost: '0.00' })
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.dealPriceEndText).toBe('')
    })

    test('when shippingCost is more than 0', async () => {
      wrapper.setProps({ shippingCost: '3.00' })
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.dealPriceEndText).toBe(' including shipping')
    })
  })
})
