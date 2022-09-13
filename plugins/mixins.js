import Vue from 'vue'

const mixin = {
    methods: {
        copytToClipBoard(text) {
            navigator.clipboard.writeText(text);
        }
    }
}

Vue.mixin(mixin)