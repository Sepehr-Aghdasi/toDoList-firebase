<template>
      <div class="col-12 mb-2">
            <div
                  v-if="editMode === false"
                  class="d-flex justify-content-between align-items-center border rounded p-3"
            >
                  <div>
                        <span> {{ todosItem.text }} </span>
                  </div>
                  <div>
                        <button
                              @click="editMode = true"
                              type="button"
                              class="btn btn-info btn-sm text-white me-3"
                        >
                              edit
                        </button>
                        <button type="button" class="btn btn-danger btn-sm text-white">
                              delete
                        </button>
                  </div>
            </div>

            <div
                  v-else
                  class="d-flex justify-content-between align-items-center border rounded p-3"
            >
                  <div>
                        <input type="text" placeholder="Edit todo...." />
                  </div>
                  <div>
                        <button
                              @click="handleEdit"
                              type="button"
                              class="btn btn-success btn-sm px-4"
                        >
                              edit
                        </button>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      props: ["todosItem"],
      data() {
            return {
                  editMode: false,
            };
      },
      methods: {
            enableEdit() {
                  this.editMode = true;
            },
            handleEdit() {
                  this.editMode = false;
            },
      },
};
</script>

<style></style>
