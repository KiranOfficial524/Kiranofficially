const adminEmail = "ghanshyamoli922@gmail.com";
const adminPassword = "50";

const postInput = document.getElementById("postInput");
const addPostBtn = document.getElementById("addPostBtn");
const postsSection = document.getElementById("posts");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const aboutBtn = document.getElementById("aboutBtn");
const aboutPage = document.getElementById("aboutPage");
const closeAboutBtn = document.getElementById("closeAboutBtn");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  postsSection.innerHTML = "";
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postText = document.createElement("span");
    postText.innerText = post;

    const copyBtn = document.createElement("button");
    copyBtn.innerText = "COPY";
    copyBtn.onclick = () => navigator.clipboard.writeText(post);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.onclick = () => deletePost(index);

    postDiv.appendChild(postText);
    postDiv.appendChild(copyBtn);
    postDiv.appendChild(deleteBtn);

    postsSection.appendChild(postDiv);
  });
}

function addPost() {
  const postText = postInput.value.trim();
  if (postText) {
    posts.unshift(postText);
    localStorage.setItem("posts", JSON.stringify(posts));
    postInput.value = "";
    renderPosts();
    alert("Post added!");
  }
}

function deletePost(index) {
  if (emailInput.value === adminEmail && passwordInput.value === adminPassword) {
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
    alert("Post deleted!");
  } else {
    alert("Invalid credentials. Access denied.");
  }
}

addPostBtn.onclick = addPost;

aboutBtn.onclick = () => {
  aboutPage.classList.remove("hidden");
};

closeAboutBtn.onclick = () => {
  aboutPage.classList.add("hidden");
};

renderPosts();
