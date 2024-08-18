const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact")
const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL)
    console.log(response.status)
    let data = await response.json();
    factPara.innerText = data[3].text;
}

