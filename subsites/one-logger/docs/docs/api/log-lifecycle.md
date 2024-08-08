# Log Lifecycle

A log can have several forms throughout the lifecycle:

-   Log data (`ok.Log` apex class) - See [Log Reference](../reference/Log.md).
-   Log event (`ok__Log_Event__e` platform event) - See
    [Log Event Reference](../reference/ok__Log_Event__e.md).
-   Log record (`ok__Log__c` custom object) - See
    [Log Reference](../reference/ok__Log__c.md).

The log lifecycle includes following stages:

## Logger initialization

**Apex class logger**

The logger in an apex class should be initialized using `getLogger` and with the
correct type. Add the `static` modifier to enable logging from static methods.

> ⚠ The use of an incorrect type will break information about the method name,
> line number, etc.

```apex
public class AccountService {
    private static ok.Logger logger = ok.Logger.getLogger(AccountService.class);
}
```

**Apex trigger logger**

Similar to the Apex class, the trigger logger will be initialized simply with
`getTriggerLogger`.

> ⚠ A trigger code is a [top-level Apex](top-level-apex.md), and its code should
> be wrapped in a try-catch-finally-publish block with error logging and
> publishing. The exception should be rethrown to roll back the transaction.

```apex
trigger AccountTrigger on Account(before insert) {
    ok.Logger logger = ok.Logger.getTriggerLogger();
    try {
        Domain.triggerHandler(Accounts.class);
    } catch (Exception e) {
        logger.error().addException(e).log('Unexpected error in trigger.');
        throw e;
    } finally {
        ok.Logger.publish();
    }
}
```

**Anonymous apex logger**

If you have some automated Apex scripts, you can also log from there using the
anonymous block logger.

```apex
ok.Logger logger = ok.Logger.getAnonymousBlockLogger();
```

**Flow logger**

See [Flow Logging](flow-logging.md).

**LWC logger**

See [LWC Logging](lwc-logging.md).

## Build Log Data

First, you need to create a [ok.Log](../reference/Log.md) — an Apex data class.
The following methods on the `ok.Logger` instance will create a corresponding
`ok.Log` instance:

-   `logger.error().log(message);`
-   `logger.warn().log(message);`
-   `logger.info().log(message);`
-   `logger.debug().log(message);`
-   `logger.fine().log(message);`
-   `logger.finer().log(message);`
-   `logger.finest().log(message);`
-   `logger.logDatabaseFailures(List<Database.*>)` -
    [Log Database Errors](log-database-errors.md)
-   `logger.publishExternalLogs()` - [Log External](log-external.md)

Enhance the log by chaining various methods on the `ok.Log`; see all available
methods in the [ok.Log](../reference/Log.md) reference.

Basic logging example:

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

See more [Logging Examples](logging-examples.md).

## Register Logs for Publishing

Once you include all the information in the log, you can call `.log(message)`
method to register the log. During registration, a
[log event](../reference/ok__Log_Event__e.md) is constructed and printed to the
console if system debugging is enabled. You should treat the log object as
read-only once you register it.

```apex
logger.error().log('Hello Message.');
```

## Publish Log Events

Publish logs by calling `publish`. This method will publish the
`ok__Log_Event__e` immediately.

> ⚠ Publish should be called only at the [top-level Apex](top-level-apex.md) to
> bulkify the DML operation.

```apex
ok.Logger.publish();
```

## Log Records Creation

Once the [`ok__Log_Event__e`](../reference/ok__Log_Event__e.md) events are
published, they are consumed by a platform event trigger and saved in the
database as [`ok__Log__c`](../reference/ok__Log__c.md) records.

> ⚠ Avoid triggers on the `ok__Log__c` object, as such triggers can cause a loss
> of the logs. Instead, develop a custom plugin.

## Plugins (optional)

Plugins gives you a flexibility to consume and process `ok__Log_Event__e` events
in real-time.

See [Plugin Development](plugin-development.md).

## Persist Logs (optional)

Salesforce is not optimized to store a large volume of data, such as logs.
Consider scheduling a log cleaner to prune old logs and connecting an external
application like Splunk to persist and conduct further analysis.

## Consume Log Records (optional)

Coming soon!
