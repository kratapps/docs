# Lightning Error

![apex](https://img.shields.io/badge/Apex-service-darkblue)

Streamlined error handling from Apex controllers.

## Specification

Helps to display user-friendly error messages in LWC, by providing a response
monad `{ error, data }`.

This class represents the `error` in the `{ error, data }`.

See [LightningResponse](lightning-response.md) for `{ error, data }` Apex
documentation.

See how to handle errors in LWC using [errorHandler](error-handler.md) service.

### Static Factories

| Method | Params         | Returns        | Description                                            |
| ------ | -------------- | -------------- | ------------------------------------------------------ |
| create |                | LightningError | Factory method.                                        |
| create | String message | LightningError | Factory method with custom error message.              |
| create | DmlException e | LightningError | Factory method to build the error from a DmlException. |

### Methods

| Method        | Params                                               | Returns        | Description                                                                     |
| ------------- | ---------------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| addError      | String message                                       | LightningError | Add error.                                                                      |
| addFieldError | SObjectField field, String message                   | LightningError | Add field error.                                                                |
| addFieldError | SObjectField field, String message, String errorCode | LightningError | Add field error including custom error code, usually a System.StatusCode value. |
| setMessage    | String message                                       | LightningError | Set error message.                                                              |
| setStatusCode | Integer statusCode                                   | LightningError | Default: 400.                                                                   |
| setErrorCode  | String errorCode                                     | LightningError | Set error code.                                                                 |

## Example

See more examples in the [LightningResponse](lightning-response.md) docs.

## Installation

Components

-   [classes/LightningError](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningError.cls)
-   [classes/LightningErrorTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningErrorTest.cls)

Ideally deploy everything defined in the [errorHandler](error-handler.md)

or deploy just this module:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    -m ApexClass:LightningError \
    -m ApexClass:LightningErrorTest
    -o my-org
```
