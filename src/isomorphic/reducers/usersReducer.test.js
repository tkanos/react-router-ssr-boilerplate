import usersReducer from './usersReducer'

describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(usersReducer([{id:0}], {})).toEqual([
        {
          id: 0
        }
      ])
    })
})
  