import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit("ADD_TASK", { text: task });
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
