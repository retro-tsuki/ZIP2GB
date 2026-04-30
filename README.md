# ZIP2GB

## 概要
Googleドライブ等を経由して「ただ.zipのファイル」になってしまったGarageBandプロジェクトを、iOSが認識できる「パッケージ（フォルダ）」の状態に復元します。GB2MIDI(https://github.com/larkob/GB2MIDI) から感銘を受け制作しました。


## ツールへはこちら
ZIP2GB(https://retro-tsuki.github.io/ZIP2GB/)

## 使い方
1. 復元したい.zipファイルを選択
2. 「.band形式で復元」を押す
3. ダウンロードされたファイルを「ファイル」アプリで解凍する（解凍はダウンロードされたファイルをタップすることで完了します。）

## 使用技術
- HTML / JavaScript
- [JSZip](https://stuk.github.io/jszip/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
