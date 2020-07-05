import { shallowMount } from '@vue/test-utils'
import DealHeadline from '@/components/DealItems/DealHeadline.vue'

describe('DealHeadline', () => {
  const headline = 'deal headline'
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DealHeadline, {
      propsData: { headline },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('expect headline text to show', () => {
    expect(wrapper.find('.deal__headline').text()).toBe(headline)
  })

  test('is a link when dealLink is provided', async () => {
    wrapper.setProps({ dealLink: '"https://www.bd.com/go/p/454819"' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('a').exists()).toBe(true)
  })
})
