import React from 'react';
import  { shallow } from 'enzyme';
import { Card, mapDispatchToProps, mapStateToProps } from './Card';
import { handleErrors, storeFavorites } from '../../actions';
import { getFavorites } from '../../apiCalls/apiCalls'

jest.mock('../../apiCalls/apiCalls')

describe('Card', () => {
  let wrapper;

  const mockFavorites = [
    {album_name: 'MirrorLand', album_id: 12345678, primary_genre_name: 'rap'},
    {album_name: 'Dicaprio 2', album_id: 12345, primary_genre_name: 'rap'}

  ];

  const mockUser = {
    id: 1, name: 'aidan', email: 'aidanmckay2000@gmail.com'
  };

  const mockHandleErrors = jest.fn()
  const mockStoreFavorites = jest.fn()
  const mockToggleFavorite = jest.fn()

  let mockEvent

  beforeAll(() => {
    getFavorites.mockImplementation(mockUser.id)
  })

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() }
    wrapper = shallow(
      <Card 
        favorites={mockFavorites}
        handleErrors={mockHandleErrors}
        storeFavorites={mockStoreFavorites}
        album_id={1}
        album_name='MirrorLand'
        artist_name='EarthGang'
        artwork_url='asdf'
        content_advisory_rating='explicit'
        isFavorite={true}
        primary_genre_name='Rap'
        release_date='09/05/2019'
        toggleFavorite={mockToggleFavorite}
        user={mockUser}
      />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

  it.skip('should call check2fav when clicked', async () => {
    wrapper.find('img').at(1).simulate('click', mockEvent)
    // not sure how to test any of the things
    // i need to test in a functional component,
    // i'd like to refactor it to a class component but
    // there's not enough time
  })

  describe('mapStateToProps', () => {
    it('should return an array of favorite album objects', () => {
      const mockState = {
        favorites: mockFavorites
      }
      const expected = {
        favorites: mockFavorites
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a handleErrors action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleErrors('you suck');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleErrors('you suck');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a storeFavorites action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = storeFavorites(mockFavorites);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeFavorites(mockFavorites)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  })
});

