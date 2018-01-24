import Button1 from './plugin/vue-element'
import Button2 from './plugin/vue-element2'

const components = [
    Button1,
    Button2
]

const install = function(Vue, opts = {}) {
    console.log('install from plugin');
    components.map(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install
 }

