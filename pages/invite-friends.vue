<template>
  <v-container fluid>
    <!-- invite friends banner begin -->
    <v-row class="my-3">
      <v-col cols="12" md="7" sm="12">

        <v-card elevation="0" color="transparent" class="justify-center">
          <v-card-title class="justify-center primary--text text-h6">دعوت از دوستان</v-card-title>
          <v-card-text class="justify-center">
            <div class="text-center">
              بــا دعوت دوستــان خود بــه کویــن کده، تــا 35% از ســود
              .معاملات آن ها به عنوان پاداش به شما تقدیم  می شود
            </div>
            <InvitationRankingGuide :invitingRankItems="invitingRankItems"></InvitationRankingGuide>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
            color="primary"
            class="white--text pa-5 rounded-xl"
            >
              راهنما و قوانین دعوت دوستان
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
      <v-col cols="12" md="5" sm="12">
        <div class="text-center">
          <img src="@/assets/images/referBanner.svg" alt="referBanner" loading="lazy" width="50%">
        </div>
      </v-col>
    </v-row>
    <!-- invite friends banner end -->

    <!-- inviting statistics begin -->
    <v-sheet class="transparent my-3">
      <div class="section-title text-center mb-5">
        <div class="text-h6">آمار دعوت دوستان</div>
      </div>
      <v-row>
        <v-col
        v-for="(item, index) in invitingStatistics" :key="index"
        cols="12" md="3" sm="6" xs="12">
        <InvitationStatisticsOfFriends :invitingStatistic="item"></InvitationStatisticsOfFriends>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- inviting statistics end -->

    <!-- inviting link & code begin -->
    <DefaultInvitationCodeAndLink
    defaultInvitationCode="1OF38"
    defaultInvitationLink="https://coinkade/ref"
    :rewardLevel="1"
    rewardLevelPercentage="15%"
    :contribution="{you:100,friend:0}"
    ></DefaultInvitationCodeAndLink>
    <!-- inviting link & code end -->

    <!-- your inviting codes begin -->
    <YourInvitationCodesTable
    :rewardLevel="1"
    :maxCapacity="20"
    rewardLevelPercentage="15%"
    ></YourInvitationCodesTable>
    <!-- your inviting codes end -->

    <!-- history data begin -->
    <HistoryTable></HistoryTable>
    <!-- history data end -->

    <!-- most profitable people data begin -->
    <MostProfitablePeopleTable></MostProfitablePeopleTable>
    <!-- most profitable people data end -->

    <!-- getting reward begin -->
    <LandScapeSection class="py-5 my-5">
      <template v-slot:content>
        <v-card elevation="0" color="transparent">
          <v-card-title class="justify-center flex-column white--text">
            <div class="text-title">!هنوز پاداش دریافت نکرده اید</div>
          </v-card-title>
          <v-card-text class="text-center white--text">
            <div class="text-subtitle-1">
              برای دریافت پاداش دوستانتان را دعوت کنید
              تـا پس از ثبت‌نام و انجام معامله تا 35% از
              سود معامله را پاداش دریافت کنید
            </div>
          </v-card-text>
          <v-card-actions class="justify-center flex-column">
            <v-btn
            color="white"
            class="quinary--text rounded-xl pa-5"
            >
              اشتراک گذاری کد و لینک دعوت
              <v-icon color="quinary">mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
      </v-card>
      </template>
    </LandScapeSection>
    <!-- getting reward end -->
  </v-container>
</template>
<script>
import InvitationRankingGuide from "@/components/InvitationRankingGuide.vue"
import InvitationStatisticsOfFriends from "@/components/InvitationStatisticsOfFriends.vue"
import DefaultInvitationCodeAndLink from '@/components/DefaultInvitationCodeAndLink.vue'
import YourInvitationCodesTable from '@/components/YourInvitationCodesTable.vue'
import HistoryTable from '@/components/HistoryTable.vue'
import MostProfitablePeopleTable from '@/components/MostProfitablePeopleTable.vue'
export default {
  name:'invite-friends',
  components:{
    InvitationRankingGuide,
    InvitationStatisticsOfFriends,
    DefaultInvitationCodeAndLink,
    YourInvitationCodesTable,
    HistoryTable,
    MostProfitablePeopleTable
  },
  data() {
    return {
      invitingRankItems:[
        { percentage: 15, effect: 'زیر 10 نفر', icon: 'rank1.svg' },
        { percentage: 20, effect: '10 تا 50 نفر', icon: 'rank2.svg' },
        { percentage: 25, effect: '50 تا 500 نفر', icon: 'rank3.svg' },
        { percentage: 30, effect: '500 تا 1000 نفر', icon: 'rank4.svg' },
        { percentage: 35, effect: 'بالای 1000 نفر', icon: 'rank5.svg' }
      ],
      invitingStatistics:[
        { icon: 'addFriend.svg', amount: 0, unit: 'نفر', title: 'دوستان دعوت شده' },
        { icon: 'checked.svg', amount: 0, unit: 'نفر', title: 'دوستان تایید شده' },
        { icon: 'trade.svg', amount: 0, unit: 'عدد', title: 'معاملات دوستان' },
        { icon: 'giftBox.svg', amount: 0, unit: 'تومان', title: 'مجموع پاداش' },
      ],
    }
  },
}
</script>
<style scoped>
:deep(.invitingCodes-table-box tbody tr){
  background:#fff;
}
:deep(.invitingCodes-table-box tbody tr:first-child td:first-child){
  border-top-right-radius: 15px;
}
:deep(.invitingCodes-table-box tbody tr:first-child td:last-child){
  border-top-left-radius: 15px;
}
:deep(.invitingCodes-table-box tbody tr:last-child td:first-child){
  border-bottom-right-radius: 15px;
}
:deep(.invitingCodes-table-box tbody tr:last-child td:last-child){
  border-bottom-left-radius: 15px;
}
:deep(.invitingCodes-table-box tr td),:deep(.invitingCodes-table-box tr th){
  border-bottom: none !important;
}
</style>
