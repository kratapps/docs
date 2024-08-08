# Top Level Apex

Don't publish logs in every method; it is recommended to publish only at the
top-level Apex code. The best practice is to wrap your code at the top-level
Apex in a try-catch-finally-publish block to log unexpected errors and publish
all the registered log events.

## Examples: Top-level Apex

-   Apex triggers.
-   Methods annotated with `@AuraEnable`.
-   Methods annotated with `@Future`.
-   Queueable `execute` methods.
-   Schedulable `execute` methods.
-   Batchable `execute`, `start` and `finish` methods.
-   REST resource annotated methods, e.g. `@HttpGet`, `@HttpPost`.
-   Inbound email handler `handleInboundEmail` methods.

## Examples: try-catch-finally-publish

Example of the try-catch-finally-publish pattern.

```apex
// First Apex code executed.
try {
    // Rest of the implementation
    // ...
} catch (Exception e) {
    // Handle unexpected errors.
    logger.error().addException(e).log('Unexpected error.');
} finally {
    // Publish logs.
    ok.Logger.publish();
}
```

Sometimes, you may need to rethrow the unexpected exception to roll back the
transaction. This is particularly helpful in triggers.

```apex
trigger AccountTrigger on Account(before insert) {
    ok.Logger logger = ok.Logger.getTriggerLogger();
    try {
        Domain.triggerHandler(Accounts.class);
    } catch (Exception e) {
        logger.error().addException(e).log('Unexpected error in trigger.');
        // Rethrow the exception to roll back the transaction.
        throw e;
    } finally {
        ok.Logger.publish();
    }
}
```

> ⚠ The following example is not a top-level Apex and should not call the
> `publish` method.

```apex
public Boolean grantAccess(Id userId) {
    Boolean granted = hasPermission(userId);
    if (granted) {
        logger.info().linkSObject(userId).log('Permission granted.');
    }
    // There should be no try-catch-finally-publish block and no publishing in this method.
    return granted;
}
```
