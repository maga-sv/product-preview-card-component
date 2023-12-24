<script setup>
import CartIcon from "@/assets/images/CartIcon.vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  product: null,
})

const added = () => {
  ElMessage({
    showClose: true,
    message: "Added to Cart",
    type: "success",
  });
};
</script>

<template>
  <div class="card">
    <div class="card__box">
      <img
        src="@/assets/images/image-product-desktop.jpg"
        alt=""
        class="card__box-img desktop-bg"
      />
      <img
        src="../../assets/images/image-product-mobile.jpg"
        alt=""
        class="card__box-img mobile-bg"
      />
    </div>

    <div class="card__info">
      <div class="card__info-type">{{ product?.category }}</div>

      <h3 class="card__info-title">{{ product?.name }}</h3>

      <div class="card__info-txt">
        {{ product?.info }}
      </div>

      <span class="card__info-price">
        ${{ (product?.price - (product?.price * product?.discount) + 0.01).toFixed(2) }}
        <span>${{ product?.price }}</span>
      </span>

      <button class="card__info-btn" :plain="true" @click="added">
        <CartIcon /> Add to Cart
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background: var(--baseColor);
  flex-wrap: wrap;

  &__box {
    max-width: 300px;
    width: 100%;
    overflow: hidden;

    @media (max-width: 636px) {
      height: 320px;
    }

    &-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    max-width: 300px;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    &-type {
      text-transform: uppercase;
      font-weight: 500;
      color: var(--secAccentColor);
      letter-spacing: 3px;

      @media (max-width: 636px) {
        font-size: 14px;
      }
    }

    &-title {
      font-size: 36px;
      color: var(--accentColor);
      font-family: "Fraunces", serif;
      font-weight: 700;

      @media (max-width: 636px) {
        font-size: 30px;
      }
    }

    &-txt {
      color: var(--secAccentColor);
      font-size: 14px;
    }

    &-price {
      font-family: "Fraunces", serif;
      color: var(--primaryColor);
      font-size: 32px;
      display: flex;
      align-items: center;
      gap: 15px;

      span {
        font-size: 16px;
        color: var(--secAccentColor);
        text-decoration: line-through;
      }
    }

    &-btn {
      cursor: pointer;
      border-radius: 10px;
      background: var(--primaryColor);
      border: 0;
      outline: 0;
      padding: 15px;
      color: var(--baseColor);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: 400ms;

      &:hover {
        background: hsl(159, 38%, 16%);
      }
    }
  }

  &__box,
  &__info {
    @media (max-width: 636px) {
      max-width: 100%;
    }
  }

  .mobile-bg {
    display: none;
    @media (max-width: 636px) {
      display: flex;
    }
  }

  .desktop-bg {
    @media (max-width: 636px) {
      display: none;
    }
  }
}
</style>
