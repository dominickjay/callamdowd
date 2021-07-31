<template>
    <div class="contact contact-form">
        <form
            class="contact-form__form"
            name="ask-question"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="ask-question" />
            <span class="contact-form__text">{{ home.fields.contactFormText }}</span>
            <p>
                <label>First Name: <input class="contact-form__text" type="text" name="first-name" /></label>
            </p>
            <p>
                <label>Last Name: <input class="contact-form__text" type="text" name="last-name" /></label>
            </p>
            <p>
                <label>Email: <input class="contact-form__text" type="text" name="email" /></label>
            </p>
            <p>
                <label>Telephone: <input class="contact-form__text" id="telnumber" type="text" name="telnumber"></label>
            </p>
            <p>
                <label>Message: <textarea class="contact-form__text contact-form__text--textarea" id="message" type="text" name="message"></textarea></label>
            </p>
            <button class="button contact-form__button">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  props: ['home']
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

.contact-form__form {
  display: flex;
  flex-wrap: wrap;
}

.contact-form__form label {
  margin-bottom: 10px;
  font-family: var(--font-serif);
  letter-spacing: .5px;
}

.contact-form__text {
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  letter-spacing: .5px;
}

span.contact-form__text {
  grid-column: 1 / 5;
}

.contact-form__text:not(span) {
  font-family: var(--font-serif);
  letter-spacing: .5px;
  padding: 10px;
  background-color: #ededed;
  border: none;
  border-bottom: 1px solid var(--main-color);
  width: 100%;
}

textarea.contact-form__text--textarea {
  min-height: 250px;
  background-color: #ededed;
  border: 1px solid var(--main-color);
}

.contact-form__form p:first-of-type,
.contact-form__form p:nth-child(3),
.contact-form__form p:nth-child(5) {
  grid-column: 1 / 3;
  flex: 1 1 auto;
}

.contact-form__form p:nth-child(2),
.contact-form__form p:nth-child(4),
.contact-form__form p:nth-child(6) {
  grid-column: 3 / 5;
  flex: 1 1 auto;
}

.contact-form__form p:last-of-type {
  grid-column: 1 / 5;
  flex: 1 1 auto;
}

.contact-form__text--textarea {
  width: 100%;
}

.button.contact-form__button {
  grid-column: 4 / 5;
  flex: 1 1 auto;
  margin-bottom: 20px;
  background-color: var(--main-color);
  color: var(--secondary-font-color);
  border: 0;
  cursor: pointer;
  transition: .25s ease-in-out all;
}

.contact-form__button:hover {
  background-color: var(--secondary-font-color);
  color: var(--main-color);
}

</style>
