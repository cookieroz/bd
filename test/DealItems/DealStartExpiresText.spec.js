import { shallowMount } from '@vue/test-utils'
import DealStartExpiresText from '@/components/DealItems/DealStartExpiresText.vue'

describe('DealStartExpiresText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DealStartExpiresText, {
      propsData: {
        expiresAt: '2022-09-05T09:16:00.000-04:00',
        startsAt: '2020-11-05T09:16:00.000-04:00',
      },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  describe('formatDateTime method', () => {
    test('when no value is passed', () => {
      expect(wrapper.vm.formatDateTime()).toEqual('')
    })

    test('when valid date value is passed', () => {
      expect(wrapper.vm.formatDateTime(wrapper.vm.expiresAt)).toEqual(
        '9/5/2022, 9:16:00 AM'
      )
    })
  })
})
