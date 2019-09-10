import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteContainer } from './FavoriteContainer';

describe('Favorite Container ', () => {
  let wrapper;
  const mockUser = {
    id: 1,
    name: 'aidan',
    email: 'aidanmckay2000@gmail.com'
  }
  const mockFavorites = [
    {album_name: 'mirrorland', album_id: 12345678, }
  ]
  beforeEach(() => {
    wrapper = shallow(
      <FavoriteContainer

      />
    )
  })
})