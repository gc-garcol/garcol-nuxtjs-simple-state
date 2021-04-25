export default {
  setName({commit}, name) {
    commit('SET_NAME', name);
  },

  addItem({commit}, item) {
    commit('ADD_ITEM', item);
  },

  deleteItem({commit}, index) {
    commit('DELETE_ITEM', index);
  }
}