function Fatorial() {
    let numb = Number(document.querySelector("input[type = 'number']").value)
    let res = document.querySelector("#Resposta")
    let fat = 1

    for(let i = 1; i <= numb; i++){
        fat = i * fat;
    }

    res.setAttribute('class','border')
    res.innerHTML = fat

    return document.querySelector("input[type = 'number']").value = ''
}