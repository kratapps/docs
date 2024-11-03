# Record History Logging

**BETA**

| Feature               | Record History Logging                 | Field History Tracking |
| --------------------- | -------------------------------------- | ---------------------- |
| Audience              | Admins, Support, Audit, Internal Users | Internal Users         |
| User SObject          | :white_check_mark:                     | :x:                    |
| Supported SObjects    | Any with a Change Event enabled        | Limited                |
| Old Value Tracking    | :x:                                    | :white_check_mark:     |
| Asynchronous Tracking | :white_check_mark:                     | :white_check_mark:     |

## API Example

Log changes to user records with Change Events enabled for the User SObject.

```apex
trigger HistoryLoggingUserChangeEventTrigger on UserChangeEvent(after insert) {
    ok.Logger logger = ok.Logger.getTriggerLogger();
    logger.logHistory(Trigger.new);
    ok.Logger.publish();
}
```
