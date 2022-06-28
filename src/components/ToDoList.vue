<template>
      <div class="col-6">
            <Todo v-for="(item, index) in todosData" :key="index" :todosItem="item" />
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
};
</script>

<style></style>
