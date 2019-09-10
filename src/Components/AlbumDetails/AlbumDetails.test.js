import React from 'react';
import { shallow } from 'enzyme';
import { AlbumDetails } from './AlbumDetails'

describe('Album Details', () => {
  let wrapper;

  const mockAlbum = {
      artist_name:  'EarthGang',
      album_name:  'MirrorLand',
      primary_genre_name:  'Rap',
      album_id:  12345678,
      artwork_url:  'asdfjaskl;df',
      release_date: '9/05/2019',
      content_advisory_rating: 'Explicit',
      key: 12345678,
      isFavorite: false
  }
  beforeEach(() => {
    wrapper = shallow(
      <AlbumDetails
        album={mockAlbum}
      />
    )
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  }) 
})