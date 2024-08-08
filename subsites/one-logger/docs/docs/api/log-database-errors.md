# Log Database Errors

Leverage `.logDatabaseFailures(databaseResults)` to log any DML errors occurred
when using the `allOrNone=false` option.

If there are more than one error, either one log per error is created, or one
log per all errors is created, depending on your logger configuration. See the
[Group Database Failures](../reference/ok__Logger_Settings__mdt.md) option. Keep
the logs grouped to improve performance.

**Methods**

-   `List<ok.Log> logDatabaseFailures(List<Database.*> results)`
-   `List<ok.Log> logDatabaseFailures(List<Database.*> results, Set<StatusCode> ignoreStatusCodes)`

**Supported collections**

-   `List<Database.DeleteResult>`
-   `List<Database.LeadConvertResult>`
-   `List<Database.MergeResult>`
-   `List<Database.SaveResult>`
-   `List<Database.UndeleteResult>`
-   `List<Database.UpsertResult>`

**Fields**

-   `ok__Payload__c` - List of failed results if grouped, single result
    otherwise.
-   `ok__First_Error_Status_Code__c` - Error status code of the first error, for
    example `FIELD_CUSTOM_VALIDATION_EXCEPTION`.
-   `ok__First_Error_Message__c` - Error message of the first error, for
    example, a validation rule message.
-   `ok__First_Error_Fields__c` - Error fields of the first error.
-   `ok__SObject_Id__c` - SObject ID of the affected record, only when not
    grouped.
-   `ok__SObject_Type__c` - SObject type of the affected record, only when not
    grouped.
-   `ok__Message__c` - Text `Database {operation} error.`, for example
    `Database save error.`.

**Example**

```apex
List<Database.SaveResult> saveResults = Database.insert(records, false);
logger.logDatabaseFailures(saveResults);
```
