function buscaCep(cep){
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    fetch(url).then((response) =>{
        return response.json()
    }).then((data) => {
        let resultadoDiv = document.querySelector('#resultado')
        resultadoDiv.innerHTML += '<b>CEP: </b>' + data['cep'] + '<br/>'
        resultadoDiv.innerHTML += '<b>Logradouro: </b>' + data['logradouro'] + '<br/>'
        resultadoDiv.innerHTML += '<b>Complemento: </b>' + data['complemento'] + '<br/>'
        resultadoDiv.innerHTML += '<b>Bairro: </b>' + data['bairro'] + '<br/>'
        resultadoDiv.innerHTML += '<b>DDD: </b>' + data['ddd'] + '<br/>'

        


    })
}


document.getElementById('btnConsultar').addEventListener("click", () => {
    let cep = document.getElementById('cep').value
    let resultadoDiv = document.querySelector('#resultado')
    resultadoDiv.innerHTML = ''
    if(cep.length < 8){
        alert('O CEP informado é inválido')
        document.getElementById('cep').value = ''
        return false
    }
    buscaCep(cep)
})