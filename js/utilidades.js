function crearNodo(nodo) {
    var nodo =  document.createElement(nodo) 
    return nodo

}

function crearNodoConTexto(nodo,texto) {
    var nodo = crearNodo(nodo)
        var nodoTexto = document.createTextNode(texto)
        nodo.appendChild(nodoTexto)
        return nodo
        
}

function crearImagen(rutaImagen, textoAlt, ancho, alto) {
    var nodoImagen =  crearNodo("img")
    nodoImagen.src = rutaImagen
    nodoImagen.alt = textoAlt
    nodoImagen.style.width = ancho;
    nodoImagen.style.height = alto;
    return nodoImagen
    
}

function crearVideo(rutaVideo, textoAlt, ancho, alto){
    var nodoVideo = crearNodo("video")
    var source = crearNodo("source")
    source.src = rutaVideo
    nodoVideo.setAttribute("controls", "controls") 
    nodoVideo.appendChild(source)
    return nodoVideo

    
}

function crearEnlaces(nodo,texto, rutaEnlace, target){
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.href = rutaEnlace
    nodo.target = target
    nodo.appendChild(nodoTexto)
    return nodo
}

function abrevia(abreviacion, texto){
    var abbr = crearNodo("abbr")
    abbr.textContent = texto
    abbr.title = abreviacion
    return abbr
}


function adicionarNodoBody(nodo){
    document.body.appendChild(nodo) 
}

function adicionarNodoAContenedor(nodo,contenedor){
    contenedor.appendChild(nodo)
}

