# JSON Preprocessor

![apex](https://img.shields.io/badge/Apex-service-darkblue)

Configurable JSON transformation in Apex.

## Specification

This Apex service offers a variety of functionalities to ensure your JSON data
is well-organized, matches the requested format and adheres to your preferred
formatting standards.

### Fields

| Field Name                  | Type                  | Default | Description                                                                                                    |
| --------------------------- | --------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| pretty                      | Boolean               | false   | Prettify result JSON.                                                                                          |
| replaceEmptyStringsWithNull | Boolean               | false   | "" => null                                                                                                     |
| snakeCaseToCamelCase        | Boolean               | false   | some_key => someKey                                                                                            |
| capitalizeFirstLetter       | Boolean               | false   | someKey => SomeKey                                                                                             |
| uncapitalizeFirstLetter     | Boolean               | false   | SomeKey => someKey                                                                                             |
| sortMapFields               | Boolean               | true    | Sort JSON keys.                                                                                                |
| replaceFieldNamesMap        | Map&lt;String,String> |         | Map JSON keys to a different value. Can be used to change Apex reserved keyword fields before deserialization. |
| datetimeFieldsToReformat    | Set&lt;String>        |         | Collection of JSON keys holding datetime values to reformat.                                                   |
| datetimeFormat              | String                |         | Datetime format used for datetimeFieldToReformat JSON fields.                                                  |
| sourceTimeZone              | TimeZone              | UTC     | Original datetime time zone.                                                                                   |
| targetTimeZone              | TimeZone              | UTC     | Target datetime time zone.                                                                                     |

### Constructors

| Params         | Description                         |
| -------------- | ----------------------------------- |
|                | The result JSON won't be prettified |
| Boolean pretty | The result JSON will be prettified  |

### Methods

| Method  | Params            | Returns | Description                                |
| ------- | ----------------- | ------- | ------------------------------------------ |
| process | String jsonString | String  | Process JSON and return a new JSON string. |

## Example

In the example below, we would like to prepare a JSON for deserialization into
an Apex object. We would like to change the original JSON in two ways:

1. Change the field names from snake case to camel case to follow PMDs field
   naming conventions.
2. Change the "number" field name because it's a reserved word in Apex.

```apex
JsonPreprocessor processor = new JsonPreprocessor();
processor.snakeCaseToCamelCase = true;
processor.replaceFieldNamesMap.put('number', 'number_x');

String originalJson = '{"some_key":"myValue","number":150}';
String processedJson = processor.process(originalJson);
// {"someKey:"myValue","number_x":150}
```

### Replace Empty Strings with Null

```apex
processor.replaceEmptyStringsWithNull = true;
String originalJson = '{"key":""}';
String processedJson = processor.process(originalJson);
// {"key":null}
```

### Snake Case to Camel Case

```apex
processor.snakeCaseToCamelCase = true;
String originalJson = '{"some_key":"myValue"}';
String processedJson = processor.process(originalJson);
// {"someKey":"myValue"}
```

### Capitalize and Uncapitalize First Letter

```apex
processor.capitalizeFirstLetter = true;
String originalJson = '{"someKey":"myValue"}';
String processedJson = processor.process(originalJson);
// {"SomeKey":"myValue"}

processor.uncapitalizeFirstLetter = true;
String originalJson = '{"SomeKey":"myValue"}';
String processedJson = processor.process(originalJson);
// {"someKey":"myValue"}
```

### Sort Map Fields

```apex
processor.sortMapFields = true;
String originalJson = '{"b":"myValue2","a":"myValue"}';
String processedJson = processor.process(originalJson);
// {"a":"myValue","b":"myValue2"}
```

### Replace Fields By Name

```apex
processor.replaceFieldNamesMap.put('number', 'ticketNumber');
processor.replaceFieldNamesMap.put('string', 'string_x');
String originalJson = '{"number":150,"string":"myValue"}';
String processedJson = processor.process(originalJson);
// {"ticketNumber":150,"string_x":"myValue"}
```

### Remove Fields By Name

```apex
processor.fieldNamesToRemove.add('number');
String originalJson = '{"size":2,"result":[{"number": "ABC0001234","description": "desc1"},{"description": "", "number": "ABC0004567"}]}';
String processedJson = processor.process(originalJson);
// {"size":2,"result":[{"description":"desc1"},{"description":""}]}
```

### Reformat Datetime Values

Let's say in our REST response we have datetime value in Los Angeles time zone,
and we are planning to deserialize this JSON into UTC.

Simple example: reformat long datetime.

```apex
processor.datetimeFieldsToReformat.add('dt');
String originalJson = '{"dt":1719138444559}';
String result = processor.process(originalJson);
// {"dt":"2024-06-23T10:27:24Z"}
```

Convert time zones and use custom datetime format example.

```apex
processor.datetimeFieldsToReformat.add('dt');
// Default format is yyyy-MM-ddTHH:mm:ssZ
processor.datetimeFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ';
// UTC is a default value for both source and target time zone.
processor.sourceTimeZone = TimeZone.getTimeZone('America/Los_Angeles');
processor.targetTimeZone = TimeZone.getTimeZone('UTC');
String originalJson = '{"dt":"2022-12-15 04:15:30"}';
String result = processor.process(originalJson);
// {"dt":"2022-12-15T12:15:30.000+0000"}
```

## Installation

Components

-   [classes/JsonPreprocessor](https://github.com/kratapps/component-library/blob/main/src/library/classes/JsonPreprocessor.cls)
-   [classes/JsonPreprocessorTest](https://github.com/kratapps/component-library/blob/main/src/library/classes/JsonPreprocessorTest.cls)

Deploy preprocessor:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name component-library \
    -m ApexClass:JsonPreprocessor \
    -m ApexClass:JsonPreprocessorTest \
    -o my-org
```
