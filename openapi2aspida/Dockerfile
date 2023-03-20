FROM node:alpine

WORKDIR /openapi2aspida
# ボリュームしてもここで使えなかったので
# ADD ./package.json .
# ADD ./index.js .
# RUN npm install

RUN npm install -g openapi2aspida



# index.jsでsetIntervalすることで、プロセスを立て続けます。
#  docker-compose exec sg_swagger_openapi2aspida /bin/sh
#CMD npm start
#CMD openapi2aspida -v

# date +"_%Y_%m%d_%I%M"
CMD openapi2aspida -i /docs/openapi.yml -o /openapi2aspida/src/generated/api$(date +"_%Y_%m%d_%I%M%S")
