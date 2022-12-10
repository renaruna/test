const nanaElement = document.getElementById('nana');//id
const array = [];

function getCsvData(datapath) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(response);
    });
    request.open('GET', datapath, true);
    request.send();// HTTPリクエストの発行
}
function convertArray(data) {
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
        array[i] = dataString[i].split(',');
    }
    
    display();
}
function display() {
                
    nanaElement.textContent = search(array, "山田");
        
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
   
getCsvData('index.csv');
