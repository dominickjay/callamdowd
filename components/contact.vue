<template>
    <div class="contact contact-form">
        <form
            name="ask-question"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="ask-question" />
            <span>Risus, morbi metus, est bibendum elit nisl morbi nisl. Feugiat interdum.</span>
            <p>
                <label>First Name: <input type="text" name="first-name" /></label>
            </p>
            <p>
                <label>Last Name: <input type="text" name="last-name" /></label>
            </p>
            <p>
                <label>Email: <input type="text" name="email" /></label>
            </p>
            <p>
                <label>Telephone: <input id="telnumber" type="text" name="telnumber"></label>
            </p>
            <p>
                <label>Message: <textarea id="message" type="text" name="message"></textarea></label>
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

<style>
.contact-form {
    padding: 40px 20px;
    background-color: #f5f5f5;
    grid-column: 1 / 3;
    grid-row: 1;
    height: 100%;
}
</style>
