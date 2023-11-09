<template>
    <div>
      <lesson-list :lessons="lessons"></lesson-list>
    </div>
  </template>
  
  <script>
  import LessonList from './components/LessonList.vue';
  import { lessons } from './data/lessons.js';
  
  export default {
    components: {
      LessonList,
    },
    data() {
      return {
        lessons,
      };
    },
  };
  </script>
  