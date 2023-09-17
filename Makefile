.PHONY: build
build:
	@mkdir -p dist
	@bun build src/index.ts --target=node --outfile=dist/index.js
