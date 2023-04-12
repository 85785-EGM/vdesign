<template>
  <div class="flex-column project">
    <section class="flex-row project-section">
      <div class="flex-column project-sidebar">
        <layout-attr />
      </div>
      <div class="flex-column project-menu">
        <layout-content />
      </div>
      <div class="flex-column project-content">
        <layout-menu />
      </div>
      <div class="flex-column project-attr">
        <layout-side />
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import LayoutAttr from './attr/Attr.vue'
import LayoutContent from './content/Content.vue'
import LayoutMenu from './menu/Menu.vue'
import LayoutSide from './side/Side.vue'

defineComponent({
  'layout-attr': LayoutAttr,
  'layout-content': LayoutContent,
  'layout-menu': LayoutMenu,
  'layout-side': LayoutSide
})
</script>

<style scoped>
html,
body,
.project {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.project {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.project-section {
  flex: 1;
}
.project-sidebar,
.project-menu,
.project-attr {
  background-color: white;
}
.project-sidebar {
  border-right: 1px solid #e5e6eb;
  width: var(--project-sidebar-width);
}
.project-menu {
  width: var(--project-menu-width);
}
.project-attr {
  width: var(--project-attr-width);
}
.project-content {
  flex: 1;
}
</style>
