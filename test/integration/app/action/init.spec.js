// import deepFreeze from 'deep-freeze'
// import {init} from 'Action/init'

// import * as printingEngine from 'Lib/printing-engine'
// import * as geolocation from 'Lib/geolocation'

// import Store from '../../../../src/app/store'

// import materialList from '../../../../test-data/mock/material-list-response.json'

// deepFreeze(materialList)

// describe('Init action integration test', () => {
//   let sandbox
//   let store

//   beforeEach(() => {
//     store = Store({})

//     sandbox = sinon.sandbox.create()
//     sandbox.stub(printingEngine)
//     sandbox.stub(geolocation)
//   })

//   afterEach(() => {
//     sandbox.restore()
//   })

//   it('initializes the reducer correctly', async () => {
//     printingEngine.listMaterials.resolves(materialList)
//     printingEngine.createUser.resolves({userId: 'some-user-id'})
//     geolocation.getLocationByIp.resolves({
//       city: 'some-city',
//       zipCode: 'some-zip-code',
//       stateCode: 'some-state-code',
//       countryCode: 'some-country-code'
//     })

//     await store.dispatch(init())

//     // it sets up the user correctly
//     expect(store.getState(), 'to satisfy', {
//       user: {
//         userId: 'some-user-id',
//         user: {
//           emailAddress: '',
//           phoneNumber: '',
//           currency: 'USD',
//           isCompany: false,
//           vatId: '',
//           shippingAddress: {
//             city: 'some-city',
//             zipCode: 'some-zip-code',
//             stateCode: 'some-state-code',
//             countryCode: 'some-country-code'
//           },
//           billingAddress: {
//             firstName: '',
//             lastName: '',
//             street: '',
//             houseNumber: '',
//             addressLine2: '',
//             city: '',
//             zipCode: '',
//             stateCode: '',
//             countryCode: ''
//           }
//         }
//       }
//     })
//   })
// })
