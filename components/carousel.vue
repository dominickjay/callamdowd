<template>
  <div class="content__wrapper">
    <VueSlickCarousel :arrows="true" :fade="true" class="carousel" id="carousel" ref="carousel">
      <div
        class="carousel__item"
        :key="testimonial.testimonialName"
        v-for="testimonial in testimonials"
        >
          <div class="carousel__content">
            <p>"{{ testimonial.fields.testimonial }}"</p>
            <p>{{ testimonial.fields.testimonialName }}</p>
          </div>
      </div>
    </VueSlickCarousel>
    <div class="carousel-buttons">
        <button @click="showPrev" class="carousel-buttons__button">
            Previous
        </button>
        <button @click="showNext" class="carousel-buttons__button">
            Next
        </button>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Carousel',
    props: ['testimonials'],
    components: { VueSlickCarousel },
    methods: {
      showNext () {
        this.$refs.carousel.next()
      },
      showPrev () {
        this.$refs.carousel.prev()
      }
    }
  }
</script>

<style>
.slick-dots button:focus::before {
    outline: currentColor 1px solid;
}
</style>
