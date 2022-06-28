<template>
      <Header />
      <FormAddTodo @add-todo="addTodo" />
      <div class="todoList">
            <div class="container py-4">
                  <div class="d-flex flex-column align-items-center">
                        <ToDoList
                              @editTodo="editTodo"
                              @deleteTodo="deleteTodo"
                              :todosData="todosData"
                        />
                  </div>
            </div>
      </div>
</template>

<script>
import Header from "./components/Header.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
import ToDoList from "./components/ToDoList.vue";
import todoApi from "./api/todo.js";

export default {
      components: { Header, FormAddTodo, ToDoList },
      data() {
            return {
                  todosData: [],
            };
      },
      created() {
            this.getTodoData();
      },
      methods: {
            addTodo(todoText) {
                  let todoData = {
                        time: Date.now(),
                        done: false,
                        text: todoText,
                  };
                  todoApi
                        .post("/todos.json", todoData)
                        .then(() => {
                              this.getTodoData();
                        })
                        .catch((error) => {
                              console.error(error);
                        });
            },
            deleteTodo(todoKey) {
                  console.log(todoKey);
                  todoApi
                        .delete(`/todos/${todoKey}.json`)
                        .then(() => {
                              this.getTodoData();
                        })
                        .catch((error) => {
                              console.error(error);
                        });
            },
            editTodo(todosItem, editTodoText) {
                  console.log(todosItem, editTodoText);
                  todoApi
                        .put(`/todos/${todosItem.key}.json`, {
                              done: todosItem.done,
                              time: todosItem.time,
                              text: editTodoText,
                        })
                        .then(() => {
                              this.getTodoData();
                        })
                        .catch((error) => {
                              console.error(error);
                        });
            },
            getTodoData() {
                  todoApi
                        .get("/todos.json")
                        .then(({ data }) => {
                              if (data) {
                                    let todos = Object.entries(data).map(([key, value]) => {
                                          return {
                                                key,
                                                ...value,
                                          };
                                    });
                                    this.todosData = todos;
                                    console.log(todos);
                              } else {
                                    this.todosData = [];
                              }
                        })
                        .catch((error) => {
                              console.error(error);
                        });
            },
      },
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
