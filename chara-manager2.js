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
const dbElement = document.getElementById('db');
const strElement = document.getElementById('str');
const conElement = document.getElementById('con');
const powElement = document.getElementById('pow');
const dexElement = document.getElementById('dex');
const appElement = document.getElementById('app');
const sizElement = document.getElementById('siz');
const intElement = document.getElementById('int');
const eduElement = document.getElementById('edu');
const skillElement = document.getElementById('skill');
const settingElement = document.getElementById('setting');
const scenarioElement = document.getElementById('scenario');
const driverElement = document.getElementById('driver');
const managerElement = document.getElementById('manager');
const bossElement = document.getElementById('boss');
const spiritualElement = document.getElementById('spiritual');
const warcrimElement = document.getElementById('warcrim');
const creatorElement = document.getElementById('creator');
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
    for (let i = 0; i < dataStringC.length; i++) {
        if(i == charaID) {
            dataObject.id = cArray[i][0];
            dataObject.name = cArray[i][1];
            dataObject.hiraname = cArray[i][2];
            dataObject.age = cArray[i][3];
            dataObject.sex = cArray[i][4];
            dataObject.job = cArray[i][5];
            dataObject.member = "管理人";
            dataObject.color = cArray[i][6];
        
            dataObject.hp = cArray[i][7];
            dataObject.mp = cArray[i][8];
            dataObject.san = cArray[i][9];
            dataObject.db = cArray[i][10];
            dataObject.str = cArray[i][11];
            dataObject.con = cArray[i][12];
            dataObject.pow = cArray[i][13];
            dataObject.dex = cArray[i][14];
            dataObject.app = cArray[i][15];
            dataObject.siz = cArray[i][16];
            dataObject.int = cArray[i][17];
            dataObject.edu = cArray[i][18];

            dataObject.skill = cArray[i][19];
            dataObject.setting = cArray[i][20];
            dataObject.scenario = cArray[i][21];
        
            dataObject.driverCom = cArray[i][22];
            dataObject.managerCom = cArray[i][23];
            dataObject.bossCom = cArray[i][24];
            dataObject.spiritualCom = cArray[i][25];
            dataObject.warcrimCom = cArray[i][26];
            dataObject.creatorCom = cArray[i][27];
            
            dataObject.maker = cArray[i][28];
            break;
        }
    }
    
    display();

}

function display() {    
    let text = [];
    var array = {}
    var html = "";
    //参加したシナリオの名前の配列
    array = dataObject.scenario.split('$');
    for (i = 0; i < array.length; i++) {
        text[i] = search(array[i]);
    }
    for (i = 0; i < array.length; i++) {
        html += '<a href="'+text[i]+'">'+array[i]+'</a><br>';
    }
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
    dbElement.textContent = dataObject.db;
    strElement.textContent = dataObject.str;
    conElement.textContent = dataObject.con;
    powElement.textContent = dataObject.pow;
    dexElement.textContent = dataObject.dex;
    appElement.textContent = dataObject.app;
    sizElement.textContent = dataObject.siz;
    intElement.textContent = dataObject.int;
    eduElement.textContent = dataObject.edu;
    
    skillElement.innerHTML = change(dataObject.skill,"$","<br>");
    settingElement.innerHTML = change(dataObject.setting,"$","<br>");
    scenarioElement.innerHTML = html;
    
    
    driverElement.innerHTML = change(dataObject.driverCom,"$","<br>");
    managerElement.innerHTML = change(dataObject.managerCom,"$","<br>");
    bossElement.innerHTML = change(dataObject.bossCom,"$","<br>");
    spiritualElement.innerHTML = change(dataObject.spiritualCom,"$","<br>");
    warcrimElement.innerHTML = change(dataObject.warcrimCom,"$","<br>");
    creatorElement.innerHTML = change(dataObject.creatorCom,"$","<br>");
}

function search(scenario) {
    for (let i=0; i < sArray.length; i++) {
        if (sArray[i][1].indexOf(scenario) !== -1) {
            return sArray[i][12];
        }
    }
    return "#";
}

function change(text, a, b) {
  let i = 0;
  let length = text.length;
  for (i=0; i < length; i++) {
    text = text.replace(a,b); 
  }
  return text;
}
   
getCsvData('character-index - manager.csv', 'website - scenario.csv');
