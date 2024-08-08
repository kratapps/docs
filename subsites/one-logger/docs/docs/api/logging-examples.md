# Logging Examples

See specifications for logging on the [Logger Reference](../reference/Logger.md)
page and [Log Reference](../reference/Log.md) page.

## Basic Logging

```apex
public class SpaceshipController {
    private static ok.Logger logger = ok.Logger.getLogger(SpaceshipController.class);
    private Spaceship__c spaceship;

    public Boolean prepareForHyperspaceJump() {
        Id pilotId = UserInfo.getUserId();
        Boolean isAuthorized = isHyperspaceJumpAuthorized(pilotId);
        if (!isAuthorized) {
            // WARNING log.
            logger.warn().linkSObject(spaceship).linkSObject2(pilotId).log('Pilot is not authorized.');
            return false;
        }
        // INFO log.
        logger.info().addPayloadJson(spaceship.getEngineStatus()).log('Hyperspace jump is ready.');
        return true;
    }
}
```

## Exception Handling

```apex
public void safeOperation() {
    try {
        unsafeOperation();
    } catch (Exception e) {
        logger.error().addException(e).log('Unexpected error happened.');
    }
}
```

## Add Payload

```apex
// String payload example:
Datetime now = Datetime.now();
logger.info().addPayload(now).log('String payload.');

// Serialized payload example:
public class Person {
    public String firstName;
    public String lastName;

    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

Person anakin = new Person('Anakin',  'Skywalker');
logger.info().addPayloadJson(anakin).log('Apex object serialized.');
```

## Logging from a Batch Apex

Batch job methods are [top level Apex](top-level-apex.md) methods and should
implement the try-catch-finally-publish pattern.

See [Async Job Logging](async-job-logging.md).

```apex
public class Order66 implements Database.Batchable<SObject> {
    private static ok.Logger logger = ok.Logger.getLogger(Order66.class);

    public void execute(Database.BatchableContext context, List<SObject> scope) {
        try {
            // Set the context of the batch.
            // All the logs within this method will have their batch fields populated.
            ok.Logger.setBatchableContext(context);
            // Next is your implementation of the batchable job.
            someOperation();
        } catch (Exception e) {
            loggr.error().addException(e).log('Batch failed.');
        } finally {
            ok.Logger.publish();
        }
    }
}
```

## Logging from a Schedulable Apex

Schedulable job method is a [top level Apex](top-level-apex.md) method and
should implement the try-catch-finally-publish pattern.

See [Async Job Logging](async-job-logging.md).

```apex
public class Order66 implements SchedulableContext {
    private static ok.Logger logger = ok.Logger.getLogger(Order66.class);

    public void execute(SchedulableContext context) {
        try {
            // Set the context of the schedulable job.
            // All the logs within this method will have their batch fields populated.
            ok.Logger.setSchedulableContext(context);
            // Next is your implementation of the schedulable job.
            someOperation();
        } catch (Exception e) {
            loggr.error().addException(e).log('Scheduled job failed.');
        } finally {
            ok.Logger.publish();
        }
    }
}
```

## HTTP Callout

```apex
HttpRequest req = new HttpRequest();
logger.fine().addHttpRequest(req).log('HTTP request.');

HttpResponse resp = new Http().send(req);
if (resp.getStatusCode() != 200) {
    logger.error().addHttpCallout(req, resp).log('HTTP request failed.');
}
```

## Apex REST

```apex
@RestResource(UrlMapping='/spaceship/*')
global with sharing class SpaceshipRestResource {
    private static ok.Logger logger = ok.Logger.getLogger(SpaceshipRestResource.class);

    @HttpGet
    global static String doGet() {
        try {
            logger.info().addRestRequest(RestContext.request).log('GET received.');
            someOperation();
            return 'ok';
        } catch (Exception e) {
            logger.error().addRestRequest(RestContext.request).log('GET handler error.');
            return 'err';
        } finally {
            ok.Logger.publish();
        }
    }

    // Serializable='always' enables the logger to serialize the data and include it in the log.
    @JsonAccess(Serializable='always')
    global class SpaceshipDto {
        global String name;
    }

    @HttpPost
    global static void doPost(SpaceshipDto spaceship) {
        RestResponse resp = new RestResponse();
        RestContext.response = resp;
        try {
            someOperation(spaceship);
            resp.statusCode = 200;
            resp.responseBody = Blob.valueOf('ok');
            logger.info().addRestRequest(RestContext.request, spaceship).addRestResponse(resp, resp.responseBody).log('POST handled.');
        } catch (Exception e) {
            resp.statusCode = 500;
            resp.responseBody = Blob.valueOf('err');
            logger.error().addRestRequest(RestContext.request, spaceship).addRestResponse(resp, resp.responseBody).log('POST handler error.');
        } finally {
            ok.Logger.publish();
        }
    }
}
```

## Outbound Emails

```apex
Messaging.Email email;
logger.info().addEmail(email).log('Outbound email.');

List<Messaging.Email> emails;
logger.info().addEmails(emails).log('Outbound emails.');
```

## Inbound Emails

```apex
Messaging.InboundEmail email;
Messaging.InboundEnvelope envelope;
logger.info().addInboundEmail(email, envelope).log('Inbound emails.');
```

## Tagging

```apex
logger.info().addTag('sales').log('Tagged log');
```

## Masking Secrets

```apex
String secret = 'super-private-key';
logger.info().addPayload(secret).hideSecret(secret).log('Sensitive data.');
// ok__Payload__c = '****'
```
