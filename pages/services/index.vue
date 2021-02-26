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
                <div class="contact contact-form">
                    <form data-netlify="true" method="POST">
                        <fieldset>
                            <legend>Risus, morbi metus, est bibendum elit nisl morbi nisl. Feugiat interdum.
                            </legend>
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
                                href="tel:+07890 123 456">07890 123 456</a>
                        </li>
                        <li class="contact-details__listitem">
                            <a class="contact-details__listlink contact-details__listlink--email"
                                href="mailto:info@callamdowd.com">info@callamdowd.com</a>
                        </li>
                        <li class="contact-details__listitem">
                            <a class="contact-details__listlink contact-details__listlink--facebook"
                                href="#">myfacebookaddress</a>
                        </li>
                    </ul>
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
    Logo
  }
}
</script>

<style>

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

.content-banner:not(.content-banner--home) .content-banner__wrapper img {
    margin: 0 auto;
    position: relative;
    top: -100%;
    width: 100%;
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

.content-banner__head {
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .5px;
}

.content-banner:not(.content-banner--home) .content-banner__head {
    position: relative;
}

.content--services {
  margin-bottom: 60px;
}

.service__list {
    list-style: none;
    margin-left: 0;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    display: grid;
    grid-gap: 20px;
    padding: 0;
}

.service__list.service__list--home {
    margin-right: 20px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
    max-width: 50%;
}

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

.service-block > * + * {
    margin-bottom: 20px;
    display: block;
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
