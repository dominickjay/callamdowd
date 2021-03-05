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
            <Contact :home="home"></Contact>
            <ContactDetails :home="home" :person="person"></ContactDetails>
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
import Contact from '~/components/contact.vue'
import ContactDetails from '~/components/contact-details.vue'

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
      }),
      client.getEntries({
        'sys.id': env.CTF_HOME_ID
      })
    ]).then(([entries, posts, home]) => {
      return {
        person: entries.items[0],
        post: posts.items[0],
        home: home.items[0]
      }
    })
    .catch(console.error)
  },
  data () {
    return {
    //  video: post.fields.video.fields.file.url
    }
  },
  components: {
    Logo,
    Navigation,
    Contact,
    ContactDetails,
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
