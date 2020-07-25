<template>
  <div id="app" class="app">
    <ModalConfirmDelete :onConfirm="onConfirm" v-show="modalIsShown" />
    <h1 class="app__title">Notes</h1>
    <!-- <NewNote :onAdd="onAdd" /> -->
    <router-view name="a" :onAdd="onAdd"></router-view> 
    <router-view
      :onNoteDelete="onNoteDelete"
      :selectedNote="selectedNote"
      :notes="notes"
      :onEdit="onEdit"
      :onSave="onSave"
    ></router-view>
  </div>
</template>

<script>
  import ModalConfirmDelete from './components/ModalConfirmDelete';

  export default {
    name: 'App',

    data() {
      return {
        notes: [],
        modalIsShown: false,
        confirmDelete: false,
        deletingItemId: null,
        selectedNote: {}
      }
    },

    components: {
      ModalConfirmDelete,
    },

    methods: {
      onAdd(title) {
        this.notes = [
          {
            title,
            id: Date.now(),
            createAt: new Date().toLocaleString(),
            todos: [
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 2},
              // {title: "Todo 1", completed: false, id: 3},
              // {title: "Todo 1", completed: false, id: 4},
              // {title: "Todo 1", completed: false, id: 5},
            ],
          },
          ...this.notes,
        ];
        localStorage.setItem('notes', JSON.stringify(this.notes));
      },

      onNoteDelete() {
        this.deletingItemId = event.target.value;
        this.showModal();
      },

      showModal() {
        this.modalIsShown = true;
      },

      onConfirm() {
        const id = this.deletingItemId;

        if (event.target.value === 'ok') {
          this.notes = this.notes.filter(note => note.id !== +id);
          localStorage.setItem('notes', JSON.stringify(this.notes));
        }

        this.modalIsShown = false;
      },

      onEdit(id) {
        const selected = this.notes.find(note => note.id === id);

        this.selectedNote = selected;
        this.$router.push('/details/' + id);
      },

      onSave(changedNote) {
        this.notes[this.notes.indexOf(this.selectedNote)] = changedNote;
        localStorage.setItem('notes', JSON.stringify(this.notes));
        this.$router.back();
      }
    },

    mounted() {
      if (localStorage.notes) {
        this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
      }
    },
  }
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__title {
  font-size: 100px;
}

::-webkit-scrollbar {
    width: 7px;
    height: 0;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    background-color: #666;
  }

  ::-webkit-scrollbar-track {
    background-color: #000;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #666;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-corner {
    background-color: #888;
  }

  ::-webkit-resizer {
    background-color: #666;
  }
</style>
