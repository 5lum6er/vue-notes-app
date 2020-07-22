<template>
  <div class="notes">
    <ul class="notes-list">
      <Note
        v-for="note of notes"
        :key="note.id"
        :note="note"
        :onDelete="onDelete"
        :value="note.id"
        :todos="note.todos"
      />
    </ul>
  </div>
</template>

<script>
  import Note from './Note';
  export default {
    name: 'Notes',
    props: ['notes', 'onDelete'],
    components: { Note, },
  }
</script>

<style scoped>
  .notes {
    max-width: 400px;
    height: 500px;
    margin: 0 auto;
    overflow-y: scroll;
  }

  .notes-list {
    margin: 0;
    padding: 0;
    list-style: none;
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