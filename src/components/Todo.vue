<template>
  <div class="todo">
    <li class="todo__item">
      <input
        :id="`status_${todo.id}`"
        class="todo__status"
        type="checkbox"
        v-model="todo.completed"
      />
      <label :for="`status_${todo.id}`" class="todo__status-label"></label>
      <div class="todo__title" @dblclick="onEdit">
        <p
          class="todo__label"
          v-show="!isEditing"
        >
          {{changedTodoTitle}}
        </p>
        <input
          v-show="isEditing"
          required
          v-model="changedTodoTitle"
          class="todo__edit"
          type="text"
          @keyup.enter="onSave"
          @blur="onSave"
        />
      </div>
      <div class="todo__action">
        <button class="todo__btn btn-delete" type=button>
          &#10006;
        </button>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    props: [ 'todo' ],
    data() {
      return {
        changedTodoTitle: this.todo.title,
        isEditing: false
      };
    },
    methods: {
      onSave() {
        this.todo.title = this.changedTodoTitle;
        this.isEditing = false;
      },
      onEdit() {
        this.isEditing = true;
      }
    }
  }
</script>

<style scoped>
  .todo {
    padding: 10px;
  }
  .todo__item {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    align-items: center;
    font-size: 20px;
  }

  .todo__status {
    display: none;
  }

  .todo__status:checked ~ .todo__status-label {
    background-color: rgb(48, 197, 48);
  }

  .todo__status:checked ~ .todo__title .todo__edit {
    text-decoration: line-through;
  }

  .todo__status-label {
    display: block;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
  }

  .todo__title {
    width: 80%;
    border-bottom: 2px solid black;
  }

  .todo__label {
    margin: 0;
  }

  .todo__edit {
    width: 100%;

    border: none;
    font-size: 20px;
  }

  .todo__edit:focus {
    outline: none;
  }

  .todo__btn {
    border: none;
    background: none;

    font-size: 20px;
    cursor: pointer;
  }

  .btn-delete {
    color: red;
  }
</style>
