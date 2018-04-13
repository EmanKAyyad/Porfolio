<template>
   <div class="container">
        <h1 class="mt-5 mb-3 text-center">Word Counter</h1>
        <section class="mt-5 row" id="counters">
            <div class="counter-container col-4 text-center" id="character-counter">
                <h2 class="display-4 text-info">{{characters}}</h2>
                <p class="mt-1 text-info text-uppercase">Character</p>
            </div>
            <div class="counter-container col-4 text-center" id="word-counter">
                <h2 class="display-4 text-info">{{words}}</h2>
                <p class="mt-1 text-info text-uppercase">Word</p>
            </div>
            <div class="counter-container col-4 text-center" id="sentence-counter">
                <h2 class="display-4 text-info">{{sentences}}</h2>
                <p class="mt-1 text-info text-uppercase">Sentence</p>
            </div>
        </section>
        <section id="text-area" class="row mt-5"><textarea class="offset-1 col-10" @keyup="countAll" v-model="myInput"></textarea></section>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      characters: 0,
      words: 0,
      sentences: 0,
      myInput: ''
    }
  },
  mounted: function () {
    if (localStorage) {
      this.myInput = localStorage.getItem('text')
      this.countAll()
    }
  },
  methods: {
    countAll: function () {
      if (this.myInput.length === 0) {
        this.characters = 0
        this.words = 0
        this.sentences = 0
      } else {
        this.countCharacters(this.myInput)
        this.countWords(this.myInput)
        this.countSentences(this.myInput)
      }
    },
    countCharacters: function (input) {
      this.characters = input.length
    },
    countWords: function (input) {
      input = input.replace(/(^\s*)|(\s*$)/gi, '')//    exclude  start and end white-space
      input = input.replace(/[ ]{2,}/gi, ' ') //    2 or more space to 1
      input = input.replace(/\n /g, '\n') //   exclude newline with a start spacing
      input = input.replace(/\n{1,}/g, ' ') //  convert one newline or more to a space

      this.words = input.split(/\s/g).length
    },
    countSentences: function (input) {
    //  regular expression to find "." or "?" or "!" followed by space then a capital letter or a newline.
      if (input.match(/['.?!']((=?\s[A-Z])|(=?\n))/g)) {
        var separatorsNum = input.match(/['.?!']((=?\s[A-Z])|(=?\n))/g).length
        this.sentences = separatorsNum + 1
      } else {
        this.sentences = 1
      }
    }
  },
  watch: {
    myInput: function (newValue) {
      if (localStorage) {
        localStorage.setItem('text', newValue)
      }
    }
  }
}
</script>
