const outputElement = document.getElementById('output_csv');

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
}
   
function convertArray(data) {
    var dataArray = [];
    var dataObject = {};
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
        if(i == 1) {
            dataObject.id = dataArray[i][0];
            dataObject.name = dataArray[i][1];
            dataObject.maker = dataArray[i][2];
            dataObject.url = dataArray[i][3];
            dataObject.date = dataArray[i][4];
            dataObject.KP = dataArray[i][5];
            dataObject.driver = dataArray[i][6];
            dataObject.maneger = dataArray[i][7];
            dataObject.boss = dataArray[i][8];
            dataObject.spiritual = dataArray[i][9];
            dataObject.warcrim = dataArray[i][10];
            dataObject.creater = dataArray[i][11];
        }
    }

    outputElement.innerHTML = dataArray[2][1];
    document.getElementById('title').innerHTML = dataObject.name;
    document.getElementById('maker').innerHTML = dataObject.maker;
    document.getElementById('url').innerHTML = dataObject.url;
    document.getElementById('date').innerHTML = dataObject.date;
    document.getElementById('KP').innerHTML = dataObject.KP;

}
   
getCsvData('website - scenario.csv');
