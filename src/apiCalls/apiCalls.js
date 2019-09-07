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
  console.log("newUser :", newUser);
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
    console.log("result :", result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const postFavorite = async (user, newFavorite) => {
  console.log('newFavorite :', newFavorite);
  try {
    const options = {
      method: "POST", 
      body: JSON.stringify(newFavorite),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`http://localhost:3001/api/v1/users/${user}/albumfavorites`, options)
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error (error);
  }
}