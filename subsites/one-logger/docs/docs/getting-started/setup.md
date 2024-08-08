# One Logger Installation and Setup

1. **Install One Logger**  
   Install our
   [Managed Package](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000GV75lUAD)
   from AppExchange.

2. **Install Unmanaged Utils**  
   Create or install unmanaged/unpackaged utility classes for One Logger. You
   can either create this class directly or install our unmanaged package. These
   classes allow One Logger to:

    - Debug to the system console (Apex Log).
    - Retrieve the stack trace string.
    - Obtain limits for your default namespace.

    To install the unmanaged package, use the following link:

    ```
    https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5e000000vn4t
    ```

    Alternatively, deploy all code in the `src/` directory from the GitHub
    [one-logger-utils](https://github.com/kratapps/one-logger-utils) repository.

3. **Assign Licenses and Permission Sets**  
   Assign licenses to users who need access to Logger Apps and Logger API.

    The following permission sets can be granted to users:

    - Logger Admin - grants edit access to all APIs and apps, including the
      `Logger Admin Console` page.
    - Logger Read Only - grants read access to logs and the `One Logger` app.
    - Logger Create Logs - grants permission to publish logs.

    Use [Permission Manager app](../ui/permission-manager.md) to review user
    permissions.

    Use [Permission Manager API](../reference/PermissionManager.md) to
    programmatically assign permission sets and licenses.

4. **Activate Log Record Page**  
   Activate the packaged record pages as the org default on the following
   objects:

    - `ok__Log__c`
    - `ok__Transaction_Log__c`
    - `ok__Tag__c`
    - `ok__Log_Tag__c`
    - `ok__Log_Search__c`

    When activated, you will enable all the features available through the
    record pages across all apps, not only in the `One Logger` app.

5. **Check Logger Admin Console page**  
   See [Admin Console](../ui/admin-console.md) documentation for details.

6. **Schedule Logs Cleaner (optional)**  
   This step is optional and allows you to automatically delete logs after a
   configured time. See [Logs Cleaner](../ui/logs-cleaner.md) documentation for
   details.
