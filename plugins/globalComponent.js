import Vue from 'vue'
import LandScapeSection from '@/components/LandScapeSection.vue'

const components = { LandScapeSection }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})