<template>
      <div class="d-flex flex-column py-5 g-3 align-items-center" style="background-color: #e9ecef">
            <div class="col-auto text-center">
                  <h1 class="h1 fw-bold">welcome!</h1>
                  <p class="fs-6 lead text-muted">to get started</p>
            </div>
            <div class="col-auto ">
                  <form class="d-flex" @click.prevent action="#">
                        <input
                              type="text"
                              class="form-control mx-2"
                              placeholder="I want to do...."
                        />
                        <button class="btn btn-primary mx-2">submit</button>
                  </form>
            </div>
      </div>
</template>

<script>
export default {};
</script>

<style></style>
