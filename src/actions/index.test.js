import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_ALBUMS', () => {
    const mockAlbums = [{
      name: 'Out On The Town',
      id: 7,
      genre: 'Rock'
      }, 
      {
      name: 'Home On The Range',
      id: 7,
      genre: 'Electronic'
      }
    ];
    const expectedAction = {
      type: 'ADD_ALBUMS', 
      albums: [{
        name: 'Out On The Town',
        id: 7,
        genre: 'Rock'
        }, 
        {
        name: 'Home On The Range',
        id: 7,
        genre: 'Electronic'
        }
      ]
    }
    const result = actions.addAlbums(mockAlbums)
    expect(result).toEqual(expectedAction)
  });


  it('should have a type of LOGIN', () => {
    const mockUser = {
      name: 'John',
      id: 4
    }
    const expectedAction = {
      type: 'LOGIN',
      user: {
        name: 'John',
        id: 4
      }
    }
    const result = actions.login(mockUser)
    expect(result).toEqual(expectedAction)
  })
})