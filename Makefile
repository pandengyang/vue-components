# sudo cnpm install -g prettier

.PHONY: fmt clean deploy

fmt:
	find src -name "*.js" -o -name "*.vue" | xargs -I {} prettier --no-semi --single-quote --write {}

clean:
	-rm -rf dist dist.tar.gz
