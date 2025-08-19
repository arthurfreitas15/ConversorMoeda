const convertButton = document.querySelector(".convert")
const originalCurrency = document.querySelector("#original-currency")
const finalCurrency = document.querySelector("#final-currency")
const valueInput = document.querySelector("#inputCurrency")
let currencyFormati = "BRL"
let currencyFormatf = "BRL"
let languagei = "pt-BR"
let languagef = "pt-BR"
let currency = 1
let originalCurrencyValue = 1

let real
let dolar
let euro
let libra
let bitcoin


document.querySelector("#original").innerHTML = new Intl.NumberFormat(languagei, {
    style: "currency",
    currency: currencyFormati
}).format(document.querySelector("#original").innerHTML)

document.querySelector("#converted").innerHTML = new Intl.NumberFormat(languagef, {
    style: "currency",
    currency: currencyFormatf
}).format(document.querySelector("#converted").innerHTML)



function convertValues() {
    const inputCurrencyValue = document.querySelector("#inputCurrency").value
    const currencyToConvert = currency
    const convertedValue = inputCurrencyValue * originalCurrencyValue / currencyToConvert
    document.querySelector("#original").innerHTML = inputCurrencyValue


    document.querySelector("#original").innerHTML = new Intl.NumberFormat(languagei, {
        style: "currency",
        currency: currencyFormati
    }).format(document.querySelector("#original").innerHTML)

    document.querySelector("#converted").innerHTML = new Intl.NumberFormat(languagef, {
        style: "currency",
        currency: currencyFormatf
    }).format(convertedValue)

    console.log(convertedValue)
}

function currencySelector() {
    if (document.querySelector("#original-currency") == originalCurrency) {
        let currencyOption = document.querySelector("#original-currency").value
        if (currencyOption == "real") {
            document.querySelector("#originalcountry").src = "./assets/img/brasil.png"
            document.querySelector("#original-label").innerHTML = "BRL"
            originalCurrencyValue = 1
            currencyFormati = "BRL"
            languagei = "pt-BR"
        } else if (currencyOption == "dolar") {
            document.querySelector("#originalcountry").src = "./assets/img/estados-unidos.png"
            document.querySelector("#original-label").innerHTML = "USD"
            originalCurrencyValue = 5.39
            currencyFormati = "USD"
            languagei = "en-US"
        } else if (currencyOption == "euro") {
            document.querySelector("#originalcountry").src = "./assets/img/euro.png"
            document.querySelector("#original-label").innerHTML = "EUR"
            originalCurrencyValue = 6.29
            currencyFormati = "EUR"
            languagi = "de-DE"
        } else if (currencyOption == "libra") {
            document.querySelector("#originalcountry").src = "./assets/img/libra-esterlina.png"
            document.querySelector("#original-label").innerHTML = "GPB"
            originalCurrencyValue = 7.28
            currencyFormati = "GPB"
            languagei = "en-UK"
        } else if (currencyOption == "bitcoin") {
            document.querySelector("#originalcountry").src = "./assets/img/bitcoin.png"
            document.querySelector("#original-label").innerHTML = "BTC"
            originalCurrencyValue = 646380.02
            currencyFormati = "BTC"
            languagei = "en-US"
        }

    }
    if (document.querySelector("#final-currency") == finalCurrency) {
        let currencyOption = document.querySelector("#final-currency").value
        if (currencyOption == "real") {
            document.querySelector("#finalcountry").src = "./assets/img/brasil.png"
            document.querySelector("#final-label").innerHTML = "BRL"
            currency = 1
            currencyFormatf = "BRL"
            languagef = "pt-BR"
        } else if (currencyOption == "dolar") {
            document.querySelector("#finalcountry").src = "./assets/img/estados-unidos.png"
            document.querySelector("#final-label").innerHTML = "USD"
            currency = 5.39
            currencyFormatf = "USD"
            languagef = "en-US"
        } else if (currencyOption == "euro") {
            document.querySelector("#finalcountry").src = "./assets/img/euro.png"
            document.querySelector("#final-label").innerHTML = "EUR"
            currency = 6.29
            currencyFormatf = "EUR"
            languagef = "en-UE"
        } else if (currencyOption == "libra") {
            document.querySelector("#finalcountry").src = "./assets/img/libra-esterlina.png"
            document.querySelector("#final-label").innerHTML = "GPB"
            currency = 7.28
            currencyFormatf = "GPB"
            languagef = "en-UK"
        } else if (currencyOption == "bitcoin") {
            document.querySelector("#finalcountry").src = "./assets/img/bitcoin.png"
            document.querySelector("#final-label").innerHTML = "BTC"
            currency = 646380.02
            currencyFormatf = "BTC"
            languagef = "en-US"
        }
        document.querySelector("#converted").innerHTML = new Intl.NumberFormat(languagef, {
            style: "currency",
            currency: currencyFormatf
        }).format(document.querySelector("#converted").innerHTML)

       
    }

}

convertButton.addEventListener("click", convertValues)
originalCurrency.addEventListener("change", currencySelector)
finalCurrency.addEventListener("change", currencySelector)





