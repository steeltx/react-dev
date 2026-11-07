import type { GiphyResponseTs } from "../data/giphy.response";

const API_KEY = '';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);


const createImageInsideDOM = (url : string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

request
.then((response) => response.json())
.then(( { data } : GiphyResponseTs) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
})
.catch((err) => {
    console.error(err)
});
