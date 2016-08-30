const x = {
  code: 'commissions',
  display: 'Commissions',
  cryptoScope: 'both',
  machineScope: 'both',
  fieldSet: [
    {
      code: 'cashIn',
      display: 'Cash in',
      fieldType: 'percentage'
    }
  ],
  values: [
    {
      code: 'cashIn',
      globalGlobal: null,
      globalCrypto: [{
        machine: 'blue-toad',
        value: 1.23
      }],
      globalMachine: [{
        crypto: 'BTC',
        value: 1.54
      }],
      specific: [{
        machine: 'blue-toad',
        crypto: 'ETH',
        value: 1.87
      }]
    }
  ]
}
