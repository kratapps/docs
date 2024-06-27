# Alert

![lwc](https://img.shields.io/badge/LWC-component-blue)

LWC for [SLDS Alert](https://www.lightningdesignsystem.com/components/alert/).

## Specification

Alert banners communicate a state that affects the entire system, not just a
feature or page. It persists over a session and appears without the user
initiating the action.

### Attributes

| Name            | Type                             | Required | Default | Description                                        |
| --------------- | -------------------------------- | -------- | ------- | -------------------------------------------------- |
| variant         | info / warning / error / offline |          | info    | Variant of the alert.                              |
| closeable       | boolean                          |          | false   | If true, the alert can be closed by a user action. |
| hidden          | boolean                          |          | false   | Show/hide the alert.                               |
| iconDescription | string                           |          |         | Icon title.                                        |

## Example

```html
<c-alert variant="warning">Alert message or component.</c-alert>
```

## Installation

Components

-   [lwc/alert](https://github.com/kratapps/component-library/tree/main/src/library/lwc/alert)

Deploy Alert:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    --source-dir src/library/lwc/alert/ \
    -o my-org
```
