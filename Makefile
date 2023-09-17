bin = node_modules/.bin

.PHONY: build
build:
	@$(bin)/tsc ./src/* --outDir dist
