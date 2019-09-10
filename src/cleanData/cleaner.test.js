import { cleanAlbums } from "./cleaner";

describe("Cleaner", () => {
  const mockDirtyData = [
    {
      amgArtistId: 291333,
      artistId: 635168856,
      artistName: "A",
      artistViewUrl: "https://music.apple.com/us/artist/a/635168856?uo=4",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/ec/89/14/ec891427-99c5-9961-5709-668d9e5f0803/source/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/ec/89/14/ec891427-99c5-9961-5709-668d9e5f0803/source/100x100bb.jpg",
      collectionCensoredName: "Monkey Kong",
      collectionExplicitness: "notExplicit",
      collectionId: 1443721573,
      collectionName: "Monkey Kong",
      collectionPrice: 9.99,
      collectionType: "Album",
      collectionViewUrl:
        "https://music.apple.com/us/album/monkey-kong/1443721573?uo=4",
      copyright:
        "℗ 2000 London Records 90 Ltd., under exclusive license to Mammoth Records, Inc.",
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      releaseDate: "2000-01-01T08:00:00Z",
      trackCount: 17,
      wrapperType: "collection"
    }
  ];
  const mockCleanData = [
    {
      artist_name: "A",
      album_name: "Monkey Kong",
      primary_genre_name: "Rock",
      album_id: 1443721573,
      artwork_url:
        "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/ec/89/14/ec891427-99c5-9961-5709-668d9e5f0803/source/100x100bb.jpg",
      release_date: "2000-01-01T08:00:00Z",
      content_advisory_rating: undefined,
      key: 1443721573,
      isFavorite: false
    }
  ];
  it("should return cleaned album", () => {
    expect(cleanAlbums(mockDirtyData)).toEqual(mockCleanData);
  });
});
