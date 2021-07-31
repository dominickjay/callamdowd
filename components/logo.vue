<template>
    <a class="logo" href="/">
        <img
            :src="person.fields.logo.fields.file.url + '?w=1200'"
            :alt="person.fields.logo.fields.title"
        />
    </a>
</template>

<script>
export default {
  props: ['person']
}
</script>
