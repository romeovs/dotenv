.PHONY: build
build:
	@mkdir -p dist
	@esbuild src/index.ts --platform=node --bundle --format=cjs > dist/index.js
