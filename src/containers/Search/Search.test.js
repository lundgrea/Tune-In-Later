import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';
import { addAlbums, handleErrors } from '../../actions';
import { getAlbums } from '../../apiCalls/apiCalls'

jest.mock('../../apiCalls/apiCalls');

describe('Search', () => {
  let wrapper;

  const mockUser = {
    id: 1, name: 'aidan', email: 'aidanmckay2000@gmail.com'
  }
  const mockAlbums = [
    {album_name: 'mirrorland', album_id:12345},
    {album_name: 'robots', album_id:123456},
  ]
  let mockEvent
  const mockHandleErrors = jest.fn()

  beforeAll(() => {
    getAlbums.mockImplementation(() => 'mirrorland');
  })

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() }
    wrapper = shallow(
      <Search
      albums={mockAlbums}
      user={mockUser}
      addAlbum={jest.fn()}
      handleErrors={mockHandleErrors}
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

  it('sets error in state if the fetch fails', async () => {
    getAlbums.mockImplementationOnce(() => {
      throw new Error('Please Try Again')
    });

    await wrapper.instance().fetchAlbums(mockEvent)

    expect(wrapper.state('error')).toEqual('Please Try Again');
  });

  it('should reset state to an empty string', () => {
    wrapper.find('button').simulate('click', mockEvent)
    expect(wrapper.state('search')).toEqual('')
  });

  describe('mapStateToProps', () => {
    it('should return an object with the albums array', () => {
      const mockState = {
        albums: [{ album_name: 'mirrorland', id: 1 }],
      };
      const expected = {
        albums: [{ album_name: 'mirrorland', id: 1 }],
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it('should return an object with a user object', () => {
      const mockState = {
        user: mockUser
      };
      const expected = {
        user: mockUser
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addAlbums action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addAlbums(mockAlbums);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAlbums(mockAlbums);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an handleErrors action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleErrors('you suck');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleErrors('you suck');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});