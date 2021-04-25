export default {
  SET_NAME(state, name) {
    state.name = name;
  },

  ADD_ITEM(state, item) {
    state.items.push(item);
  },

  DELETE_ITEM(state, index) {
    index >= 0 && index < state.items.length && state.items.splice(index, 1);
  }

}