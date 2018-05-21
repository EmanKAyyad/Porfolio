<template>
  <div class="core">
      <homepage-hero></homepage-hero>
      <about-me></about-me>
      <my-apps></my-apps>
      <contact-form></contact-form>
  </div>
</template>
<script>
import AOS from 'aos'

import homepageHero from './components/HomepageHero'
import aboutMe from './components/aboutme'
import myApps from './components/MyApps'
import contactForm from './components/contactme'

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
    aboutMe,
    myApps,
    contactForm
  }
}

</script>
