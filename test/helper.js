export const resolveAsyncThunk = (type, payload) => (dispatch) => {
  const action = {type, payload}
  return Promise.resolve(action).then(dispatch)
}

export const rejectAsyncThunk = (type, error = new Error(), payload) => async (dispatch) => {
  const action = {type, payload}

  dispatch(action)
  throw error
}

// With this mock store you can have changing states
// when certain actions have been dispatched.
export const createMockStore = (initialState, nextStates = []) => {
  let nextStatePos = 0
  let state = initialState
  const getState = () => state
  const store = mockStore(getState)

  store.subscribe(() => {
    const actions = store.getActions()
    const lastAction = actions[actions.length - 1]
    const nextState = nextStates[nextStatePos]
    if (nextState && nextState.type === lastAction.type) {
      state = nextState.state
      nextStatePos++
    }
  })

  return store
}
