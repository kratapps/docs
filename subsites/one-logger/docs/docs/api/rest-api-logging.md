# REST API logging

Publish logs via REST API.

Sample request:

```shell
curl https://MY_DOMAIN.my.salesforce.com/services/apexrest/ok/log \
    -X POST \
    -H "Authorization: Bearer ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "[{\"index\":\"sf-cli\",\"logLevel\":\"INFO\",\"message\":\"hello from cli\"}]"
```
