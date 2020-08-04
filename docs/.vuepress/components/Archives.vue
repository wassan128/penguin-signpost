<template>
  <div>
    <div v-for="archive in archives">
      <h2>
        <router-link v-bind:to="archive.path">{{ archive.title }}</router-link>
      </h2>
      <p>{{ archive.frontmatter.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    archives() {
      return this.$site.pages
        .filter((archive) => archive.path.match(/^\/archives\/\d/))
        .sort((a, b) => (
          new Date(b.frontmatter.date) - new Date(a.frontmatter.date)),
        )
    },
  },
}
</script>
