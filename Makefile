mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
project_dir := $(dir $(mkfile_path))

serve:
	python3 -m http.server --directory "${project_dir}/site"
	
mkdocs-build-multisite:
	rm -rf site && mkdir site
	# home site
	python3 -m mkdocs build --site-dir build/home --config-file mkdocs.yml
	mv build/home/* site
	# build subsites
	make mkdocs-build-subsite SUBSITE="one-logger"
	make mkdocs-build-subsite SUBSITE="component-library"
	make mkdocs-build-subsite SUBSITE="test-data-factory"
	make mkdocs-build-subsite SUBSITE="setup-audit-trail"

mkdocs-build-subsite:
	python3 -m mkdocs build --site-dir "${project_dir}/build/$$SUBSITE" --config-file "${project_dir}/subsites/$$SUBSITE/mkdocs.yml"
	mkdir -p "site/$$SUBSITE"
	mv "${project_dir}/build/$$SUBSITE/"* "site/$$SUBSITE"
