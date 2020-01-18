/**
 * 一些常用方法
 */
'use strict'

import Vue from 'vue'

export function init() {
  // 初始化bus
  Vue.prototype.$bus = new Vue()

  // 初始化storage
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }

  Storage.prototype.setObj = function(key, value) {
    this.setItem(key, JSON.stringify(value))
  }
}
