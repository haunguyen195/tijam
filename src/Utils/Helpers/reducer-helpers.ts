'use strict'

// @ts-ignore
export function reducerHelpers (initialState, actionHandlers) {
  return (state = initialState, action: { type: string | number }) => {
    const reduceFn = actionHandlers[action.type]
    if (!reduceFn) return state
    return { ...state, ...reduceFn(state, action) }
  }
}
