<template>
    <div id="contact-form">
        <div class="container">
            <h2 data-aos="fade-up">Contact Me</h2>
            <form action="" @submit.prevent="submitForm" :class="{ expanded : submitFormOpen}">
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
    submitForm () {
      this.ses.sendEmail({
        Destination: {
          ToAddresses: ['eman_khalifa_ayyad@hotmail.com']
        },
        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: 'this message is from : ' + this.name + '<br >' + 'the message sent is : ' + this.message + '<br >' + ' their email is : ' + this.email
            },
            Text: {
              Charset: 'UTF-8',
              Data: 'This is the message body in text format.'
            }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'A message from my contact form'
          }
        },
        ReturnPath: 'eman_khalifa_ayyad@hotmail.com',
        Source: 'eman_khalifa_ayyad@hotmail.com'
      }, (err, data) => {
        if (err) console.log(err, err.stack)
        else {
          console.log(data)
          this.submitFormOpen = false
        }
      })
    }
  },
  mounted () {
    const AWS = require('aws-sdk')

    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'eu-west-1'})
    this.ses = new AWS.SES()
  }
}

</script>
