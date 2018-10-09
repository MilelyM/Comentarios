let post = [];
function atraparComent() {
    if (document.getElementById('textInput').value === "")
        return;
    // rescatar el valor y la cantidad
    var li =
    {
        index: post.length + 1,
        value: document.getElementById('textInput').value
    };

    post.push(li);
    publicacion.innerHTML = '';

    for (let index = 0; index < post.length; index++) {

        var element = post[index];
        publicacion.innerHTML += `
           <div id='div' class='divPubl'><p >${element.value}</p>
           <button id= "mybtn" onclick="remover(${index})">Eliminar</button></div>`
    };

}

function remover(i) {
    // borra del array
    post.splice(i, 1);
    // limpia los comentarios y los recorre y los vuelve a mostrar
    publicacion.innerHTML = '';
    for (let index = 0; index < post.length; index++) {

        var element = post[index];
        publicacion.innerHTML += `
       <div id='div' class='divPubl'><p >${element.value}</p>
       <button id= "mybtn" onclick="remover(${index})">Eliminar</button></div>`
    };

}

