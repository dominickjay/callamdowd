<template>
  <nav role="navigation" class="navigation">
    <ul class="navigation__list">
        <li class="navigation__listitem">
            <nuxt-link class="navigation__listlink" to="/">
                Home
            </nuxt-link>
        </li>
        <li class="navigation__listitem">
            <nuxt-link class="navigation__listlink" to="/about">
                About
            </nuxt-link>
        </li>
        <li class="navigation__listitem">
            <nuxt-link class="navigation__listlink" to="/accreditations">
                Accreditations
            </nuxt-link>
        </li>
        <li class="navigation__listitem">
            <nuxt-link class="navigation__listlink" to="/services">
                Services
            </nuxt-link>
        </li>
        <li class="navigation__listitem">
            <nuxt-link class="navigation__listlink" to="/tutorials">
                Tutorials
            </nuxt-link>
        </li>
        <li class="navigation__listitem">
            <a href="#contact" class="navigation__listlink">Contact</a>
        </li>
    </ul>
  </nav>
</template>

<style>

.navigation__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-left: 0;
    padding: 0;
    list-style: none;
}

.navigation__listitem {
    padding: 0 20px;
}

.navigation__listlink {
    font-family: var(--font-serif);
    text-decoration: none;
    color: var(--font-color);
    letter-spacing: .5px;
    font-size: 1.15em;
}

.navigation__listlink:hover {
    text-decoration: underline;
}

@media (max-width: 992px) {

    .navigation__list {
        justify-content: flex-start;
        padding: 20px 0;
        margin: 0;
    }

    .navigation__listitem {
        padding: 0;
        padding-right: 40px;
    }
}
</style>
