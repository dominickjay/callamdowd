<template>
  <div>
    <div class="container">
        <header class="header">
            <Logo :person="person"></Logo>
            <navigation></navigation>
        </header>
        <div class="content-banner">
            <div class="content-banner__content" style="background-image: url(images/stock-photo-1.png);">
                <h2 class="content-banner__head">
                    About Me
                </h2>
            </div>
        </div>
        <div>
            <section class="content">
                <h2 class="content__heading">
                </h2>
                <div class="content__wrapper">
                  <vue-markdown class="bodytext">{{ person.fields.aboutMe }}</vue-markdown>
                </div>
            </section>
        </div>
        <hr class="spacer spacer--02">
        <div>
            <div class="content content--contact" id="contact">
                <h2 class="content__heading">
                    Want to Contact Us?
                </h2>
                <div class="content__wrapper">
                    <Contact></Contact>
                    <ContactDetails :home="home" :person="person"></ContactDetails>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">a</footer>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Logo from '~/components/logo.vue'
import Navigation from '~/components/navigation.vue'
import Contact from '~/components/contact.vue'
import ContactDetails from '~/components/contact-details.vue'
import ArticlePreview from '~/components/article-preview.vue'
import VueMarkdown from 'vue-markdown'

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
      }),
      client.getEntries({
        'content_type': env.CTF_TESTIMONIAL_TYPE_ID
      })
    ]).then(([entries, posts, home, service, testimonial]) => {
      return {
        person: entries.items[0],
        posts: posts.items,
        home: home.items[0],
        services: service.items,
        testimonials: testimonial.items
      }
    }).catch(console.error)
  },
  components: {
    Logo,
    Navigation,
    Contact,
    ContactDetails,
    ArticlePreview,
    VueMarkdown
  }
}
</script>

<style>

.home.header {
  overflow: hidden;
  position: relative;
  height: 70vw;
  min-height: 400px;
  max-height: 610px;
  background: #000;
  color: #fff;
}

.home .person-name:link,
.home .person-name:visited {
  color: #fff;
}

.home .menu a:link,
.home .menu a:visited {
  color: #fff;
}

.home .page-bar {
  border-bottom: 1px solid #4e4b5f;
}

.home .page-info {
  padding-top: 12%;
}

.home .page-info h2 {
  font-size: 1.5em;
}

.picture {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  width: 150%;
}

@media all and (min-width: 600px) {
  .picture {
    left: 20%;
    width: 100%;
  }
}

.foreground {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.foreground p {
  margin-bottom: 1em;
}

@media all and (min-width: 600px) {
  .foreground p {
    max-width: 250px;
  }
}

.social-icons {
  margin: 0;
  padding: 0;
}

.social-icons li {
  display: inline-block;
  margin-right: 1em;
}

.social-icons a {
  display: block;
}

.social-icons svg {
  display: block;
  max-width: 100%;
  fill: #fff;
  width: 1.5em;
  height: 1.5em;
}

.social-icons svg:hover {
  fill: #2199e8;
}


.content-banner {
    display: flex;
    position: relative;
    padding: 0 20px;
    justify-content: center;
    margin-bottom: 20px;
}

.content-banner--home {
    background-color: var(--banner-background);
    margin-bottom: 60px;
}

.content-banner:not(.content-banner--home) .content-banner__wrapper {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    position: relative;
}

.content-banner:not(.content-banner--home) .content-banner__wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--main-color);
    opacity: 0.5;
}

.content-banner--home .content-banner__wrapper {
    position: relative;
}

.content-banner:not(.content-banner--home) .content-banner__wrapper img {
    margin: 0 auto;
    position: relative;
    top: -100%;
    width: 100%;
    clip-path: polygon(0% 100%, 0% 20%, 20% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 80%, 80% 100%);
}

.content-banner--home .content-banner__image {
    margin-top: -25px;
    margin-bottom: -45px;
    min-width: 685px;
    min-height: 595px;
    clip-path: polygon(0% 100%, 0% 20%, 20% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 80%, 80% 100%);
}

.content-banner:not(.content-banner--home) .content-banner__content {
    width: 100%;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-height: 300px;
    padding: 60px 0;
    color: var(--secondary-font-color);
    position: relative;
    clip-path: polygon(0% 100%, 0% 20%, 20% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 80%, 80% 100%);
}

.content-banner:not(.content-banner--home) .content-banner__content::before {
    content: "";
    background-color: var(--main-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.65;
}

.content-banner--home .content-banner__content {
    max-width: calc(50% + 20px);
    width: 100%;
    padding: 4vw 0 4vw 40px;
}

.content-banner--home .content-banner__content>*+* {
    margin-bottom: 40px;
}

.content-banner__head {
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .5px;
}

.content-banner:not(.content-banner--home) .content-banner__head {
    position: relative;
}

.content-banner--home .content-banner__bodytext {
    display: block;
}

.bodytext p {
  margin-bottom: 5px;
}

@media (max-width: 1200px) {
    .content-banner--home {
        flex-direction: column;
        padding: 0;
        margin-bottom: 0;
    }

    .content-banner--home .content-banner__wrapper {
        overflow: hidden;
        max-height: 400px;
        position: relative;
    }

    .content-banner--home .content-banner__image {
        position: relative;
        top: 75%;
        transform: translateY(-50%);
        width: 100%;
        margin: 0;
        clip-path: none;
    }

    .content-banner--home .content-banner__content {
        max-width: 100%;
        padding: 0 20px;
    }
}

@media (max-width: 640px) {
    .content-banner {
        margin-bottom: 0;
    }
}

.carousel {
    display: flex;
    margin-bottom: 40px;
}

.carousel__item[aria-hidden='true'] {
    display: none;
}

.carousel__item[aria-hidden='false'] {
    display: block;
}

.hidden {
    display: none;
}

.carousel__content {
    font-family: var(--font-sans);
    max-width: 710px;
    font-size: 1.15rem;
}

.carousel-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 709px;
}

.carousel-buttons__button {
    box-shadow: none;
    border: none;
    padding: 10px 20px;
    background-color: var(--button-background);
    font-family: var(--font-serif);
    transition: all .25s ease-in-out;
    cursor: pointer;
    font-size: 1.15rem;
    letter-spacing: .5px;
}

.carousel-buttons__button:hover {
    background-color: var(--main-color);
    color: var(--secondary-font-color);
    transition: all .25s ease-in-out;
}

.bodytext .signature {
    margin: 40px 0;
}

.bodytext .intro {
}

.bodytext a {
    color: var(--main-color);
}

.bodytext p:last-child img {
  margin: 40px 0;
}

</style>
