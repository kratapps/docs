# Log Reference

**Type**: Apex Class

**API Name**: `ok.Log`

Data class used for constructing the log event.

This class is used to build the `ok__Log_Event__e`, which is then saved to the
database as the custom sObject `ok__Log__c`.

## Methods

| Method          | Params                                            | Returns | Description                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log             | String message                                    | ok.Log  | Registers the log. Log will be printed to console and prepared for publishing.                                                                                                                                                                                                               |
| addEmail        | Messaging.Email email                             | ok.Log  | Includes outbound email data.                                                                                                                                                                                                                                                                |
| addEmails       | List<Messaging.Email\> emails                     | ok.Log  | Includes outbound email data.                                                                                                                                                                                                                                                                |
| addException    | Exception e                                       | ok.Log  | Includes exception data, exception message and stack trace.                                                                                                                                                                                                                                  |
| addHttpCallout  | HttpRequest req, HttpResponse resp                | ok.Log  | Includes HTTP request and response data.                                                                                                                                                                                                                                                     |
| addHttpRequest  | HttpRequest req                                   | ok.Log  | Includes HTTP request data.                                                                                                                                                                                                                                                                  |
| addHttpResponse | HttpResponse resp                                 | ok.Log  | Includes HTTP response data.                                                                                                                                                                                                                                                                 |
| addInboundEmail | Messaging.InboundEmail, Messaging.InboundEnvelope | ok.Log  | Includes inbound email data.                                                                                                                                                                                                                                                                 |
| addPayload      | Object payload                                    | ok.Log  | Add data. String.valueOf will be used to stringify the object.                                                                                                                                                                                                                               |
| addPayloadJson  | Object payload                                    | ok.Log  | Add data. JSON.serialize will be used to serialize the object.                                                                                                                                                                                                                               |
| addRestRequest  | RestRequest req                                   | ok.Log  | Includes REST request data. Use if the REST method is without parameters.                                                                                                                                                                                                                    |
| addRestRequest  | RestRequest req, Object param1                    | ok.Log  | Includes REST request data. Use if the REST method has one parameter. If param1 is a custom class, ensure that the `@JsonAccess(Serializable='always')` annotation is set to enable the logger to serialize the data and include it in the log.                                              |
| addRestRequest  | RestRequest req, Map<String, Object\> params      | ok.Log  | Includes REST request data. Use if the REST Method has multiple parameters. Map parameter values by parameter name.                                                                                                                                                                          |
| addRestResponse | RestResponse resp, Object responseBody            | ok.Log  | Includes REST response data. Response body is either the return value of the method or RestContext.response. If responseBody is a custom class, ensure that the `@JsonAccess(Serializable='always')` annotation is set to enable the logger to serialize the data and include it in the log. |
| addTag          | String tagName                                    | ok.Log  | Add tag to a log.                                                                                                                                                                                                                                                                            |
| addTags         | Set<String\> tagNames                             | ok.Log  | Add tags to a log.                                                                                                                                                                                                                                                                           |
| hideSecret      | String secret                                     | ok.Log  | Removes secret from logs.                                                                                                                                                                                                                                                                    |
| hideSecrets     | Set<String\> secrets                              | ok.Log  | Removes secrets from logs.                                                                                                                                                                                                                                                                   |
| linkSObject     | Id sObjectId                                      | ok.Log  | Includes SObject ID and Type in the log.                                                                                                                                                                                                                                                     |
| linkSObject     | SObject record                                    | ok.Log  | Includes SObject ID, Type and serialized SObject.                                                                                                                                                                                                                                            |

## Specification

### Add Payload

The payload is a universal field designated specifically for storing generic
data. See [Example](../api/logging-examples.md#add-payload).

**Methods**

-   `.addPayload(Object payload)` - The payload value is converted to a string
    if it is not already a string.
-   `.addPayloadJson(Object payload)` - The payload value is serialized into
    JSON and can be used to log Apex objects, Apex collections, SObjects, etc.

**Fields**

-   `ok__Payload__c` - Text data. JSON in case of `addPayloadJson`.
