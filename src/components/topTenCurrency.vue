<template>
    <div class="top-ten-screen row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3 single-currency"
             v-for="(currency,index) in topTen"
             :key="currency.id"
             :id="currency.id"
             data-aos="fade-up"
             data-aos-duration="300"
             :data-aos-delay="index * 100" >

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
