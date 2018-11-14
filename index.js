const getRegistryToken = require('registry-auth-token')
const getRegistryUrl = require('registry-auth-token/registry-url')
const semver = require('semver')
const quest = require('@aleclarson/quest')

async function npmView(name, version = '*') {
  let url = getRegistryUrl() + name
  let auth = getRegistryToken()
  let pack = await quest.json(url, {
    Authorization: `${auth.type} ${auth.token}`
  })
  let tags = pack['dist-tags']
  if (version in tags) {
    version = tags[version]
  }
  else if (semver.validRange(version)) {
    let versions = Object.keys(pack.versions)
    version = semver.maxSatisfying(versions, version)
  }
  if (version in pack.versions) {
    return pack.versions[version]
  }
  return null
}

Object.defineProperty(npmView, 'default', {value: npmView})
module.exports = npmView
