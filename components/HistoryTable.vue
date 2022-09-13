<template>
  <div class="transparent my-10">
    <!-- inviting codes table box begin -->
    <div class="invitingCodes-table-box">
      <v-data-table
      hide-default-footer
      :search="search"
      :headers="headers"
      :items="historyData"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="transparent"
      >
        <template v-slot:top>
          <div class="d-flex align-center justify-space-between">
            <div class="text-h6">تاریخچه</div>
            <div class="search-box">
              <v-text-field
                @input="logSearch()"
                v-model="search"
                class="search-input"
                placeholder="جستجو کد رفرال"
                append-icon="mdi-magnify"
                single-line
                filled
                rounded
                dense
                hide-details
              >
              </v-text-field>
            </div>
          </div>
        </template>
        <template v-slot:item.rowNumber="{ index }">
          {{index+1}}
        </template>
        <template v-slot:item.registerDate="{ item }">
            {{item.registerDate.toLocaleDateString()}}
        </template>
        <template v-slot:item.transactionsCount="{ item }">
          {{`${item.transactionsCount} عدد`}}
        </template>

        <template v-slot:item.level="{ item }">
          {{`سطح ${item.level}`}}
        </template>

      </v-data-table>
      <div
      v-if="historyData.length > itemsPerPage"
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
  name:'HistoryTable',
  data() {
    return {
      search: '',
      headers: [
          {
            text: '#',
            align: 'start',
            value: 'rowNumber',
          },
          { text: 'حساب', value: 'account', sortable: false },
          { text: 'زمان ثبت نام', value: 'registerDate' },
          { text: 'تعداد معاملات', value: 'transactionsCount' },
          { text: 'سطح', value: 'level' },
          { text: 'وضعیت', value: 'status', sortable: false },
      ],
      historyData: [
        {
          account:'09398885018',
          registerDate: new Date("2020-05-12T23:50:21.817Z"),
          transactionsCount: 4,
          level: 1,
          status: 'تایید شده'
        },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
    }
  },
  methods: {
    logSearch(){
      console.log(this.search);
    }
  }
}
</script>
<style scoped>
:deep(.search-input .v-input__slot){
  background: #fff !important;
}
</style>
