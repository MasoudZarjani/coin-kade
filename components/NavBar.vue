<template>
  <div class="d-md-flex flex-wrap align-center justify-space-between w-100 hidden-md-and-down">
    <div class="d-flex flex-wrap align-center navigation-box">
      <div v-for="(item, index) in navBarItems" :key="index" class="nav-items">
        <v-menu
          v-if="item.hasSubItem"
          open-on-hover
          rounded="xl"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="main-item"
              v-bind="attrs"
              v-on="on"
              small
              text
            >
            {{item.text}}
            <v-icon :class="(attrs['aria-expanded'] == 'true')?'rotate-180deg':''">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              link
              v-for="(item, index) in item.items"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title class="sub-item">{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          v-else
          class="route-link"
          text
          small
          :to="item.to"
          >
          {{item.text}}
        </v-btn>
      </div>
    </div>

    <div class="d-flex flex-wrap align-center navBar-options">

      <div class="primary rounded-lg pa-1">
        <v-btn
        text
        small
        color="white"
        to="/"
        >
        ورود
        </v-btn>
        <v-btn
        text
        small
        color="white"
        to="/"
        >
        ثبت نام
        </v-btn>
      </div>

      <v-btn
      fab
      icon
      >
        <v-icon>mdi-arrow-collapse-down</v-icon>
      </v-btn>
    </div>

  </div>
</template>
<script>
export default {
  name:'NavBar',
  props:{
    navBarItems:{
      type:Array,
      required:true
    }
  },
}
</script>
<style scoped>
  .route-link::before{
    background: transparent !important;
  }
  .main-item:focus,.main-item:hover,.main-item::before{
    background: transparent !important;
  }
  .sub-item{
    font-size:14px;
  }
  .rotate-180deg{
    transform: rotate(180deg);
  }
  </style>
