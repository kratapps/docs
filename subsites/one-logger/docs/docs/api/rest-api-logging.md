# REST API logging

Publish logs via REST API.

## Endpoint description

- Endpoint: `POST /services/apexrest/ok/log`
- Header: `Content-Type: application/json`
- Body: JSON array of log entries

**Log Entry Fields**

| Field                  | Type          | Required | Description                                                                                 |
|------------------------|---------------|----------|---------------------------------------------------------------------------------------------|
| index                  | string        | Yes      | The index or source of the log entry. Can include alphanumeric and hyphens.                 |
| logLevel               | enum          | Yes      | The severity level of the log entry. Options: ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST |
| message                | string        | Yes      | The log message content.                                                                    |
| payload                | string        | No       | Additional ambiguous data.                                                                  |
| sObjectId              | salesforce ID | No       | Link the log with a specific Salesforce record.                                             |
| sObjectId2             | salesforce ID | No       | Link the log with another Salesforce record.                                                |
| httpRequest            | string        | No       | Payload specific for HTTP requests.                                                         |
| httpRequestEndpoint    | string        | No       | Endpoint of an HTTP request.                                                                |
| httpRequestMethod      | string        | No       | Method of an HTTP request.                                                                  |
| httpResponse           | string        | No       | Payload specific for HTTP response.                                                         |
| httpResponseStatus     | string        | No       | Status of an HTTP response.                                                                 |
| httpResponseStatusCode | integer       | No       | Status code of an HTTP response.                                                            |


## Examples

SF CLI example:
```shell
sf api request rest /services/apexrest/ok/log \
    -X POST \
    -b "[{\"index\":\"api\",\"logLevel\":\"INFO\",\"message\":\"hello from cli\"}]"
```

CURL example:
```shell
curl https://MY_DOMAIN.my.salesforce.com/services/apexrest/ok/log \
    -X POST \
    -H "Authorization: Bearer ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "[{\"index\":\"api\",\"logLevel\":\"INFO\",\"message\":\"hello from cli\"}]"
```
