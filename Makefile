mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
project_dir := $(dir $(mkfile_path))

serve:
	#python3 -m mkdocs serve
	#make build-multisite
	python3 -m http.server --directory "${project_dir}/site"
	
#build:
	#python3 -m mkdocs build
	
build-multisite:
	/Users/okratochvil/.nvm/versions/node/v20.9.0/bin/node scripts/buildComponentsOverviewPage.js
	/Users/okratochvil/.nvm/versions/node/v20.9.0/bin/node scripts/buildSetupAuditTrailReference.js
	rm -rf site
	mkdir site
	cp CNAME site/CNAME
	# home site
	python3 -m mkdocs build --site-dir build/home --config-file mkdocs.yml
	mv build/home/* site
	# component library site
	python3 -m mkdocs build --site-dir "${project_dir}/build/component-library" --config-file "${project_dir}/subsites/component-library/mkdocs.yml"
	mkdir -p site/component-library
	mv "${project_dir}/build/component-library/"* site/component-library
	# test data factory site
	python3 -m mkdocs build --site-dir "${project_dir}/build/test-data-factory" --config-file "${project_dir}/subsites/test-data-factory/mkdocs.yml"
	mkdir -p site/test-data-factory
	mv "${project_dir}/build/test-data-factory/"* site/test-data-factory
	# setup audit trail reference site
	python3 -m mkdocs build --site-dir "${project_dir}/build/setup-audit-trail" --config-file "${project_dir}/subsites/setup-audit-trail/mkdocs.yml"
	mkdir -p site/setup-audit-trail
	mv "${project_dir}/build/setup-audit-trail/"* site/setup-audit-trail

