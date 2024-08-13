# LoggerInitClassMatchesClassName

**Since:** 1.0.4

**Priority:** Medium (3)

Ensure that the class passed as an argument to `ok.Logger.getLogger()` matches
the class in which the logger is being called.

Logger initialization is documented at
[docs.kratapps.com](https://docs.kratapps.com/one-logger/docs/api/log-lifecycle/).

**This rule is defined by the following Java class:**
[com.kratapps.pmd.rules.LoggerInitClassMatchesClassName](https://github.com/kratapps/logger-pmd-rules/blob/main/src/main/java/com/kratapps/pmd/rules/LoggerInitClassMatchesClassName.java)

**Example(s):**

```apex
public class AccountService {
    // Error: ContactFactory class is not AccountService class.
    private static ok.Logger logger = ok.Logger.getLogger(ContactFactory.class);
}

public class AccountService {
    // Good: getLogger input parameter matches class name.
    private static ok.Logger logger = ok.Logger.getLogger(AccountService.class);
}
```

**Use this rule by referencing it:**

```xml
<rule ref="category/apex/logger.xml/LoggerInitClassMatchesClassName" />
```
