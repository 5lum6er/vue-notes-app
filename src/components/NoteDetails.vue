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
          v-model="tempNote.title"
        />
        <button
          type="button"
          @click="onSave(tempNote)"
        >
          SAVE
        </button>
      </div>
      <div class="note__body">
        <span class="note__hint">Double click on the one of todos to change it</span>
        <Todos
          v-show="tempNote.todos.length"
          :todos="tempNote.todos"
          :onTodoAdd="onTodoAdd"
          :onTodoDelete="onTodoDelete"
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
          @click="() => {
            onNoteDelete();
            this.$router.back();
            }"
        >
          &#128465;
        </button>
      </div>
    
  </div>
</template>

<script>
  import Todos from './Todos';
  import NewTodo from './NewTodo';

  export default {
    name: "NoteDetails",
    props: [
      'selectedNote',
      'onNoteDelete',
      'onSave',
    ],
    data() {
      return {
        tempNote: JSON.parse(JSON.stringify(this.selectedNote)),
      };
    },
    components: { Todos, NewTodo },

    methods: {
      onTodoAdd(title) {
        this.tempNote.todos = [
          ...this.tempNote.todos,
          {
            title,
            completed: false,
            id: Date.now()
          }
        ];
      },

      onTodoDelete(id) {
        this.tempNote.todos = this.tempNote.todos.filter(todo => todo.id !== id);
      },
    }
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

  .note__hint {
    font-size: 14px;
    color: #aeaeae;
    padding: 5px 0;
  }
</style>
