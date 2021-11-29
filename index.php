<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>テスト</title>
  </head>
  <body>
   
    <div>
      <div>
        <button>入室</button>
      </div>
      <div>
      <?php
        // 読み取り専用でtest.csvを開きます。
        $f = fopen("./test.csv", "r");
        // test.csvの行を1行ずつ読み込みます。
        while($data = fgetcsv($f)){
            // 読み込んだ結果を表示します。
            var_dump($data);
        }
        // test.csvを閉じます。
        fclose($f);
      ?>
      </div>
    </div>

  </body>
</html>
