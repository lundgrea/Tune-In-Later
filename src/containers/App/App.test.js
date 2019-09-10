import React from 'react';
import { shallow, mount } from 'enzyme'
import { App } from './App';
import { MemoryRouter } from 'react-router';
import Provider from 'react-redux'
import { CardContainer } from '../CardContainer/CardContainer'
import { SignUpForm } from '../SignUpForm/SignUpForm'


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


describe("Router", () => {
  it("should show the Main page when nothing is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(App)).toHaveLength(1);        
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

});
  



//mapStateToProps

//mapDispatchToProps

//test all routes

//logout?




