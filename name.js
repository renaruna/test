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
const drArray = [];
const mnArray = [];
const bsArray = [];
const spArray = [];
const wcArray = [];
const crArray = [];
const sArray = [];
const dataObject = {};

//CSVファイルを読み込む
function getCsvData(dataPathS, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvDr(response, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathS, true);
    request.send();// HTTPリクエストの発行

}
   
function getCsvDr(dataS, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvMn(dataS, response, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathDr, true);
    request.send();// HTTPリクエストの発行
}

function getCsvMn(dataS, dataDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvBs(dataS, dataDr, response, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathMn, true);
    request.send();// HTTPリクエストの発行
}

function getCsvBs(dataS, dataDr, dataMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvSp(dataS, dataDr, dataMn, response, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathBs, true);
    request.send();// HTTPリクエストの発行
}

function getCsvSp(dataS, dataDr, dataMn, dataBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvWc(dataS, dataDr, dataMn, dataBs, response, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathSp, true);
    request.send();// HTTPリクエストの発行
}

function getCsvWc(dataS, dataDr, dataMn, dataBs, dataSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvCr(dataS, dataDr, dataMn, dataBs, dataSp, response, dataPathCr);
    });
    request.open('GET', dataPathWc, true);
    request.send();// HTTPリクエストの発行
}

function getCsvCr(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, response);
    });
    request.open('GET', dataPathCr, true);
    request.send();// HTTPリクエストの発行
}

function convertArray(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, dataCr) {
    const dataStringS = dataS.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    const dataStringDr = dataDr.split('\n');
    const dataStringMn = dataMn.split('\n');
    const dataStringBs = dataBs.split('\n');
    const dataStringSp = dataSp.split('\n');
    const dataStringWc = dataWc.split('\n');
    const dataStringCr = dataCr.split('\n');
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataStringS.length; i++) {
        sArray[i] = dataStringS[i].split(',');
    }
    for (let i = 0; i < dataStringDr.length; i++) {
        drArray[i] = dataStringDr[i].split(',');
    }
    for (let i = 0; i < dataStringMn.length; i++) {
        mnArray[i] = dataStringMn[i].split(',');
    }
    for (let i = 0; i < dataStringBs.length; i++) {
        bsArray[i] = dataStringBs[i].split(',');
    }
    for (let i = 0; i < dataStringSp.length; i++) {
        spArray[i] = dataStringSp[i].split(',');
    }
    for (let i = 0; i < dataStringWc.length; i++) {
        wcArray[i] = dataStringWc[i].split(',');
    }
    for (let i = 0; i < dataStringCr.length; i++) {
        crArray[i] = dataStringCr[i].split(',');
    }

    for (let i = 0; i < dataStringS.length; i++) {
        if (i == scenarioID) {
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
    if (dataObject.KP.indexOf("運転手") == 0) {
        memberKP = "driver.html";
    } else if (dataObject.KP.indexOf("管理人") == 0) {
        memberKP = "manager.html";
    } else if (dataObject.KP.indexOf("上司") == 0) {
        memberKP = "boss.html";
    } else if (dataObject.KP.indexOf("スピリチュアルな存在。") == 0) {
        memberKP = "spiritual.html";
    } else if (dataObject.KP.indexOf("戦犯") == 0) {
        memberKP = "warcrim.html";
    } else if (dataObject.KP.indexOf("創造主") == 0) {
        memberKP = "creator.html";
    } else {
        memberKP = "#";
    }
    
    titleElement.textContent = dataObject.name;
    makerElement.textContent = dataObject.maker;
    urlElement.innerHTML =  '<a href="'+dataObject.url+'" >'+dataObject.url+'</a>';
    dateElement.textContent = dataObject.date;
    kpElement.innerHTML = '<a href='+memberKP+'>'+dataObject.KP+'</a>';
    if (dataObject.driver) {
        driverElement.innerHTML = '<a href="'+search(drArray, dataObject.driver)+'">'+dataObject.driver+'</a>：<a href="driver.html">運転手</a>';
    }
    if (dataObject.manager) {
        managerElement.innerHTML = '<a href="'+search(mnArray, dataObject.manager)+'">'+dataObject.manager+'</a>：<a href="manager.html">管理人</a>';
    }
    if (dataObject.boss) {
        bossElement.innerHTML = '<a href="'+search(bsArray, dataObject.boss)+'">'+dataObject.boss+'</a>：<a href="boss.html">上司</a>';
    }
    if (dataObject.spiritual) {
        spiritualElement.innerHTML = '<a href="'+search(spArray, dataObject.spiritual)+'">'+dataObject.spiritual+'</a>：<a href="spiritual.html">スピリチュアルな存在。</a>';
    }
    if (dataObject.warcrim) {
        warcrimElement.innerHTML = '<a href="'+search(wcArray, dataObject.warcrim)+'">'+dataObject.warcrim+'</a>：<a href="warcrim.html">戦犯</a>';
    }
    if (dataObject.creator) {
        creatorElement.innerHTML = '<a href="'+search(crArray, dataObject.creator)+'">'+dataObject.creator+'</a>：<a href="creator.html">創造主</a>';
    }
}

function search(array, chara) {
    for (let i=0; i < array.length; i++) {
        if (array[i][1].indexOf(chara) !== -1) {
            return array[i][29];
        }
    }
    return "#";
}

   
getCsvData('website - scenario.csv', 'character-index - driver.csv', 'character-index - manager.csv', 'character-index - boss.csv', 'character-index - spiritual.csv', 'character-index - warcrim.csv', 'character-index - creator.csv');
