<template>
  <div class="note">
    <li> 
      <div class="note__header">
        <div class="note__info">
          <p class="note__title">{{note.title}}</p>
          <p class="note__date">{{note.createAt}}</p>
        </div>
        <button
          class="note__btn btn-close"
          :value="value"
          @click="onDelete()"
        >
          &#10005;
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: [ 'note', 'onDelete', 'value' ], 
}
</script>

<style scoped>
  .note {
    text-align: left;
  }

  .note:hover .note__btn {
    display: block;
    transform: rotate(360deg);
  }

  .note__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .note__title {
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  }

  .note__date {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #aeaeae;
  }
  
  .note__btn {
    background: none;
    border: none;

    display: none;

    color: red;
    font-size: 14px;
    font-weight: bold;

    transition: 0.5s;
  }
</style>