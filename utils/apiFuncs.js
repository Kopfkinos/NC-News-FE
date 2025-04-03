import axios from "axios"

const apiArticlesClient = axios.create({
  baseURL: "https://nc-news-2dis.onrender.com/api/articles",
})

function getArticles() {
  return apiArticlesClient
    .get("")
    .then((data) => {
      return data
    })
    .catch((err) => {
      return err
    })
}

function getSingleArticle(articleId) {
  return apiArticlesClient
    .get(articleId)
    .then(({ data: { article } }) => {
      return article[0]
    })
    .catch((err) => {
      return err
    })
}

function getArticleComments(articleId) {
  return apiArticlesClient
    .get(articleId + "/comments")
    .then(({ data: { comments } }) => {
      return comments
    })
    .catch((err) => {
      return err
    })
}

function updateArticleVotes(articleId, newVote) {
  const voteObj = {
    inc_votes: newVote,
  }
  const idString = articleId.toString()

  return apiArticlesClient
    .patch(idString, voteObj)
    .then(
      ({
        data: {
          article: { votes },
        },
      }) => {
        return votes
      }
    )
    .catch((err) => {
      throw new Error()
    })
}

function postComment(articleId, comment) {
  const idString = articleId.toString()
  const commentObj = {
    username: "grumpy19",
    body: comment,
  }
  const url = "https://nc-news-2dis.onrender.com/api/articles/" + idString

  return apiArticlesClient.post(idString, commentObj).then(({ data: { comment } }) => {
    const postedCommentBody = comment[0].body
    return postedCommentBody
  })
}

export { getArticles, getSingleArticle, getArticleComments, updateArticleVotes, postComment }
