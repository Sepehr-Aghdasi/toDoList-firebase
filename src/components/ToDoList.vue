<template>
      <div class="col-6">
            <Todo
                  @deleteTodo="deleteTodo"
                  @editTodo="editTodo"
                  v-for="(item, index) in todosData"
                  :key="index"
                  :todosItem="item"
            />
      </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
      components: { Todo },
      props: {
            todosData: {
                  type: Array,
                  required: true,
            },
      },
      methods: {
            deleteTodo(todoKey) {
                  this.$emit("deleteTodo", todoKey);
            },
            editTodo(todosItem, editTodoText) {
                  this.$emit("editTodo", todosItem, editTodoText);
            },
      },
};
</script>

<style></style>
