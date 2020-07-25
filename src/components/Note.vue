<template>
  <div class="note">
    <li class="note__item"> 
      <div class="note__header">
        <p class="note__title">
          <span>
            &#8801;
          </span>
            {{note.title}}
        </p>
        <button
          type="button"
          class="note__btn btn-edit pencil-icon"
          @click="onEdit(note.id)"
        >
          &#9998;
        </button>
      </div>
      <div class="note__body">
        <p
          class="note__empty-todos"
          v-show="note.todos.length === 0"
        >
          Press <span class="pencil-icon">&#9998;</span> to add new todo
        </p>
        <ul
          v-show="note.todos.length !== 0"
          class="note__short-todos"
        >
          <li
            v-for="todo of note.todos.filter((todo, i) => i < 3)"
            :key="todo.id"
          >
            {{todo.completed ? `&#10004;` : `&#9675;`}} {{todo.title}}
          </li>
        </ul>
      </div>
      <div class="note__footer">
        <p class="note__date">{{note.createAt}}</p>
        <button
          class="note__btn btn-close"
          :value="note.id"
          @click="onNoteDelete()"
        >
          &#128465;
          <!-- &#10005; -->
        </button>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: "Note",
    props: [ 'note', 'onNoteDelete', 'onEdit' ],
  }
</script>

<style>
  .note {
    margin-bottom: 3px;
    padding: 15px;
    border: 2px solid black;
    border-radius: 5px;

    text-align: left;
  }

  .note__header {
    display: flex;
    justify-content: space-between;
  }

  .note__title {
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  }

  .note__btn {
    padding: 5px;
    background: none;
    border-radius: 5px;
    cursor: pointer;

    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 2px;
  }

  .pencil-icon {
    display: inline-block;
    transform: rotateY(180deg);
  }

  .btn-edit {
    border: none;
    font-size: 30px;
  }

  .note__empty-todos {
    margin: 0;

    color: rgb(146, 146, 146);
    font-size: 16px;
    text-align: center;
    letter-spacing: 2px;
  }

  .note__short-todos {
    list-style: none;
  }

  .note__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .note__date {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #aeaeae;
  }
  
  .btn-close {
    border: none;
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
</style>