
import loginBlock from "./loginBlock.vue"
import {shallowMount} from "@vue/test-utils"

it("сохраняет структуру", async () => {
    const component = shallowMount(loginBlock);

    expect(component.element).toMatchSnapshot();

});



