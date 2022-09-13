import Vue from 'vue'
import staticTexts from '~/static/staticTexts.json'
import _get from 'lodash/get'

Vue.prototype.$staticTexts = (key) => {
    let val = _get(staticTexts, key, '')
    if (!val) console.warn(key, ' is empty in $staticTexts')
    return val || key
}