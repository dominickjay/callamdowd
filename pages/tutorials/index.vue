<template>
  <div>
    <div class="container">
      <header class="header">
          <Logo :person="person"></Logo>
          <navigation></navigation>
      </header>

      <section class="content content--posts">
        <ul class="post-list wrapper">
          <li class="post" v-for="post in posts">
            <article-preview :post="post"></article-preview>
          </li>
        </ul>
      </section>
      <hr class="spacer spacer--01">
      <div class="content content--contact" id="contact">
          <h2 class="content__heading">
              Want to Contact Me?
          </h2>
          <div class="content__wrapper">
            <Contact></Contact>
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
import {createClient} from '~/plugins/contentful.js'
import Logo from '~/components/logo.vue'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'
import Contact from '~/components/contact.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'sys.id': env.CTF_HOME_ID
      }),
      client.getEntries({
        'content_type': env.CTF_SERVICE_TYPE_ID
      })
    ]).then(([entries, posts, home, service]) => {
      return {
        person: entries.items[0],
        posts: posts.items,
        home: home.items[0],
        services: service.items
      }
    }).catch(console.error)
  },
  components: {
    ArticlePreview,
    Logo,
    Navigation,
    Contact
  }
}
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
}

.post {
  background-color: #FCF7E1;
  position: relative;
}

.post article > *:not(img){
  padding: 0 20px;
  margin-bottom: 10px;
}

.post article time {
  text-align: right;
  display: block;
  font-size: 0.85rem;
  opacity: 0.85;
}

.post article a::after {
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.post .thumbnail {
  margin-bottom: 20px;
}
</style>
