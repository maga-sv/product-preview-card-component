<script setup>
import Card from "./components/Card/Card.vue";
</script>

<template>
  <main>
    <section class="products">
      <div class="container">
          <Card />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}


</style>
