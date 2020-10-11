import { shallowMount } from "@vue/test-utils"
import StartPage from "@/pages/index.vue"

describe("StartPage", () => {
    it("mounts the vue instance", () => {
        const wrapper = shallowMount(StartPage, {
            stubs: ['b-container', 'b-button']
        })

        expect(wrapper.find('.container').exists()).toBe(true)
    })
})
