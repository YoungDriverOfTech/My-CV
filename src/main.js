// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueI18n from 'vue-i18n';
import messages from './lang/LanguageMessages'

Vue.config.productionTip = false
Vue.use(ElementUI);

// internationalize
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // set zone
  messages: messages, // set zone messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
