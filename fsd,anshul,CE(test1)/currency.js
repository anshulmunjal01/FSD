function showConverter() {
    document.getElementById('converter').style.display = 'block';
}
async function loadCurrencies() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await response.json();
        const currencyDropdown = document.getElementById('toCurrency');
        for (const currency in data.rates) {
            const option = document.createElement('option');
            option.value = currency;
            option.text = `${currency} - ${currency}`;
            currencyDropdown.add(option);
        }
    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

loadCurrencies();

async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
    const resultDiv = document.getElementById('result');
    const convertedAmountField = document.getElementById('convertedAmount');

    if (amount === "" || isNaN(amount)) {
        resultDiv.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        if (!rate) {
            resultDiv.innerText = `Conversion rate not available for ${toCurrency}.`;
            return;
        }

        const convertedAmount = (amount * rate).toFixed(2);
        convertedAmountField.value = convertedAmount;
    } catch (error) {
        resultDiv.innerText = "Error fetching conversion rates. Please try again.";
    }
}