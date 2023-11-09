<template>
    <div>
      <div>
        <label for="sort">Sort By:</label>
        <select id="sort" v-model="sortBy">
          <option value="subject">Subject</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
          <option value="spaces">Spaces</option>
        </select>
        <select v-model="sortOrder">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
  
      <div v-for="lesson in sortedLessons" :key="lesson.id">
        <div class="lesson">
          <p>Subject: {{ lesson.subject }}</p>
          <p>Location: {{ lesson.location }}</p>
          <p>Price: ${{ lesson.price }}</p>
          <p>Spaces: {{ lesson.spaces }}</p>
          <button @click="addToCart(lesson)" :disabled="lesson.spaces === 0">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['lessons'],
    data() {
      return {
        sortBy: 'subject',
        sortOrder: 'asc',
      };
    },
    computed: {
      sortedLessons() {
        return this.lessons.slice().sort((a, b) => {
          const order = this.sortOrder === 'asc' ? 1 : -1;
          return order * (a[this.sortBy] - b[this.sortBy]);
        });
      },
    },
    methods: {
      addToCart(lesson) {
        if (lesson.spaces > 0) {
          lesson.spaces--;
          // Implement cart functionality
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add CSS styles here for the LessonList component */
  .lesson {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
  }
  </style>
  