<template>
  <div class="notes">
    <ul class="notes-list">
      <Note
        v-for="note of notes"
        :key="note.id"
        :note="note"
        :onDelete="onDelete"
        :value="note.id"
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
</script>>

<style scoped>
  .notes {
    width: 50%;
    margin: 0 auto;
  }
  .notes-list {
    padding: 0;
    list-style: none;
  }
</style>