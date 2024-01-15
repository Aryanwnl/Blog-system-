// Sample data for blog posts
const blogPosts = [
    { title: 'Gaming blog', content: 'Call of duty Gaming clips from 2022.' },
    { title: 'Travel blog', content: 'My first international trip.' }
];

// Function to display blog posts
function displayPosts() {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';

    blogPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        blogList.appendChild(postElement);
    });
}

// Function to open the modal for creating a new post
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Function to submit a new post
function submitPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        blogPosts.push({ title, content });
        displayPosts();
        closeModal();
    } else {
        alert('Please fill in both title and content.');
    }
}

// Function to delete a post
function deletePost(index) {
    blogPosts.splice(index, 1);
    display
Posts();
}

// Initial display of posts
displayPosts();