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
    request.open('GET', datapathC, true);
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
                
    naElement.textContent = search(sArray, cArray[3][0]); //38
    niElement.textContent = cArray[1][0].indexOf(sArray[1][0]); //0
    //nuElement.textContent = search(sArray, "山田");
    //neElement.textContent = search(sArray, "山田");
    //noElement.textContent = search(sArray, "山田");
        
}
  
function search(array, chara) {
    for (let i=0; i < array.length; i++) {
        if (chara.indexOf(array[i][0]) !== -1) {
            return array[i][2];
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
   
getCsvS('index.csv', 'test.csv'); // s 調べる側, c 調べられる側　 test から indexを含むものを探す
