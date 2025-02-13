# Record Logs Component

**BETA**

Renders a logs table that displays only the logs related to the target record.

**Target**

Available on any record page.

**Attributes**

| Name                | Label                | Type    | Default              | Description                                                        |
| ------------------- | -------------------- | ------- | -------------------- | ------------------------------------------------------------------ |
| recordId            | Record ID            | ID      | page record context  | Target record.                                                     |
| excludeFirstLinked  | Exclude SObject ID   | boolean | false                | Logs where record ID matches `SObject ID` value will be ignored.   |
| excludeSecondLinked | Exclude SObject ID 2 | boolean | false                | Logs where record ID matches `SObject ID 2` value will be ignored. |
| iconName            | Icon Name            | text    | 'standard:knowledge' | The Lightning Design System name of the icon.                      |
| title               | Title                | text    | 'Logs'               | Card's title.                                                      |
| columns             | Columns              | text    | Default List         | Field names separated by semi-colons.                              |

**LWC Example**

```html
<c-record-logs
    record-id="{recordId}"
    object-api-name="User"
    title="User History"
    columns="ok__Log_Level__c;ok__Datetime__c;ok__User_Name__c;ok__Message__c"
></c-record-logs>
```
