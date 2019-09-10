import React from 'react';
import  { shallow } from 'enzyme';
import { CardContainer, mapDispatchToProps, mapStateToProps } from './Cardcontainer';
import { toggleFavorite } from '../../actions'

describe('CardContainer', () => {
  let wrapper;
  
  const mockUser = {
    id: 1, name: 'aidan', email: 'aidanmckay2000@gmail.com'
  }
  const mockAlbums = [
    {album_name: 'mirrorland', album_id:12345},
    {album_name: 'robots', album_id:123456},
  ]
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer
        albums={mockAlbums}
        toggleFavorite={jest.fn()}
        user={mockUser}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})

