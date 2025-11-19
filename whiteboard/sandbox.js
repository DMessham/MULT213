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

const fetchdata = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(postData => {
        console.log('\n   post: ', postData)
        return postData
    })
    .then(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))
    .then(response => response.json())
    .then(comments => console.log('    Comments: ', comments))
    .catch(error => console.error('    Error:', error))
}

const sandbox = () => {
    add(1, 2, logResult);
    // fetchdata();
    
    console.log("start");
    delay(2000)
    .then(() => {
        console.log("2 seconds passed");
    })
  .catch(error => console.error(error));
}

export {sandbox, delay}