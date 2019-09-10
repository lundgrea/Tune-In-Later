export const getAlbums = async artist => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${artist}&entity=album`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to get albums");
  }
};
export const loginUser = async user => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/login", options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Incorrect login information");
  }
};

export const postUser = async newUser => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/users", options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('There was an error creating your account');
  }
};

export const postFavorite = async (userId, newFavorite) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newFavorite),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(
      `http://localhost:3001/api/v1/users/${userId}/albumfavorites`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('There was a problem adding your favorite');
  }
};

export const getFavorites = async userId => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/users/${userId}/albumfavorites`
    );
    const result = await response.json();
    return result.favorites;
  } catch (error) {
    throw new Error('There was a problem getting your favorites');
  }
};

export const deleteFavorite = async (userId, albumId) => {
  try {
    const option = {
      method: "DELETE"
    };

    fetch(`http://localhost:3001/api/v1/users/${userId}/albumfavorites/${albumId}`, option);
    
  } catch (error) {
    throw new Error('Could not delete favorite');
  }
};
