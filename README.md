## 環境構築
- `api`と`config`のリポジトリをクローン
  - 以下のフォルダ構成にする
  ```
  <project-name>
  ├── config // docker環境構築設定ファイル
  ├── api // Laravelプロジェクト
  ```

- configに移動
```
cd config
```

- Docker立ち上げとLaravel初期設定
```
make init
```

- http://localhost:8080 を確認
  - Laravelの初期画面が表示されればOK