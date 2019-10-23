import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Accueil', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {stubs: {
        BButton: '<a>button</a>'
    }})
    expect(wrapper.html()).toContain('button')
  })
})
