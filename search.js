const naElement = document.getElementById('na');
const niElement = document.getElementById('ni');
const nuElement = document.getElementById('nu');
const neElement = document.getElementById('ne');
const noElement = document.getElementById('no');
const haElement = document.getElementById('ha');
const hiElement = document.getElementById('hi');
const huElement = document.getElementById('hu');
const heElement = document.getElementById('he');
const hoElement = document.getElementById('ho');
const maElement = document.getElementById('ma');
const miElement = document.getElementById('mi');
const muElement = document.getElementById('mu');
const meElement = document.getElementById('me');
const moElement = document.getElementById('mo');
const yaElement = document.getElementById('ya');

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
    
    let kp = "";
    
    let kpName1 = sArray[141][5];
    let index1 = kpName1.indexOf("管理人");
    
    let kpName2 = sArray[142][5];
    let index2 = kpName2.indexOf("管理人");
    
    let kpName3 = sArray[143][5];
    let index3 = kpName3.indexOf("管理人");
    
    let kpName4 = sArray[146][5];
    let index4 = kpName4.indexOf("管理人");
    
    let kpName5 = sArray[147][5];
    let index5 = kpName5.indexOf("管理人");
    
    let kpName6 = sArray[148][5];
    let index6 = kpName6.indexOf("管理人");
    
    let kpName7 = sArray[149][5];
    let index7 = kpName7.indexOf("管理人");
    
    let kpName8 = sArray[150][5];
    let index8 = kpName8.indexOf("管理人");
    

    //for (let i = 1; i < 145; i++) {
      //  let kpName = sArray[i][5];
        //if (kpName.indexOf("管理人") !== -1) {
          //  if (sArray[i][0]) {
            //    kp += '<a href="../scenario/'+sArray[i][12]+'">'+change(sArray[i][1], "#", ",")+'</a><br>';
            //}
        //}
    //}
    
    naElement.textContent = kpName1; //kpしたやつ一覧
    niElement.textContent = index1; //
    nuElement.textContent = kpName2; // 
    neElement.textContent = index2; // 
    noElement.textContent = kpName3; //
    haElement.textContent = index3; //
    hiElement.textContent = kpName4; //
    huElement.textContent = index4; //
    heElement.textContent = kpName5; //
    hoElement.textContent = index5; //
    maElement.textContent = kpName6; //
    miElement.textContent = index6; //
    muElement.textContent = kpName7; //
    meElement.textContent = index7; //
    moElement.textContent = kpName8; //
    yaElement.textContent = index8; //
        
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
   
getCsvS('website - scenario.csv', 'website - manager.csv'); // s 調べる側, c 調べられる側
