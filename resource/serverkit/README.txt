Web 演習実験サーバ

						2020/9/20
						東京電機大学
						工学部情報通信工学科
						坂本直志

以下の手順に従って、インストールして下さい

1.本アーカイブファイルは必ず展開（解凍）して使用して下さい
2. https://nodejs.org/ja/ より、node.js パッケージをインストールして下
さい
node コマンドと npm コマンドがインストールされます

3. 端末ソフト(Power Shell, コマンドプロンプト, Terminal)などを起動し、
カレントディレクトリを cd コマンドで展開したディレクトリに移動して下さ
い。
ls や dir コマンドで、 server.js というファイルが見えれば成功です。

4. 以下のコマンドを実行して、ひつようなパッケージをインストールして下
さい
(npm init では質問に対して Enter を入れて下さい)
npm init
npm install --save express
npm install --save express-session
npm install --save path-to-regexp
npm install --save ejs 

5.端末ソフトで node server.js でサーバを起動します。
Ctrl-C でサーバを止めることができます。

ブラウザで http://localhost:8000/ で基礎実験のページが出れば成功です。

Cannot GET などのエラーメッセージが出る時は、
node server1.js
として下さい。
