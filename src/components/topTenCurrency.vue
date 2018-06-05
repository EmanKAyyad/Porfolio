<template>
    <div class="top-ten-screen row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3 pl-3 pr-5 single-currency"
             v-for="(currency, index) in topTen"
             :key="currency.id"
             :id="currency.id"
             :style="{'animation-delay': index * 0.2 + 's'}" >

            <h4 class="float-left">{{ currency.name }}</h4>
            <p class="usd-price float-right">{{ currency.price_usd }}</p>
        </div>
    </div>
</template>
<script>
export default{
  props: ['topTen']
}
</script>
