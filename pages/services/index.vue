<template>
  <div>
    <div class="container">
      <header class="header">
          <Logo :person="person"></Logo>
          <navigation></navigation>
      </header>
      <div class="content-banner">
          <div class="content-banner__content" :style="'background-image: url(' + home.fields.serviceBannerImage.fields.file.url + ');'">
              <h2 class="content-banner__head">
                  {{ page.title }}
              </h2>
          </div>
      </div>
      <section class="content content--services" id="services">
        <h2 class="content__heading">
            Why Choose Me?
        </h2>
        <div class="content__wrapper">
          <ul class="service__list">
            <li class="service__listitem" v-for="service in services">
              <service-preview :service="service"></service-preview>
            </li>
          </ul>
        </div>
      </section>
    <hr class="spacer spacer--02">
        <div class="content content--contact" id="contact">
            <h2 class="content__heading">
                Want to Contact Us?
            </h2>
            <div class="content__wrapper">
                <Contact :home="home"></Contact>
                <ContactDetails :home="home" :person="person"></ContactDetails>
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
import ServicePreview from '~/components/service-preview.vue'

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
  data () {
    return {
      page: {
        title: 'Services'
      }
    }
  },
  components: {
    ServicePreview,
    Navigation,
    Contact,
    ContactDetails,
    Logo
  }
}
</script>

<style>

.content--services {
  margin-bottom: 60px;
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

/* .service__list.service__list--home {
    margin-right: 20px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--grid-gap);
    width: 100%;
    max-width: 50%;
} */

@media (max-width: 1024px) {
    .service__list.service__list--home {
        max-width: none;
        margin: 0;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }

    .service__list.service__list--home .service__listitem {
        grid-column: 1 / 3;
        margin-bottom: 10px;
    }

    .service__list.service__list--home .service__listitem:last-child {
        margin-bottom: 20px;
    }
}

.service__list--home .service-block {
    padding-top: 95px;
}

.service-block:hover {
    background-color: var(--main-color);
    color: var(--secondary-font-color);
    transition: background-color ease-in-out .25s;
}

.service-block__number {
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: 700;
    opacity: 0.5;
    font-size: 0.85rem;
}

.service-block__heading {
    text-transform: uppercase;
    font-family: var(--font-serif);
    letter-spacing: .5px;
    font-size: 1.25rem;
}

.service-block__link {
    text-decoration: none;
    font-family: var(--font-serif);
    color: var(--font-color);
    text-align: right;
    font-size: 1.15rem;
    margin-bottom: 0;
    letter-spacing: .5px;
}

.service-block__link:hover {
    text-decoration: underline;
}

.service-block:hover .service-block__link {
    color: var(--secondary-font-color);
}

.service__image {
    max-width: 665px;
}

.service-block__tagline {
}

.service__listitem--all {
    grid-column: 1 / 3;
}

.service__listitem--all .service-block {
    padding: 20px;
    text-transform: uppercase;
}

@media (max-width: 1024px) {
    .service__list {
        max-width: none;
    }

    .service__image {
        max-width: none;
        width: 100%;
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

    .service-block {
        padding-top: 60px;
    }

}
</style>
