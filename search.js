const naElement = document.getElementById('na');
const niElement = document.getElementById('ni');
const nuElement = document.getElementById('nu');
const neElement = document.getElementById('ne');
const noElement = document.getElementById('no');

const sArray = [];
const cArray = [];

function getCsvS(dataPathS, dataPathC) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvC(response, dataPathC);
    });
    request.open('GET', dataPathS, true);
    request.send();// HTTPリクエストの発行
}

function getCsvC(dataS, dataPathC) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(dataS, response);
    });
    request.open('GET', dataPathC, true);
    request.send();// HTTPリクエストの発行
}


function convertArray(dataS, dataC) {
    const dataStringS = dataS.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    const dataStringC = dataC.split('\n');
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataStringS.length; i++) {
        sArray[i] = dataStringS[i].split(',');
    }
    for (let i = 0; i < dataStringC.length; i++) {
        cArray[i] = dataStringC[i].split(',');
    }
    
    display();
}
function display() {
           
    var dataObject = {};
    dataObject.manager = sArray[1][7]; //ニーフリット
    
    naElement.textContent = dataObject.manager; //ニーフリット
    niElement.textContent = cArray[1][2]; //ニーフリット
    nuElement.textContent = search(cArray, dataObject.manager); // character/manager/Nefrit.html
    neElement.textContent = truth(cArray, dataObject.manager); // 0
    noElement.textContent = truthness(cArray, dataObject.manager); // True
        
}

function truth(array, chara) {
    return chara.indexOf(array[1][2])
}

function truthness(array, chara) {
    return chara.indexOf(array[1][2]) !== -1
}
  
function search(array, chara) {
    for (let i=0; i < array.length; i++) {
        if (chara.indexOf(array[i][2]) !== -1) {
            return array[i][1];
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
   
getCsvS('website - scenario.csv', 'website - manager.csv'); // s 調べる側, c 調べられる側　 test から indexを含むものを探す