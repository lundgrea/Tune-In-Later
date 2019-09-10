import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search', () => {
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
      <Search
      albums={mockAlbums}
      user={mockUser}
      addAlbum={jest.fn()}
      handleError={jest.fn()}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call handleChange method when change happens', () => {
    const mockEvent = {target: { value: 'earthgang'}}

    wrapper.find('input').simulate('change', mockEvent)
    expect(wrapper.state('search')).toEqual('earthgang')
  });

  it('should fetch albums', () => {
    const mockEvent = {}
    wrapper.find('button').simulate('click', mockEvent)
    
  });
});