<template>
    <div class="contact contact-details">
        <h3>Contact Information</h3>
        <p>{{ home.fields.contactText }}</p>
        <ul class="contact-details__list">
            <li class="contact-details__listitem">
                <a class="contact-details__listlink contact-details__listlink--tel"
                    :href="'tel:' + person.fields.phone">{{ person.fields.phone }}</a>
            </li>
            <li class="contact-details__listitem">
                <a class="contact-details__listlink contact-details__listlink--email"
                    :href="'mailto' + person.fields.email">{{ person.fields.email }}</a>
            </li>
            <li class="contact-details__listitem">
                <a class="contact-details__listlink contact-details__listlink--facebook"
                    :href="person.fields.facebook" target="_blank" rel="noopener">{{ person.fields.facebook }}</a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  props: ['home', 'person']
}
</script>
