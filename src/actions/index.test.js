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
    const result = actions.addAlbums(mockAlbums);
    expect(result).toEqual(expectedAction);
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
    const result = actions.login(mockUser);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOGOUT', () => {
    const expectedAction = {
      type: 'LOGOUT'
    }
    const result = actions.logout();
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of TOGGLE_FAVORITE', () => {
    const mockId = 7
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      id: 7
    }
    const result = actions.toggleFavorite(mockId);
    expect(result).toEqual(expectedAction);
  })

  it('should have a CREATE_USER', () => {
    const mockUser = {name: 'John', id: 18};
    const expectedAction = {
      type: 'CREATE_USER',
      user: {name: 'John', id: 18}
    }
    const result = actions.createUser(mockUser)
    expect(result).toEqual(expectedAction)
  })

  it('should have a HANDLE_ERROR', () =>{
    const mockError = 'WHOA, error';
    const expectedAction = {
      type: 'HANDLE_ERROR',
      error: 'WHOA, error'
    }
    const results = actions.handleErrors(mockError);
    expect(results).toEqual(expectedAction)

  })

  it('should have a STORE_FAVORITES', () => {
    const mockAlbums = [{name: 'My Heart Will Go On', artist: 'Celine'}, {name: 'Blue', artist: 'BlueMan'}]
    const expectedActions = {
      type: 'STORE_FAVORITES',
      albums: [{name: 'My Heart Will Go On', artist: 'Celine'}, {name: 'Blue', artist: 'BlueMan'}]
    }
    const results = actions.storeFavorites(mockAlbums);
    expect(results).toEqual(expectedActions)
  })

  it('should have a DELETE_FAVORITE', () => {
    const mockAlbumId = 8
    const expectedActions = {
      type: 'DELETE_FAVORITE',
      albumId: 8
    }
    const results = actions.deleteFavorite(mockAlbumId)
    expect(results).toEqual(expectedActions)
  })
})