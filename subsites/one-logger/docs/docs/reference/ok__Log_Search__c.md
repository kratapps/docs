# Log Search Reference

**Type**: Custom SObject

**API Name**: `ok__Log_Search__c`

User defined log filters. Includes a list of logs, statistics, graphs.

## Fields

| Label                | Name                            | Type          | Required | Description                                                                                                            |
| -------------------- | ------------------------------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Created By ID        | CreatedById                     | reference     | true     |                                                                                                                        |
| Created Date         | CreatedDate                     | datetime      | true     |                                                                                                                        |
| Record ID            | Id                              | id            | true     |                                                                                                                        |
| Deleted              | IsDeleted                       | boolean       | true     |                                                                                                                        |
| Last Modified By ID  | LastModifiedById                | reference     | true     |                                                                                                                        |
| Last Modified Date   | LastModifiedDate                | datetime      | true     |                                                                                                                        |
| Last Referenced Date | LastReferencedDate              | datetime      | false    |                                                                                                                        |
| Last Viewed Date     | LastViewedDate                  | datetime      | false    |                                                                                                                        |
| Log Search Name      | Name                            | string        | false    |                                                                                                                        |
| Owner ID             | OwnerId                         | reference     | true     |                                                                                                                        |
| System Modstamp      | SystemModstamp                  | datetime      | true     |                                                                                                                        |
| Class Name           | ok\_\_Class_Name\_\_c           | string        | false    |                                                                                                                        |
| Date Type            | ok\_\_Date_Type\_\_c            | picklist      | true     | Time Preset field will be used if Preset selected. Start Time and End Time fields will be used if Date Range selected. |
| Description          | ok\_\_Description\_\_c          | string        | false    | Auto-populated description of this search.                                                                             |
| Display Log Levels   | ok\_\_Display_Log_Levels\_\_c   | string        | false    |                                                                                                                        |
| Display Time         | ok\_\_Display_Time\_\_c         | string        | false    |                                                                                                                        |
| End Time             | ok\_\_End_Time\_\_c             | datetime      | false    |                                                                                                                        |
| Exception Type       | ok\_\_Exception_Type\_\_c       | string        | false    |                                                                                                                        |
| Function Name        | ok\_\_Function_Name\_\_c        | string        | false    |                                                                                                                        |
| Is Sandbox           | ok\_\_Is_Sandbox\_\_c           | picklist      | false    | Filter logs from sandbox/production. Keep blank to include all logs.                                                   |
| Limit Alert          | ok\_\_Limit_Alert\_\_c          | picklist      | false    | Filter logs with/without a limit alert. Keep blank to not filter on the Limit Alert field.                             |
| Log Levels           | ok\_\_Log_Levels\_\_c           | multipicklist | true     | Search logs by log level.                                                                                              |
| Namespace Prefix     | ok\_\_Namespace_Prefix\_\_c     | string        | false    |                                                                                                                        |
| SObject Id 2         | ok\_\_SObject_Id_2\_\_c         | string        | false    |                                                                                                                        |
| SObject Id           | ok\_\_SObject_Id\_\_c           | string        | false    |                                                                                                                        |
| SObject Type 2       | ok\_\_SObject_Type_2\_\_c       | string        | false    |                                                                                                                        |
| SObject Type         | ok\_\_SObject_Type\_\_c         | string        | false    |                                                                                                                        |
| Sandbox Name         | ok\_\_Sandbox_Name\_\_c         | string        | false    | Filter logs by sandbox name.                                                                                           |
| Search Text          | ok\_\_Search_Text\_\_c          | string        | false    | Search for logs by text. When used, log tables and log charts are limited to 2000 records.                             |
| Start Time           | ok\_\_Start_Time\_\_c           | datetime      | false    |                                                                                                                        |
| Table Fields         | ok\_\_Table_Fields\_\_c         | multipicklist | false    | Keep empty to auto-populate default list.                                                                              |
| Tagged As            | ok\_\_Tagged_As\_\_c            | string        | false    |                                                                                                                        |
| Time Preset          | ok\_\_Time_Preset\_\_c          | picklist      | false    |                                                                                                                        |
| Trigger SObject Type | ok\_\_Trigger_SObject_Type\_\_c | string        | false    | Filter logs logged from a trigger on a specific SObject.                                                               |
| Trigger is Executing | ok\_\_Trigger_is_Executing\_\_c | picklist      | false    | Filter logs logged from a trigger. Keep blank to not filter on the Trigger is Executing field.                         |
| User ID              | ok\_\_User_Id\_\_c              | string        | false    | Filter logs by user.                                                                                                   |
| User Username        | ok\_\_User_Username\_\_c        | string        | false    | Filter logs by user.                                                                                                   |
