<template>
  <div class="note note__details details">
      <div class="note__header">
        <p class="note__title">
          <span>
            &#8801;
          </span>
            {{selectedNote.title}}
        </p>
        <button
          type="button"
          class="note__btn btn-edit pencil-icon"
        >
          &#9998;
        </button>
      </div>
      <div class="note__body">
        <!-- <p
          class="n__empty-todos"
          v-show="todos.length === 0"
        >
          Press <span class="pencil-icon">&#9998;</span> to add new todo
        </p> -->
        <!-- <Todos
          v-show="todos.length !== 0"
          :todos="selectedNote.todos"
        /> -->
      </div>
      <div class="note__footer">
        <p class="note__date">{{selectedNote.createAt}}</p>
        <button
          class="note__btn btn-close"
          :value="selectedNote.id"
          @click="onDelete()"
        >
          &#128465;
          <!-- &#10005; -->
        </button>
      </div>
    
  </div>
</template>

<script>
  export default {
    name: "NoteDetails",
    props: [ 'selectedNote', 'onDelete' ],
  }
</script>

<style scoped>
  
</style>
