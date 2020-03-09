/*
 * @Description: checkArray
 * @Author: 郭军伟
 * @Date: 2020-03-09 14:24:29
 * @lastEditTime: Do not edit
 */
const _toString = Object.prototype.toString;

function isDef(val) {
  return val !== undefined && val !== null;
}

function isUndef(val) {
  return val === undefined || val === null;
}

function isString(str) {
  return _toString.call(str) === '[object String]';
}

function isArray(arr) {
  return _toString.call(arr) === '[object Array]';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isFunction(fn) {
  return typeof fn === 'function';
}

function isNotSpaceString(str) {
  return isString(str) && str !== '';
}

function isSpaceString(str) {
  return isString(str) && str === '';
}

/**
 * @description 校验一个数组的某些字段是否必填
 * @param {Array[Object]} array 要校验的数组
 * @param {Array} fieldArray 要校验的字段数组,不填写，表示校验所有字段
 * @return {Boolean} true 校验通过 false 校验未通过
 */
function checkArray(array, fieldArray) {
  if (!isArray(array) || array.length === 0) return false;
  fieldArray = fieldArray || Object.keys[array[0]];
  return array.every(item => {
    let flag = true;
    for (let i = 0; i < fieldArray.length; i++) {
      let val = item[fieldArray[i]];
      if (isUndef(val) || isSpaceString(val)) {
        flag = false;
        break;
      };
    }

    return flag
  })
}