<template>
  <div class="core">
      <homepage-hero></homepage-hero>
      <tools></tools>
      <my-apps></my-apps>
  </div>
</template>
<script>
import AOS from 'aos'

import homepageHero from './components/HomepageHero'
import tools from './components/tools'
import myApps from './components/MyApps'

export default {

  data () {
    return {
      aos: null
    }
  },
  mounted () {
    this.aos = AOS.init()
  },
  name: 'App',
  components: {
    homepageHero,
    tools,
    myApps
  }
}

</script>
