const populate = async (currency, value) => {
    url = "https://api.currencyapi.com/v3/latest/?apikey=cur_live_F2ERfMdnWIYCoSHwA7bEDefjyX3dS88iezLRuLY8&base_currency=" + currency;

    let myString = "";
    let response = await fetch(url)

    let rJson = await response.json();
    document.querySelector(".output").style.display = "block";
    for (let key of Object.keys(rJson["data"])) {
        myString += `
            <tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
            </tr>
        `
    }
    const tableBody = document.querySelector("tbody");

    tableBody.innerHTML = myString

}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("#quantity").value);
    const currency = document.querySelector("#currency").value;
    populate(currency, value);
})

