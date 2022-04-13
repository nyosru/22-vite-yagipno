<template>
  <router-view name="header1"></router-view>

  <router-view></router-view>
  <!-- <router-view name="meropriyatiya"></router-view> -->
  <!-- <router-view name="speces"></router-view> -->
  <!-- <router-view name="call2action1"></router-view> -->
  <!-- <router-view name="opis1"></router-view> -->

  <router-view name="health"></router-view>
  <router-view name="learn"></router-view>
  <router-view name="CardsTaro"></router-view>
  <router-view name="about"></router-view>
  <router-view name="video"></router-view>

  <router-view name="contact"></router-view>
  <router-view name="footer1"></router-view>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    let showWarn = ref(true)

    return {
      showWarn,
    }
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.warning {
  position: fixed;
  top: 30%;
  left: 15%;
  right: 15%;
  background-color: yellow;
  font-weight: bold;
  text-align: center;
  padding: 20px;
}

.link div {
  margin-bottom: 350px;
}
</style>
