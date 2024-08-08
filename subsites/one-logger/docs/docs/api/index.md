# Logger API

The API can be invoked through following components:

-   [Logger](../reference/Logger.md) - Main API for creating and publishing
    logs. Additionally, you can control the execution context.
-   [Log](../reference/Log.md) - Apex class used to build the
    `ok__Log_Event__e`. Includes methods to log specific data, for example:
    -   Build the Log Event and set the log message using `.log(message)`.
    -   Exception data (type, message, stack trace...), for example
        `.addException(exception)`.
    -   Custom payload, for example `.addPyaload(someString)` or
        `.addPayloadJson(someSerializableData)`.
    -   HTTP request/response data, for example `.addHttpRequest(request);`.
    -   Email data, for example `.addEmail(email);`.
-   [Invocable Error Logger](../reference/InvocableErrorLogger.md) - Log from
    flows, see [Flow Logging](flow-logging.md) docs.
-   [Logger Test Util](../reference/LoggerTestUtil.md) - Control unit tests
    execution, see [Unit Testing](unit-testing.md) docs.
-   [Permission Manager](../reference/PermissionManager.md) - Manage permission
    sets and license assignments programmatically, see
    [Permission Manager](permission-manager.md) docs.
