<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      width="100%"
      fixed
      temporary
      app
    >
      <v-icon @click="drawer = !drawer">mdi-close</v-icon>
      <NavDrawer :navDrawerItems="navItems"></NavDrawer>
    </v-navigation-drawer>

    <v-app-bar
      color="transparent"
      elevation="0"
      hide-on-scroll
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <div class="logo">
        <a :href="$staticTexts('company.websiteUrl')">
          <img src="@/assets/images/companyLogo.svg" alt="">
        </a>
      </div>
      <NavBar :navBarItems="navItems"></NavBar>
    </v-app-bar>

    <v-main>
      <Nuxt/>
    </v-main>

    <CustomFooter class="hidden-sm-and-down"></CustomFooter>

    <!-- bottom navigation begin -->
    <v-bottom-navigation
    v-model="currentNavigationValue"
    height="auto"
    color="primary"
    class="transparent justify-space-around flex-wrap hidden-md-and-up bottom-navigation"
    >

      <v-btn
      v-for="(item, index) in bottomNavItems" :key="index"
      :to="item.to"
      :value="item.value"
      class="py-3"
      >
        <span>{{item.text}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>

    </v-bottom-navigation>
    <!-- bottom navigation end -->
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavDrawer from '@/components/NavDrawer.vue'
import CustomFooter from '@/components/CustomFooter.vue'
export default {
  name: 'DefaultLayout',
  component:{
    NavBar,
    NavDrawer,
    CustomFooter
  },
  data () {
    return {
      drawer: false,
      navItems:[
        {
          text:'خدمات',
          hasSubItem:true,
          items:[
            {
              text:'زیر منو یک',
              to:'/1'
            },
            {
              text:'زیر منو دو',
              to:'/2'
            },
            {
              text:'زیر منو سه',
              to:'/3'
            },
          ]
        },
        {
          text:'قیمت لحظه ای',
          hasSubItem:false,
          to:'/'
        },
        {
          text:'خرید و فروش ارز دیجیتال',
          hasSubItem:true,
          items:[
            {
              text:'زیر منو یک',
              to:'/1'
            },
            {
              text:'زیر منو دو',
              to:'/2'
            },
            {
              text:'زیر منو سه',
              to:'/3'
            },
          ]
        },
        {
          text:'کسب درآمد',
          hasSubItem:false,
          to:'/'
        },
        {
          text:'راهنما',
          hasSubItem:false,
          to:'/'
        },
        {
          text:'بلاگ',
          hasSubItem:false,
          to:'/'
        },
      ],
      bottomNavItems:[
        { value: 'home', text: 'خانه', icon: 'mdi-home', to: '/' },
        { value: 'wallet', text: 'کیف پول', icon: 'mdi-wallet', to: '/' },
        { value: 'trade', text: 'خرید و فروش', icon: 'mdi-swap-vertical-bold', to: '/' },
        { value: 'signal', text: 'قیمت لحظه ای', icon: 'mdi-signal-cellular-3', to: '/' },
        { value: 'profile', text: 'پروفایل', icon: 'mdi-account', to: '/' }
      ],
      currentNavigationValue:'home'
    }
  }
}
</script>
<style scoped>
:deep(.v-toolbar__content){
  width: 100%;
  justify-content:space-between !important;
}
:deep(.bottom-navigation .v-btn--active){
  color: #1b98f5 !important;
}
</style>
