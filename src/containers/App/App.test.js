import React from 'react';
import { shallow, mount } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { MemoryRouter } from 'react-router';
import { logout, storeFavorites } from '../../actions';
import { getFavorites } from "../../apiCalls/apiCalls";


describe('App', () => {
  let wrapper;
  const mockAlbums = [{trackName: 'Hello', genre: 'Rock'}, {trackName: 'Yellow', genre: 'Folk'}];
  const mockLogOut = jest.fn();
  const mockStoreFavorites = jest.fn();

  beforeEach(() => {
    wrapper = shallow (<App
      logout={mockLogOut}
      error={"error"}
      user={{name: 'lola', id: 7}}
      storeFavorites={mockStoreFavorites}
      albums={mockAlbums}
    />
    )
  })

  it('should map the snapshot with all the props passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', ()  => {
  it('should return an array of albums', () => {
    const mockState = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const expected = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })

  it('should return an error if applicable', () => {
    const mockState = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const expected = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
  
  it('should have a user saved if a user is logged in', () => {
    const mockState = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const expected = {
      albums: [{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}],
      error: 'error',
      user: 1
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('calls logout with an logout action when logout is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = logout();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.logout();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls storeFavorites with an array of favorites when storeFavorites is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = storeFavorites([{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.storeFavorites([{albumName: 'Johanna', genre: 'Rock'}, {albumName: 'Eoah', genre: 'Country'}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
})


describe("Router", () => {
  it("should show the Main page when nothing is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(App)).toHaveLength(1);        
  })
})

  // it("should show the card page when Search is selected", () => {
  //   const mockAlbums = [{trackName: 'Hello', genre: 'Rock'}, {trackName: 'Yellow', genre: 'Folk'}];
  //   const mockLogOut = jest.fn();
  //   const mockStoreFavorites = jest.fn();
  //   const wrapper = mount(
  //     <Provider>
  //     <MemoryRouter initialEntries={[ '/sign-up' ]}>
  //       <App
  //         logout={mockLogOut}
  //         error={"error"}
  //         user={{name: 'lola', id: 7}}
  //         storeFavorites={mockStoreFavorites}
  //         albums={mockAlbums}
  //       />
  //     </MemoryRouter>
  //     </Provider>
  //   )
  //   expect(wrapper.find(SignUpForm)).toHaveLength(1);        
  // })
