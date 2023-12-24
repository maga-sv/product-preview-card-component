<script setup>
import CartIcon from "@/assets/images/CartIcon.vue";
import { ElMessage } from "element-plus";

const open2 = () => {
  ElMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
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
        class="card__box-img"
      />
    </div>

    <div class="card__info">
      <div class="card__info-type">Perfume</div>

      <h3 class="card__info-title">Gabrielle Essence Eau De Parfum</h3>

      <div class="card__info-txt">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>

      <span class="card__info-price">
        $149.99
        <span>$169.99</span>
      </span>

      <button class="card__info-btn" :plain="true" @click="open2"
        ><CartIcon /> Add to Cart</button>
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

    &-type {
      text-transform: uppercase;
      font-weight: 500;
      color: var(--secAccentColor);
      letter-spacing: 3px;
    }

    &-title {
      font-size: 36px;
      color: var(--accentColor);
      font-family: "Fraunces", serif;
      font-weight: 700;
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

      &:hover {
        background: hsl(159, 38%, 16%);
      }
    }
  }
}
</style>
