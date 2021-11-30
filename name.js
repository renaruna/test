const outputElement = document.getElementById('output_csv');
const titleElement = document.getElementById('title');
const makerElement = document.getElementById('maker');
const urlElement = document.getElementById('url');
const dateElement = document.getElementById('date');
const kpElement = document.getElementById('KP');
const driverElement = document.getElementById('driverPC');
const managerElement = document.getElementById('managerPC');
const bossElement = document.getElementById('bossPC');
const spiritualElement = document.getElementById('spiritualPC');
const warcrimElement = document.getElementById('warcrimPC');
const creatorElement = document.getElementById('creatorPC');

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
        if(i == scenarioID) {
            dataObject.id = dataArray[i][0];
            dataObject.name = dataArray[i][1];
            dataObject.maker = dataArray[i][2];
            dataObject.url = dataArray[i][3];
            dataObject.date = dataArray[i][4];
            dataObject.KP = dataArray[i][5];
            dataObject.driver = dataArray[i][6];
            dataObject.manager = dataArray[i][7];
            dataObject.boss = dataArray[i][8];
            dataObject.spiritual = dataArray[i][9];
            dataObject.warcrim = dataArray[i][10];
            dataObject.creator = dataArray[i][11];
            break;
        }
    }
    
    display(dataObject);
    outputElement.textContent = dataObject.id;

}

function display(dataObject) {
    let memberKP;
    switch (dataObject.KP) {
        case "運転手":
            memberKP = "driver.html";
            break;
        case "管理人":
            memberKP = "manager.html";
            break;
        case "上司":
            memberKP = "boss.html";
            break;
        case "スピリチュアルな存在。":
            memberKP = "spiritual.html";
            break;
        case "戦犯":
            memberKP = "warcrim.html";
            break;
        case "創造主":
            memberKP = "creator.html";
            break;
        default:
            memberKP = "#";  
    }
    
    titleElement.textContent = dataObject.name;
    makerElement.textContent = dataObject.maker;
    urlElement.innerHTML =  '<p>シナリオページ</p><a href="'+dataObject.url+'" >'+dataObject.url+'</a>';
    dateElement.textContent = dataObject.date;
    kpElement.innerHTML = '<p>KP</p><a href='+memberKP+'>'+dataObject.KP+'</a>';
    if (dataObject.driver) {
        driverElement.innerHTML = '<p><a href="'+dataObject.driver+'.html">'+dataObject.driver+'</a>：<a href="driver.html">運転手</a></p>';
    }
    if (dataObject.manager) {
        managerElement.innerHTML = '<p><a href="'+dataObject.manager+'.html">'+dataObject.manager+'</a>：<a href="manager.html">管理人</a></p>';
    }
    if (dataObject.boss) {
        bossElement.innerHTML = '<p><a href="'+dataObject.boss+'.html">'+dataObject.boss+'</a>：<a href="boss.html">上司</a></p>';
    }
    if (dataObject.spiritual) {
        spiritualElement.innerHTML = '<p><a href="'+dataObject.spiritual+'.html">'+dataObject.spiritual+'</a>：<a href="spiritual.html">スピリチュアルな存在。</a></p>';
    }
    if (dataObject.warcrim) {
        warcrimElement.innerHTML = '<p><a href="'+dataObject.warcrim+'.html">'+dataObject.warcrim+'</a>：<a href="warcrim.html">戦犯</a></p>';
    }
    if (dataObject.creator) {
        creatorElement.innerHTML = '<p><a href="'+dataObject.creator+'.html">'+dataObject.creator+'</a>：<a href="creator.html">創造主</a></p>';
    }
    }
   
getCsvData('website - scenario.csv');
