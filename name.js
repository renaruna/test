const outputElement = document.getElementById('output_csv');

//CSVファイルを読み込む
function getCsvData(dataPath) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(response);
    });
    request.open('GET', dataPath, false);
    request.send();// HTTPリクエストの発行
}
   
function convertArray(data) {
    const dataArray = [];
    var dataObject = [{},{},{},{}];
    const dataString = data.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataString.length; i++) {
     dataArray[i] = dataString[i].split(',');
        if(i > 0) {
            dataObject[i]["id"] = dataArray[i][0];
            dataObject[i]["name"] = dataArray[i][1];
            dataObject[i]["maker"] = dataArray[i][2];
            dataObject[i]["URL"] = dataArray[i][3];
            dataObject[i]["date"] = dataArray[i][4];
            dataObject[i]["KP"] = dataArray[i][5];
            dataObject[i]["運転手"] = dataArray[i][6];
            dataObject[i]["管理人"] = dataArray[i][7];
            dataObject[i]["上司"] = dataArray[i][8];
            dataObject[i]["スピリチュアルな存在。"] = dataArray[i][9];
            dataObject[i]["戦犯"] = dataArray[i][10];
            dataObject[i]["創造主"] = dataArray[i][11];
        }
    }

    outputElement.innerHTML = dataArray;
}
   
getCsvData('website - scenario.csv');
