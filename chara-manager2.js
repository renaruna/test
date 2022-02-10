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
const dataArray = [];
const dataObject = {};

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

    display();

}
   
function convertArray(data) {
    
    
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
    }
    for (let i = 0; i < dataString.length; i++) {
        if(i == charaID) {
            dataObject.id = dataArray[i][0];
            dataObject.name = dataArray[i][1];
            dataObject.hiraname = dataArray[i][2];
            dataObject.age = dataArray[i][3];
            dataObject.sex = dataArray[i][4];
            dataObject.job = dataArray[i][5];
            dataObject.member = "管理人";
            dataObject.color = dataArray[i][6];
        
            dataObject.hp = dataArray[i][7];
            dataObject.mp = dataArray[i][8];
            dataObject.san = dataArray[i][9];
            dataObject.db = dataArray[i][10];
            dataObject.str = dataArray[i][11];
            dataObject.con = dataArray[i][12];
            dataObject.pow = dataArray[i][13];
            dataObject.dex = dataArray[i][14];
            dataObject.app = dataArray[i][15];
            dataObject.siz = dataArray[i][16];
            dataObject.int = dataArray[i][17];
            dataObject.edu = dataArray[i][18];

            dataObject.skill = dataArray[i][19];
            dataObject.setting = dataArray[i][20];
            dataObject.scenario = dataArray[i][21];
        
            dataObject.driverCom = dataArray[i][22];
            dataObject.managerCom = dataArray[i][23];
            dataObject.bossCom = dataArray[i][24];
            dataObject.spiritualCom = dataArray[i][25];
            dataObject.warcrimCom = dataArray[i][26];
            dataObject.creatorCom = dataArray[i][27];
            
            dataObject.maker = dataArray[i][28];
            break;
        }
    }
    
    

}

function display() {
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
    scenarioElement.innerHTML = change(dataObject.scenario,"$","<br>");
    
    driverElement.innerHTML = change(dataObject.driverCom,"$","<br>");
    managerElement.innerHTML = change(dataObject.managerCom,"$","<br>");
    bossElement.innerHTML = change(dataObject.bossCom,"$","<br>");
    spiritualElement.innerHTML = change(dataObject.spiritualCom,"$","<br>");
    warcrimElement.innerHTML = change(dataObject.warcrimCom,"$","<br>");
    creatorElement.innerHTML = change(dataObject.creatorCom,"$","<br>");
}

function search(thing) {
｝

function change(text, a, b) {
  let i = 0;
  let length = text.length;
  for (i=0; i < length; i++) {
    text = text.replace(a,b); 
  }
  return text;
}
   
getCsvData('character-index - manager.csv');

