rm -rf generated/*

# OpenAPI Generatorを実行する
java -jar opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g typescript-angular --additional-properties=aspnetCoreVersion=3.1 -i docs/openapi.yml -o docs/server

cp -a docs/server/model generated
mv generated/model/models.ts generated/model/index.ts