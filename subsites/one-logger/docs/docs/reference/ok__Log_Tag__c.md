# Log Tag Reference

**Type**: Custom SObject

**API Name**: `ok__Log_Tag__c`

Junction object between Log and Tag objects.

## Fields

| Label               | Name                  | Type      | Required | Description |
| ------------------- | --------------------- | --------- | -------- | ----------- |
| Created By ID       | CreatedById           | reference | true     |             |
| Created Date        | CreatedDate           | datetime  | true     |             |
| Record ID           | Id                    | id        | true     |             |
| Deleted             | IsDeleted             | boolean   | true     |             |
| Last Modified By ID | LastModifiedById      | reference | true     |             |
| Last Modified Date  | LastModifiedDate      | datetime  | true     |             |
| Log Tag Name        | Name                  | string    | true     |             |
| System Modstamp     | SystemModstamp        | datetime  | true     |             |
| Log                 | ok\_\_Log\_\_c        | reference | true     |             |
| Tag                 | ok\_\_Tag\_\_c        | reference | true     |             |
| Unique Key          | ok\_\_Unique_Key\_\_c | string    | true     |             |
