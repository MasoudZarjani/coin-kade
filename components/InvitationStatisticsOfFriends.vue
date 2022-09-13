<template>
  <v-card class="text-center mx-auto pa-5 w-80 rounded-xl" height="100%">
    <v-card-title class="flex-column justify-center pa-0">
      <img :src="require(`@/assets/images/${invitingStatistic.icon}`) " :alt="invitingStatistic.title" loading="lazy" width="50%">
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="text-h5 my-2">{{invitingStatistic.amount}} {{invitingStatistic.unit}}</div>
      <div class="text-subtitle-1 my-2">{{invitingStatistic.title}}</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name:'InvitationStatisticsOfFriends',
  props:{
    invitingStatistic:{
      type: Object,
      required: true,
    }
  }
}
</script>
