import { getAlbums, loginUser, postUser, postFavorite, getFavorite, deleteFavorite} from './apiCalls';


describe('postUser', () => {
  let mockResponse, mockRequest;
  beforeEach(() => {
    mockRequest = {}
    mockResponse = []
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct url', () => {
  })

  it('should return a successful response (HAPPY)', () => {
  })

  it('should return an error (SAD)', () => {
  })

  it('should return an error if the promise rejects (SAD)', () => {
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
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(loginUser()).rejects.toEqual(Error('Incorrect login information'))
  })

  it('should return an error if the promise rejects (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down'
      })
    })
    expect(loginUser()).rejects.toEqual(Error('Incorrect login information'))
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

describe('getAlbums', () => {
  let mockResponse

  it('should', () =>{

  })
})