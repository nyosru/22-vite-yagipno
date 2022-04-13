<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div class="single-pricing enterprise">
      <div class="absolute top-0 left-0 w-32 mt-3 ml-3 pricing-flower">
        <!-- <img src="assets/images/flower.svg" alt="flower" /> -->
      </div>
      <div class="text-right pricing-header">
        <!-- data {{ data }} -->

        <h5 class="sub-title">{{ data.name ?? 'x' }}</h5>
        <span class="price">{{ data.price ?? 'x' }}₽</span>
        <!-- <p class="year">per year</p> -->
      </div>

      <div class="mb-8 pricing-list">
        <ul v-if="data.list && data.list.length">
          <li v-for="i in data.list" :key="i">
            <i class="lni-check-mark-circle"></i>
            {{ i }}
          </li>
        </ul>
      </div>

      <price-form
        :head="
          'Мероприятие: ' +
          merop_name +
          '\n\r' +
          'Тарифнаый план: ' +
          data.name + ' / ' + ( data.price ?? '' ) + 
          '\n\r' +
          'Форма внизу мероприятия, запись на мероприятие'
        "
      />
    </div>
  </div>
</template>

<script>
import priceForm from './BlockMeroprOnePriceForm.vue'

export default {
  props: ['merop_name', 'data'],
  components: {
    priceForm,
  },
  setup(props) {
    // const e = props.data

    return {
      // e,
    }
  },
}
</script>

<style scope></style>
