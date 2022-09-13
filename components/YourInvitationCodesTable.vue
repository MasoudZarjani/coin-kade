<template>
  <div class="transparent my-10">
    <!-- inviting codes crud dialog begin -->
    <v-dialog
      v-model="invitingCodesCrudDialog"
      max-width="80%"
    >
      <v-card class="rounded-xl">
        <v-card-title>
          <div class="text-h6">
            {{formTitle}}
          </div>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <div class="referral-code-box">
                <div class="d-flex align-center gap-10 referral-code-box-title">
                  <div class="text-h6">سطح فعلی دریافتی پاداش:</div>
                  <v-chip
                  color="primary"
                  >
                    <span>{{rewardLevelPercentage}}</span>
                    <span>سطح {{rewardLevel}}</span>
                  </v-chip>
                </div>
                <div class="determine-share-of-your-friends">
                  <div class="text-h6 my-3">سهم دوستانتان را مشخص کنید؟</div>
                  <v-sheet color="tertiary" class="pa-5 rounded-xl my-3">
                    <v-row class="align-center my-3">
                      <v-col cols="12" md="6" sm="12">
                        <div class="d-flex flex-column justify-center align-center gap-10 your-contribution">
                          <div class="text-body-2">سهم شما</div>
                          <div class="text-h6">{{`% ${contributionsRange[0]}`}}</div>
                        </div>
                      </v-col>
                      <v-divider vertical></v-divider>
                      <v-col cols="12" md="6" sm="12">
                        <div class="d-flex flex-column justify-center align-center gap-10 share-of-friends">
                          <div class="text-body-2">سهم دوستان</div>
                          <div class="text-h6">{{`% ${contributionsRange[1]}`}}</div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-range-slider
                    inverse-label
                    v-model="contributionsRange"
                    :ripple="false"
                    class="my-3"
                    color="primary"
                    :min="0"
                    :max="15"
                    track-color="white"
                    ticks="always"
                    tick-size="5"
                    step="5"
                    :tick-labels="contributionsItemLabel"
                    thumb-label="always"
                    />

                  </v-sheet>
                  <v-text-field
                  v-model="editedItem.note"
                  class="note-input"
                  label="یادداشت"
                  filled
                  rounded
                  dense
                  hide-details
                  ></v-text-field>
                  <v-checkbox
                  v-model="editedItem.isDefault"
                  label="انتخاب به عنوان کد دعوت پیش فرض"
                  color="primary"
                  hide-details
                  ></v-checkbox>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-sheet color="quaternary" class="d-flex flex-column justify-center align-center h-100 rounded-xl pa-5">
                <p>
                  می توانید سهم دریافتی پاداش خود و دوستانتان را تنظیم
                  .نمایید و یک کد دعوت دلخواه بسازید
                  «پس از ساختن کد، آن را در جدول «کد های دعوت شما
                  .می توانید بیابید
                  :توجه
                  زمانی که سطح دریافت پاداش شما ارتقا پیدا کند، دوستان
                  .نیز به همبن نسبت پاداش بیشتر دریافت خوهند کرد
                  نحوه محاسبه:
                </p>
                <div class="d-flex flex-row-reverse flex-wrap justify-center align-center">
                  <div class="d-flex flex-column align-center share-distribution-coefficient">
                    <div class="text-h6">%0</div>
                    <div class="text-subtitle-1">ضریب توزیع سهم</div>
                  </div>
                  <div class="text-h6 math-operator">*</div>
                  <div class="d-flex flex-column align-center your-bonus-percentage">
                    <div class="text-h6">%15</div>
                    <div class="text-subtitle-1">درصد پاداش شما</div>
                  </div>
                  <div class="text-h6 math-operator">=</div>
                  <div class="d-flex flex-column align-center share-of-friends">
                    <div class="text-h6">%0</div>
                    <div class="text-subtitle-1">سهم دوستان</div>
                  </div>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <div class="make-invitationCode-btn-box">
                <v-btn
                color="primary"
                class="rounded-xl white--text w-100 pa-5"
                @click="applyChanges()"
                >
                ساخت کد دعوت
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <div class="cancel-operation-btn-box">
                <v-btn
                color="quaternary"
                class="rounded-xl w-100 pa-5 cancel-operation-btn"
                @click="cancel()"
                >
                انصراف
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- inviting codes crud dialog end -->
    <!-- inviting codes table box begin -->
    <div class="invitingCodes-table-box">
      <v-data-table
      hide-default-footer
      :headers="headers"
      :items="invitingCodesData"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="transparent"
      >
        <template v-slot:top>
          <div class="d-flex align-center justify-space-between">
            <div class="text-h6">کد های دعوت شما</div>
            <div class="d-flex align-center justify-space-between add-code">
              <div class="primary--text text-subtitle-1">
                {{maxCapacity-invitingCodesData.length}} از {{maxCapacity}} ظرفیت باقی مانده
              </div>
              <v-btn
              color="primary"
              :disabled="(maxCapacity == invitingCodesData.length)?true:false"
              class="white--text mr-3 rounded-xl"
              @click="invitingCodesCrudDialog = !invitingCodesCrudDialog"
              >
                ساخت کد جدید
                <v-icon right>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </template>
        <template v-slot:item.rowNumber="{ index }">
          {{index+1}}
        </template>
        <template v-slot:item.invitingCode="{ item }">
          <div class="d-flex flex-column align-start">
            {{item.invitingCode}}
            <v-chip
            v-if="item.isDefault"
            color="primary"
            x-small
            outlined
            >پیش فرض</v-chip>
          </div>
        </template>
        <template v-slot:item.note="{ item }">
          {{(item.note == '')?'____':item.note}}
        </template>
        <template v-slot:item.yourContribution="{ item }">
          {{`% ${item.yourContribution}`}}
        </template>
        <template v-slot:item.friendsContribution="{ item }">
          {{`% ${item.friendsContribution}`}}
        </template>
        <template v-slot:item.inviteds="{ item }">
          {{`${item.inviteds} نفر`}}
        </template>
        <template v-slot:item.bonusReceived="{ item }">
          {{`${item.bonusReceived} تومان`}}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-horizontal </v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="actionPlay(item)">
                <v-list-item-icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>اشتراک گذاری</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="actionPlay(item)">
                <v-list-item-icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>کپی لینک دعوت</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="copytToClipBoard(item.invitingCode)">
                <v-list-item-icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>کپی کد دعوت</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="editItem(item)">
                <v-list-item-icon>
                  <v-icon>mdi-square-edit-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>ویرایش</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="item.isDefault = !item.isDefault">
                <v-list-item-icon>
                  <v-icon v-if="item.isDefault" color="primary">mdi-checkbox-marked-outline</v-icon>
                  <v-icon v-else color="primary">mdi-checkbox-blank-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>پیش فرض</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
      <div
      v-if="invitingCodesData.length > itemsPerPage"
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
  name:'YourInvitationCodesTable',
  data() {
    return {
      invitingCodesCrudDialog: false,
      headers: [
          {
            text: '#',
            align: 'start',
            value: 'rowNumber',
          },
          { text: 'کد دعوت', value: 'invitingCode', sortable: false },
          { text: 'یادداشت', value: 'note', sortable: false },
          { text: 'سهم شما', value: 'yourContribution' },
          { text: 'سهم دوستانتان', value: 'friendsContribution' },
          { text: 'دعوت شده ها', value: 'inviteds' },
          { text: 'پاداش دریافتی', value: 'bonusReceived' },
          { text: 'عملیات', value: 'actions', sortable: false },
      ],
      invitingCodesData: [
        {
          isDefault: true,
          invitingCode: '1OF38',
          note: 'یادداشت من اینجاست :)',
          yourContribution: 5,
          friendsContribution: 15,
          inviteds: 0,
          bonusReceived: 0
        },
      ],
      editedIndex: -1,
      contributionsRange:[0,0],
      editedItem:{
          isDefault: false,
          invitingCode: '',
          note: '',
          yourContribution: 0,
          friendsContribution: 0,
          inviteds: 0,
          bonusReceived: 0
      },
      defaultItem:{
          isDefault: false,
          invitingCode: '',
          note: '',
          yourContribution: 0,
          friendsContribution: 0,
          inviteds: 0,
          bonusReceived: 0
      },
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      contributionsItemLabel: ['%0','%5','%10','%15']
    }
  },
  props:{
    rewardLevel:{
      type: Number,
      required: true
    },
    rewardLevelPercentage:{
      type: String,
      required: true
    },
    maxCapacity:{
      type: Number,
      required: true
    }
  },
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'ساخت کد دعوت جدید' : 'ویرایش کد دعوت'
      },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.invitingCodesData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.contributionsRange[0] = this.editedItem.yourContribution
      this.contributionsRange[1] = this.editedItem.friendsContribution
      this.invitingCodesCrudDialog = true
    },
    cancel() {
      this.invitingCodesCrudDialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.contributionsRange = [0,0]
        this.editedIndex = -1
      })
    },
    applyChanges() {
      this.editedItem.yourContribution = this.contributionsRange[0]
      this.editedItem.friendsContribution = this.contributionsRange[1]
      if (this.editedIndex > -1) {
        Object.assign(this.invitingCodesData[this.editedIndex], this.editedItem)
      } else {
        this.invitingCodesData.push(this.editedItem)
      }
      this.cancel()
    },
    actionPlay(item){
      console.log(item);
    },
  },
}
</script>
<style scoped>
:deep(.note-input .v-input__slot){
  background-color: #daebf9 !important;
}
.cancel-operation-btn{
  border: 2px solid #1b98f5 !important;
}
</style>
