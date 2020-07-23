<template>
  <div class="new-note">
    <input
      class="new-note__field"
      type="text"
      placeholder="Type and press Enter to create new note"
      v-model="title"
      @keyup.enter="handleSubmit"
    />
  </div>
</template>

<script>
export default {
  name: "NewNote",
  props: ["onAdd"],
  data() {
    return {
      title: '',
    };
  },
  methods: {
    handleSubmit() {
      const title = this.title.replace(/\s/g, ' ').trimLeft();

      if (title) {
        this.onAdd(this.title);
      }
      
      this.title = '';
    }
  },
}
</script>

<style scoped>
  .new-note {
    max-width: 400px;
    margin: 0 auto 25px;
  }
  
  .new-note__field {
    padding: 10px 0 10px 10px;
    width: 100%;
    height: 50px;

    box-sizing: border-box;
    border: 2px solid black;

    font-size: 20px;
    font-weight: bold;
  }

  .new-note__field::placeholder {
    font-size: 20px;
    font-weight: bold;
    color: #aeaeae;
  }
</style>
