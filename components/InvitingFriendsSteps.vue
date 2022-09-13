<template>
  <v-card class="text-center mx-auto pa-5 w-80 rounded-xl" height="100%">
    <v-card-title class="flex-column justify-center pa-0">
      <img :src="require(`@/assets/images/${invitingStep.icon}`) " :alt="invitingStep.title" loading="lazy" width="60%">
      {{invitingStep.title}}
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="text-subtitle-1" v-text="invitingStep.description"></div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name:'InvitingFriendsSteps',
  props:{
    invitingStep:{
      type: Object,
      required: true,
    }
  }
}
</script>
