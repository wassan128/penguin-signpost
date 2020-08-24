[![Build Status](https://travis-ci.com/wassan128/penguin-signpost.svg?branch=master)](https://travis-ci.com/wassan128/penguin-signpost)

# penguin-signpost 

wassan128のブログです

## 使い方
記事ファイルの作成には `penguin-signpost` コマンド(シェルスクリプト)を使用します。以下コマンドを実行すると記事のテンプレートファイルを生成します。

```
$ git clone $THIS_REPOSITORY
$ cd penguin-signpost
$ penguin-signpost create
[*] 記事を作成します...

[*] 記事ファイルを作成しました: docs/archives/2020/08/05/README.md
```

記事URLをツイートする場合はtコマンドを先に用意します。tのREADME通りにシークレット系を設定する必要もあります。
現状"その日"の記事URLしかツイートできないことに注意。
```
$ git clone git@github.com:wassan128/t.git
$ cd t
$ go build -o t main.go
$ sudo ln -s (pwd)/t /usr/local/bin/t
$ penguin-signpost tweet
```
