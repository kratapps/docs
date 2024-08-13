# AuraEnabledMethodShouldPublishLogsInFinallyBlock

**Since:** 1.0.4

**Priority:** Medium (3)

Ensure AuraEnabled methods have `ok.Logger.publish()` in finally block.

This best practice is documented at
[docs.kratapps.com](https://docs.kratapps.com/one-logger/docs/api/top-level-apex/).

**This rule is defined by the following Java class:**
[com.kratapps.pmd.rules.AuraEnabledMethodShouldPublishLogsInFinallyBlock](https://github.com/kratapps/logger-pmd-rules/blob/main/src/main/java/com/kratapps/pmd/rules/AuraEnabledMethodShouldPublishLogsInFinallyBlock.java)

**Example(s):**

```apex
@AuraEnabled
public static List<Account> getAccounts() {
    // Error: logs not published.
    return new AccountSelector().query();
}

@AuraEnabled
public static List<Account> getAccountsSafely() {
    try {
        return new AccountSelector().query();
    } catch (Exception e) {
        logger.error().addException(e).log('Something went wrong.');
    } finally {
        // Good: all logs published.
        ok.Logger.publish();
    }
}
```

**Use this rule by referencing it:**

```xml
<rule ref="category/apex/logger.xml/AuraEnabledMethodShouldPublishLogsInFinallyBlock" />
```
