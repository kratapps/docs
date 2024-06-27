# Spinner

![lwc](https://img.shields.io/badge/LWC-component-blue)

Displays an animated spinner.

Spinners are a loading indicators that should be shown when retrieving data or
performing slow computations. Showing and hiding spinner works immediately.

## Specification

Use the exported showSpinner/hideSpinner functions instead of the api show/hide
methods to select the c-spinner component automatically.

### Exports

| Name        | Arguments                    | Returns | Description                                                                                                    |
| ----------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| showSpinner | component (LightningElement) | Promise | Select the c-spinner in the component's markup and show the spinner. The component argument is usually 'this'. |
| hideSpinner | component (LightningElement) | Promise | Select the c-spinner in the component's markup and hide the spinner. The component argument is usually 'this'. |

### Methods

| Name | Arguments | Returns | Description                                                                                                                                                 |
| ---- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show |           | Promise | Show the spinner over its slotted content. Use the exported showSpinner function to get the c-spinner component, and to call the show method automatically. |
| hide |           | Promise | Hide the spinner. Use the exported hideSpinner function to get the c-spinner component, and to call the hide method automatically.                          |

## Example

```html
<div class="slds-is-relative">
    <c-spinner>
        <!-- your content to show spinner over -->
    </c-spinner>
</div>
```

```js
import { handleError } from "c/errorHandler";
import { hideSpinner, showSpinner } from "c/spinner";

try {
    await showSpinner(this);
    // Do your operation here.
} catch (e) {
    handleError(e, { element: this });
} finally {
    await hideSpinner(this);
}
```

## Installation

Components

-   [lwc/spinner](https://github.com/kratapps/component-library/tree/main/src/library/lwc/spinner)

Deploy Spinner:

```bash
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    --source-dir src/library/lwc/spinner/ \
    -o my-org
```
