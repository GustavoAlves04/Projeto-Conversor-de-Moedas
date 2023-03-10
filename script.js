const button = document.getElementById('button')
const select = document.getElementById('select-convert')
const dolar = 5.20

const convertValue = () =>{
    const inputReal = document.getElementById('value-real').value
    const realText = document.getElementById('valor-real')
    const valorDolar = document.getElementById('valor-dolar')


    realText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReal)

    valorDolar.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(inputReal / dolar)

}

changeSelect = () => {
    const moeda = document.getElementById('moeda')
    const imgBandeiraEua = document.getElementById('img-bandeira-eua')


    if(select.value = '€ Euro'){
        moeda.innerHTML = 'Euro'
        imgBandeiraEua.src = './img/euro.png'
    }

    if(select.value = 'U$ Dólar Americano'){
        moeda.innerHTML = 'Dólar Americano'
        imgBandeiraEua.src = './img/eua.png'
    }
}



button.addEventListener('click', convertValue)
select.addEventListener('change', changeSelect)