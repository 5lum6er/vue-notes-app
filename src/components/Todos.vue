<template>
  <div class="todos">
    <ul class="todo-list">
      <Todo
        v-for="todo of todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
  import Todo from './Todo';
  export default {
    name: 'Todos',
    props: ['todos'],
    components: { Todo, },
  }
</script>

<style scoped>
  .todos {
    width: 50%;
  }

  .todo-list {
    list-style: none;
    padding: 10px;
  }
</style>
