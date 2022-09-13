<template>
  <div class="transparent my-3">
    <!-- share invitation link dialog begin -->
    <v-dialog
      v-model="shareInvitationLinkDialog"
      width="50%"
    >
      <v-card class="rounded-xl">
        <v-card-title>
          <div class="w-100 d-flex flex-wrap align-center justify-space-between">
            <div class="text-h6">
              اشتراک گذاری لینک دعوت
            </div>
            <div class="control-btn">
              <v-tooltip
                v-model="invitationLinkDialogInfoTooltip"
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-information-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>اطلاعات را مشاهده می کنید</span>
              </v-tooltip>
              <v-btn
              @click="shareInvitationLinkDialog = !shareInvitationLinkDialog"
              icon
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-title>

        <v-card-text class="share-invitation-link-dialog">
          <v-sheet color="#daebf9" class="pa-5 rounded-xl">
            <div class="text-body1">
              خرید و فروش ارز دیجیتال با سه کلیک
              همین الان با استفاده از کد دعوت             در صرافی
              ارزدیجیتال کوین کده ثبت نام کنید و به سرعت به خرید
              .و فروش ارزدیجیتال بپردازید
              <ul>
                <li>بهترین قیمت ارزدیجیتال</li>
                <li>احراز هویت اتومات و ضروری</li>
                <li>تسویه تومانی و ارزی فوری</li>
              </ul>
              <span class="quinary--text">{{defaultInvitationLink}}</span>
            </div>
          </v-sheet>
        </v-card-text>

        <v-card-actions>
          <div class="w-100 d-flex justify-space-between align-center share-option-box">
            <div class="text-h6 quinary--text">اشتراک گذاری در:</div>
            <div class="share-btn-box">
              <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              @click="copytToClipBoard(defaultInvitationLink)"
              >
                <v-icon color="white">
                mdi-content-copy
                </v-icon>
              </v-btn>

              <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              target="_blank"
              href="https://share.instagram.com/"
              >
                <v-icon color="white">
                mdi-instagram
                </v-icon>
              </v-btn>

              <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              href="https://share.google.com/"
              target="_blank"
              >
                <v-icon color="white">
                mdi-send
                </v-icon>
              </v-btn>

              <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              target="_blank"
              :href=" `https://wa.me/?text=Checkout%20this%20page.%20${defaultInvitationLink}` "
              >
                <v-icon color="white">
                mdi-whatsapp
                </v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-actions>

      </v-card>
    </v-dialog>
    <!-- share invitation link dialog end -->

    <!-- share pic and passage dialog begin -->
    <v-dialog
      v-model="sharePicAndPassageDialog"
      width="80%"
    >
      <v-card class="rounded-xl">
        <v-card-title>
          <div class="w-100 d-flex flex-wrap align-center justify-space-between">
            <div class="text-h6">
              اشتراک گذاری تصویر و متن
            </div>
            <div class="control-btn">
              <v-tooltip
                v-model="picAndPassageDialogInfoTooltip"
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-information-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>اطلاعات را مشاهده می کنید</span>
              </v-tooltip>
              <v-btn
              @click="sharePicAndPassageDialog = !sharePicAndPassageDialog"
              icon
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-title>
        <v-card-text class="share-pic-and-passage-dialog">
          <v-row class="flex-wrap">
            <v-col cols="12" md="6" sm="12">
              <div class="text-center post-and-story">
                <v-btn-toggle
                v-model="postStorySwitch"
                class="primary rounded-xl my-3"
                mandatory
                group
                >
                  <v-btn small value="post" class="rounded-xl px-5 white--text">
                    پست
                  </v-btn>

                  <v-btn small value="story" class="rounded-xl px-5 white--text">
                    استوری
                  </v-btn>
                </v-btn-toggle>
                <v-carousel
                  show-arrows-on-hover
                  delimiter-icon="mdi-window-minimize"
                  class="my-3"
                  height="350"
                >
                  <v-carousel-item
                    v-for="i in 5"
                    :key="i"
                  >
                    <img src="@/assets/images/ads-screen-banner.png" class="rounded-xl h-100 w-100" alt="" loading="lazy">
                    <!-- <v-img
                      :src="require('@/assets/images/ads-screen-banner.png')"
                      :aspect-ratio="16/9"
                      class="grey lighten-2 rounded-xl h-100"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img> -->
                  </v-carousel-item>
                </v-carousel>
                <v-btn
                color="primary"
                class="text-center white--text rounded-xl w-100"
                >
                  <v-icon>mdi-tray-arrow-down</v-icon>
                  ذخیره تصویر
                </v-btn>
              </div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="6" sm="12">
              <div class="text-center ads-and-friendly">
                <v-btn-toggle
                v-model="adsFriendlySwitch"
                class="primary rounded-xl my-3"
                mandatory
                group
                >
                  <v-btn small value="ads" class="rounded-xl px-5 white--text">
                    تبلیغاتی
                  </v-btn>

                  <v-btn small value="friendly" class="rounded-xl px-5 white--text">
                    صمیمی
                  </v-btn>
                </v-btn-toggle>
                <v-carousel
                  show-arrows-on-hover
                  delimiter-icon="mdi-window-minimize"
                  class="my-3"
                  height="350"
                >
                  <v-carousel-item
                    v-for="i in 5"
                    :key="i"
                  >
                    <v-card class="d-flex justify-center align-center pa-5 tertiary rounded-xl h-100">
                      <v-card-text>
                        {{adsCaptionText}}
                      </v-card-text>
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
                <v-btn
                color="primary"
                class="text-center white--text rounded-xl w-100"
                @click="copytToClipBoard(adsCaptionText)"
                >
                  <v-icon>mdi-content-copy</v-icon>
                  کپی متن کپشن
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- share pic and passage dialog end -->

    <!-- main content begin -->
    <div class="text-h6 mb-3">کد و لینک دعوت پیش فرض</div>
    <v-card
    class="rounded-lg pa-5"
    >
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div class="d-flex flex-column gap-10">
            <v-text-field
              class="rounded-lg text-field-data"
              v-model="defaultInvitationCode"
              disabled
              solo
              hide-details="auto"
            >
            <template v-slot:append>
              <v-icon @click="copytToClipBoard(defaultInvitationCode)" color="primary" class="mr-2">
                mdi-content-copy
              </v-icon>
            </template>
            <template v-slot:prepend-inner>
              <span class="text-subtitle-1">کد دعوت پیش فرض</span>
            </template>
            </v-text-field>

            <v-text-field
              class="rounded-lg text-field-data"
              v-model="defaultInvitationLink"
              disabled
              solo
              hide-details="auto"
            >
            <template v-slot:append>
              <v-icon @click="copytToClipBoard(defaultInvitationLink)" color="primary" class="mr-2">
                mdi-content-copy
              </v-icon>
            </template>
            <template v-slot:prepend-inner>
              <span class="text-subtitle-1">لینک دعوت پیش فرض</span>
            </template>
            </v-text-field>

            <v-text-field
              class="rounded-lg text-field-data"
              v-model="rewardLevelPercentage"
              disabled
              solo
              hide-details="auto"
            >
            <template v-slot:append>
              <div  class="primary--text text-body-1">
                سطح{{rewardLevel}}
              </div>
            </template>
            <template v-slot:prepend-inner>
              <span class="text-subtitle-1">سطح دریافت پاداش</span>
            </template>
            </v-text-field>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <div class="d-flex align-center justify-center h-100">
            <LandScapeSection class="rounded-lg w-100">
              <template v-slot:content>
                <div class="text-center reward-level-box-title">
                  <div class="text-h6 mb-3 white--text">سطح دریافت پاداش</div>
                  <div class="text-h4 white--text">{{rewardLevelPercentage}} سطح{{rewardLevel}}</div>
                </div>
                <v-row class="my-3 justify-center gap-10">
                  <div class="text-center contribution-yours">
                    <div class="text-h6 white--text">سهم شما</div>
                    <div class="text-h5 white--text">%{{contribution.you}}</div>
                  </div>
                  <v-divider vertical class="white mx-5 hidden-xs-only"></v-divider>
                  <div class="text-center contribution-friend">
                    <div class="text-h6 white--text">سهم دوست</div>
                    <div class="text-h5 white--text">%{{contribution.friend}}</div>
                  </div>
                </v-row>
              </template>
            </LandScapeSection>

          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div class="share-btn-box">
            <v-btn
            color="primary"
            rounded
            class="w-100 pa-5"
            @click="shareInvitationLinkDialog = !shareInvitationLinkDialog"
            >
              <v-icon left>mdi-share-variant</v-icon>
              اشتراک گذاری
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <div class="ads-btn-box">
            <v-btn
            color="quaternary"
            rounded
            class="w-100 pa-5 ads-btn"
            @click="sharePicAndPassageDialog = !sharePicAndPassageDialog"
            >
              <v-icon left>mdi-image-area</v-icon>
              تصویر تبلیغاتی
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- main content end -->
  </div>
