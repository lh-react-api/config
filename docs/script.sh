rm -rf docs/server/model

# OpenAPI Generatorを実行する
java -jar opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g typescript-angular --additional-properties=aspnetCoreVersion=3.1 -i docs/openapi.yml -o docs/server -c docs/api_config.json

rm -rf generated/*
cp -a docs/server/model generated
mv generated/model/models.ts generated/model/index.ts
# ファイル名末尾がAllof.tsは不要な型定義のため削除
find generated -name "*AllOf.ts" -type f -delete
sed -i '/AllOf'\'';$/d' generated/model/index.ts