---
date: 2020/08/08
title: VuePressで長めアルファベットが改行してくれないのを直す話
description: 公式では特に対応しない方針らしい
---
<span style="font-size: 10pt; font-weight: bold; color: #3297bf">{{ $frontmatter.date }}</span>

# {{ $frontmatter.title }}
見出しや本文中に、長いアルファベット文字列があると、CSSによってはそれが改行されず表示が壊れることがあります。その問題への対処法。

## 公式の見解
この問題は以下のissueでユーザーによって2018年に報告されていました。
[https://github.com/vuejs/vuepress/issues/823](https://github.com/vuejs/vuepress/issues/823)

しかし、これに対応するfix PR([https://github.com/vuejs/vuepress/pull/824](https://github.com/vuejs/vuepress/pull/824))はcloseされており、開発メンバーのコメントを見ると

> Thanks for your contribution, but I don't think it should be added by default. users should be able to know when has his words been overlapped and there is almost no such long word in English.

となっていて、デフォルトとして取り込むことはしないようでした。

## 解決策
PRでもあるように、`word-break: break-word` を指定してあげることで直ります。今回はdocs/.vuepress/styles/index.stylに以下のように追記しました。

```stylus
h1, h2, h3, h4, h5, h6, p
  word-break break-word
```
## おわりに
PR出す前に過去issue/PRを漁るのは大切ですね。
