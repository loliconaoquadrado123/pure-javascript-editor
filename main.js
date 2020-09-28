function editor(){
    console.log('ola')
}
window.addEventListener('load',function (){
    document.getElementById('input').addEventListener('focus',editor);

})
