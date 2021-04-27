import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export default ({store}) => {
  createPersistedState({
    key: 'garcol-todo',
    // storage: window.sessionStorage, // storage in tab
    storage: window.localStorage, // storage in browser
    // paths: ['todo'] // all module todo state
    paths: ['todo.name', 'todo.items']
  })(store);

  createPersistedState({
    key: 'garcol-fake-auth',
    paths: ['todo.name'],
    
    storage: {
      getItem: (key) => {
        // See https://nuxtjs.org/guide/plugins/#using-process-flags
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie);
          return parsedCookies[key];
        } else {
          return Cookies.get(key);
        }
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        Cookies.set(key, value, {
          expires: 365,
          secure: false
        }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}