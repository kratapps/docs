# External Log Import Reference

**Type**: Custom Metadata

**API Name**: `ok__External_Log_Import__mdt`

Configure external logs import to One Logger.

## Fields

| Field Label                 | API Name                            | Type     | Required | Description                                                              |
| --------------------------- | ----------------------------------- | -------- | -------- | ------------------------------------------------------------------------ |
| Custom Metadata Record Name | DeveloperName                       | string   | true     |                                                                          |
| Custom Metadata Record ID   | Id                                  | id       | true     |                                                                          |
| Label                       | Label                               | string   | false    |                                                                          |
| Master Language             | Language                            | picklist | true     |                                                                          |
| Label                       | MasterLabel                         | string   | true     |                                                                          |
| Namespace Prefix            | NamespacePrefix                     | string   | false    |                                                                          |
| Qualified API Name          | QualifiedApiName                    | string   | false    |                                                                          |
| System Modstamp             | SystemModstamp                      | datetime | true     |                                                                          |
| Auto Map Fields             | ok\_\_Auto_Map_Fields\_\_c          | boolean  | true     | Try to auto-map fields from external log object to One Logger Log Event. |
| Default Log Level           | ok\_\_Default_Log_Level\_\_c        | picklist | false    | Default log level for this external log.                                 |
| External Log Namespace      | ok\_\_External_Log_Namespace\_\_c   | string   | true     | The namespace of an object name you want to import to One Logger.        |
| External Log Object Name    | ok\_\_External_Log_Object_Name\_\_c | string   | true     | The API Name of an object name you want to import to One Logger.         |
| Is Active                   | ok\_\_Is_Active\_\_c                | boolean  | true     |                                                                          |
| Override Name Field         | ok\_\_Override_Name_Field\_\_c      | boolean  | true     | Use Log Name Pattern from Logger Settings to set Name.                   |
