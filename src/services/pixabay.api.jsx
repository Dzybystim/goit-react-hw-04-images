const KEY = "30142714-7b10e34c120f858629a98df8c"
const amountFoto = 12

export function pixabayApi (search, page) {
   return fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${amountFoto}`)
    .then(res => res.json())
}