<template>
  <div id="app">
    <ModalConfirmDelete :onConfirm="onConfirm" v-show="modalIsShown" />
    <h1>Notes</h1>
    <NewNote :onAdd="onAdd" />
    <Notes :onDelete="onDelete" :notes="notes"/>
  </div>
</template>

<script>
  import Notes from './components/Notes';
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
      }
    },
    components: {
      Notes,
      NewNote,
      ModalConfirmDelete,
    },
    methods: {
      onAdd(title) {
        this.notes = [
          ...this.notes,
          {
            title,
            id: Date.now(),
            createAt: new Date().toLocaleString(),
            todos: [],
          }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
