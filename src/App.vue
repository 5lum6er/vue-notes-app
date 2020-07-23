<template>
  <div id="app" class="app">
    <ModalConfirmDelete :onConfirm="onConfirm" v-show="modalIsShown" />
    <h1 class="app__title">Notes</h1>
    <NewNote :onAdd="onAdd" />
    <div class="temp">
      <!-- <Notes
        :onDelete="onDelete"
        :notes="notes"
        :onEdit="onEdit"
      />
      <NoteDetails :onDelete="onDelete" :selectedNote="selectedNote" /> -->
      <router-view
        :onDelete="onDelete"
        :selectedNote="selectedNote"
        :notes="notes"
        :onEdit="onEdit"
      ></router-view>
    </div>
  </div>
</template>

<script>
  import NewNote from './components/NewNote';
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
      // Notes,
      NewNote,
      ModalConfirmDelete,
      // NoteDetails
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
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1},
              // {title: "Todo 1", completed: false, id: 1}
            ],
          },
          ...this.notes,
        ];
        localStorage.setItem('notes', JSON.stringify(this.notes));
      },
      onDelete() {
        this.deletingItemId = event.target.value;
        this.showModal();   
      },
      showModal() {
        this.modalIsShown = true;
      },
      onConfirm() {
        const id = this.deletingItemId;

        if (event.target.value === 'ok') {
          this.notes = [...this.notes].filter(note => note.id !== +id);
          localStorage.setItem('notes', JSON.stringify(this.notes));
        }

        this.modalIsShown = false;
      },
      onEdit(id) {
        const selected = this.notes.find(note => note.id === id);

        this.selectedNote = selected;
        this.$router.push('/details/' + id);
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
.temp {
 display: flex;
}

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
</style>
