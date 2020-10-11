<template>
  <div>
    <div class="header">
      <img src="@/assets/graphics/emma-logo.svg" alt="emma logo" class="logo">
      <img src="@/assets/graphics/emma_vector-emma-main-img.svg" alt="emma profile" class="emma-profile">
    </div>
    <Nuxt />
  </div>
</template>

<style>
.header {
  position: relative;
  height: 9rem;
}

.header .logo {
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
}

.emma-profile {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
