window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl ='https://getresumecounter6.azurewebsites.net/api/GetResumeCounter?code=M5LfN_OJZS8sbGDrx1yJH_TOpsEKApdulgmY2nbpUEmBAzFueLwJSQ==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}