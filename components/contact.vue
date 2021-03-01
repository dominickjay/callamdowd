<template>
    <div class="contact contact-form">
        <form
            name="ask-question"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="ask-question" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'QAForm',
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>
