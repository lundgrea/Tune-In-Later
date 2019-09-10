import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteContainer, mapStateToProps, mapDispatchToProps } from './FavoriteContainer';
import { toggleFavorite } from '../../actions'
import { wrap } from 'module';
describe('Favorite Container ', () => {
  let wrapper;
  const mockUser = {
    id: 1,
    name: 'aidan',
    email: 'aidanmckay2000@gmail.com'
  }
  const mockFavorites = [
    {album_name: 'mirrorland', album_id: 12345678, primary_genre_name: 'rap'}
  ]
  beforeEach(() => {
    wrapper = shallow(
      <FavoriteContainer
        user={mockUser}
        favorites={mockFavorites}
        toggleFavorite={jest.fn()}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should filter favorites based on value of filter and add album to state', () => {
    const mockEvent = { target: { value:'rap'} }
    expect(wrapper.state('filteredAlbums')).toEqual([])
    wrapper.find('input').at(1).simulate('click', mockEvent)
    expect(wrapper.state('filteredAlbums')).toEqual(mockFavorites)
  });
});