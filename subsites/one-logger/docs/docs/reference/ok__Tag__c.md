# Tag Reference

**Type**: Custom SObject

**API Name**: `ok__Tag__c`

Add tags to your logs.

## Fields

| Label                | Name                  | Type      | Required | Description |
| -------------------- | --------------------- | --------- | -------- | ----------- |
| Created By ID        | CreatedById           | reference | true     |             |
| Created Date         | CreatedDate           | datetime  | true     |             |
| Record ID            | Id                    | id        | true     |             |
| Deleted              | IsDeleted             | boolean   | true     |             |
| Last Modified By ID  | LastModifiedById      | reference | true     |             |
| Last Modified Date   | LastModifiedDate      | datetime  | true     |             |
| Last Referenced Date | LastReferencedDate    | datetime  | false    |             |
| Last Viewed Date     | LastViewedDate        | datetime  | false    |             |
| Tag Name             | Name                  | string    | false    |             |
| Owner ID             | OwnerId               | reference | true     |             |
| System Modstamp      | SystemModstamp        | datetime  | true     |             |
| Logs Count           | ok\_\_Logs_Count\_\_c | double    | false    |             |
