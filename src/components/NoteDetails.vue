<template>
  <div class="details">
      <div class="details__header">
        <p class="details__title">
          <span>
            &#8801;
          </span>
            {{selectedNote.title}}
        </p>
        <button
          type="button"
          class="details__btn btn-edit pencil-icon"
        >
          &#9998;
        </button>
      </div>
      <!-- <div class="details__body">
        <p
          class="details__empty-todos"
          v-show="todos.length === 0"
        >
          Press <span class="pencil-icon">&#9998;</span> to add new todo
        </p>
        <Todos
          v-show="todos.length !== 0"
          :todos="[...todos].filter((todo, i) => i < 3)"
        />
      </div> -->
      <div class="details__footer">
        <p class="details__date">{{selectedNote.createAt}}</p>
        <button
          class="details__btn btn-close"
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
