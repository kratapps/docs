# Logger Test Util Reference

**Type**: Apex Class

**API Name**: `ok.LoggerTestUtil`

This class provides features for controlling your unit test execution.

See [Unit Testing](../api/unit-testing.md).

## Static Methods

| Method                      | Params            | Returns                     | Description                                                                          |
| --------------------------- | ----------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| disableErrorLoggedException |                   |                             | Disable `ErrorLoggedException` when testing `logger.error()`.                        |
| disableErrorLoggedException | Boolean disabled  |                             | Disable `ErrorLoggedException` when testing `logger.error()`.                        |
| enableEventPublishing       |                   |                             | Enable `ok__Log_Event__e` to be published using `ok.Logger.publish()` in unit tests. |
| enableEventPublishing       | Boolean disabled  |                             | Enable `ok__Log_Event__e` to be published using `ok.Logger.publish()` in unit tests. |
| enableDebugLogs             |                   |                             | Enable system debug (Apex Log) in unit tests.                                        |
| enableDebugLogs             | Boolean enabled   |                             | Enable system debug (Apex Log) in unit tests.                                        |
| getLastErrorLogEvent        |                   | ok\_\_Log_Event\_\_e        | Return the log event registered by the last execution of `logger.error()`.           |
| getLogEvents                |                   | List<ok\_\_Log_Event\_\_e\> | Return all the registered log events.                                                |
| getLogEvents                | ok.LogLevel level | List<ok\_\_Log_Event\_\_e\> | Return all the registered log events of a specific type.                             |
