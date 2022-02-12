const outputElement = document.getElementById('output_csv');//id
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
const jinElement = document.getElementById('jintext');
const drArray = [];
const mnArray = [];
const bsArray = [];
const spArray = [];
const wcArray = [];
const crArray = [];
const sArray = [];
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
    
    display();
}
function display() {
    if (jin == 0) {
        var dataObject = {};
        dataObject.id = sArray[scenarioID][0];
        dataObject.name = sArray[scenarioID][1];
        dataObject.maker = sArray[scenarioID][2];
        dataObject.url = sArray[scenarioID][3];
        dataObject.date = sArray[scenarioID][4];
        dataObject.KP = sArray[scenarioID][5];
        dataObject.driver = sArray[scenarioID][6];
        dataObject.manager = sArray[scenarioID][7];
        dataObject.boss = sArray[scenarioID][8];
        dataObject.spiritual = sArray[scenarioID][9];
        dataObject.warcrim = sArray[scenarioID][10];
        dataObject.creator = sArray[scenarioID][11];
                
        titleElement.textContent = dataObject.name;
        makerElement.textContent = dataObject.maker;
        urlElement.innerHTML =  '<a href="'+dataObject.url+'" >'+dataObject.url+'</a>';
        dateElement.textContent = dataObject.date;
        //KP
        kpElement.innerHTML = kpText(dataObject.KP);
        
        //PC
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
    } else {
        //シナリオ共通
        titleElement.textContent = sArray[scenarioID][1];//name,title
        makerElement.textContent = sArray[scenarioID][2];//maker
        urlElement.innerHTML =  '<a href="'+sArray[scenarioID][3]+'" >'+sArray[scenarioID][3]+'</a>';//url,page
        
        let text = "";
        let j = 0
            let dataObject = {};
            dataObject.id = sArray[scenarioID + j][0];
            dataObject.date = sArray[scenarioID + j][4];
            dataObject.KP = sArray[scenarioID + j][5];
            dataObject.driver = sArray[scenarioID + j][6];
            dataObject.manager = sArray[scenarioID + j][7];
            dataObject.boss = sArray[scenarioID + j][8];
            dataObject.spiritual = sArray[scenarioID + j][9];
            dataObject.warcrim = sArray[scenarioID + j][10];
            dataObject.creator = sArray[scenarioID + j][11];
            //KP
            let kpHTML = kpText(dataObject.KP);
            //PC
            let driver = "";
            let manager = "";
            let boss = "";
            let spiritual = "";
            let warcrim = "";
            let creator = "";
            if (dataObject.driver) {
                driver = '<p><a href="'+search(drArray, dataObject.driver)+'">'+dataObject.driver+'</a>：<a href="driver.html">運転手</a></p>';
            }
            if (dataObject.manager) {
                manager = '<p><a href="'+search(mnArray, dataObject.manager)+'">'+dataObject.manager+'</a>：<a href="manager.html">管理人</a></p>';
            }
            if (dataObject.boss) {
                boss = '<p><a href="'+search(bsArray, dataObject.boss)+'">'+dataObject.boss+'</a>：<a href="boss.html">上司</a></p>';
            }
            if (dataObject.spiritual) {
                spiritual = '<p><a href="'+search(spArray, dataObject.spiritual)+'">'+dataObject.spiritual+'</a>：<a href="spiritual.html">スピリチュアルな存在。</a></p>';
            }
            if (dataObject.warcrim) {
                warcrim = '<p><a href="'+search(wcArray, dataObject.warcrim)+'">'+dataObject.warcrim+'</a>：<a href="warcrim.html">戦犯</a></p>';
            }
            if (dataObject.creator) {
                creator = '<p><a href="'+search(crArray, dataObject.creator)+'">'+dataObject.creator+'</a>：<a href="creator.html">創造主</a></p>';
            }
            //HTML
            text += '<h2>第'+(j+1)+'陣</h2></div><div class="item"><table><tr><th>プレイした日付</th><td><p>'+dataObject.date+'</p></td></tr><tr><th>KP</th><td><p>'+kpHtml+'</p></td></tr><tr><th>CAST</th><td><div><p>PC</p>'+driver+manager+boss+spiritual+warcrim+creator+'</div></td></tr></table></div><div>';
        
        text += '<h2>第'+jin+'陣</h2>';
        jinElement.innerHTML = text;
        let dataObject = {};
        dataObject.id = sArray[scenarioID + jin - 1][0];
        dataObject.date = sArray[scenarioID + jin - 1][4];
        dataObject.KP = sArray[scenarioID + jin - 1][5];
        dataObject.driver = sArray[scenarioID + jin - 1][6];
        dataObject.manager = sArray[scenarioID + jin - 1][7];
        dataObject.boss = sArray[scenarioID + jin - 1][8];
        dataObject.spiritual = sArray[scenarioID + jin - 1][9];
        dataObject.warcrim = sArray[scenarioID + jin - 1][10];
        dataObject.creator = sArray[scenarioID + jin - 1][11];
        //date
        dateElement.textContent = dataObject.date;
        //KP
        kpElement.innerHTML = kpText(dataObject.KP);
        
        //PC
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
}

function kpText(kp) {
    let memberKP;
    let text;
    let kpArray = [];
    let kpHtml = "";
    //「/」で切って行列を作る
    kpArray = kp.split('/');
    
    for (let i = 0; i < kpArray.length; i++) {
        if (kpArray[i].indexOf("運転手") == 0) {
            memberKP = '"driver.html"';
        } else if (kpArray[i].indexOf("管理人") == 0) {
            memberKP = '"manager.html"';
        } else if (kpArray[i].indexOf("上司") == 0) {
            memberKP = '"boss.html"';
        } else if (kpArray[i].indexOf("スピリチュアルな存在。") == 0) {
            memberKP = '"spiritual.html"';
        } else if (kpArray[i].indexOf("戦犯") == 0) {
            memberKP = '"warcrim.html"';
        } else if (kpArray[i].indexOf("創造主") == 0) {
            memberKP = '"creator.html"';
        } else {
            memberKP = '"#"';
        }
        text = '<a href='+memberKP+'>'+kpArray[i]+'</a>';
        kpHtml += text + "</p><p>";
    }
    return kpHtml.slice(0, -7);
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

