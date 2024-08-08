# External Log Field Mapping Reference

**Type**: Custom Metadata

**API Name**: `ok__External_Log_Field_Mapping__mdt`

Map external log field to One Logger log field. Child object to External Log
Import.

## Fields

| Field Label                 | API Name                           | Type      | Required | Description                                                                                                               |
| --------------------------- | ---------------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| Custom Metadata Record Name | DeveloperName                      | string    | true     |                                                                                                                           |
| Custom Metadata Record ID   | Id                                 | id        | true     |                                                                                                                           |
| Label                       | Label                              | string    | false    |                                                                                                                           |
| Master Language             | Language                           | picklist  | true     |                                                                                                                           |
| Label                       | MasterLabel                        | string    | true     |                                                                                                                           |
| Namespace Prefix            | NamespacePrefix                    | string    | false    |                                                                                                                           |
| Qualified API Name          | QualifiedApiName                   | string    | false    |                                                                                                                           |
| System Modstamp             | SystemModstamp                     | datetime  | true     |                                                                                                                           |
| External Log Field Name     | ok\_\_External_Log_Field_Name\_\_c | string    | true     | Source field name of a log you want to import to One Logger. Include namespace if the log object is from managed package. |
| External Log Import         | ok\_\_External_Log_Import\_\_c     | reference | true     |                                                                                                                           |
| Log Field Name              | ok\_\_Log_Field_Name\_\_c          | string    | true     | Field name of the log event from our package.                                                                             |
