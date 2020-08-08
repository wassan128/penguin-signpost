---
date: 2020/08/07
title: VuePressなブログをdarkmodeっぽくした話
description: 目に優しくしていきたい作業ログ
---
<span style="font-size: 10pt; font-weight: bold; color: #3297bf">{{ $frontmatter.date }}</span>

# {{ $frontmatter.title }}

タイトル通りの作業ログ。いじったファイルとどういじったかをまとめます。

(追記) よくよく調べると、ちょうど1年ほど前から公式リポジトリのissueで議論されていました [https://github.com/vuejs/vuepress/issues/1865](https://github.com/vuejs/vuepress/issues/1865)。今年の4月にはライト/ダークテーマを切替可能な良い感じのサンプルを実装した人がissue内に現れているので、そのうち取り込まれるのかもしれませんね。


## docs/.vuepress/styles/palette.styl
デフォルトの色系/幅系を上書きしたり、自分で変数を定義したりできるファイルです。詳しくは公式のpalette.styl項目を参照してください。 [https://vuepress.vuejs.org/config/#palette-styl](https://vuepress.vuejs.org/config/#palette-styl)

今回は文字色(`$textColor`)と線の色(`$borderColor`)を以下の値に設定しました。

```stylus
$textColor = #ccc
$borderColor = #333
```

## docs/.vuepress/styles/index.styl
上記palette.stylでできる変更はあまり柔軟ではありません。それ以外の細かいことをしたい場合はこのファイルに書けます。詳しくは公式(ry [https://vuepress.vuejs.org/config/#palette-styl](https://vuepress.vuejs.org/config/#palette-styl)

今回は全要素の `background-color` と、Homeページのサブタイトル `color` を以下の値に設定しました。

```stylus
*
  background-color #18212a!important

.hero .description
  color #666!important
```

## 注意点
上記設定だけでだいぶそれっぽくなりますが、以下の注意点があります。

* `!important` をつけないと効かないものがある
* 意図しない要素への影響可能性

それぞれ説明します。

### `!important` をつけないと効かないものがある
もともとスタイルがあたっている要素に対して、index.stylで上書きのスタイルを記述しても優先度の問題で反映されません。このような場合は、優先度を最高にするために `!important` をつける必要があります。

今回の場合、 `*` に対する `background-color` などがその例に当たります。

### 意図しない要素への影響可能性
`*` のように、指す範囲が広いセレクタに対して上書きスタイルを当てると意図しない影響が発生する可能性があります。影響が出にくいようにセレクタ及びプロパティの影響を最小限にするなどの工夫が必要になります。

今回の場合、 `*` (全要素)に対して `background-color` を上書きしていますが、例えばこれを `background` として上書きしてしまうと、 `background-image` も上書きされてしまうため、上部にある「検索アイコン」が消失したりします。


## おわりに
前例を見たことがなかったので、無理か難しいのかと思ってましたが、特にハマることなくダークモードっぽくできたので概ね満足しています。これから機能や記事拡充をしていく中で、前述の意図しない影響がでないことを祈るばかりです...
