const blogForm = document.getElementById("blogForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const postsContainer = document.getElementById("postsContainer");

const STORAGE_KEY = "simpleBlogPosts";

// Load posts from local storage
function getPosts() {
    try {
        const savedPosts = localStorage.getItem(STORAGE_KEY);
        const posts = savedPosts ? JSON.parse(savedPosts) : [];

        return Array.isArray(posts) ? posts : [];
    } catch (error) {
        console.error("Unable to load posts:", error);
        return [];
    }
}

// Save posts to local storage
function savePosts(posts) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        return true;
    } catch (error) {
        alert("Unable to save posts. Browser storage may be full.");
        console.error("Unable to save posts:", error);
        return false;
    }
}

// Display posts on the page
function displayPosts() {
    const posts = getPosts();
    postsContainer.replaceChildren();

    if (posts.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent = "No posts yet. Create your first blog post!";
        postsContainer.appendChild(message);
        return;
    }

    posts.forEach((post) => {
        const postElement = document.createElement("article");
        postElement.className = "post";

        const title = document.createElement("h3");
        title.textContent = post.title;

        const date = document.createElement("p");
        date.className = "post-date";
        date.textContent = new Date(post.createdAt).toLocaleString();

        const content = document.createElement("p");
        content.style.whiteSpace = "pre-wrap";
        content.textContent = post.content;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete Post";
        deleteButton.addEventListener("click", () => {
            deletePost(post.id);
        });

        postElement.append(title, date, content, deleteButton);
        postsContainer.appendChild(postElement);
    });
}

// Create a new post
blogForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        alert("Please enter both a title and post content.");
        return;
    }

    const posts = getPosts();

    const newPost = {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        createdAt: new Date().toISOString()
    };

    posts.unshift(newPost);

    if (savePosts(posts)) {
        blogForm.reset();
        displayPosts();
    }
});

// Delete a selected post
function deletePost(postId) {
    const posts = getPosts();
    const updatedPosts = posts.filter((post) => post.id !== postId);

    if (updatedPosts.length === posts.length) {
        return;
    }

    if (savePosts(updatedPosts)) {
        displayPosts();
    }
}

// Display saved posts when the app opens
displayPosts();