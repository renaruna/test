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
    
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
        if(i == 1) {
            dataObject[i].id = dataArray[i][0];
            dataObject[i].name = dataArray[i][1];
            dataObject[i].maker = dataArray[i][2];
            dataObject[i].url = dataArray[i][3];
            dataObject[i].date = dataArray[i][4];
            dataObject[i].KP = dataArray[i][5];
            dataObject[i].driver = dataArray[i][6];
            dataObject[i].maneger = dataArray[i][7];
            dataObject[i].boss = dataArray[i][8];
            dataObject[i].spiritual = dataArray[i][9];
            dataObject[i].warcrim = dataArray[i][10];
            dataObject[i].creater = dataArray[i][11];
        }
    }

    outputElement.innerHTML = dataArray[2][1];
    document.getElementById('maker').innerHTML = dataArray[3][1];

}
   
getCsvData('website - scenario.csv');
