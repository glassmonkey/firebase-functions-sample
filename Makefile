# ゴミファイルの掃除
.PHONY: clean
clean:
	docker system prune -fa --volumes
# アプリケーションのビルド
.PHONY: build
build:
	docker-compose build
# 開発モードでアプリケーションを起動する
.PHONY: up
up: build
	docker-compose up $2
# 開発モードのアプリケーションを落とす
.PHONY: down
down:
	docker-compose down
# 開発モードでコンテナに入る。主にライブラリインストールなどに
.PHONY: run
run: build
	docker-compose run node /bin/ash
# firebaseのci用の操作時に。トークン発行のときなど
.PHONY: -ci
firebase-ci: build
	docker-compose run --service-ports functions /bin/ash
# 起動済みのコンテナの中に入る
.PHONY: attach
attach:
	docker-compose exec node /bin/ash
# lint実行
.PHONY: lint
lint:
	docker-compose run node npm run lint
# test実行
.PHONY: test
test:
	docker-compose run node npm run test
# デプロイ
.PHONY: deploy
deploy: build
	docker-compose run functions npm run deploy
