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
const npcElement = document.getElementById('NPC');
const cArray = [];
const sArray = [];
const dataObject = {};

//CSVファイルを読み込む
function getCsvData(dataPathC, dataPathS) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvS(response, dataPathS);
    });
    request.open('GET', dataPathC, true);
    request.send();// HTTPリクエストの発行

}
   
function getCsvS(data, dataPathS) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(data, response);
    });
    request.open('GET', dataPathS, true);
    request.send();// HTTPリクエストの発行
}

function convertArray(dataC, dataS) {
    const dataStringC = dataC.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    const dataStringS = dataS.split('\n');
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataStringC.length; i++) {
     cArray[i] = dataStringC[i].split(',');
    }
    for (let i = 0; i < dataStringS.length; i++) {
     sArray[i] = dataStringS[i].split(',');
    }
    for (let i = 0; i < dataStringS.length; i++) {
       if(i == scenarioID) {
            dataObject.id = sArray[i][0];
            dataObject.name = sArray[i][1];
            dataObject.maker = sArray[i][2];
            dataObject.url = sArray[i][3];
            dataObject.date = sArray[i][4];
            dataObject.KP = sArray[i][5];
            dataObject.driver = sArray[i][6];
            dataObject.manager = sArray[i][7];
            dataObject.boss = sArray[i][8];
            dataObject.spiritual = sArray[i][9];
            dataObject.warcrim = sArray[i][10];
            dataObject.creator = sArray[i][11];
           
            dataObject.NPC = sArray[i][13];
            break;
        }
    }
    
    display();
    outputElement.textContent = dataObject.id;
}


function display() {
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
    urlElement.innerHTML =  '<a href="'+dataObject.url+'" >'+dataObject.url+'</a>';
    dateElement.textContent = dataObject.date;
    kpElement.innerHTML = '<a href='+memberKP+'>'+dataObject.KP+'</a>';
    if (dataObject.driver) {
        driverElement.innerHTML = '<a href="'+dataObject.driver+'.html">'+dataObject.driver+'</a>：<a href="driver.html">運転手</a>';
    }
    if (dataObject.manager) {
        managerElement.innerHTML = '<a href="'+search(dataObject.manager)+'">'+dataObject.manager+'</a>：<a href="manager.html">管理人</a>';
    }
    if (dataObject.boss) {
        bossElement.innerHTML = '<a href="'+dataObject.boss+'.html">'+dataObject.boss+'</a>：<a href="boss.html">上司</a>';
    }
    if (dataObject.spiritual) {
        spiritualElement.innerHTML = '<a href="'+dataObject.spiritual+'.html">'+dataObject.spiritual+'</a>：<a href="spiritual.html">スピリチュアルな存在。</a>';
    }
    if (dataObject.warcrim) {
        warcrimElement.innerHTML = '<a href="'+dataObject.warcrim+'.html">'+dataObject.warcrim+'</a>：<a href="warcrim.html">戦犯</a>';
    }
    if (dataObject.creator) {
        creatorElement.innerHTML = '<a href="'+dataObject.creator+'.html">'+dataObject.creator+'</a>：<a href="creator.html">創造主</a>';
    }
}

function search(chara) {
    for (let i=0; i < cArray.length; i++) {
        if (cArray[i][1].indexOf(chara) !== -1) {
            return cArray[i][29];
        }
    }
    return "#";
}

   
getCsvData('character-index - manager.csv', 'website - scenario.csv');
