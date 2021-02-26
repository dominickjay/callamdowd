<template>
  <div>
    <div class="container">
      <header class="header">
          <Logo :person="person"></Logo>
          <navigation></navigation>
      </header>

      <section class="body-container">
        <main class="wrapper">
          <div class="headline">
            <time class="tiny">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
            <h1>{{ post.fields.title }}</h1>
          </div>
          <div class="copy">
            <vue-markdown>{{post.fields.body}}</vue-markdown>
            <video controls>
                <source :src="post.fields.video.fields.file.url" type="video/mp4">
              Your browser does not support the video tag.
              </video>
          </div>
        </main>
      </section>
      <hr class="spacer spacer--01">
      <div class="content content--contact" id="contact">
          <h2 class="content__heading">
              Want to Contact Me?
          </h2>
          <div class="content__wrapper">
              <div class="contact contact-form">
                  <form data-netlify="true" method="POST" name="contact">
                      <fieldset>
                          <legend>Risus, morbi metus, est bibendum elit nisl morbi nisl. Feugiat interdum.</legend>
                          <div>
                              <label for="firstname">
                                  <span>First Name:</span>
                                  <input id="firstname" type="text" name="firstname">
                                  <abbr title="required" aria-label="required">*</abbr>
                              </label>
                          </div>
                          <div>
                              <label for="lastname">
                                  <span>Last Name:</span>
                                  <input id="lastname" type="text" name="lastname">
                                  <abbr title="required" aria-label="required">*</abbr>
                              </label>
                          </div>
                          <div>
                              <label for="email">
                                  <span>Email:</span>
                                  <input id="email" type="text" name="email">
                                  <abbr title="required" aria-label="required">*</abbr>
                              </label>
                          </div>
                          <div>
                              <label for="telnumber">
                                  <span>Phone Number:</span>
                                  <input id="telnumber" type="text" name="telnumber">
                                  <abbr title="required" aria-label="required">*</abbr>
                              </label>
                          </div>
                          <div>
                              <label for="message">
                                  <span>Message:</span>
                                  <textarea id="message" type="text" name="message"></textarea>
                                  <abbr title="required" aria-label="required">*</abbr>
                              </label>
                          </div>
                          <div>
                              <button class="button" type="submit">Send Message</button>
                          </div>
                      </fieldset>
                  </form>
              </div>
              <div class="contact contact-details">
                  <h3>Contact Information</h3>
                  <p>Risus, morbi metus, est bibendum elit nisl morbi nisl. Feugiat interdum.</p>
                  <ul class="contact-details__list">
                      <li class="contact-details__listitem">
                          <a class="contact-details__listlink contact-details__listlink--tel"
                          :href="'tel:' + person.fields.phone">{{ person.fields.phone }}</a>
                      </li>
                      <li class="contact-details__listitem">
                          <a class="contact-details__listlink contact-details__listlink--email" :href="'mailto:' + person.fields.email">{{ person.fields.email }}</a>
                      </li>
                      <li class="contact-details__listitem">
                          <a class="contact-details__listlink contact-details__listlink--facebook" href="#">{{ person.fields.facebook }}</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import Logo from '~/components/logo.vue'
import Navigation from '~/components/navigation.vue'

const client = createClient()

export default {
  asyncData ({env, params}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        post: posts.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Logo,
    Navigation,
    VueMarkdown
  }
}
</script>

<style>

.foreground .page-bar {
  border-bottom: 0;
}

.headline {
  padding: 3em 0 0;
}

.headline h1 {
  font-size: 3.5em;
}

.copy {
  padding-bottom: 7em;
}

.copy *:not(div) {
  margin: 2em 0 1em;
}

.copy h3 {
  font-size: 1.35em;
}

.copy ul {
  margin: 0;
  padding-left: 1em;
  list-style: disc;
}

.copy li {
  margin: 0;
}

</style>
