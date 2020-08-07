<template>
  <div :class="$style.box">
    <div v-for="archive in archives">
      <p :class="$style.date">{{ archive.frontmatter.date  }}</p>
      <h3>
        <router-link v-bind:to="archive.path" :class="$style.title">{{ archive.title }}</router-link>
      </h3>
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

<style module>
.box {
    margin-top: 100px;
}
.box div {
    margin-bottom: 1.5em;
    border-bottom: 1px solid #eee;
}
.box div:last-child {
    border: none;
}
.box div > * {
    margin: 0.5em;
}
.date {
    color: #666;
    font-size: 10pt;
    font-weight: bold;
}

.title {
    font-weight: bold;
}
</style>
