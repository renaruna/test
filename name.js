const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(response);
    });
    request.open('GET', dataPath, true);
    request.send();
}
   
function convertArray(data) {
    const dataArray = [];
    const dataString = data.split('n');
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
    }
    outputElement.innerHTML = dataArray;
}
   
   getCsvData('index.csv');
