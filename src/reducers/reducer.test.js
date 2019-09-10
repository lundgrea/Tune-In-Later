import { albumsReducer } from "./albums";
import { handleErrors } from "./errors";
import { storeFavorites } from "./favorites";
import { userReducer } from "./user";

describe("albumReducer", () => {
  it("should return state if no case is met", () => {
    let mockAction = {
      type: "",
      albums: []
    };
    expect(albumsReducer(undefined, mockAction)).toEqual([]);
  });
  it("should return an array of albums if ADD_ALBUMS is met", () => {
    let mockAction = {
      type: "ADD_ALBUMS",
      albums: [{ id: 1 }, { id: 2 }]
    };
    expect(albumsReducer([], mockAction)).toEqual([{ id: 1 }, { id: 2 }]);
  });
  it("should return an array of favorites if TOGGLE_FAVORITE is met", () => {
    let mockAction = {
      type: "TOGGLE_FAVORITE",
      id: 1
    };
    let mockState = [
      { album_id: 1, isFavorite: false },
      { album_id: 2, isFavorite: false }
    ];

    expect(albumsReducer(mockState, mockAction)).toEqual([
      { album_id: 1, isFavorite: true },
      { album_id: 2, isFavorite: false }
    ]);
  });

  describe("handleErrors", () => {
    it("should throw an error if handle error is met", () => {
      let mockAction = {
        type: "HANDLE_ERROR",
        error: "Somethig is Wrong!"
      };
      expect(handleErrors(undefined, mockAction)).toEqual("Somethig is Wrong!");
    });
  });
});

describe("storeFavorites", () => {
  it("should return an array of albums if store favorites is met", () => {
    let mockAction = {
      type: "STORE_FAVORITES",
      albums: [{ id: 1 }, { id: 2 }]
    };
    expect(storeFavorites(undefined, mockAction)).toEqual([
      { id: 1 },
      { id: 2 }
    ]);
  });
});

describe("userReducer", () => {
  it("should return a user when LOGIN case is met", () => {
    let mockAction = {
      type: "LOGIN",
      user: "Bubba"
    };
    expect(userReducer(undefined, mockAction)).toEqual("Bubba");
  });
  it("should return a user if CREATE_USER is met", () => {
    let mockAction = {
      type: "LOGIN",
      user: "Bubba"
    };
    expect(userReducer(undefined, mockAction)).toEqual("Bubba");
  });
  it("should return a string if LOGOUT is triggered", () => {
    let mockAction = {
      type: "LOGOUT"
    };
    expect(userReducer(undefined, mockAction)).toEqual("Goodbye");
  });
  it("should return a string when LOGING_CHECK case is met", () => {
    let mockAction = {
      type: "LOGIN_CHECK"
    };
    expect(userReducer(undefined, mockAction)).toEqual(
      "Please Loging To Favorite Albums"
    );
  });
});
