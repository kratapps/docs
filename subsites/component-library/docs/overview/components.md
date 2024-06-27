---
hide:
    - toc
---

# Component Library

[![GitHub](https://img.shields.io/badge/GitHub-Public-black?logo=github)](https://github.com/kratapps/component-library)

Custom Salesforce LWC and Apex Components.

<!-- libscript -->
<div class="">
  <div>
    <input
      type="checkbox"
      id="apex"
      name="apex"
      onchange="handleApexFilterChange(this)"
    />
    <label for="apex">Apex</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="lwc"
      name="lwc"
      onchange="handleLwcFilterChange(this)"
    />
    <label for="lwc">Lightning Web Components</label>
  </div>
  <div class="grid cards">
    <ul class="component-list"></ul>
  </div>
  <script async>
    const filter = {
      apex: false,
      lwc: false
    };

    const getComponents = (() => {
      let components;
      return async () => {
        if (!components) {
          components = await (
            await fetch("/component-library/overview/components.json")
          ).json();
        }
        return components;
      };
    })();

    const card = ({ name, href, img, type, category, description }) => {
      const categoryLower = (category ?? "service").toLowerCase();
      const badgeColor =
        type.toLowerCase() === "apex"
          ? "darkblue"
          : categoryLower === "component"
          ? "blue"
          : "yellow";
      return `<li>
            <a href="${href}">
                <!--p>
                    <img alt="${name}" src="${img}">
                </p>
                <hr-->
                <div style="display: flex; justify-content: space-between;">
                    <strong>
                        <div>${name}</div>
                    </strong>
                    <div>
                      <img alt="${name}" src="https://img.shields.io/badge/${type.toUpperCase()}-${categoryLower}-${badgeColor}">
                    </div>
                </div>
                <p>${description}</p>
            </a>
        </li>`;
    };

    const refresh = async () => {
      const someFilterEnabled = [filter.apex, filter.lwc].some((it) => it);
      const ul = document.querySelector(".component-list");
      ul.innerHTML = (await getComponents())
        .filter((it) => !someFilterEnabled || filter[it.type])
        .map((it) => card(it))
        .join("");
    };

    function handleApexFilterChange() {
      filter.apex = !filter.apex;
      refresh();
    }

    function handleLwcFilterChange() {
      filter.lwc = !filter.lwc;
      refresh();
    }

    (async () => {
      refresh();
    })();

  </script>
</div>
<!-- libscriptstop -->
