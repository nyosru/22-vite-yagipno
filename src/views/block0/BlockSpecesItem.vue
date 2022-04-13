<template>
  <!-- <div>u1 {{ user }}</div> -->

  <a
        :href=" ( user.link_vk && user.link_vk.length ? user.link_vk : ( user.link_insta && user.link_insta.length ? user.link_insta : '#' ) )"
        target="_blank"
      >
  <div class="text-center single-testimonial">
    <div class="testimonial-image">
      <img
        :src="user.img ? '/specs/' + user.img : '/assets/images/author-3.jpg'"
        :alt="user.name"
      />
    </div>
    <div class="testimonial-content">
      <p class="pb-5 mb-6 border-b border-gray-300 soc_icon">
        
        <img v-if="user.link_vk && user.link_vk.length" src="/icon/vk.svg" />
        <img v-else-if="user.link_insta && user.link_insta.length" src="/icon/instagram.svg" />

        {{ user.opis }}
      </p>
      <h6 class="text-lg font-semibold text-gray-900">
        {{ user.name }}
      </h6>
      <span class="text-sm text-gray-700">{{ user.city }}</span>
    </div>

  </div>
  </a>
</template>

<script setup>
const props = defineProps(['user'])
console.log(props.user)
</script>

<style scope>
.soc_icon img {
  max-width: 32px;
  float:left;
}
</style>
