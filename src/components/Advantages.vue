<template>
  <div class="advantages">
    <div class="advantages__container _container">
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="@/assets/img/advantages/01.svg" alt="High Quality" />
        </div>
        <h3 class="advantages__title">High Quality</h3>
        <div class="advantages__text">Crafted from top materials</div>
      </div>

      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="@/assets/img/advantages/02.svg" alt="Warrany Protection" />
        </div>
        <h3 class="advantages__title">Warrany Protection</h3>
        <div class="advantages__text">Over 2 yeats</div>
      </div>

      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="@/assets/img/advantages/03.svg" alt="Free Shipping" />
        </div>
        <h3 class="advantages__title">Free Shipping</h3>
        <div class="advantages__text">Order over 150$</div>
      </div>

      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="@/assets/img/advantages/04.svg" alt="24/7 Support" />
        </div>
        <h3 class="advantages__title">24/7 Support</h3>
        <div class="advantages__text">Dedicated support</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
};
</script>

<style lang="scss">
.advantages {
  margin-top: 80px;
  margin-bottom: 80px;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    display: inline-grid;
    padding: 15px 0;
    grid-template: auto auto / 85px 1fr;
  }

  &__icon {
    text-align: center;
    align-self: center;
    grid-row: span 2;

    @media (max-width: $md3 + px) {
      padding: 0 15px 0 0;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
  }

  &__text {
    line-height: 1.5;
    color: $grayColor;
  }
}
</style>
