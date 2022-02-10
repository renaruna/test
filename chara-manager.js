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

var charaArray = [];
var scenarioArray = [];

//CSVファイルを読み込む
function getCsvDataChara(dataPath) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
        const response = event.target.responseText;
        convertArrayChara(response);
    });
    request.open('GET', dataPath, true);
    request.send();// HTTPリクエストの発行
}
   
//行列
function convertArrayChara(data) {
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
        charaArray[i] = dataString[i].split(',');
    }
}

//
function getCsvDataScenario(dataPath) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
        const response = event.target.responseText;
        convertArrayScenario(response);
    });
    request.open('GET', dataPath, true);
    request.send();// HTTPリクエストの発行
}

function convertArrayScenario(data) {
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
        scenarioArray[i] = dataString[i].split(',');
    }
    
}

//ページに表示
function display() {
    let i;
    const dataObject = {};
    const array;
    const scenario;
    let text;

    for(i = 0; i < charaArray.length; i++){
        if(i == charaID) {
            dataObject.id = charaArray[i][0];
            dataObject.name = charaArray[i][1];
            dataObject.hiraname = charaArray[i][2];
            dataObject.age = charaArray[i][3];
            dataObject.sex = charaArray[i][4];
            dataObject.job = charaArray[i][5];
            dataObject.member = "管理人";
            dataObject.color = charaArray[i][6];
        
            dataObject.hp = charaArray[i][7];
            dataObject.mp = charaArray[i][8];
            dataObject.san = charaArray[i][9];
            dataObject.db = charaArray[i][10];
            dataObject.str = charaArray[i][11];
            dataObject.con = charaArray[i][12];
            dataObject.pow = charaArray[i][13];
            dataObject.dex = charaArray[i][14];
            dataObject.app = charaArray[i][15];
            dataObject.siz = charaArray[i][16];
            dataObject.int = charaArray[i][17];
            dataObject.edu = charaArray[i][18];

            dataObject.skill = charaArray[i][19];
            dataObject.setting = charaArray[i][20];
            dataObject.scenario = charaArray[i][21];
        
            dataObject.driverCom = charaArray[i][22];
            dataObject.managerCom = charaArray[i][23];
            dataObject.bossCom = charaArray[i][24];
            dataObject.spiritualCom = charaArray[i][25];
            dataObject.warcrimCom = charaArray[i][26];
            dataObject.creatorCom = charaArray[i][27];
            
            dataObject.maker = charaArray[i][28];
            break;
        }
    }

    //参加したシナリオの名前の配列
    array = dataObject.scenario.split('$');
    //シナリオ名からそのシナリオのファイル名を検索
    for (i = 0; i < array.length; i++) {
        scenario[i] = search(array[i]);
    }
    for (i = 0; i < array.length; i++) {
        text += '<a href="'+scenario[i]+'">'+array[i]+'</a><br>';
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

    
    driverElement.innerHTML = change(dataObject.driverCom,"$","<br>");
    managerElement.innerHTML = change(dataObject.managerCom,"$","<br>");
    bossElement.innerHTML = change(dataObject.bossCom,"$","<br>");
    spiritualElement.innerHTML = change(dataObject.spiritualCom,"$","<br>");
    warcrimElement.innerHTML = change(dataObject.warcrimCom,"$","<br>");
    creatorElement.innerHTML = change(dataObject.creatorCom,"$","<br>");
}

//シナリオ名が引数。シナリオ行列からファイル名を探す
function search(scenario){
    for (let i=0; i < scenarioArray.length; i++) {
        if (scenarioArray[i][1].indexOf(scenario) !== -1) {
            return scenarioArray[i][12];
        }
    }
}

//文字をaからbに置き換える
function change(text, a, b) {
  let i = 0;
  let length = text.length;
  for (i=0; i < length; i++) {
    text = text.replace(a,b); 
  }
  return text;
}
   
getCsvDataChara('character-index - manager.csv');
getCsvDataScenario('website - scenario.csv');
display();
