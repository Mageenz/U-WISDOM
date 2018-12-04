import Vue from 'vue'
import {parseTime} from './utils'
import area from './assets/common/areas'

Vue.filter('parseTime', v => {
  return parseTime(v, '{y}-{m}-{d}')
})

Vue.filter('parseArea', (provinceCode, cityCode, areaCode) => {
  if (!provinceCode) {
    return ''
  }
  const result = []
  area.forEach(function (item) {
    if (provinceCode && item.value == provinceCode) {
      
      result.push(item.label)
      item.children.forEach(function (city) {
        if (cityCode && city.value == cityCode) {
          result.push(city.label)
          if (areaCode && Array.isArray(city.children)) {
            city.children.forEach(function (area) {
              if (area.value == areaCode) {
                result.push(area.label)
              }
            })
          }
        }
      })
    }
  })
  return result.join('-')
})
