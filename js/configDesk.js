let searchIconH = document.querySelector('.headerSearchIcon')
let searchPop = document.querySelector('.SearchBox-popup')
let closeSearchH = document.querySelector('.SearchBox-popup .CloseSearch')
searchIconH.addEventListener('click',()=>{
    searchPop.classList.add('OpenSearch')
})
closeSearchH.addEventListener('click',()=>{
    searchPop.classList.remove('OpenSearch')
})

