'use strict'

function isBrowser() {
  return false
}

function isChromeApp() {
  return false
}

function isCordovaApp() {
  return false
}

function isNodeApp() {
  return true
}

function onRpi() {
  return process.arch === 'arm'
}

function onIDevice() {
  return false
}

module.exports = {
  isBrowser: isBrowser,
  isChromeApp: isChromeApp,
  isCordovaApp: isCordovaApp,
  isNodeApp: isNodeApp,
  onRpi: onRpi,
  onIDevice: onIDevice
}
