<template>
    <v-footer
      color="secondary"
    >

      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-list flat color="transparent">
            <p class="headline">ارزهای دیجیتال</p>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in currenciesItems"
                :key="i"
                link
                :to="item.to"
              >
                <v-list-item-content>
                  <v-list-item-title class="body-2" v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <v-list flat color="transparent">
            <p class="headline">آموزش ها</p>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in teachesItems"
                :key="i"
                link
                :to="item.to"
              >
                <v-list-item-content>
                  <v-list-item-title class="body-2" v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <v-list flat color="transparent">
            <p class="headline">دسترسی سریع</p>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in quickAccessItems"
                :key="i"
                link
                :to="item.to"
              >
                <v-list-item-content>
                  <v-list-item-title class="body-2" v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="follow-options text-center">
            <div class="logo">
              <a :href="$staticTexts('company.websiteUrl')">
                <img :src="require(`@/assets/images/${$staticTexts('company.logo')}`)" alt="logo">
              </a>
            </div>
            <span class="text-body-1 font-weight-bold">{{$staticTexts('company.slogan')}}</span>
            <div class="follow-links mt-2">
              <v-btn
              v-for="(item, index) in followItems" :key="index"
              class="primary mx-1"
              elevation="2"
              icon
              :to="item.to"
              >
                <v-icon color="white">{{item.icon}}</v-icon>
              </v-btn>
            </div>
          </div>

          <div class="commiunication-options text-center mt-2">
            <div class="hours-work">
              <p class="text-subtitle-1" v-text="$staticTexts('company.workTimes')"></p>
            </div>
            <div class="commiunication-list-box">
              <ul>
                <li class="d-flex align-center commiunication-list">
                  <div class="icon">
                    <v-icon>mdi-phone-in-talk-outline</v-icon>
                  </div>
                  <div class="way-to-connect">
                    <a class="text-subtitle-2 grey--text" :href="`tel:${$staticTexts('company.phone.line1')}`">{{$staticTexts('company.phone.line1')}}</a>
                    <a class="text-subtitle-2 grey--text" :href="`tel:${$staticTexts('company.phone.line2')}`">{{$staticTexts('company.phone.line2')}}</a>
                  </div>
                </li>
                <li class="d-flex align-center commiunication-list">
                  <div class="icon">
                    <v-icon>mdi-email-outline</v-icon>
                  </div>
                  <div class="way-to-connect">
                    <a class="text-subtitle-2 grey--text" :href="`mailto:${$staticTexts('company.email')}`">{{$staticTexts('company.email')}}</a>
                  </div>
                </li>
                <li class="d-flex align-center commiunication-list">
                  <div class="icon">
                    <v-icon>mdi-map-marker-radius-outline</v-icon>
                  </div>
                  <div class="way-to-connect">
                    <a class="text-subtitle-2 grey--text" target="_blank" :href="$staticTexts('company.address.googleMapLink')">
                      <address>{{$staticTexts('company.address.text')}}</address>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <div class="d-flex flex-wrap align-center">
          <v-col
          v-for="(item, index) in getAppItems" :key="index"
          cols="12" md="3" sm="6" xs="12">
            <v-btn
              color="primary"
              class="white--text pa-5 app-market-btn w-100"
              :href="item.to"
            >
              <span>دانلود</span>
                <v-divider
                class="white"
                vertical
                ></v-divider>
              <span>{{item.marketName}}</span>
              <img :src=" require(`@/assets/images/${item.icon}`) " :alt="item.marketName" class="app-market-logo">
            </v-btn>
          </v-col>
        </div>
      </v-row>

      <div class="primary row justify-space-between align-center mt-5 pa-2">
        <div class="white--text">
          {{$staticTexts('company.copyWriteWarning')}}
        </div>
        <div class="white--text">
          © {{ new Date().getFullYear() }} Coinkade,v3.23.0
        </div>
      </div>

    </v-footer>
</template>
<script>
export default {
  name:'CustomFooter',
  data() {
    return {
      currenciesItems: [
        { text: 'خرید و فروش بیت کوین', to:'/' },
        { text: 'خرید و فروش اتریوم', to:'/' },
        { text: 'خرید و فروش دوج کوین', to:'/' },
        { text: 'خرید و فروش لایت کوین', to:'/' },
        { text: 'خرید و فروش ترون', to:'/' },
        { text: 'خرید و فروش کاردانو', to:'/' },
      ],
      teachesItems:[
        { text: 'آموزش خرید و فروش ارز دیجیتال', to:'/' },
        { text: 'آموزش احراز هویت', to:'/' },
        { text: 'آموزش برداشت ارز دیجیتال', to:'/' },
        { text: 'آموزش کیف پول های ارز دیجیتال', to:'/' },
        { text: 'آموزش خرید و فروش ارز دیجیتال', to:'/' },
      ],
      quickAccessItems:[
        { text: 'سوالات متداول', to:'/' },
        { text: 'قوانین و شرایط استفاده', to:'/' },
        { text: 'درباره کوین کده', to:'/' },
        { text: 'تماس با ما', to:'/' },
        { text: 'کارمزد سایت', to:'/' },
        { text: 'مجوز ها', to:'/' },
        { text: 'دعوت دوستان', to:'/' },
        { text: 'بلاگ', to:'/' },
      ],
      followItems:[
        { icon:'mdi-email', to: this.$staticTexts('company.social.email.url') },
        { icon:'mdi-send', to: this.$staticTexts('company.social.telegram.url') },
        { icon:'mdi-twitter', to: this.$staticTexts('company.social.twitter.url') },
        { icon:'mdi-instagram', to: this.$staticTexts('company.social.instagram.url') },
        { icon:'mdi-youtube', to: this.$staticTexts('company.social.youtube.url') },
        { icon:'mdi-facebook', to: this.$staticTexts('company.social.facebook.url') },

      ],
      getAppItems:[
        { marketName:this.$staticTexts('company.appMarket.myket.name'), icon:this.$staticTexts('company.appMarket.myket.logo'), to:this.$staticTexts('company.appMarket.myket.link') },
        { marketName:this.$staticTexts('company.appMarket.cafeBazzar.name'), icon:this.$staticTexts('company.appMarket.cafeBazzar.logo'), to:this.$staticTexts('company.appMarket.cafeBazzar.link') },
        { marketName:this.$staticTexts('company.appMarket.googlePlay.name'), icon:this.$staticTexts('company.appMarket.googlePlay.logo'), to:this.$staticTexts('company.appMarket.googlePlay.link') },
        { marketName:this.$staticTexts('company.appMarket.appStore.name'), icon:this.$staticTexts('company.appMarket.appStore.logo'), to:this.$staticTexts('company.appMarket.appStore.link') },
      ],
    }
  },
}
</script>
<style scoped>
.commiunication-list-box{
  list-style: none;
}
.commiunication-list{
  gap:15px;
}
address{
  font-size: 13px;
}
:deep(.app-market-btn .v-btn__content){
  gap:10px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.app-market-logo{
  width:25px;
}
</style>
