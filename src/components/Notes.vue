<template>
  <div class="notes">
    <ul class="notes-list">
      <Note
        v-for="note of notes"
        :key="note.id"
        :note="note"
        :onNoteDelete="onNoteDelete"
        :onEdit="onEdit"
      />
    </ul>
  </div>
</template>

<script>
  import Note from './Note';
  export default {
    name: 'Notes',
    props: ['notes', 'onNoteDelete', 'onEdit'],
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
</style>