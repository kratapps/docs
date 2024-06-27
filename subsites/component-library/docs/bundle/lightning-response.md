# Lightning Response

![apex](https://img.shields.io/badge/Apex-service-darkblue)

Streamlined response handling from Apex controllers.

## Specification

Helps to provide a structured response from Apex controller, by leveraging a
response monad `{ error, data }`.

This class represents the `{ error, data }` response.

See [LightningError](lightning-error.md) for the `error` in the
`{ error, data }` Apex documentation.

See how to handle errors in LWC using [errorHandler](error-handler.md) service.

### Static Factories

| Method             | Params               | Returns           | Description                                                                                                                                                                                                                                                       |
| ------------------ | -------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| send               |                      | LightningResponse | Create successful response { data: 'ok', error: null }                                                                                                                                                                                                            |
| send               | Object responseData  | LightningResponse | Create successful response { data: responseData, error: null }                                                                                                                                                                                                    |
| error              | String errorMessage  | LightningResponse | Create error response { data: null, error: errorMessage }                                                                                                                                                                                                         |
| error              | LightningError error | LightningResponse | Create error response { data: null, error: error } where error is a structured LightningError.                                                                                                                                                                    |
| somethingWentWrong | Exception e          | LightningResponse | Either throws AuraHandleException for unknown issues to hide the implementation details to end users. Or creates error response { data: null, error: error } where error is a structured LightningError with details from specific exceptions, like DmlException. |

## Example

```apex
// classes/GrantPartnerPortalAccessController.cls
@AuraEnabled
public static LightningResponse grantPartnerPortalAccess(Id userId) {
    try {
        // Perform some operation.
        AccessResult data = grantAccess(userId);
        // Success response with optional data.
        // { data: data, error: null }
        return LightningResponse.send(data);
    } catch (AccessAlreadyGrantedException e) {
        // Custom error message. Display a user-friendly message detailing the issue encountered.
        // { data: null, error: Partner_Portal_Access_Already_Granted }
        return LightningResponse.error(System.Label.Partner_Portal_Access_Already_Granted);
    } catch (UserNotEligibleForPartnerPortalException e) {
        // Different custom error message.
        // { data: null, error: User_Not_Eligible_For_Partner_Portal }
        return LightningResponse.error(System.Label.User_Not_Eligible_For_Partner_Portal);
    } catch (Exception e) {
        // Log the unexpected exception here. This is a bug!
        // Unexpected error. Show generic error message.
        // We don't want to show implementation details to end users.
        // In most cases, this will throw AuraHandleException and shows a generic error modal.
        // In some cases, this will return a { data: null, error: error } with a user-friendly error message,
        // for example when the exception is a DmlException with a custom validation message.
        return LightningResponse.somethingWentWrong(e);
    }
}
```

## Installation

Components

-   [classes/LightningError](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningError.cls)
-   [classes/LightningErrorTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningErrorTest.cls)
-   [classes/LightningResponse](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningResponse.cls)
-   [classes/LightningResponseTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/LightningResponseTest.cls)

Ideally deploy everything defined in the [errorHandler](error-handler.md)

or deploy just this module:

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
