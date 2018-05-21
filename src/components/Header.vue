<template>
    <nav class='top-nav' :class="[stickyHeader , {'whiteBg': whiteBg}]">
        <div class="container" :class="{'d-none': stickyHeader.stick}">
           <div class="row d-none d-md-flex">
            <div id="logo-container" class="col-3"><a href="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 1000 1000">
                  <path id="e" class="e" d="M341.172,762.217c96.017,0,174.431-58.447,174.431-160.13,0-6.406-2.4-48.04-14.4-48.04-11.2,0-11.2,100.082-142.425,100.082-40.007,0-100.818-27.222-100.818-64.853,0-83.268,257.646-47.238,257.646-219.379,0-94.477-74.414-144.118-162.429-144.118-107.219,0-214.438,96.079-214.438,289.837C138.736,643.721,197.947,762.217,341.172,762.217Zm8-441.961c30.406,0,67.212,21.618,67.212,60.85,0,40.833-145.626,72.86-155.227,72.86-10.4,0-14.4-8.808-14.4-17.615C246.755,389.913,284.362,320.256,349.173,320.256Z"/>
                  <path id="e-2" data-name="e" class="e" d="M651.828,230.783c-96.017,0-174.431,58.447-174.431,160.13,0,6.406,2.4,48.04,14.4,48.04,11.2,0,11.2-100.082,142.425-100.082,40.007,0,100.818,27.222,100.818,64.853,0,83.268-257.646,47.238-257.646,219.379,0,94.477,74.414,144.118,162.429,144.118,107.219,0,214.438-96.079,214.438-289.837C854.264,349.279,795.053,230.783,651.828,230.783Zm-8,441.961c-30.406,0-67.212-21.618-67.212-60.85,0-40.833,145.626-72.86,155.227-72.86,10.4,0,14.4,8.808,14.4,17.615C746.245,603.087,708.638,672.744,643.827,672.744Z"/>
                  <path class="brackets" d="M0,300V0H300"/>
                  <path id="Shape_1_copy" data-name="Shape 1 copy" class="brackets" d="M1000,700v300H700"/>
                </svg>
               </a></div>
                <ul class="col-9 main-menu">
                    <li
                      class="menu-item"
                      v-for="(item,index) in menuItems"
                      :key="'item'+index"
                      >
                        <a :href="item.link" v-smooth-scroll>{{ item.itemName }}</a><div class="hover-effect"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div id='mobile-nav' class="container-fluid " :class="{'d-md-none' : !stickyHeader.stick}">
           <div class="row">
            <div class="mobile-logo col-3">
                 <a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 1000 1000">
                      <path id="e" class="e" d="M341.172,762.217c96.017,0,174.431-58.447,174.431-160.13,0-6.406-2.4-48.04-14.4-48.04-11.2,0-11.2,100.082-142.425,100.082-40.007,0-100.818-27.222-100.818-64.853,0-83.268,257.646-47.238,257.646-219.379,0-94.477-74.414-144.118-162.429-144.118-107.219,0-214.438,96.079-214.438,289.837C138.736,643.721,197.947,762.217,341.172,762.217Zm8-441.961c30.406,0,67.212,21.618,67.212,60.85,0,40.833-145.626,72.86-155.227,72.86-10.4,0-14.4-8.808-14.4-17.615C246.755,389.913,284.362,320.256,349.173,320.256Z"/>
                      <path id="e-2" data-name="e" class="e" d="M651.828,230.783c-96.017,0-174.431,58.447-174.431,160.13,0,6.406,2.4,48.04,14.4,48.04,11.2,0,11.2-100.082,142.425-100.082,40.007,0,100.818,27.222,100.818,64.853,0,83.268-257.646,47.238-257.646,219.379,0,94.477,74.414,144.118,162.429,144.118,107.219,0,214.438-96.079,214.438-289.837C854.264,349.279,795.053,230.783,651.828,230.783Zm-8,441.961c-30.406,0-67.212-21.618-67.212-60.85,0-40.833,145.626-72.86,155.227-72.86,10.4,0,14.4,8.808,14.4,17.615C746.245,603.087,708.638,672.744,643.827,672.744Z"/>
                      <path class="brackets" d="M0,300V0H300"/>
                      <path id="Shape_1_copy" data-name="Shape 1 copy" class="brackets" d="M1000,700v300H700"/>
                    </svg>
                </a>
            </div>
            <div class="menu-btn offset-7 col-2" @click="convertToX">
                <div class="hamburger-btn" :class="hamburgerBtn"></div>
            </div>
            <ul class="col-12" :class="{expanded: mobileMenuExpanded}">
                <li
                  class="menu-item"
                  v-for="(item,index) in menuItems"
                  :key="'mobileItem' + index"
                  >
                    <a :href="item.link" v-smooth-scroll @click="hamburgerBtn.
                    xBtn = false">{{ item.itemName }}</a><div class="hover-effect"></div>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data: function () {
    return {
      menuItems: [
        { itemName: 'home', link: 'index.html' },
        { itemName: 'About me', link: 'index.html#job-name' },
        { itemName: 'My Apps', link: 'index.html#my-apps' },
        { itemName: 'Contact', link: 'index.html#contact-form' }
      ],
      stickyHeader: {
        stick: false
      },
      hamburgerBtn: {
        xBtn: false
      }
    }
  },
  computed: {
    mobileMenuExpanded () {
      return this.hamburgerBtn.xBtn
    },
    whiteBg () {
      return this.hamburgerBtn.xBtn
    }
  },
  methods: {
    toggleStickyHeader () {
      if (window.pageYOffset >= 90) {
        this.stickyHeader.stick = true
      } else {
        this.stickyHeader.stick = false
      }
    },
    convertToX () {
      if (this.hamburgerBtn.xBtn) {
        this.hamburgerBtn.xBtn = false
      } else {
        this.hamburgerBtn.xBtn = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.toggleStickyHeader)
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        this.toggleStickyHeader()
      }
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.toggleStickyHeader)
    window.removeEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        this.toggleStickyHeader()
      }
    })
  }
}

</script>
