function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

function logResult(result) {
    console.log(result);
}

const fetchDataOld = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))
    .then(response => response.json())
    .then(comments => console.log(comments))
    .catch(error => console.error('Error:', error))
  
}

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
      const comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
      const commentData = await comments.json();
      console.log(commentData);
    } catch (error) {
      console.error(error);
    }
  }

export const sandbox = async () => {
    add(1, 2, logResult);
    await fetchData();
    
    console.log("start");
    await delay(2000)
    .then(() => {
        console.log("2 seconds passed");
    })
  .catch(error => console.error(error));
}

export { delay}