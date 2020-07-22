<template>
  <div class="todo">
    <li>
      <span>{{todo.title}}</span>
    </li>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    props: [ 'todo' ],
  }
</script>

<style scoped>
</style>
