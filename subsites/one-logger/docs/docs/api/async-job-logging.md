# Async Job Logging

Most of the asynchronous jobs are [top level Apex](top-level-apex.md) and should
implement the try-catch-finally-publish pattern.

## Logging from a Batch Apex

Call `ok.Logger.setBatchableContext(context)` at the beginning of the `start`,
`execute`, and `finish` methods to provide the batchable context to the logger.

[See example.](logging-examples.md#logging-from-a-batch-apex)

**Fields**

-   `ok__Batch_Job_Id__c` - Batch job ID.
-   `ok__Batch_Child_Job_Id__c` - ID of the current batch job chunk that is
    being processed.

## Logging from a Schedulable Apex

Call `ok.Logger.setSchedulableContext(context)` at the beginning of the
`execute` method to provide the schedulable context to the logger.

[See example.](logging-examples.md#logging-from-a-schedulable-apex)

**Fields**

-   `ok___Schedulable_Cron_Trigger_Job_Id__c` - ID of the CronTrigger scheduled
    job.
