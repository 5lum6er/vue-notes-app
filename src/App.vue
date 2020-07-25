<template>
  <div id="app" class="app">
    <ModalConfirmDelete :onConfirm="onConfirm" v-show="modalIsShown" />
    <h1 class="app__title">Notes</h1>
    <router-view name="add" :onAdd="onAdd"></router-view> 
    <router-view
      :onNoteDelete="onNoteDelete"
      :onCancelChanges="onCancelChanges"
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
        selectedNote: {},
        modalAction: ''
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
            todos: []
          },
          ...this.notes,
        ];
        localStorage.setItem('notes', JSON.stringify(this.notes));
      },

      showModal() {
        this.modalIsShown = true;
      },

      onNoteDelete() {
        this.deletingItemId = event.target.value;
        this.modalAction = 'delete';
        this.showModal();
      },

      onCancelChanges() {
        this.modalAction = 'cancel changes';
        this.showModal();
      },

      onConfirm() {
        const id = this.deletingItemId;

        if (event.target.value === 'ok' && this.modalAction === 'delete') {
          this.notes = this.notes.filter(note => note.id !== +id);
          localStorage.setItem('notes', JSON.stringify(this.notes));

          if(this.$route.path  !== '/vue-notes-app/'){
            this.$router.push('/vue-notes-app/');
          }
        } else if (event.target.value === 'ok' && this.modalAction === 'cancel changes') {
          this.$router.back();
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
