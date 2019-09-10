import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteContainer, mapStateToProps, mapDispatchToProps } from './FavoriteContainer';
import { toggleFavorite } from '../../actions'

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
  const mockGenerateAlbum = jest.fn()
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

  it('should gather filters based on favorite albums', () => {
    wrapper.instance().gatherFilters()
    expect(wrapper.state('filters')).toEqual(['rap'])
  });

  it('should reset state on click', () => {
    wrapper.find('input').at(0).simulate('click')

    expect(wrapper.state('filteredAlbums')).toEqual([])
    expect(wrapper.state('filterButton')).toEqual('')
  })
  describe('mapStateToProps', () => {
    it('should return an object with a user object', () => {
      const mockState = {
        user: mockUser
      };
      const expected = {
        user: mockUser
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('should return an array of favorite album objects', () => {
      const mockState = {
        favorites: mockFavorites
      }
      const expected = {
        favorites: mockFavorites
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an toggleFavorite action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleFavorite(1);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleFavorite(1);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});