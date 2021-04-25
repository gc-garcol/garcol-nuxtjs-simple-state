<template>
  <div class="test-container">
    <h1>{{name}}</h1>
    <input type="text" v-model="name"> 
    <item></item>
  </div>
</template>

<script>
import Item from "@/components/board/Item.vue";
import {mapGetters, mapActions, mapState} from "vuex";

export default {
  components: {Item},

  async fetch() {
    await this.setName('garcol todo');
  },
  
  computed: {
    name: {
      get() {
        return this.todoName();
      },
      set(value) {
        this.setName(value);
      }
    }
  },

  methods: {
    ...mapActions('todo', ['setName']),
    ...mapGetters('todo', ['todoName'])
  }
}
</script>
<style>

</style>