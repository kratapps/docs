# Best Practices

-   Avoid logging from within a for loop. Bulkify your logs wherever possible to
    save CPU time.
-   Avoid logging governor limits when it is unnecessary to save CPU time.
-   Avoid creating triggers/flows on the `ok__Log__c` object. Instead, create a
    custom plugin.
