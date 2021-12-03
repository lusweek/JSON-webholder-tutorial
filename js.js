let posts = []; 

const post = {
        userId: 1,
        title: "hejsan hoppsan",
        body: "Tjosan svenjsan hejoch hå!",
    
}

const requestHeaders = {
    "content-type": "application/json",
};

//GET (all)
const  getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const data = await res.json(); 
    posts = data
    document.querySelector("#posts").innerHTML = posts.map(post => 
        `<div id="box"><p>${post.title}</p> 
        <button onclick="updatePost(${post.id})" id="">Update me</button>
        <button onclick="deleatePost(${post.id})" id="">Delete me</button>
        </div>`).join("")
};

//GET (one)
// async - måste finnas för att man ska kunna använda await.
//  await väntar på att köra till förgående är klart
// .json() gör om ett JSON format till javascript format
const getOnePost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/8")
    const data = await res.json();
    document.querySelector("#post-one").innerHTML = `<h2> * ${data.title}<h2>`
}

// POST
const postPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        body: JSON.stringify(post),
        headers: requestHeaders,
    });
const data = await res.json();
console.log(data);
};

//UPDATE - exakt som POST men metoden är "put" och i slutet på url:en 
//sätter vi något värde.
// också - istället för post tar vi title: "TjohejpåDej" för att byta ut titeln
const updatePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "put",
        body: JSON.stringify({
            title: "TjohejpåDej"
        }),
        headers: requestHeaders,
    });
const data = await res.json();
console.log(data);
};

//DELETE
const deleatePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "delete"
    });
    const data = await res.json(); 
    console.log(data)
} 


window.addEventListener("load", () => {
    getPosts()
    getOnePost()
    document.querySelector("#post-stuff").addEventListener("click", postPost)
    document.querySelector("#update-stuff").addEventListener("click", () => updatePost(10))
    document.querySelector("#delete-stuff").addEventListener("click", () => deleatePost(5))
})