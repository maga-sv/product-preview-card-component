<script setup>
import Card from "./components/Card/Card.vue";
import { useProductsStore } from "@/stores/products.js";

const productsStore = useProductsStore()

</script>

<template>
  <main>
    <section class="products">
      <div class="container">
          <Card v-for="(product, index) in productsStore?.products" :key="index" :product="product" />
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
