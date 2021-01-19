.PHONY: start-fake-server

start-fake-server:
	- npx json-server --watch src/fake-backend/db.json --port 3001