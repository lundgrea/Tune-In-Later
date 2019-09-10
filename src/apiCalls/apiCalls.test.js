import { getAlbums, loginUser, postUser, postFavorite, getFavorites, deleteFavorite} from './apiCalls';




describe('getAlbums', () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = {
        "resultCount":36,
        "results": [
       {"wrapperType":"collection", "collectionType":"Album", "artistId":262836961, "collectionId":420075073, "amgArtistId":861756, "artistName":"Adele", "collectionName":"21", "collectionCensoredName":"21", "artistViewUrl":"https://music.apple.com/us/artist/adele/262836961?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/21/420075073?uo=4", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/39/50/b3/3950b304-580b-877c-c05b-1ba30a5a8239/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/39/50/b3/3950b304-580b-877c-c05b-1ba30a5a8239/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"notExplicit", "trackCount":12, "copyright":"℗ 2010 XL Recordings Ltd", "country":"USA", "currency":"USD", "releaseDate":"2011-02-22T08:00:00Z", "primaryGenreName":"Pop"}
      ]
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct url', () => {
    getAlbums('adele')
    expect(window.fetch).toHaveBeenCalledWith("https://itunes.apple.com/search?term=adele&entity=album")
  })

  it('should return a successful response (HAPPY)', () => {
    expect(getAlbums('adele')).resolves.toEqual(mockResponse);

  })

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getAlbums('adele')).rejects.toEqual(Error('Failed to get albums'))
  
  })

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to get albums'))
    })
    expect(getAlbums('adele')).rejects.toEqual(Error('Failed to get albums'))
  })

})




describe('loginUser', () => {
  let mockResponse, mockRequest;
  beforeEach(() => {
    mockRequest = {
      method: 'POST',
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    }
    mockResponse = [
      {
      id: 2, 
      name: "Alex", 
      email: "alex@gmail.com"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct url', () => {
    loginUser();
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/login", mockRequest)
  })

  it('should return a successful response (HAPPY)', () => {
    expect(loginUser()).resolves.toEqual(mockResponse);
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(loginUser()).rejects.toEqual(Error('Incorrect login information'))
  })

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Incorrect login information'))
    })
    expect(loginUser()).rejects.toEqual(Error('Incorrect login information'))
    })
})




describe('postUser', () => {
  let mockResponse
  let mockRequest;
  beforeEach(() => {
    mockRequest = {
      method: 'POST',
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    }
    mockResponse = [
      {
      id: 2, 
      name: "Alex", 
      email: "alex@gmail.com"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should be called with correct params', () =>{
    postUser()
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/users", mockRequest);
  });

  it('should return a successfull resonse', () => {
    expect(postUser()).resolves.toEqual(mockResponse);
  });

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postUser()).rejects.toEqual(Error('There was an error creating your account'))
  });
  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('There was an error creating your account'))
    })
    expect(postUser()).rejects.toEqual(Error('There was an error creating your account'))
    })
});


describe('postFavorite', () => {
  let mockResponse
  let mockRequest;
  beforeEach(() => {
    mockRequest = {
      method: 'POST',
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    }
    mockResponse = [
      {
        "id": 2, 
        "user_id": 1, 
        "album_id": 558262493, 
        "artist_name": "alt-J", 
        "album_name": "An Awesome Wave", 
        "artwork_url": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/3b/43/9e/3b439e7f-9989-1dc1-9ffb-8d876ddb0da1/source/100x100bb.jpg", 
        "release_date": "2012-09-18T07:00:00Z", 
        "content_advisory_rating": "notExplicit", 
        "primary_genre_name": "Alternative"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should be called with correct params', () =>{
    postFavorite(1)
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/users/1/albumfavorites", mockRequest);
  });

  it('should return a successfull resonse', () => {
    expect(postFavorite()).resolves.toEqual(mockResponse);
  });

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postFavorite()).rejects.toEqual(Error('There was a problem adding your favorite'))
  });
  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('There was a problem adding your favorite'))
    })
    expect(postFavorite()).rejects.toEqual(Error('There was a problem adding your favorite'))
    })
});

describe('getFavorites', () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = [
      {
        "id": 2, 
        "user_id": 1, 
        "album_id": 558262493, 
        "artist_name": "alt-J", 
        "album_name": "An Awesome Wave", 
        "artwork_url": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/3b/43/9e/3b439e7f-9989-1dc1-9ffb-8d876ddb0da1/source/100x100bb.jpg", 
        "release_date": "2012-09-18T07:00:00Z", 
        "content_advisory_rating": "notExplicit", 
        "primary_genre_name": "Alternative"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should be called with correct params', () => {
    getFavorites(1)
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/users/1/albumfavorites");
  });

  it('should return a successfull resonse', () => {
    expect(getFavorites()).resolves.toEqual(mockResponse);
  });

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getFavorites()).rejects.toEqual(Error('There was a problem getting your favorites'))
  });
  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('There was a problem getting your favorites'))
    })
    expect(getFavorites()).rejects.toEqual(Error('There was a problem getting your favorites'))
    })
});


describe('deleteFavorite', () => {
  let mockResponse

  it('should', () =>{

  })
})
