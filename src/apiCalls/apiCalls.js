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
export const loginUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
      const response = await fetch('http://localhost:3001/api/v1/login', options)
      const result = await response.json()
      return result
  } catch(error) {
    throw new Error(error)
  }
}