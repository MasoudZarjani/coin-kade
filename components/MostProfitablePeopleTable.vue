<template>
  <div class="transparent my-10">
    <!-- inviting codes table box begin -->
    <div class="invitingCodes-table-box">
      <v-data-table
      hide-default-footer
      :headers="headers"
      :items="mostProfitablePeople"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="transparent"
      >
        <template v-slot:top>
          <div class="d-flex align-center justify-space-between">
            <div class="text-h6">پردرآمدترین ها در <span class="primary--text">کوین کده</span></div>
            <div class="month-and-total">
              <v-btn-toggle
                  v-model="monthTotalSwitch"
                  class="primary rounded-xl my-3"
                  mandatory
                  group
                  >
                    <v-btn small value="month" class="rounded-xl px-5 white--text">
                      {{currentMonth}}
                    </v-btn>

                    <v-btn small value="total" class="rounded-xl px-5 white--text">
                      مجموع
                    </v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </template>
        <template v-slot:item.rankSvg="{ item }">
          <img :src="require(`@/assets/images/rank${item.rank}.svg`)" :alt="`rank${item.rank}`" width="20%">
        </template>
        <template v-slot:item.totalRewards="{ item }">
          {{`${item.totalRewards} تومان`}}
        </template>
        <template v-slot:item.friendsCount="{ item }">
          {{`${item.friendsCount} نفر`}}
        </template>

      </v-data-table>
      <div
      v-if="mostProfitablePeople.length > itemsPerPage"
      class="text-center pt-2">
        <v-pagination
        v-model="page"
        :total-visible="7"
        :length="pageCount"
        ></v-pagination>
      </div>
    </div>
    <!-- inviting codes table box end -->
  </div>
</template>
<script>
export default {
  name:'MostProfitablePeopleTable',
  data() {
    return {
      monthTotalSwitch: 'month',
      currentMonth: new Intl.DateTimeFormat('fa-IR', { month: 'long'}).format(new Date()),
      headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'rankSvg',
          },
          { text: 'رتبه ', value: 'rank' },
          { text: 'حساب کاربری', value: 'account', sortable: false },
          { text: 'مجموع پاداش ها', value: 'totalRewards' },
          { text: 'تعداد دوستان', value: 'friendsCount' },
      ],
      mostProfitablePeople: [
        {
          rank: 1,
          account:'09398885018',
          totalRewards: new Intl.NumberFormat().format(85159644),
          friendsCount: new Intl.NumberFormat().format(1500),
        },
        {
          rank: 5,
          account:'09398885019',
          totalRewards: new Intl.NumberFormat().format(1250316),
          friendsCount: new Intl.NumberFormat().format(10),
        },
        {
          rank: 4,
          account:'093988854035',
          totalRewards: new Intl.NumberFormat().format(98741),
          friendsCount: new Intl.NumberFormat().format(15),
        },
        {
          rank: 2,
          account:'09125897896',
          totalRewards: new Intl.NumberFormat().format(13217),
          friendsCount: new Intl.NumberFormat().format(180),
        },
        {
          rank: 4,
          account:'09154893636',
          totalRewards: new Intl.NumberFormat().format(45789),
          friendsCount: new Intl.NumberFormat().format(112),
        },
        {
          rank: 2,
          account:'09398885045',
          totalRewards: new Intl.NumberFormat().format(13235),
          friendsCount: new Intl.NumberFormat().format(45),
        },
        {
          rank: 3,
          account:'09394441489',
          totalRewards: new Intl.NumberFormat().format(78965),
          friendsCount: new Intl.NumberFormat().format(134),
        },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
    }
  },
}
</script>
<style scoped>
:deep(.month-and-total .v-item--active.v-btn--active){
  background: #fff !important;
}
:deep(.month-and-total .v-item--active.v-btn--active span){
  color: #1b98f5;
}
</style>
