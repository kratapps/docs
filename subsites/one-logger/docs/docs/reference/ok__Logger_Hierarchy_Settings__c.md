# Logger Hierarchy Settings Reference

**Type**: Custom Settings

**API Name**: `ok__Logger_Hierarchy_Settings__c`

One Logger hierarchical configuration.

## Fields

| Label                      | Name                                  | Type      | Required | Description                                                                                                                            |
| -------------------------- | ------------------------------------- | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Created By ID              | CreatedById                           | reference | true     |                                                                                                                                        |
| Created Date               | CreatedDate                           | datetime  | true     |                                                                                                                                        |
| Record ID                  | Id                                    | id        | true     |                                                                                                                                        |
| Deleted                    | IsDeleted                             | boolean   | true     |                                                                                                                                        |
| Last Modified By ID        | LastModifiedById                      | reference | true     |                                                                                                                                        |
| Last Modified Date         | LastModifiedDate                      | datetime  | true     |                                                                                                                                        |
| Name                       | Name                                  | string    | false    |                                                                                                                                        |
| Location                   | SetupOwnerId                          | reference | false    |                                                                                                                                        |
| System Modstamp            | SystemModstamp                        | datetime  | true     |                                                                                                                                        |
| Capture Limits             | ok\_\_Capture_Limits\_\_c             | boolean   | true     | Limits can be captured either through this setting or through logging API in code. Enabling this feature can affect org's performance. |
| Export Logs Field Set      | ok\_\_Export_Logs_Field_Set\_\_c      | string    | false    | Log field set name. Default list of fields to be exported.                                                                             |
| Guest User Record Owner ID | ok\_\_Guest_User_Record_Owner_ID\_\_c | string    | false    | User ID used as Owner ID for log records.                                                                                              |
| Is Debug Enabled           | ok\_\_Is_Debug_Enabled\_\_c           | boolean   | true     | Configure whether the logs with DEBUG level should be published.                                                                       |
| Is Error Enabled           | ok\_\_Is_Error_Enabled\_\_c           | boolean   | true     | Configure whether the logs with ERROR level should be published.                                                                       |
| Is Fine Enabled            | ok\_\_Is_Fine_Enabled\_\_c            | boolean   | true     | Configure whether the logs with FINE level should be published.                                                                        |
| Is Finer Enabled           | ok\_\_Is_Finer_Enabled\_\_c           | boolean   | true     | Configure whether the logs with FINER level should be published.                                                                       |
| Is Finest Enabled          | ok\_\_Is_Finest_Enabled\_\_c          | boolean   | true     | Configure whether the logs with FINEST level should be published.                                                                      |
| Is Info Enabled            | ok\_\_Is_Info_Enabled\_\_c            | boolean   | true     | Configure whether the logs with INFO level should be published.                                                                        |
| Is Warn Enabled            | ok\_\_Is_Warn_Enabled\_\_c            | boolean   | true     | Configure whether the logs with WARN level should be published.                                                                        |
| Logger Version             | ok\_\_Logger_Version\_\_c             | string    | false    | Currently installed One Logger managed package version. Populated automatically.                                                       |
| System Debug Disabled      | ok\_\_System_Debug_Disabled\_\_c      | boolean   | true     | Switch for logging using System::debug.                                                                                                |
| Web Console Debug Disabled | ok\_\_Web_Console_Debug_Disabled\_\_c | boolean   | true     | Reserved for future. Switch for web browser console debugs.                                                                            |
