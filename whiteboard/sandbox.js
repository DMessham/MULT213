

function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

function logResult(result) {
    console.log(result);
}

function fetchdata(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))
    .then(response => response.json())
    .then(comments => console.log(comments))
    .catch(error => console.error('Error:', error))
}

export const sandbox = () => {
    add(1, 2, logResult);
    fetchdata();
}