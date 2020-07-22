<template>
  <div class="note">
    <li class="note__item"> 
      <div class="note__header">
        <p class="note__title">{{note.title}}</p>
        <button class="note__btn btn-edit">	&#9998;</button>
      </div>
      <div class="note__body">
        <Todos :todos="todos"/>
      </div>
      <div class="note__footer">
        <p class="note__date">{{note.createAt}}</p>
        <button
          class="note__btn btn-close"
          :value="value"
          @click="onDelete()"
        >
          &#128465;
          <!-- &#10005; -->
        </button>
      </div>
    </li>
  </div>
</template>

<script>
  import Todos from './Todos';

  export default {
    name: "Note",
    props: [ 'note', 'onDelete', 'value', 'todos' ],
    components: { Todos }
  }
</script>

<style scoped>
  .note {
    margin-bottom: 3px;
    padding: 15px;
    border: 2px solid black;
    border-radius: 5px;

    text-align: left;
  }

  .note:hover .note__btn {
    opacity: 1;
    transform: rotateY(180deg);
    transition: 1s;
  }

  .note__header {
    display: flex;
    justify-content: space-between;
  }

  .note__title {
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  }

  .note__btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  .btn-edit {
    font-size: 30px;
    transform: rotateY(180deg);
  }

  .note__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .note__date {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #aeaeae;
  }
  
  .btn-close {
    opacity: 0;

    color: red;
    font-size: 30px;
    font-weight: bold;
  }
</style>