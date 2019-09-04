export const getAlbums = async (artist) => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${artist}&entity=album`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to get albums");
  }
}

export const loginUser = async () => {

}