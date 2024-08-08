# Invocable Log Reference

**Type**: Apex Class

**API Name**: `ok.InvocableLog`

Data class used for logging from flows.

List of flow loggers with an invocable method leveraging this data class:

-   [InvocableErrorLogger](InvocableErrorLogger.md) - Log error from a flow.
-   [InvocableWarnLogger](InvocableWarnLogger.md) - Log warn from a flow.
-   [InvocableInfoLogger](InvocableInfoLogger.md) - Log info from a flow.
-   [InvocableDebugLogger](InvocableDebugLogger.md) - Log debug from a flow.
-   [InvocableFineLogger](InvocableFineLogger.md) - Log fine from a flow.

## Fields

| Field Label      | Type   | Required | Description                                                                                                                                                                  |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message          | string | true     | Log message.                                                                                                                                                                 |
| Flow Name        | string | true     | Name of the flow calling the logger.                                                                                                                                         |
| Inteview GUID    | string | false    | Use `{!$Flow.InterviewGuid}` global variable. Sets the `ok__Interview_Guid__c` field on the log record.                                                                      |
| Fault Message    | string | false    | Used in the Fault Path. Use `{!$Flow.FaultMessage}`. Sets fields `ok__Exception_Message__c`, `ok__Exception_Type__c`, `ok__First_Error_Message__c` and `ok__Stack_Trace__c`. |
| Namespace Prefix | string | false    | Namespace prefix of the flow. Should be set if the flow is in a package with namespace.                                                                                      |
| Function Name    | string | false    | Optional identifier to distinguish from other logs in the same flow.                                                                                                         |
| SObject ID       | string | false    | Link SObject record. Flow variant of the `linkSObject` method.                                                                                                               |
| SObject ID 2     | string | false    | Link second SObject record. Flow variant of the `linkSObject2` method.                                                                                                       |
| Payload          | string | false    | Additional data to include in the log.                                                                                                                                       |
