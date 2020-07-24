<template>
  <div class="note note__details details">
      <div class="note__header">
        <p class="note__title">
          <span class="note__logo">
            &#8801;
          </span>
        </p>
        <input
          class="note__edit"
          type="text"
          v-model="newTitle"
        />
        <button
          type="button"
        >
          SAVE
        </button>
      </div>
      <div class="note__body">
        <Todos
          v-show="selectedNote.todos.length !== 0"
          :todos="selectedNote.todos"
          :onTodoAdd="onTodoAdd"
        />
        <NewTodo
          :onTodoAdd="onTodoAdd"
        />
        <p>ADD TODO</p>
      </div>
      <div class="note__footer">
        <p class="note__date">{{selectedNote.createAt}}</p>
        <button
          class="note__btn btn-close"
          :value="selectedNote.id"
          @click="onNoteDelete()"
        >
          &#128465;
          <!-- &#10005; -->
        </button>
      </div>
    
  </div>
</template>

<script>
  import Todos from './Todos';
  import NewTodo from './NewTodo';

  export default {
    name: "NoteDetails",
    props: [ 'selectedNote', 'onNoteDelete', 'onTodoAdd' ],
    data() {
      return {
        newTitle: this.selectedNote.title,
      };
    },
    components: { Todos, NewTodo },
  }
</script>

<style scoped>
  .note {
    max-width: 600px;
    margin: 0 auto;
  }

  .note__header {
    margin-bottom: 15px;
  }
  
  .note__logo {
    font-size: 40px;
  }

  .note__edit {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .note__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