</template>
<script>
export default {
  name:'DefaultInvitationCodeAndLink',
  data() {
    return {
      shareInvitationLinkDialog: false,
      sharePicAndPassageDialog: false,
      invitationLinkDialogInfoTooltip: false,
      picAndPassageDialogInfoTooltip: false,
      postStorySwitch: 'post',
      adsFriendlySwitch: 'ads',
      adsCaptionText: 'صرافی ارز دیجیتال کوین کده کوین کده درگاه ورود به دنیای ارز های دیجیتال✅ متنوع‌ترین ارزهای دیجیتال🔹 احراز هویت اتومات و سریع🔹 کسب درآمد رایگان با دعوت از دوستان 🔹 فرصت را از دست ندهید و همین حالا با واردکردن کد✅ دعوت زیر تا 35% از سود معاملات دوستا'
    }
  },
  props:{
    defaultInvitationCode:{
      type: String,
      required: true,
    },
    defaultInvitationLink:{
      type: String,
      required: true,
    },
    rewardLevel:{
      type: Number,
      required: true,
    },
    rewardLevelPercentage:{
      type: String,
      required: true,
    },
    contribution:{
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
:deep(.text-field-data .v-input__slot){
  background-color: #f2f2f2 !important;
  display: flex;
  flex-wrap: wrap;
}
:deep(.text-field-data .v-text-field__slot input){
  text-align:left;
  color: #1b98f5;
}
.ads-btn{
  border: 2px solid #1b98f5 !important;
}
.share-invitation-link-dialog ul li::marker{
  color: #1b98f5 !important;
}
:deep(.post-and-story .v-item--active.v-btn--active),
:deep(.ads-and-friendly .v-item--active.v-btn--active){
  background: #fff !important;
}
:deep(.post-and-story .v-item--active.v-btn--active span),
:deep(.ads-and-friendly .v-item--active.v-btn--active span){
  color: #1b98f5;
}
:deep(.v-carousel__controls){
  position: relative;
  background:transparent;
}
:deep(.v-carousel__controls .v-btn.v-btn--icon){
  color: #cacaca;
}
:deep(.v-carousel__controls__item .v-icon){
  opacity: 1;
}
</style>
