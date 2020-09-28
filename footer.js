screen=window.innerHeight;
document.getElementById('editor').style.height=screen+'px';
function clip(){
    text = document.getElementById('text');

    text.select();
    document.execCommand("copy");
    
}
function windoww(){
    document.createElement('div').setAttribute('id','window');
    
}
function save(){
    text = document.getElementById('text').value;
    
}