# Logger Reference

**Type**: Apex Class

**API Name**: `ok.Logger`

## Static Methods

| Method                  | Params                        | Returns   | Description                                                               |
| ----------------------- | ----------------------------- | --------- | ------------------------------------------------------------------------- |
| getLogger               | Type classType                | ok.Logger | Static factory method to create a One Logger instance.                    |
| getTriggerLogger        |                               | ok.Logger | Static factory method to create a One Logger Trigger instance.            |
| getAnonymousBlockLogger |                               | ok.Logger | Static factory method to create a One Logger Anonymous Block instance.    |
| isCurrentUserLicensed   |                               | Boolean   | Returns true if running user is licensed.                                 |
| publish                 |                               |           | Publish all registered logs.                                              |
| publishExternalLogs     | List<SObject\> externalLogs   |           | Static method to publish external logs. Only external logs are published. |
| setPluginExecution      | LoggerPlugin plugin           |           | Set Logger Plugin context.                                                |
| setBatchableContext     | Database.BatchableContext ctx |           | Set Batchable context.                                                    |
| setSchedulableContext   | SchedulableContext ctx        |           | Set Schedulable context.                                                  |
| isLevelEnabled          | LogLevel level                | Boolean   | Check if logs at level will be published.                                 |
| isLevelEnabled          | LogLevel level, Id userId     | Boolean   | Check if logs at level will be published.                                 |
| isErrorEnabled          |                               | Boolean   | Check if logs at error level will be published.                           |
| isErrorEnabled          | Id userId                     | Boolean   | Check if logs at error level will be published.                           |
| isWarnEnabled           |                               | Boolean   | Check if logs at warn level will be published.                            |
| isWarnEnabled           | Id userId                     | Boolean   | Check if logs at warn level will be published.                            |
| isInfoEnabled           |                               | Boolean   | Check if logs at info level will be published.                            |
| isInfoEnabled           | Id userId                     | Boolean   | Check if logs at info level will be published.                            |
| isDebugEnabled          |                               | Boolean   | Check if logs at debug level will be published.                           |
| isDebugEnabled          | Id userId                     | Boolean   | Check if logs at debug level will be published.                           |
| isFineEnabled           |                               | Boolean   | Check if logs at fine level will be published.                            |
| isFineEnabled           | Id userId                     | Boolean   | Check if logs at fine level will be published.                            |
| isFinerEnabled          |                               | Boolean   | Check if logs at finer level will be published.                           |
| isFinerEnabled          | Id userId                     | Boolean   | Check if logs at finer level will be published.                           |
| isFinestEnabled         |                               | Boolean   | Check if logs at finest level will be published.                          |
| isFinestEnabled         | Id userId                     | Boolean   | Check if logs at finest level will be published.                          |

## Methods

| Method              | Params                                                           | Returns      | Description                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error               |                                                                  | ok.Log       | Create a log at level ERROR.                                                                                                                                     |
| warn                |                                                                  | ok.Log       | Create a log at level WARN.                                                                                                                                      |
| info                |                                                                  | ok.Log       | Create a log at level INFO.                                                                                                                                      |
| debug               |                                                                  | ok.Log       | Create a log at level DEBUG.                                                                                                                                     |
| fine                |                                                                  | ok.Log       | Create a log at level FINE.                                                                                                                                      |
| finer               |                                                                  | ok.Log       | Create a log at level FINER.                                                                                                                                     |
| finest              |                                                                  | ok.Log       | Create a log at level FINEST.                                                                                                                                    |
| level               | LogLevel level                                                   | ok.Log       | Create a log at specific level.                                                                                                                                  |
| logDatabaseFailures | List<Database\.\*\> results                                      | List<ok.Log> | Create logs at level ERROR from database operation result, e.g. List<Database.SaveResult>, List<Database.DeleteResult>                                           |
| logDatabaseFailures | List<Database\.\*\> results, Set<StatusCode\> ignoredStatusCodes | List<ok.Log> | Create logs at level ERROR from database operation result, e.g. List<Database.SaveResult>, List<Database.DeleteResult>. Ignore errors with specific status code. |
| open                |                                                                  | Logger       | Open stack trace and system debug from managed packages.                                                                                                         |
