# Permission Manager

The API provided offers a straightforward method for assigning a logger license
or permission sets.

Refer to the [Permission Manager App](../ui/permission-manager.md) to view
licensed users and quickly assign/remove permission sets manually.

For example, if you intend to assign the 'Logger Create Logs' permission set to
every new active user, you can achieve this by invoking
`PermissionManager.assignCreateLogsPermSet(userIds)` method from within a User
trigger.

See [Permission Manager Reference](../reference/PermissionManager.md).

```apex
public void onAfterInsert(List<User> users) {
    ok.PermissionManager.assignCreateLogsPermSet();
}
```
