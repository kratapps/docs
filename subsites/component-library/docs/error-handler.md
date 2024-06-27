# Error Handler

![lwc](https://img.shields.io/badge/LWC-service-yellow)

Handle errors and show either a toast or error prompt to a user.

## Specification

Handle errors including unexpected errors, LWC/JS errors, custom errors from
Apex.

See [LightningResponse](lightning-response.md) to add support for
`{ error, data }` monads in Apex whose errors are supported by this handler as
well.

Error handler module provides:

### **handleError** function

Use `handleError` to process **expected** errors, usually the `error` from
`{ data, errors }` response.

### **somethingWentWrong** function

Alternative to `handleError`. Use `somethingWentWrong` to process **unexpected**
errors, usually in a generic try-catch. Always wrap your first functions in the
try-catch to handle unexpected errors using the `somethingWentWrong` function,
this way we can ensure the implementations details are hidden from users,
including the native not-so-user-friendly LWC error modal. First function can be
for example a lifecycle hook (constructor, renderedCallback), event handler
(button clicked, custom event).

### **createCustomErrorHandler** function

Override the default behaviour across your org using a custom LWC error handler.

Use cases:

1. Always want to show an error modal instead of a toast.
2. To add a custom button to the error modal to provide users a quick way to
   open a support ticket.

> It's recommended to create a custom error handler, so you don't have to
> replace all the references in the future.

### Exports

| Name        | Arguments                                                                   | Returns   | Description                                                        |
| ----------- | --------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| handleError | error: any, [options: LightningElement \| ErrorHandlerOptions \| undefined] | undefined | Handle error and show either a toast or an error prompt to a user. |

### ErrorHandlerOptions Type

| Name                      | Type                 | Required | Default                 | Description                                                                                     |
| ------------------------- | -------------------- | -------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| element                   | LightningElement     | true     |                         | Usually the 'this' component. Required to show toast.                                           |
| type                      | boolean              |          |                         | Default is 'modal' for 'somethingWentWrong' and 'toast' for 'handleError'.                      |
| disableDebounce           | boolean              |          | false                   | By default, show only one error if multiple errors occurred at the same time.                   |
| somethingWentWrongMessage | string               |          | 'Something went wrong.' | Generic message to show when unexpected error is handled.                                       |
| actions                   | ErrorHandlerAction[] |          |                         | List of footer button actions. Available only in the prompt variant.                            |
| logger                    | Logger               |          |                         | Logger. Default logger only prints to console. Provide custom logger to persist logs if needed. |

### ErrorHandlerAction type

List of footer button actions. Buttons rendered in the prompt variant only.

| Name    | Type     | Required | Default | Description                                                                        |
| ------- | -------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| name    | string   | true     |         | The name for the button element.                                                   |
| label   | boolean  | true     |         | The text to be displayed inside the button.                                        |
| variant | boolean  | true     |         | The variant changes the appearance of the button. Variant of the lightning-button. |
| onclick | Function |          |         | The function to be executed when the action is clicked.                            |

### Logger type

Custom logger. Can be used for example to persist logs in database.

| Name | Type                                | Required | Default | Description                                                                            |
| ---- | ----------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| log  | ({error: any, ui: UiError}) => void | true     |         | Log error. Argument "error" is the original error object, "ui" is the formatted error. |

### UiError type

Unified error used by the module to show the toast or prompt.

| Name     | Type   | Required | Default | Description                                                       |
| -------- | ------ | -------- | ------- | ----------------------------------------------------------------- |
| message  | string | true     |         | Unified error message.                                            |
| payload  | string |          |         | Unified error payload.                                            |
| stack    | string |          |         | Unified error stack.                                              |
| hostName | string |          |         | Unified source component name. Not available in Lightning Locker. |

## Example

### Core Features

Use `handleError` to show pretty error message when expected error occurs. Use
`somethingWentWrong` to show pretty error message when unexpected error occurs.

```javascript
import createContract from "@salesforce/apex/CreateContractController.createContract";

import { handleError, somethingWentWrong } from "c/errorHandler";
import { hideSpinner, showSpinner } from "c/spinner";

export default class CreateContract extends LightningElement {
    async handleCreateContractClick() {
        try {
            // Show loading indicator.
            await showSpinner(this);
            const { data, error } = await createContract({
                contract: this.contract
            });
            if (error) {
                // Handle exepcted errors.
                await handleError(error);
            } else {
                // Handle successful result.
                const { contractId } = data;
                contractCreated(contractId);
            }
        } catch (e) {
            // Handle unexpected errors.
            await somethingWentWrong(e, this);
        } finally {
            // Hide loading indicator.
            await hideSpinner(this);
        }
    }
}
```

### Lightning Error Handling from Apex

`LightningError` can be used to build serialized error in `AuraEnabled`
controllers. This error is then parsed and processed by `handleError` function.

```apex
// classes/GrantPartnerPortalAccessController.cls
@AuraEnabled
public static LightningResponse grantPartnerPortalAccess(Id userId) {
   try {
      // Perform some operation.
      AccessResult data = grantAccess(userId);
      // Success response with optional data.
      return LightningResponse.send(data);
   } catch (AccessAlreadyGrantedException e) {
      // Custom error message. Display a user-friendly message detailing the issue encountered.
      return LightningResponse.error(System.Label.Partner_Portal_Access_Already_Granted);
   } catch (UserNotEligibleForPartnerPortalException e) {
      // Different custom error message.
      return LightningResponse.error(System.Label.User_Not_Eligible_For_Partner_Portal);
   } catch (Exception e) {
      // Log the unexpected exception here. This is a bug!
      // Unexpected error. Show generic error message.
      // We don't want to show implementation details to end users.
      return LightningResponse.somethingWentWrong(e);
   }
}
```

```javascript
// lwc/grantPortalAccess/grantPortalAccess.js
import grantPartnerPortalAccess from "@salesforce/apex/GrantPartnerPortalAccessController.grantPartnerPortalAccess";

export default class GrantPartnerPortalAccessModal extends LightningElement {
    async grantPartnerPortalAccess(userId) {
        await showSpinner(this);
        try {
            const { error, data } = await createUser({
                userId
            });
            if (error) {
                // Handle expected errors including
                // Partner_Portal_Access_Already_Granted and
                // User_Not_Eligible_For_Partner_Portal from our Apex example.
                await handleError(error);
            } else {
                // Handle successful result,
                // `data` will be of the AccessResult type from our Apex example.
                const { contractId } = data;
                contractCreated(contractId);
            }
        } catch (e) {
            // Handle unexpected errors.
            await somethingWentWrong(e, this);
        } finally {
            await hideSpinner(this);
        }
    }
}
```

### Customize Options

Override the default options, like disabling the debouncing, always showing a
modal, changing the generic Something Went Wrong message etc.

```javascript
export default class MyComponent extends LightningElement {
    async doSomeStuff() {
        try {
            // Do your logic here.
        } catch (e) {
            await handleError(e, {
                element: this,
                // Here override the options you need to customize.
                // Custom generic error message.
                somethingWentWrongMessage:
                    "This should by a custom label with a fancy 'something went wrong' message.",
                // Always show modal, never toast.
                type: "modal",
                // Never debounce errors, always show all of them even if 100 of them occurs.
                disableDebounce: true
            });
        }
    }
}
```

### Custom Error Handler

Create custom LWC component, you can name it for example `customErrorHandler`.

Then instead of
`import { handleError, somethingWentWrong } from 'c/errorHandler';` you will be
using `from 'c/customErrorHandler';`.

```javascript
// Custom error handler implementation.
// Import generic features.
import { consoleLogger, createCustomErrorHandler } from "c/errorHandler";

// Define custom handler.
const customHandler = createCustomErrorHandler({
    // Here override the options you need to customize.
    // Custom generic error message.
    somethingWentWrongMessage:
        "This should by a custom label with a fancy 'something went wrong' message.",
    // Always show modal, never toast.
    type: "modal",
    // Custom prompt actions.
    actions: [
        {
            name: "openSupportTicket",
            label: "Open Support Ticket",
            variant: "brand",
            onclick: (actionName) => openSupportTicket()
        }
    ],
    // Enhance logging.
    logger: {
        log: ({ error, ui }) => {
            consoleLogger.log({ error, ui });
            // todo Apex Logging
        }
    }
});

// Export custom handleError function.
export const handleError = (error, options) => {
    return customHandler.handleError(error, options);
};

// Export custom somethingWentWrong function.
export const somethingWentWrong = (error, options) => {
    return customHandler.somethingWentWrong(error, options);
};
```

## Installation

Components

-   [lwc/errorHandler](https://github.com/kratapps/component-library/tree/main/src/library/lwc/errorHandler)
-   [lwc/errorHandlerModal](https://github.com/kratapps/component-library/tree/main/src/library/lwc/errorHandlerModal)
-   [classes/LightningError](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningError.cls)
-   [classes/LightningErrorTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningErrorTest.cls)
-   [classes/LightningResponse](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningResponse.cls)
-   [classes/LightningResponseTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningResponseTest.cls)

Deploy JS module:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    --source-dir src/library/lwc/errorHandler \
    -o my-org
```

Deploy Apex module:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    -m ApexClass:LightningError \
    -m ApexClass:LightningErrorTest \
    -m ApexClass:LightningResponse \
    -m ApexClass:LightningResponseTest \
    -o my-org
```
