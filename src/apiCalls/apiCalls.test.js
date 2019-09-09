import { getAlbums, loginUser, postUser, postFavorite, getFavorite, deleteFavorite} from './apiCalls';




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

  it('should', () =>{

  })
})


describe('postFavorite', () => {
  let mockResponse

  it('should', () =>{

  })
})

describe('getFavorite', () => {
  let mockResponse

  it('should', () =>{

  })
})


describe('deleteFavorite', () => {
  let mockResponse

  it('should', () =>{

  })
})
