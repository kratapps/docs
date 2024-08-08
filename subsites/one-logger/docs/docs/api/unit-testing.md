# Unit Testing

This page documents how to control the logging execution in your unit tests.

See [Logger Test Util Reference](../reference/LoggerTestUtil.md).

## Enable system debug

System debug (Apex Log) is disabled by default in unit tests, as the custom
settings record does not exist. You can enable system debug in unit tests
explicitly using `ok.LoggerTestUtil.enableDebugLogs();`.

## Fail tests automatically on error

When an error is logged from within a unit test, an exception is thrown by
default to fail the test automatically. Sometimes, it is expected in the test
for an error to be logged. In that case, you can disable this behavior using
`ok.LoggerTestUtil.disableErrorLoggedException();`.

In the following example, the test method will fail and ends the test:

```apex
@IsTest
static void testSpaceshipIsAccessible() {
    // Next line will throw the ErrorLoggedException. This exception is thrown in unit tests only.
    logger.error().log('Access denied.');
}
```

Disable the `ErrorLoggedException` on a per-test method basis.

```apex
@IsTest
static void testSpaceshipIsAccessible() {
    ok.LoggerTestUtil.disableErrorLoggedException();
    // Error logs will not throw the ErrorLoggedException in this test method.
    logger.error().log('Access denied.');
}
```

Disable `ErrorLoggedException` on a per-test class basis.

```apex
@IsTest
private class SpaceshipControllerTest {
    private static ok.Logger logger = ok.Logger.getLogger(SpaceshipControllerTest.class);

    static {
        ok.LoggerTestUtil.disableErrorLoggedException();
    }

    @IsTest
    static void testSpaceshipIsAccessible() {
        // Error logs will not throw the ErrorLoggedException in this test class.
        logger.error().log('Access denied.');
    }
}
```

## Assert registered events

Publishing is disabled by default in unit tests to improve performance. If you
need to assert expected logs, you can directly work with the registered events.
Use the API to retrieve the last error event or all registered events, no need
to query logs.

Work with last error log event:

```apex
@IsTest
static void lastErrorLogEventIsNullWhenNotLogged() {
    // Log INFO.
    logger.info().log('INFO');
    // Last ERROR log event is null.
    ok__Log_Event__e lastErrorLogEvent = ok.LoggerTestUtil.getLastErrorLogEvent();
    Assert.isNull(lastErrorLogEvent, 'No error log is expected.');
}

@IsTest
static void lastErrorLogEventIsNotNullWhenLogged() {
    // Disable ErrorLoggedException.
    ok.LoggerTestUtil.disableErrorLoggedException();
    // Log ERROR.
    logger.error().log('ERROR');
    // Last ERROR log event is the one above.
    ok__Log_Event__e lastErrorLogEvent = ok.LoggerTestUtil.getLastErrorLogEvent();
    Assert.areEqual('Hello Test.', lastErrorLogEvent.ok__Message__c, 'Error log is expected.');
}
```

Work with any log event:

```apex
@IsTest
static void logEventsAreInCorrectOrder() {
    // Log INFO.
    logger.info().log('INFO');
    // Log FINE.
    logger.fine().log('FINE');

    // Get all events.
    List<ok__Log_Event__e> logEvents = ok.LoggerTestUtil.getLogEvents();
    Assert.areEqual(2, logEvents.size(), 'Log events expected.');
    Assert.areEqual('INFO', logEvents.get(0).ok__Log_Level__c, 'Incorrect log events order.');
    Assert.areEqual('FINE', logEvents.get(1).ok__Log_Level__c, 'Incorrect log events order.');

    // Get all INFO events.
    List<ok__Log_Event__e> infoEvents = ok.LoggerTestUtil.getLogEvents(ok.LogLevel.INFO);
    Assert.areEqual(1, infoEvents.size(), 'INFO event expected.');
}
```

## Enable event publishing

You can enable event publishing and log record insertion in unit tests by
calling `ok.LoggerTestUtil.enableEventPublishing()`.

> ⚠️ Enabling event publishing is not recommended as it affects unit test
> performance. Instead, consider using `getLogEvents` or `getLastErrorLogEvent`.

```apex
@IsTest
static void logsAreInsertedWhenPublishingIsEnabled() {
    // Enable publishing.
    ok.LoggerTestUtil.enableEventPublishing();
    // Log INFO.
    logger.info().log('INFO');
    // Deliver events.
    ok.Logger.publish();
    Test.getEventBus().deliver();
    // Log records are created when publishing is enabled.
    List<ok__Log__c> logs = [SELECT Id FROM ok__Log__c];
    Assert.areEqual(1, logs.size(), 'Incorrect number of logs.');
}
```
