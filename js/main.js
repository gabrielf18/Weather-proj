const handleAddTicker = async (event) => {
    const cidade = document.getElementById("cidade").value;

    try{
        const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=1538694b&city_name=${cidade}`) //faz a requisição no API
        const data = await response.json()
        const nome = data["results"]["city"]
        const temp = data["results"]["temp"]
        const date = data["results"]["date"]
        const humidade = data["results"]["humidity"]
        const description = data["results"]["description"]
        const forecast = data["results"]["forecast"]
        const code = data["results"]["condition_code"]
        let imagem
        console.log(code)
        /*if (code == 0 || code == 1 || code == 9 || code == 11 || code == 12 || code == 40 || code == 45 || code == 47 || code == 37){
            const imagem = "/wheather-project/img/rain.png"
        }*/
        if(code==28 || code == 29){
            imagem = "/wheather-project/img/cloudy.png"
        }else{
            imagem = "/wheather-project/img/sun.png"
        }
//<img src="/wheather-project/img/sun.png" alt="">
        if(nome){            
            const newTicker = ` 
                <div class="infos">
                    <h1>${nome}</h1>
                    <p id="data">Data: ${date}</p>
                    <p id="tempMin">Temp min: ${forecast[0].min}C°</p>
                    <p id="tempMax">Temp max: ${forecast[0].max}C°</p>
                    <img src="${imagem}" alt="">
                    <p id="humidade">humidade ${humidade}%</p>
                    <p id="desc">${description}</p>
                    <p id="temp">Temp atual: ${temp} c°</p>
                </div>
            `
            const tickerList = document.querySelector('#quadros')
            tickerList.innerHTML = newTicker + tickerList.innerHTML
        }else{
            alert(`error`)
        }
    } catch(error){
        alert(error)
    }
}