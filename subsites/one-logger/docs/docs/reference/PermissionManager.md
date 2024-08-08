# Permission Manager Reference

**Type**: Apex Class

**API Name**: `ok.PermissionManager`

Manage permission sets and license assignments programmatically.

## Static Methods

| Method                  | Params           | Returns | Description                                                                                                |
| ----------------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| assignLicense           | Set<Id\> userIds |         | Assign One Logger license. Issues are logged, duplicate assignments are ignored.                           |
| assignAdminPermSet      | Set<Id\> userIds |         | Assign One Logger Logger_Admin permission set. Issues are logged, duplicate assignments are ignored.       |
| assignCreateLogsPermSet | Set<Id\> userIds |         | Assign One Logger Logger_Create_Logs permission set. Issues are logged, duplicate assignments are ignored. |
| assignReadOnlyPermSet   | Set<Id\> userIds |         | Assign One Logger Logger_Read_Only permission set. Issues are logged, duplicate assignments are ignored.   |
