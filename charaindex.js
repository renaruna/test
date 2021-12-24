const nameElement = document.getElementById('name');
const hiranameElement = document.getElementById('hiraname');
const ageElement = document.getElementById('age');
const sexElement = document.getElementById('sex');
const jobElement = document.getElementById('job');
const memberElement = document.getElementById('member');
const colorElement = document.getElementById('color');
const makerElement = document.getElementById('maker');
const hpElement = document.getElementById('hp');
const mpElement = document.getElementById('mp');
const sanElement = document.getElementById('san');

//CSVファイルを読み込む
function getCsvData(dataPath) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(response);
    });
    request.open('GET', dataPath, true);
    request.send();// HTTPリクエストの発行
}
   
function convertArray(data) {
    const dataArray = [];
    const dataObject = {};
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
            dataObject.id = dataArray[i][0];
            dataObject.name = dataArray[i][1];
            dataObject.hiraname = dataArray[i][2];
            dataObject.age = dataArray[i][3];
            dataObject.sex = dataArray[i][4];
            dataObject.job = dataArray[i][5];
            dataObject.member = dataArray[i][6];
            dataObject.color = dataArray[i][7];
            dataObject.maker = dataArray[i][8];
            dataObject.hp = dataArray[i][9];
            dataObject.mp = dataArray[i][10];
            dataObject.san = dataArray[i][11];
            break;
     
    }
    
    display(dataObject);

}

function display(dataObject) {
    nameElement.textContent = dataObject.name;
    makerElement.textContent = dataObject.maker;
    hiranameElement.textContent = dataObject.hiraname;
    ageElement.textContent = dataObject.age;
    sexElement.textContent = dataObject.sex;
    jobElement.textContent = dataObject.job;
    memberElement.textContent = dataObject.member;
    colorElement.textContent = dataObject.color;
    makerElement.textContent = dataObject.maker;
    hpElement.textContent = dataObject.hp;
    mpElement.textContent = dataObject.mp;
    sanElement.textContent = dataObject.san;
  
}
   
getCsvData('character-index - manager.csv');
