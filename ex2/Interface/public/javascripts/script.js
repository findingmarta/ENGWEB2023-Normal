$(function(){

})

function changePage(id){
    window.location.href = "http://localhost:15030/plantas/"+id;
}

function changeSpecies(esp){
    window.location.href = "http://localhost:15030/plantas?especie="+esp;
}