import Vue from 'vue'
import VueiClient from '@supermap/vue-iclient-mapboxgl'

const white = '#FFFFFF'
const primary = '#0C6170'
const secondary = '#37BEB0'
const tertiary = '#A4E5E0'
const quaternary = '#DBF5F0'
const quinary = '#C3CEDA'

let theme = {
  textColor: primary,
  background: white,
  componentBackground: white,
  clickColor: secondary,
  hoverColor: secondary,
  colorGroup: [primary, secondary, tertiary, quaternary, quinary],
}

Vue.use(VueiClient, { theme })
