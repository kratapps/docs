# Admin Console

Logger configuration overview page.

## Logger Settings

The logger is already configured after the first installation, but you can make
changes to the configuration through two objects.

-   [Logger Settings](../reference/ok__Logger_Settings__mdt.md) custom metadata
    with the name `Settings`.
-   [Hierarchy Logger Settings](../reference/ok__Logger_Hierarchy_Settings__c.md)
    custom settings.

Don't forget that:

-   `Logger Version` is automatically populated by the app itself and should not
    be changed.
-   Ungrouping database failures will have an impact on the performance of the
    logging.

## Logs Cleaner Status

This card displays information about your logs cleaner, a job that deletes log
records after the number of days configured in the settings. If the job is not
scheduled, you will see the Schedule button, which will run the cleaner job
every hour. You can manually schedule the ok.LogsCleanerScheduler job; in that
case, the button will still be available on this card.

## User Config

Search for users and their configuration. For each user, you will see:

-   Permission Sets assigned.
-   Settings such as capturing limits and system debugs enabled.
-   Enabled Log Levels.

## One Logger Messages

In the message, you can see some common issues with the configuration.

Errors:

-   **Guest user record owner not found: 005...**: Indicates that the value of
    the `Guest User Record Owner` setting is not a user in this org.
-   **Guest user record owner is inactive: 005..., user@yourcompany.com**:
    Indicates that the value of the `Guest User Record Owner` setting is not an
    active user.
-   **Invalid guest user record owner ID: 005...**: Indicates that the value of
    the `Guest User Record Owner` setting is not a valid user ID.
-   **LoggerUtils class not found.**: Unmanaged utils were not found in this
    org. Ignore this message if you are aware of the impact. Otherwise, please
    check the [Setup](../getting-started/setup.md) Page.

Warnings:

-   **LogsCleanerScheduler not scheduled**: Indicates that the cleaner job was
    not found to be scheduled. Ignore this message if you scheduled the job
    manually or if you don't want to delete logs automatically.
