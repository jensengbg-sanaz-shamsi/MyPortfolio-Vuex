import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTheContent: false,
    workContent: false,
    educationContent: false,
    factsContent: false,
    contactCtx: false,
    skillsCtx: false
  },
  mutations: {
    showContent(state) {
      state.showTheContent = !state.showTheContent
    },
    showWorkContent(state) {
      state.workContent = !state.workContent
    },
    showEducation(state) {
      state.educationContent = !state.educationContent
    },
    showFacts(state) {
      state.factsContent = !state.factsContent
    },
    showContact(state) {
      state.contactCtx =!state.contactCtx
    },
    showSkills(state) {
      state.skillsCtx = !state.skillsCtx
    }
  }
})
