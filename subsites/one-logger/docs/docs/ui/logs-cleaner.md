# Logs Cleaner

Logs Cleaner is a custom, scheduled batch job that deletes old records from the
`ok__Log__c` table. To configure the Logs Cleaner, navigate to the
[Logger Admin Console](admin-console.md). Click "Schedule" in the Logs Cleaner
Status card to schedule the job. You can configure the scope size and lifespans
for each Log Level by clicking on the "Settings" field.

Optionally, you can schedule the job manually by scheduling the
`ok.LogsCleanerScheduler` class to run every hour.
