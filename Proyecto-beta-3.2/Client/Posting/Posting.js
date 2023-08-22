const { post } = require("../../Server/components/components/router");
const { error } = require("../../Server/response");

const productList = document.getElementById('postingList');
const btmAddProduct = document.getElementById('btmAddPost');
const LoaderDiv = document.getElementById('loader');

const printPostlist = async () => {
    const dataList = await fetch('http://localhost:3100/products', {
        method: 'GET',
    });
    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult;
}

document.addEventListener('DOMContentLoaded', () => {
    
    printPostlist()
    .then((post) => {

        if (!post) {
            return LoaderDiv.innerHTML = '<h2>Loading...</h2>';
        } else {
          const listPost = post.message.map(post => {

            function updatePost () {
                return window.location.href = './updateproduct.html';
            }

            const button = () => `
            <button id ="test" onclick ="${updatePost}">Update Post</button>

            <button id = "btnDeleteProduct">Delete Product</button>
            `

            const printPost = `
            <ul class="listPost">
            <li>Title: ${post.post.title}</li>
            <li>Description: ${post.post.description}</li>
            <li>Price: ${post.post.price}</li>
            <img src="${post.post.image}">
            </ul>
            `
            ;
            return printPost;
          });
          productList.innerHTML = listPost.join("");
        }
    })
    .catch((error) => console.error(error));
});

btnAddPost.addEventListener('click', () => {
    window.location.href = "./addpost.html";
});

 