<template>
  <div class="modal__container">
    <div class="modal">
      <div class="modal__header">
        <h2>Are you shure you want to delete this note?</h2>
      </div>
      <div class="modal__footer">
        <button
          value="ok"
          class="modal__btn btn-ok"
          @click="onConfirm()"
        >
          OK
        </button>
        <button
          value="cancel"
          class="modal__btn btn-cancel"
          @click="onConfirm()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModalConfirmDelete",
    props: ["onConfirm"],
  }
</script>

<style>
  .modal__container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;

    background-color: rgba(0, 0, 0, 0.5)
  }

  .modal {
    max-width: 400px;
    padding: 25px;
    background-color: #fff;
    border: 2px solid rgb(84, 161, 250);
    border-radius: 20px;
  }

  .modal__footer {
    display: flex;
    justify-content: space-around;
  }

  .modal__btn {
    border: none;
    border-radius: 5px;
    width: 20%;
    height: 30px;
    cursor: pointer;
  }

  .btn-ok {
    background-color: rgb(36, 175, 36);
    color: #fff;
  }

  .btn-cancel {
    background-color: rgb(219, 55, 43);
    color: #fff;
  }
</style>