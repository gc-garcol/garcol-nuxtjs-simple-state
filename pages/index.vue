<template>
  <div class="home-container">
    <h1>{{name}}</h1>
    <input type="text" v-model="name">
    <button @click="addItem({index: items.length + 1})">Add</button>
    <button @click="deleteItem(items.length - 1)">Delete</button>
    <item class="item" v-for="(item, index) in items" 
      :key="index" 
      :item="item"
    >
    </item>
  </div>
</template>

<script>
import Item from "@/components/board/Item.vue";
import {mapGetters, mapActions, mapState} from "vuex";

export default {
  components: {Item},
  
  computed: {
    name: {
      get() {
        return this.todoName();
      },
      set(value) {
        this.setName(value);
      }
    },
    items: {
      get() {
        return this.todoItems();
      },
      set(item) {
        this.setItem(item);
      } 
    }
  },

  methods: {
    ...mapActions('todo', ['setName', 'addItem', 'deleteItem']),
    ...mapGetters('todo', ['todoName', 'todoItems'])
  }
}
</script>
<style>
.home-container .item {
  margin-top: 8px;
}

.home-container .item:nth-child(2n) {
  background-color: red;
}

.home-container .item:nth-child(2n + 1) {
  background-color: green;
}

</style>
