import Button1 from './plugin/vue-element'
import Button2 from './plugin/vue-element2'
import Vue from 'vue'

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

module.exports = {
    install
}