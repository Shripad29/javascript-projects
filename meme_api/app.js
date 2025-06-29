const generateBtn = document.querySelector('.btn')
const memeTitle = document.querySelector('.meme_title')
const memeImg = document.querySelector('.meme_img')
const authorOutput = document.querySelector('.author')


function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=> res.json())
    .then((data)=> {
     const {author, title, url} = data 
 
     memeTitle.innerText = title
     memeImg.src = url
     authorOutput.innerText = `Meme By: ${author}`
    })
}

getMeme()

generateBtn.addEventListener('click',()=>{
    getMeme()
})



