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
                    {{ service.fields.serviceHeading }}
                </h2>
            </div>
        </div>
        <div class="copy">
            <h2>{{ service.fields.serviceIntro }}</h2>
            <p>{{ service.fields.serviceDescription }}</p>
        </div>
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
        'content_type': env.CTF_SERVICES_TYPE_ID,
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

</style>
