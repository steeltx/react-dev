import type { GiphyResponseTs } from "../data/giphy.response";

const API_KEY = '';

const createImageInsideDOM = (url : string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const {data}: GiphyResponseTs = await response.json();
    return data.images.original.url;
}

getRandomGifUrl().then(createImageInsideDOM);
