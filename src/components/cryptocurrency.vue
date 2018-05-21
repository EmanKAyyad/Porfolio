<template>
    <section id="cryptocurrency-section">
       <div class="container">
            <h2 class="text-center">Get info about cryptocurrencies Now!</h2>
            <button class="getTopTen" @click="getTop10">get top 10 currencies</button>
            <top-ten :topTen="topTenCurrency"></top-ten>
            <section>
                <h3 class="mt-3">Find a specific Currency</h3>
                <div class="searchCurrencies">
                    <input
                        type="text"
                        placeholder="Type the cryptocurrency name"
                        v-model="suggestedCurrency"
                        @keyup="suggestNames">
                    <ul class="suggestedCurrencyList" v-if="suggestedCurrencyArr">
                        <li class="suggested-currency"
                            v-for="(currency,index) in suggestedCurrencyArr"
                            :key="index"
                            :id="currency.id"
                            @click="showDetails">{{ currency.name }}</li>
                    </ul>
                </div>
                <div id="specificCurrencyData" class="row mt-5">
                    <div
                      class="single-currency-data col-12 col-sm-6 col-md-4 col-lg-3"
                      data-aos="fade-down"
                      data-aos-duration="300"
                      v-if="clickedCurrency.length !== 0"
                      v-for="currency in clickedCurrency"
                      :key = "currency.name + currency.id">
                        <h4 class="float-left">{{ currency.name }}</h4>
                        <p class="usd-price float-right">{{ currency.price_usd }}</p>
                        <p class="btc-price float-right">&#3647; {{ currency.price_btc }}</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script>
import topTen from './topTenCurrency'

export default {
  data () {
    return {
      topTenCurrency: [],
      Currencies: ['AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'ZAR'],
      suggestedCurrency: '',
      SpecificChosenCurrencyid: '',
      suggestedCurrencyArr: [],
      allCurrenciesAvailable: [],
      clickedCurrency: []
    }
  },
  methods: {
    getTop10 () {
      let vueInst = this
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          vueInst.topTenCurrency = JSON.parse(this.response)
          console.log(vueInst.topTenCurrency)
        }
      }

      xhttp.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=10', true)
      xhttp.send()
    },
    suggestNames () {
      this.suggestedCurrencyArr = []
      if (this.suggestedCurrency.length > 0) {
        for (let i = 0; i < this.allCurrenciesAvailable.length; i++) {
          if (this.allCurrenciesAvailable[i].name.toLowerCase().indexOf(this.suggestedCurrency) === 0) {
            this.suggestedCurrencyArr.push(this.allCurrenciesAvailable[i])
          }
        }
      }
    },
    showDetails (event) {
      let vueInst = this
      this.suggestedCurrencyArr = []
      let targetId = event.target.getAttribute('id')
      let xhttp = new XMLHttpRequest()

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          vueInst.clickedCurrency.push(JSON.parse(this.response)[0])
        }
      }

      let url = `https://api.coinmarketcap.com/v1/ticker/${targetId}/`
      xhttp.open('GET', url, true)
      xhttp.send()
    }
  },
  mounted () {
    let vueInst = this
    let xhttp = new XMLHttpRequest()
    let fullArr = []

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        fullArr = JSON.parse(this.response)

        for (let i = 0; i < fullArr.length; i++) {
          vueInst.allCurrenciesAvailable.push(fullArr[i])
        }
      }
    }

    xhttp.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true)
    xhttp.send()
  },
  components: {
    topTen
  }
}
</script>
