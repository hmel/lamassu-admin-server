const R = require('ramda')

module.exports = {
  unscoped,
  cryptoScoped,
  machineScoped,
  scoped,
  scopedValue
}

function matchesValue (crypto, machine, instance) {
  return instance.fieldLocator.fieldScope.crypto === crypto &&
  instance.fieldLocator.fieldScope.machine === machine
}

function permutations (crypto, machine) {
  return R.uniq([
    [crypto, machine],
    [crypto, 'global'],
    ['global', machine],
    ['global', 'global']
  ])
}

function fallbackValue (crypto, machine, instances) {
  const notNil = R.pipe(R.isNil, R.not)
  const pickValue = arr => R.find(instance => matchesValue(arr[0], arr[1], instance), instances)
  const fallbackRec = R.find(notNil, R.map(pickValue, permutations(crypto, machine)))
  return fallbackRec && fallbackRec.fieldValue.value
}

function scopedValue (crypto, machine, fieldCode, config) {
  const allScopes = config.filter(R.pathEq(['fieldLocator', 'code'], fieldCode))

  return fallbackValue(crypto, machine, allScopes)
}

function generalScoped (crypto, machine, config) {
  const localScopedValue = key =>
    scopedValue(crypto, machine, key, config)

  const keys = R.uniq(R.map(r => r.fieldLocator.code, config))
  const keyedValues = keys.map(localScopedValue)

  return R.fromPairs(keys, keyedValues)
}

function machineScoped (machine, config) {
  return generalScoped('global', machine, config)
}

function unscoped (config) {
  return generalScoped('global', 'global', config)
}

function cryptoScoped (crypto, config) {
  return generalScoped(crypto, 'global', config)
}

function scoped (crypto, machine, config) {
  return generalScoped(crypto, machine, config)
}
