const button = document.getElementById("button")
const select = document.getElementById("value-troca")

const convertValue = async () => {
  const inputReal = document.getElementById("value-real").value
  const realText = document.getElementById("valor-real")
  const valorDolar = document.getElementById("valor-dolar")

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal)

  if (select.value === "U$ Dólar Americano") {
    valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputReal / dolar)
  }

  if (select.value === "€ Euro") {
    valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputReal / euro)
  }
  if (select.value === "₿ Bitcoin") {
    valorDolar.innerHTML = new Intl.NumberFormat( {
        style: "currency",
        currency: "BTC",
      }).format(inputReal * bitcoin)
  }
  

}

changeCurrency = () => {
    const currency = document.getElementById("currency")
    const bandeira = document.getElementById("img-bandeira-eua")

    if (select.value === "€ Euro") {
        currency.innerHTML = "Euro"
        bandeira.src = "./img/euro.png"
    }

    if (select.value === "U$ Dólar Americano") {
        currency.innerHTML = "Dólar Americano"
        bandeira.src = "./img/eua.png"
    }

    if (select.value === "₿ Bitcoin") {
        currency.innerHTML = "Bitcoin"
        bandeira.src = "./img/bitcoin.png"
    }

    convertValue()
}


button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)