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
            <ContactDetails :home="home" :person="person"></ContactDetails>
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
import ContactDetails from '~/components/contact-details.vue'

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
    Contact,
    ContactDetails
  }
}
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, .5fr));
  grid-gap: var(--grid-gap);
}

.post {
    --post-block--background: #FCF7E1;
    background-color: var(--post-block--background);
    position: relative;
    font-family: var(--font-sans);
    transition: background-color ease-in-out .25s;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.post:hover {
    background-color: var(--main-color);
    color: var(--secondary-font-color);
    transition: background-color ease-in-out .25s;
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

.post article a {
    text-decoration: none;
    font-family: var(--font-serif);
    color: var(--font-color);
    text-align: right;
    font-size: 1.15rem;
    margin-bottom: 0;
    letter-spacing: .5px;
}

.post article a:hover {
    text-decoration: underline;
}

.post:hover article a {
    color: var(--secondary-font-color);
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
