<template>
  <div>
    <div class="container">
        <header class="header">
            <Logo :person="person"></Logo>
            <navigation></navigation>
        </header>
        <div class="content-banner">
            <div
              class="content-banner__content"
              :style="'background-image: url(' + service.fields.serviceHeadingBackground.fields.file.url + ');'">>
                <h2 class="content-banner__head">
                    {{ service.fields.serviceHeading }}
                </h2>
            </div>
        </div>
        <section class="content">
            <h2 class="content__heading">
            </h2>
            <div class="content__wrapper">
                <div class="bodytext service">
                    <vue-markdown class="service__intro">{{ service.fields.serviceIntro }}</vue-markdown>
                    <vue-markdown class="service__description">{{ service.fields.serviceDescription }}</vue-markdown>
                </div>
            </div>
        </section>
      </div>
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
        'content_type': env.CTF_SERVICE_TYPE_ID,
        'fields.serviceSlug': params.serviceSlug
      })
    ]).then(([entries, services]) => {
      return {
        person: entries.items[0],
        service: services.items[0]
      }
    }).catch(console.error)
  },
  components: {
    Logo,
    Navigation,
    VueMarkdown
  }
}
</script>

<style>

.service__intro {
  font-weight: 700;
  font-size: 1.25rem;
}

</style>
