<script setup lang="ts">
import { siteConfig, themeName } from '../common/helper'

//@ts-ignore
import markdown_it from 'markdown-it'
//@ts-ignore
import mila from 'markdown-it-link-attributes'

const md = new markdown_it()
md.use(mila, {
  attrs: {
    target: "_blank"
  },
})
const currentYear = new Date().getFullYear()
</script>

<template>
    <a-layout-footer id="footer" :class="themeName">
      <div class="md" v-if="siteConfig.footerText" v-html="md.render(siteConfig.footerText)"></div>
      <p>&copy; {{currentYear}} Muska Network. All rights reseved.</p>
    </a-layout-footer>
</template>

<style scoped>
#footer {
  margin-top: 50px;
  font-size: .875rem;
  text-align: center;
  width: 100%;
  padding: 2.5rem;
}
#footer.light {
  background-color: #f8f8f8;
  color: #6c757d;
}
#footer.dark {
  background-color: #111;
  color: #87929c;
}
#footer a {
  font-weight: 600;
  color: #495057;
}
#footer a:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
