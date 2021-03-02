<template>
  <div>
    <div class="container">
        <header class="header">
            <Logo :person="person"></Logo>
            <navigation></navigation>
        </header>
        <div class="content-banner content-banner--home">
            <div class="content-banner__wrapper">
                <img :src="person.fields.image.fields.file.url + '?h=595'" alt="Callam Dowd Photo" class="content-banner__image">
            </div>
            <div class="content-banner__content">
                <h2 class="content-banner__head">
                    {{ home.fields.mainHeading }}
                </h2>
                <span class="content-banner__bodytext">
                    <vue-markdown>{{ home.fields.mainIntroText }}</vue-markdown>
                </span>
                <a class="content-banner__button button button--cta" href="#contact">
                    Book Appointment
                </a>
            </div>
        </div>
        <section class="content content--services" id="services">
            <h2 class="content__heading">
                Why Choose Me?
            </h2>
            <div class="content__wrapper">
                <ul class="service__list service__list--home">
                    <li class="service__listitem" :key="service.name" v-for="service in services.slice(0, 4)">
                        <service-preview :service="service"></service-preview>
                    </li>

                    <li class="service__listitem service__listitem--all">
                        <div class="service__content service-block">
                            <nuxt-link class="service-block__link" to="/services">
                                See All Services
                            </nuxt-link>
                        </div>
                    </li>
                </ul>
                <img class="service__image" src="~assets/images/stock-photo-2.png" alt="Service Image">
            </div>
        </section>
        <hr class="spacer spacer--02">
        <div class="content content--testimonials">
            <h2 class="content__heading">
                What People Say About Me
            </h2>
            <Testimonials :testimonials="testimonials"></Testimonials>
        </div>
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
import VueMarkdown from 'vue-markdown'
import Logo from '~/components/logo.vue'
import Navigation from '~/components/navigation.vue'
import Contact from '~/components/contact.vue'
import ContactDetails from '~/components/contact-details.vue'
import ArticlePreview from '~/components/article-preview.vue'
import ServicePreview from '~/components/service-preview.vue'
import Testimonials from '~/components/carousel.vue'

const client = createClient()

export default {
  head: {
    script: [
      {
        src: 'scripts/jquery-3.5.1.min.js'
      },
      {
        src: 'scripts/carousel.js'
      }
    ]
  },
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
    Navigation,
    Logo,
    Contact,
    ContactDetails,
    ArticlePreview,
    VueMarkdown,
    ServicePreview,
    Testimonials
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
    margin-bottom: 20px;
}

.content-banner:not(.content-banner--home) .content-banner__head {
    position: relative;
}

.content-banner--home .content-banner__bodytext {
    display: block;
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

.button {
    text-decoration: none;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: .5px;
    color: var(--font-color);
    padding: 10px 60px;
    position: relative;
    display: inline-block;
    transition: .25s ease-in-out all;
}

.button--cta {
    background-color: var(--button-cta-background);
    color: var(--secondary-font-color);
    transition: .25s ease-in-out all;
}

.button--cta::before {
    content: "";
    background-color: var(--third-color);
    width: 100%;
    display: block;
    position: absolute;
}

.button--cta:hover {
    background-color: var(--secondary-font-color);
    color: var(--button-cta-background);
    text-decoration: underline;
}

.content {
    padding: 20px;
    margin-bottom: 40px;
}

@media (max-width: 992px) {

    .button {
        width: 100%;
        text-align: center;
    }
}

.content--testimonials .content__wrapper {
    justify-content: center;
    min-height: 250px;
    align-items: end;
}

.content__heading {
    font-family: var(--font-serif);
    letter-spacing: .5px;
    font-size: 2.5rem;
    font-weight: 200;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

@media (max-width: 992px) {
    .content__heading {
    }
}

.service__list {
    list-style: none;
    margin-left: 0;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    display: grid;
    grid-gap: var(--grid-gap);
    padding: 0;
}

.service__list.service__list--home {
    margin-right: 20px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-gap: var(--grid-gap);
    width: 100%;
}

@media (max-width: 1024px) {
    .service__list.service__list--home {
        max-width: none;
        grid-column: 1 / 4;
    }

    .service__list.service__list--home .service__listitem {
        grid-column: 1 / 3;
        margin-bottom: 10px;
    }

    .service__list.service__list--home .service__listitem:last-child {
        margin-bottom: 20px;
    }
}

@media (max-width: 1024px) {
    .service__list {
        max-width: none;
    }

    .service__image {
        max-width: none;
    }

    .content__wrapper {
        flex-direction: column;
    }
}

@media (max-width: 640px) {
    .service__list {
        max-width: none;
        width: 100%;
        grid-gap: 0;
        margin: 0;
        grid-template-columns: repeat(1, 1fr);
    }

    .service__listitem {
        width: 100%;
        margin-bottom: 20px;
    }

    .service__image {
        display: none;
    }

}

.footer {
    background-color: var(--main-color);
    padding: 20px;
}
.visually-hidden {
    /*https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html*/
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
}

body:hover .visually-hidden a,
body:hover .visually-hidden input,
body:hover .visually-hidden button {
    display: none !important;
}

.carousel {
    display: flex;
    margin-bottom: 40px;
    max-width: 710px;
    width: 100%;
    grid-column: 1 / 4;
    grid-row: 1;
    margin: 0 auto;
}

.carousel__items {
    width: 100%;
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
    font-size: 1.15rem;
}

.carousel__content p:last-child {
    padding: 20px 0 0;
    text-align: right;
    opacity: 0.5;
}

.carousel-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 709px;
    grid-row: 2;
    grid-column: 1 / 4;
    margin: 0 auto;
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

</style>
