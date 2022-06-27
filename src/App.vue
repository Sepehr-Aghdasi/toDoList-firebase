<template>
      <Header />
      <FormAddTodo />
      <ToDoList />
</template>

<script>
import Header from "./components/Header.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
      components: { Header, FormAddTodo, ToDoList },
};
</script>

<style>
* {
      margin: 0;
      padding: 0;
      outline: none;
      text-decoration: none;
      list-style-type: none;
      box-sizing: border-box;
      text-transform: capitalize !important;
}
#app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
}
</style>
