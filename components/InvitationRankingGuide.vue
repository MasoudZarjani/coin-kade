<template>
<div class="d-flex flex-wrap justify-center align-center my-5 gap-10">
  <template v-for="(item, index) in invitingRankItems">
    <div class="d-flex align-center" :key="index">
      <div class="d-flex flex-column aliign-center text-center inviting-rank-data-box">
          <div class="d-flex justify-center align-center tertiary rounded-circle pa-5 w-fit-content mx-auto inviting-percentage-effect">
            %{{item.percentage}}
          </div>
          <div class="text-subtitle-1 inviting-rule-effect">
          {{item.effect}}
          </div>
          <div class="rank-icon-box">
            <img :src="require(`@/assets/images/${item.icon}`)" :alt="item.icon" width="50%">
          </div>
      </div>
      <div class="divider-box hidden-md-and-down">
        <v-divider v-if="index != invitingRankItems.length-1" class="dotted-divider"></v-divider>
      </div>
    </div>
  </template>
</div>
</template>
<script>
export default {
  name:'InvitationRankingGuide',
  props:{
    invitingRankItems:{
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.inviting-rank-data-box {
    gap: 5px;
}
.inviting-percentage-effect{
  border: 2px solid #1b98f5 !important;
}
.divider-box {
    width: 3em;
}
.dotted-divider{
  border: 2px dashed #1b98f5;
}
</style>
