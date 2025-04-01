import axios from "axios"

const getArticles = async () => {
  const response = await axios.get("https://nc-news-2dis.onrender.com/api/articles")
  return response.data
}

export { getArticles }
