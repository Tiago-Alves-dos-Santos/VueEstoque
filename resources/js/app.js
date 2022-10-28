// require('./bootstrap');

window.Vue = require('vue').default;
import vuetify from './vuetify';
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
//spa
import { Link } from '@inertiajs/inertia-vue'


InertiaProgress.init()


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Link', Link);


 createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
      Vue.use(plugin)
  
      new Vue({
        vuetify,
        render: h => h(App, props),
      }).$mount(el)
    },
  })
