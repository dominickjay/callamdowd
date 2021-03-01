<template>
    <main role="main">
      <nuxt/>
    </main>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style>
:root {
    --main-color: #212121;
    --secondary-color: #F3F3F3;
    --third-color: #B29702;
    --font-color: var(--main-color);
    --secondary-font-color: #F3E7B0;
    --banner-background: var(--secondary-color);
    --button-background: #F3E7B0;
    --button-cta-background: var(--main-color);
    --font-serif: "lmroman-10", serif;
    --font-sans: "poppins", serif;
}

@font-face {
    font-family: 'lmroman-10';
    src: url('~assets/fonts/lmroman10-regular.otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'poppins';
    src: url('~assets/fonts/Poppins-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

html:focus-within {
    scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
}

*:focus {
    outline: var(--main-color) solid .5px;
}

body {
    font-family: var(--font-sans);
    color: var(--font-color);
    padding: 0;
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.75;
}

a {
    text-decoration: none;
}

a:hover,
a:focus {
    text-decoration: underline;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 40px 20px;
    margin-bottom: 40px;
    background: #FFFFFF;
    z-index: 1;
}

.header .logo {
    margin-right: 40px;
    min-width: 250px;
    transition: transform ease-out .25s;
}

.header .logo:hover {
    transform: scale(1.025);
    transition: transform ease-out .25s;
}

@media (max-width: 640px) {
    .header .logo {
        max-width: 225px;
    }
}

@media (max-width: 992px) {
    .header {
        flex-direction: column;
        padding-bottom: 0;
        margin-bottom: 0;
    }
}

.content-banner {
    display: flex;
    position: relative;
    padding: 0 20px;
    justify-content: center;
    margin-bottom: 20px;
}

.content--contact .content__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: flex-start;
}

.contact-form {
    padding: 40px 20px;
    background-color: #f5f5f5;
    grid-column: 1 / 3;
    grid-row: 1;
}

.contact-form fieldset {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    border: none;
}

.contact-form legend {
    margin-bottom: 20px;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: .5px;
}

.contact-form span {
    margin-bottom: 10px;
    font-family: var(--font-serif);
    letter-spacing: .5px;
}

.contact-form label {
    display: flex;
    flex-direction: column;
}

.contact-form input {
    background: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid var(--main-color);
}

.contact-details {
    background-color: var(--main-color);
    padding: 20px;
    grid-row: 1;
    position: sticky;
    top: 0;
}

.contact-form fieldset div:nth-last-of-type(2) {
    grid-column: 1 / 3;
}

.contact-form fieldset div:last-of-type {
    grid-column: 1 / 3;
    display: flex;
    justify-content: flex-end;
}

.contact-form input,
.contact-form textarea {
    font-family: var(--font-serif);
    letter-spacing: .5px;
    padding: 10px;
    background-color: #ededed;
}

.contact-form fieldset textarea {
    min-height: 250px;
    background-color: #ededed;
    border: 1px solid var(--main-color);
}

.contact-form fieldset div {
    margin-bottom: 20px;
}

.contact-form .button {
    margin-bottom: 20px;
    background-color: var(--main-color);
    color: var(--secondary-font-color);
    border: 0;
    cursor: pointer;
    transition: .25s ease-in-out all;
}

.contact-form .button:hover {
    background-color: var(--secondary-font-color);
    color: var(--main-color);
}

.contact-details {
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

    .content--contact {
        padding: 0;
    }

    .content--contact .content__heading {
        padding: 0 20px;
    }

    .content--contact .content__wrapper {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;
    }

    .contact-form,
    .contact-details {
        grid-row: auto;
    }

    .contact-form fieldset {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;
        display: flex;
        flex-direction: column;
    }

    .contact-form .button {
        width: 100%;
    }

    .contact-details {
        background-position: right 0px bottom -35px;
        background-size: 60px;
    }
}

hr {
    width: 70%;
    height: 3rem;
    margin: 20px auto;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.spacer--01 {
    background-image: url(~assets/images/chakra-spacer-01.svg);
}

.spacer--02 {
    background-image: url(~assets/images/chakra-spacer-02.svg);
}

@media (max-width: 1020px) {

        hr {
            margin: 10px auto;
        }
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
.content {
    padding: 20px;
    margin-bottom: 40px;
}

.content__wrapper {
    display: flex;
    align-items: center;
}

@media (max-width: 992px) {
    .content__wrapper {
        flex-direction: column;
    }

    .button {
        width: 100%;
        text-align: center;
    }
}

.content--testimonials .content__wrapper {
    flex-direction: column;
    justify-content: center;
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
</style>
