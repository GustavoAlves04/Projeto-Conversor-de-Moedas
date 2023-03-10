const button = document.getElementById("button")
const select = document.getElementById("value-troca")

const dolar = 5.20
const euro = 5.55
const bitcoin = 1

const convertValue = () => {
  const inputReal = document.getElementById("value-real").value
  const realText = document.getElementById("valor-real")
  const valorDolar = document.getElementById("valor-dolar")

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
    valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(bitcoin * inputReal)
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