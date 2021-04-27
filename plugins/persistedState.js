import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'garcol-todo',
    storage: window.localStorage,
    // paths: ['todo'] // all module todo state
    paths: ['todo.name', 'todo.items']
  })(store)
}