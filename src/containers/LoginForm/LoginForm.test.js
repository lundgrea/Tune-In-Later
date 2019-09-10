import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps, mapStateToProps } from './LoginForm';
import { login, handleErrors, storeFavorites } from '../../actions'
describe('LoginForm', () => {
  let wrapper;
  const mockUser = {
    id: 1, name: 'aidan', email: 'aidanmckay2000@gmail.com'
  }
  const mockLogin = jest.fn()
  const mockStoreFavorites = jest.fn()
  const mockHandleError = jest.fn()
  const mockFavorites = [
    {album_name: 'mirrorland', album_id: 12345678, primary_genre_name: 'rap'}
  ]
  beforeEach(() => {
    wrapper = shallow(
      <LoginForm
        error=''
        user={mockUser}
        login={mockLogin}
        handleErrors={mockHandleError}
        storeFavorites={mockStoreFavorites}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });
  
  it('should call login inputs on change and set state', () => {
    const mockEvent = { target: {name: 'email', value: 'aidanmckay2000@gmail.com'}}
    wrapper.find('.login-input').simulate('change', mockEvent)
    expect(wrapper.state('email')).toEqual('aidanmckay2000@gmail.com')
  });

  describe('mapStateToProps', () => {
    it('should return a string that represents error', () => {
      const mockState = {
        error: 'Please try again',
      };
      const expected = {
        error: 'Please try again',
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it('should return an object with a user', () => {
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
    it('calls dispatch with a login action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = login(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a handleErrors action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleErrors('you suck');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleErrors('you suck');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a login action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = storeFavorites(mockFavorites);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeFavorites(mockFavorites);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});