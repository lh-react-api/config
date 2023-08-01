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

- Docker立ち上げとLaravel初期設定(makeコマンドを参照)
```
make init
```

- http://localhost:8080 を確認
  - Laravelの初期画面が表示されればOK
  
- scopeの補完の更新
```
php artisan ide-helper:model --nowrite
```

- マイグレーション初期化
```
php artisan migrate:fresh
php artisan migrate:fresh --seed
```

## make init時「Failed to get D-Bus connection: No such file or directory」が出る場合

Docker Desktop for Macで `Failed to get D-Bus connection: No such file or directory` 
と表示される場合は別途設定が必要

[参考](https://ufirst.jp/memo/2023/01/docker-desktop-for-mac-%E3%81%A7-%E3%80%8Cfailed-to-get-d-bus-connection-no-such-file-or-directory%E3%80%8D%E3%82%A8%E3%83%A9%E3%83%BC/)
