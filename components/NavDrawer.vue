<template>
  <v-list>
    <template v-for="(item, index) in navDrawerItems">
      <v-list-item v-if="!item.hasSubItem" :to="item.to" :key="index">
        <v-list-item-title>{{item.text}}</v-list-item-title>
      </v-list-item>
      <v-list-group
        v-else
        :value="false"
      >
        <template v-slot:activator>
          <v-list-item-title>{{item.text}}</v-list-item-title>
        </template>
        <v-list-item
            v-for="(item, i) in item.items"
            :key="i"
            :to="item.to"
            link
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
  </v-list>
</template>
<script>
export default {
  name:'NavDrawer',
  props:{
    navDrawerItems:{
      type:Array,
      required:true
    }
  }
}
</script>
