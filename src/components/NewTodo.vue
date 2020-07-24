<template>
  <div>
    <input
      required
      class="note__add-todo"
      type="text"
      v-model="newTodoTitle"
      @keyup.enter="() => {
        onTodoAdd(newTodoTitle);
        newTodoTitle = ''
        }"
      placeholder="Type and Enter"
    />
  </div>
</template>

<script>
  export default {
    name: "NewTodo",
    props: [ 'onTodoAdd' ],
    data() {
      return {
        newTodoTitle: '',
      };
    }
  }
</script>

<style scoped>
  .note__add-todo {
    max-width: 300px;
    text-align: center;
  }
</style>