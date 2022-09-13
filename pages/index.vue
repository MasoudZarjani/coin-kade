<template>
  <v-container fluid>
    <!-- referral banner begin -->
    <v-row class="my-3">
      <v-col cols="12" md="6" sm="12">
        <v-card class="text-center" elevation="0" color="transparent">
          <v-card-title class="primary--text text-h6 justify-center">دریافت پاداش با دعوت از دوستان </v-card-title>
          <v-card-text class="text-body-1">
            بــا دعوت دوستــان خود بــه کویــن کده، تــا 35% از ســود
            .معاملات آن ها به عنوان پاداش به شما تقدیم  می شود
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" class="white--text rounded-xl pa-5" :to="{ name: 'invite-friends' }">
              دریافت لینک دعوت
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <div class="text-center">
          <img src="@/assets/images/referBanner.svg" alt="referBanner" loading="lazy" width="50%">
        </div>
      </v-col>
    </v-row>
    <!-- referral banner end -->

    <!-- how to invite friends begin -->
    <v-sheet class="transparent my-3">
      <div class="section-title text-center mb-5">
        <div class="text-h6">چطور دوستان خود را به <span class="primary--text">کوین کده</span> دعوت کنید؟</div>
      </div>
      <v-row>
        <v-col
        v-for="(item, index) in invitingSteps" :key="index"
        cols="12" md="4" sm="4" xs="12">
          <InvitingFriendsSteps :invitingStep="item"></InvitingFriendsSteps>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- how to invite friends end -->

    <!-- rules of inviting friends begin -->
    <v-card class="my-3" elevation="0" color="transparent">
      <v-card-title class="text-h6">قوانین دعوت از دوستان</v-card-title>
      <v-card-text>
          <div>
            تا اینجا با نحوه ی ساخت کد و دعوت از دوستان آشنا شدیم. قوانین استفاده از این طرح به شرح زیر است:
          </div>
          <ul class="list-style-none">
            <li>
              هیچ‌گونه محدودیتی در تعداد زیرمجموعه‌های شما یا تعداد افرادی که به کوین کده دعوت می‌کنید وجود ندارد
            </li>
            <li>
              مسئولیت اطمینان از ثبت کد دعوت برای کاربران دعوت شده صرفا
            </li>
          </ul>
      </v-card-text>
    </v-card>
    <!-- rules of inviting friends end -->

    <!-- start business begin -->
    <LandScapeSection class="py-5 my-5">
      <template v-slot:content>
        <v-card elevation="0" color="transparent">
          <v-card-title class="justify-center flex-column white--text">
            <div class="text-title">همین حالا شروع به کسب درآمد کنید</div>
            <div class="text-subtitle-1">ثبت نام و دریافت لینک دعوت</div>
          </v-card-title>
          <v-card-text>
            <v-col class="mx-auto" cols="12" md="6" sm="12">
              <v-form>
                  <v-text-field
                  class="phone-input"
                  label="شماره همراه خود را وارد کنید"
                  filled
                  rounded
                  dense
                >
                  <template v-slot:append class="ma-3">
                    <v-btn
                    color="primary"
                    class="rounded-xl white--text"
                    type="submit"
                    >
                    شروع ثبت نام
                    </v-btn>
                  </template>
                </v-text-field>
              </v-form>
            </v-col>
          </v-card-text>
        </v-card>
      </template>
    </LandScapeSection>
    <!-- start business end -->
  </v-container>
</template>

<script>
import InvitingFriendsSteps from'@/components/InvitingFriendsSteps.vue'
export default {
  name: 'IndexPage',
  components:{
    InvitingFriendsSteps
  },
  data() {
    return {
      invitingSteps:[
        { icon:'signUp.svg', title:'ثبت نام ', description:'با ثبت نام در کوین کده، لینک دعوت سفارشی با کارمزد دلخواه بسازید'},
        { icon:'invite.svg', title:'دعوت از دوستان', description:'لینـــک دعـوت را بــرای دوستــان خــود بفرستید تا از طریق آن در کوین کده .ثبت نام نمایید'},
        { icon:'getReward.svg', title:'دریافت پاداش', description:'با هر معامله دوستانتان تا 40% از سود معاملات آن هــا بــه شما تعلق می گیرد'},
      ]
    }
  },
}
</script>
<style scoped>
:deep(.phone-input .v-input__append-inner){
  margin:10px 0;
}
:deep(.phone-input .v-input__slot){
  background: #fff !important;
}

@media screen and (max-width:600px) {
 :deep(.phone-input .v-input__slot){
  flex-direction: column;
 }
 :deep(.phone-input .v-input__append-inner){
  margin: 15px auto;
 }
}
</style>
