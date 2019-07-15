import Vue from "vue";
import VueBubbler from "vue-bubbler";
import Vuex from "vuex";
import { action } from "@storybook/addon-actions";
import { addDecorator, configure } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import requireContext from 'require-context.macro';



Vue.use(Vuex);
Vue.use(VueBubbler);
addDecorator(withInfo); 
addDecorator(withNotes);

const req = require.context('../stories', true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
  require('../stories/index.stories');
};

configure(loadStories, module);
