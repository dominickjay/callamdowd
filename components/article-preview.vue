<template>

  <div class="service__content service-block" :id="post.fields.slug">
        <span class="service-block__heading">{{ post.fields.title }}</span>
        <span class="service-block__tagline">{{ post.fields.description }}
        </span>
        <div class="service-block__links">
            <nuxt-link :to="{ name: 'tutorials-slug', params: { slug: post.fields.slug }}" class="service-block__link">Read more</nuxt-link>
        </div>
    </div>

</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

.service-block {
    --service-block--background: #FCF7E1;
    background-color: var(--service-block--background);
    position: relative;
    padding: 20px;
    font-family: var(--font-sans);
    transition: background-color ease-in-out .25s;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.service-block:hover {
    background-color: var(--main-color);
    color: var(--secondary-font-color);
    transition: background-color ease-in-out .25s;
}

/* .service-block > * + * {
    margin-bottom: 20px;
    display: block;
} */

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
    margin-bottom: 20px;
    display: block;
}

.service-block__tagline {
    margin-bottom: 20px;
}

.service-block__links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
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
    width: 100%;
}

.service__listitem--all {
    grid-column: 1 / 3;
}

.service__listitem--all .service-block {
    padding: 20px;
    text-transform: uppercase;
    height: auto;
}

@media (maxwidth: 640px) {
    .service-block {
        padding-top: 60px;
    }
}
</style>
