import {
  selectMaterial,
  setMaterials,
  selectNextMaterial,
  selectPreviousMaterial
} from 'Action/material'
import * as printingEngine from 'Lib/printing-engine'
import * as materialLib from 'Lib/material'
import Store from '../../../../src/app/store'

describe('Material Integration Test', () => {
  let sandbox
  let store

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    sandbox.stub(printingEngine)
    sandbox.stub(materialLib)

    store = Store({})
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('setMaterials()', () => {
    it('should work', () => {
      const materials = [
        {
          id: 'some-material-id-1',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-2',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-3',
          title: 'some-material-title'
        }
      ]
      store.dispatch(setMaterials(materials))
      expect(store.getState().material.materials, 'to equal', {
        'some-material-id-1': {
          id: 'some-material-id-1',
          title: 'some-material-title'
        },
        'some-material-id-2': {
          id: 'some-material-id-2',
          title: 'some-material-title'
        },
        'some-material-id-3': {
          id: 'some-material-id-3',
          title: 'some-material-title'
        }
      })
      expect(store.getState().material.materialIds, 'to equal', [
        'some-material-id-1',
        'some-material-id-2',
        'some-material-id-3'
      ])
    })
  })

  describe('selectNextMaterial()', () => {
    it('should work', () => {
      const materials = [
        {
          id: 'some-material-id-1',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-2',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-3',
          title: 'some-material-title'
        }
      ]
      store.dispatch(setMaterials(materials))

      store.dispatch(selectMaterial('some-material-id-1'))

      expect(store.getState().material.selectedMaterialId, 'to equal', 'some-material-id-1')

      store.dispatch(selectNextMaterial())

      expect(store.getState().material.selectedMaterialId, 'to equal', 'some-material-id-2')
    })
  })

  describe('selectPreviousMaterial()', () => {
    it('should work', () => {
      const materials = [
        {
          id: 'some-material-id-1',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-2',
          title: 'some-material-title'
        },
        {
          id: 'some-material-id-3',
          title: 'some-material-title'
        }
      ]
      store.dispatch(setMaterials(materials))

      store.dispatch(selectMaterial('some-material-id-1'))

      expect(store.getState().material.selectedMaterialId, 'to equal', 'some-material-id-1')

      store.dispatch(selectPreviousMaterial())

      expect(store.getState().material.selectedMaterialId, 'to equal', 'some-material-id-3')
    })
  })

  describe('selectMaterial()', () => {
    it('should work', () => {
      store.dispatch(selectMaterial('some-material-id'))
      expect(store.getState().material.selectedMaterialId, 'to equal', 'some-material-id')
    })
  })
})
