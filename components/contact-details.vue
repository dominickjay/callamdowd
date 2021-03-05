<template>
    <div class="contact contact-details">
        <h3>Contact Information</h3>
        <p>{{ home.fields.contactDetailsText }}</p>
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

<style>

.contact-details {
    background-color: var(--main-color);
    padding: 20px;
    grid-row: 1;
    position: sticky;
    top: 140px;
    background-image: url(~assets/images/chakra-large-01.svg);
    background-repeat: no-repeat;
    background-position: right -20px bottom -125px;
}

.contact-details h3 {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    letter-spacing: .5px;
    color: var(--secondary-font-color);
}

.contact-details p {
    color: #f5f5f5;
    margin-bottom: 40px;
}

.contact-details__list {
    padding: 20px;
}

.contact-details__listitem {
    margin-bottom: 40px ;
}

.contact-details__listlink {
    display: flex;
    color: var(--secondary-font-color);
    text-decoration: none;
    font-family: var(--font-serif);
    letter-spacing: .5px;
}

.contact-details__listlink:hover {
    text-decoration: underline;
}

.contact-details__listlink::before {
    content:"";
    width: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    left: -20px;
}

.contact-details__listlink--tel::before {
    background-image: url(~assets/images/phone.svg);
}

.contact-details__listlink--email::before {
    background-image: url(~assets/images/envelope.svg);
}

.contact-details__listlink--facebook::before {
    background-image: url(~assets/images/facebook.svg);
    width: 24px;
}

@media (max-width: 992px) {
    .contact-details {
        grid-row: auto;
        grid-column: 1 / 3;
    }

    .contact-details {
        background-position: right 0px bottom -35px;
        background-size: 60px;
    }
}
</style>
