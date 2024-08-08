# Log Filter Reference

**Type**: Custom Metadata

**API Name**: `ok__Log_Filter__mdt`

Configurable logs filter.

## Fields

| Label                       | Name                            | Type     | Required | Description                                                                                    |
| --------------------------- | ------------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------- |
| Custom Metadata Record Name | DeveloperName                   | string   | true     |                                                                                                |
| Custom Metadata Record ID   | Id                              | id       | true     |                                                                                                |
| Label                       | Label                           | string   | false    |                                                                                                |
| Master Language             | Language                        | picklist | true     |                                                                                                |
| Label                       | MasterLabel                     | string   | true     |                                                                                                |
| Namespace Prefix            | NamespacePrefix                 | string   | false    |                                                                                                |
| Qualified API Name          | QualifiedApiName                | string   | false    |                                                                                                |
| System Modstamp             | SystemModstamp                  | datetime | true     |                                                                                                |
| Class Name                  | ok\_\_Class_Name\_\_c           | string   | false    | Filter logs by class name.                                                                     |
| End Time                    | ok\_\_End_Time\_\_c             | datetime | false    | Filter logs before the end time.                                                               |
| Exception Type              | ok\_\_Exception_Type\_\_c       | string   | false    | Filter logs with a specific exception type.                                                    |
| Function Name               | ok\_\_Function_Name\_\_c        | string   | false    | Filter logs by function name.                                                                  |
| Is Sandbox                  | ok\_\_Is_Sandbox\_\_c           | picklist | false    | Filter logs from sandbox/production. Keep blank to include all logs.                           |
| Limit Alert                 | ok\_\_Limit_Alert\_\_c          | picklist | false    | Filter logs with/without a limit alert. Keep blank to not filter on the Limit Alert field.     |
| Log Levels                  | ok\_\_Log_Levels\_\_c           | string   | false    | Filter logs by log levels. Semicolon separated, uppercase values.                              |
| Namespace Prefix            | ok\_\_Namespace_Prefix\_\_c     | string   | false    | Filter logs by namespace prefix.                                                               |
| Sandbox Name                | ok\_\_Sandbox_Name\_\_c         | string   | false    | Filter logs by sandbox name.                                                                   |
| Search Text                 | ok\_\_Search_Text\_\_c          | string   | false    | Filter logs by search text.                                                                    |
| Start Time                  | ok\_\_Start_Time\_\_c           | datetime | false    | Filter logs after the start time.                                                              |
| Tagged As                   | ok\_\_Tagged_As\_\_c            | string   | false    | Filter tagged logs.                                                                            |
| Time Preset                 | ok\_\_Time_Preset\_\_c          | picklist | false    | Filter logs in the interval.                                                                   |
| Trigger is Executing        | ok\_\_Trigger_Is_Executing\_\_c | picklist | false    | Filter logs logged from a trigger. Keep blank to not filter on the Trigger is Executing field. |
| Trigger SObject Type        | ok\_\_Trigger_SObject_Type\_\_c | string   | false    | Filter logs logged from a trigger on a specific SObject.                                       |
| User Id                     | ok\_\_User_Id\_\_c              | string   | false    | Filter logs by user.                                                                           |
| User Username               | ok\_\_User_Username\_\_c        | string   | false    | Filter logs by user.                                                                           |
