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
          class="note__btn btn-save"
          type="button"
          @click="onSave(tempNote)"
        >
          SAVE
        </button>
      </div>
      <div class="note__body">
        <span v-show="tempNote.todos.length" class="note__hint">Double click on the one of todos to change it</span>
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
        <div class="note__actions">
          <button
            class="note__btn btn-remove-changes"
            type="button"
            @click="onRemoveChanges"
          >
            Remove changes
          </button>
          <button
            class="note__btn btn-cancel"
            type="button"
            @click="onCancelChanges"
          >
            Cancel
          </button>
          <button
            class="note__btn btn-close"
            :value="selectedNote.id"
            @click="onNoteDelete"
          >
            &#128465;
          </button>
        </div>
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
      'onCancelChanges'
    ],
    data() {
      return {
        tempNote: JSON.parse(JSON.stringify(this.selectedNote)),
      };
    },
    components: { Todos, NewTodo },

    methods: {
      onTodoAdd(title) {
        const valid = title.replace(/\s/g, ' ').trimLeft();

        if (valid) {
          this.tempNote.todos = [
            ...this.tempNote.todos,
            {
              title: valid,
              completed: false,
              id: Date.now()
            }
          ];
        }
      },

      onTodoDelete(id) {
        this.tempNote.todos = this.tempNote.todos.filter(todo => todo.id !== id);
      },

      onRemoveChanges() {
        this.tempNote = JSON.parse(JSON.stringify(this.selectedNote));
      }
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

  .note__actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-cancel,
  .btn-remove-changes {
    margin-right: 10px;
  }
</style>
