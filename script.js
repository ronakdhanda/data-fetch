const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

const displayPosts = (posts) => {
  const postContainer = document.querySelector("#posts")
  posts.forEach((post) => {
    const postElement = document.createElement("div")
    postElement.classList.add("post-element")

    const titleElement = document.createElement("h2")
    titleElement.textContent = post.title

    const captionElement = document.createElement("p")
    captionElement.textContent = post.body

    postElement.appendChild(titleElement)
    postElement.appendChild(captionElement)

    postContainer.appendChild(postElement)
    console.log(post.id)
  })
}

fetchData()
