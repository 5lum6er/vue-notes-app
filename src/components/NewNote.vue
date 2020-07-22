<template>
  <div class="new-note">
    <input type="text" v-model="title" @keyup.enter="handleSubmit" />
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