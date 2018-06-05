<template>
    <div id="contact-form">
        <div class="container">
            <h2 data-aos="fade-up">Contact Me</h2>
            <form action="" :class="{ expanded : submitFormOpen}">
                <div class="row">
                    <div class="col-md-8 offset-md-2 my-3"  data-aos="fade-right" data-aos-delay="200">
                        <input class="w-100 p-2" type="text" v-model="name"  required>
                        <span class='label'>your name</span>
                    </div>
                    <div class="col-md-8 offset-md-2 my-3" data-aos="fade-left" data-aos-delay="200">
                        <input class="w-100 p-2" type="email" v-model="email"  required>
                        <span class='label'>your email</span>
                    </div>
                    <div class="col-md-8 offset-md-2 my-3" data-aos="fade-right" data-aos-delay="200">
                        <textarea class="w-100 p-2" id="message" cols="30" rows="10" v-model="message"  required></textarea>
                        <span class='label'>Your Message</span>
                    </div>
                    <div class="col-12 mb-5" data-aos="fade-up">
                        <button id="submit" type="submit" >submit</button>
                    </div>
                </div>
            </form>
            <div class="message-sent" :class="{ expanded : !submitFormOpen }">
                <p>Your message was successfully sent! Thanks for contacting me.</p>
            </div>
        </div>
    </div>
</template>
<script>

export default{
  data () {
    return {
      ses: {},
      name: '',
      email: '',
      message: '',
      submitFormOpen: true
    }
  },
  methods: {
  },
  mounted () {
}

</script>
