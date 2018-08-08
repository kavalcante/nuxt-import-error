import Vue from 'vue';

// Not working

// import Button from 'bootstrap-vue/es/components/button';
// import Modal from 'bootstrap-vue/es/components/modal';

// working
import Button from '../node_modules/bootstrap-vue/es/components/button';
import Modal from '../node_modules/bootstrap-vue/es/components/modal';

Vue.use(Button);
Vue.use(Modal);
