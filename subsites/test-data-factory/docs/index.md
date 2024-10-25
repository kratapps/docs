<a href="https://docs.kratapps.com/test-data-factory/">
  <img title="Test Data Factory" alt="TDF" width="60px" height="60px" align="right"
       src="https://docs.kratapps.com/test-data-factory/images/logo_tdf_642_642.png"  />
</a>

# Test Data Factory

[![App Exchange](https://img.shields.io/badge/AppExchange-Test%20Data%20Factory-blue?logo=salesforce)](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FNCbZUAX)
[![Security Review](https://img.shields.io/badge/Security%20Review-Passed-green)](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FNCbZUAX)
[![GitHub](https://img.shields.io/badge/GitHub-Public-black?logo=github)](https://github.com/kratapps/test-data-factory)
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://docs.kratapps.com/test-data-factory/license/)

Seamless creation of SObject records for unit tests.

**Features**:

-   **Built-in and Customizable Factory**: Provides an out-of-the-box SObject
    factory, with an extensible base to define custom record templates.
-   **Automatic Population of Required Fields**: Ensures mandatory fields are
    pre-populated.
-   **Support for Read-Only Fields**: Includes options to set values for
    read-only fields, including system fields, formula fields, and child
    records.
-   **Managed Package Compatibility**: Fully supports managed package records.

## Example

```apex
// Use custom AccountFactory implementation with default account template.
Account account = (Account) new AccountFactory()
        // Make 1 mocked account with ID without DML.
        .mocked()
        // Override LastModifiedDate system value.
        .setReadOnly(Schema.Account.LastModifiedDate, mockedDatetime)
        // Override Name via test-specific target account record.
        .build(new Account(Name = 'Target Name'))
        .toSObject();

Assert.isNotNull(account.Id, 'Account ID was not mocked.');

// Use out-of-the-box generic contact factory.
List<Contact> contacts = (List<Contact>) new sobj.BaseSObjectFactory()
        // Create 5 contacts.
        .created(5)
        // Set Account relationship via test-specific  target contact record.
        .build(new Contact(
                AccountId = anotherAcc,
                Description = 'Contact with mocked account example.'
        ))
        .toList();

Assert.areEqual(5, contacts.size(), 'Expected number of contacts not created.');
```

## Installation

You can either install our free
[Managed Package](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FNCbZUAX)
or deploy code unpackaged.

**Version ID:** 04tJ80000000RPFIA2

### Managed Package

[![Install Production](https://img.shields.io/badge/Managed%20Package-Install%20Production-cyan)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tJ80000000RPFIA2)  
[![Install Sandbox](https://img.shields.io/badge/Managed%20Package-Install%20Sandbox-cyan)](https://test.salesforce.com/packaging/installPackage.apexp?p0=04tJ80000000RPFIA2)

Install Managed Package using this URL:

```text
https://login.salesforce.com/packaging/installPackage.apexp?p0=04tJ80000000RPFIA2
```

or using sf cli:

```shell
sf package install -p 04tJ80000000RPFIA2 -o my-org
```

### Unpackaged

Use our sfdx plugin to install all components in the `src/sobj/core/` and
`src/sobj/example/` without cloning:

```shell
sf kratapps remote deploy start \
    --repo-owner kratapps \
    --repo-name test-data-factory \
    --source-dir src/sobj/core/ \
    --source-dir src/sobj/example/ \
    -o my-org
```

or clone the project and deploy using standard sf command:

```shell
git clone https://github.com/kratapps/test-data-factory.git
cd test-data-factory
sf project deploy start \
    --source-dir src/sobj/core/ \
    --source-dir src/sobj/example/ \
    -o my-org
```

## Usage

You can create records using the TDF immediately in small projects or sObjects
that are created only occasionally in unit tests. For other cases, we recommend
extending `SObjectFactory` and/or `SObjectFactoryScenario` for each sObject
type. `SObjectFactory/SObjectFactoryScenario` gives you more flexibility.

### Operations

Choose one of these operations: create, mock and insert.  
Prefer crete or mock over insert to improve performance by avoiding DML.

**Usage Recommendation**: Select one of the following operations for making test
data: `create`, `mock`, or `insert`.

-   **create**: Generates `sObject` records without DML.
-   **mock**: Mocks `sObject` records, avoiding DML and providing mock IDs.
-   **insert**: Executes DML to insert records.

> Favor `create` or `mock` over `insert` to improve performance by minimizing
> DML operations.

|                 | create | mock | insert |
| --------------- | ------ | ---- | ------ |
| Performance     | fast   | fast | slower |
| With IDs        | ✕      | ✓    | ✓      |
| Queryable       | ✕      | ✕    | ✓      |
| Custom Settings | ✓      | ✓    | ✓      |
| Custom Metadata | ✓      | ✓    | ✕      |

### Custom Template SObject Factory

You can either use generic sobj.BaseSObjectFactory implementation to make your
records or ideally implement a SObject factory template for your SObjects.

Main benefit on implementing templates is to provide a blueprint of your records
to all apex tests. These blueprints/templates are called `defaults`. Each apex
test can then override `defaults` using a `target` record, provided via `build`
method.

#### Template Example Implementation

Template SObject factory class extends `sobj.BaseSObjectFactory`. Then in your
apex test use your template factory instead of base SObject factory.

-   Usage of custom template factory: `new ContactFactory().created()`
-   Usage of base factory: `new sobj.BaseSObjectFactory().created()`

```apex
@IsTest
public without sharing class ContactFactory extends sobj.BaseSObjectFactory {
    // Create template defaults, common for all tests using ContactFactory.
    public SObject createDefaults(SObject target) {
        return new Contact(FirstName = 'Jon', LastName = 'Doe', Email = 'jdoe@acme.com');
    }

    // Prepare required parent records.
    public override SObject makeParent(SObjectField sObjectField, SObject target) {
        if (sObjectField == Contact.AccountId) {
            return new AccountFactory().inserted().build(new Account()).toSObject();
        }
        return null;
    }

    // We can include test method to verify a record is insertable without errors.
    @IsTest
    static void testInsert() {
        Contact contact = (Contact) new ContactFactory().inserted().build(new Contact()).toSObject();
        Assert.isNotNull(contact.Id, 'Record not inserted.');
    }
}
```

#### Template Methods

-   createDefaults  
    This method creates a new record with default values. Avoid any DML
    Operation here as it is called for every sObject created.

-   makeParent (optional)  
    This method is called only once for each relationship.  
    The parent should be created in this method, because the method is not
    called for records that already have the parent. This way you can reduce
    redundant DML statements.

-   getDmlOptions (optional)  
    Every factory comes with DML Options, default DML Options have
    `duplicateRuleHeader.allowSave` set to true.  
    You can override this behavior.

-   requireRecordType (optional)  
    If sObject has record types, it is enforced to set the RecordTypeId in unit
    tests.  
    You can disable this feature by overriding this method.

-   autoPopulateRequiredFields (optional)  
    Auto-population of required fields. This feature is not deterministic and
    can have impact on performance. Disabled by default.

### Features

#### Created vs Mocked vs Inserted

Create

```apex
Account account = (Account) new sobj.BaseSObjectFactory
        .created()
        .build(new Account())
        .toSObject();
Assert.isNull(account.Id, 'Record should not have ID.');
```

Mock

```apex
Account account = (Account) new sobj.BaseSObjectFactory
        .mocked()
        .build(new Account())
        .toSObject();
Assert.isNotNull(account.Id, 'Record should have mock ID.');
```

Insert

```apex
Account account = (Account) new sobj.BaseSObjectFactory
        .inserted()
        .build(new Account())
        .toSObject();
Assert.isNotNull(account.Id, 'Record should have real ID.');
```

#### Build Single vs Multiple Records

Create one record and cast to SObject.

```apex
Account account = (Account) new sobj.BaseSObjectFactory
        .created()
        .build(new Account())
        .toSObject();
```

Create one record and cast to a list.

```apex
List<Account> accounts = (List<Account>) new sobj.BaseSObjectFactory
        .created()
        .build(new Account())
        .toList();
Assert.areEqual(1, accounts.size(), 'Different number of records created.');
```

Create 200 records and cast to a list.

```apex
List<Account> accounts = (List<Account>) new sobj.BaseSObjectFactory
        .created(200)
        .build(new Account())
        .toList();
Assert.areEqual(200, accounts.size(), 'Different number of records created.');
```

#### Set Required Fields

```apex
Account account = (Account) new sobj.BaseSObjectFactory
        .created()
        .setRequiredFields()
        .build(new Account())
        .toList();
Assert.isNotNull(account.RequiredField__c, 'Required field not populated.');
```

#### Set Read Only Fields

```apex
Datetime mockedDatetime = Datetime.now();
Account account = (Account) new sobj.BaseSObjectFactory
        .created()
        .setReadOnly(Schema.Account.LastModifiedDate, mockedDatetime)
        .build(new Account())
        .toList();
Assert.areEqual(mockedDatetime, account.LastModifiedDate, 'Read only field not populated.');
```

#### Set Children

Simple use case for injecting related list records. Useful for mocking nested
queries.

```apex
List<Account> children = (List<Account>) new sobj.BaseSObjectFactory()
        .created(5)
        .build(new Account(Name = 'child'))
        .toList();
Account parent = (Account) new sobj.BaseSObjectFactory()
        .created()
        .setChildren(Account.ParentId, children)
        .build(new Account(Name = 'parent'))
        .toSObject();
Assert.areEqual(5, parent.ChildAccounts.size(), 'Expected 5 child accounts populated.');
```

### Utils

Get mocked/inserted record by ID.

```apex
Id recordId = sobj.MockId.getMockId(Account.SObjectType);
```

Generate and set mock ID to a list of records.

```apex
sobj.MockId.setMockIds(accountList);
```

## Best Practices

Common best practices while using this TDF.

### Insertable records

You should be able to insert every record without providing any values in the
call. The following snippet should work in every unit test for all SObjects:

```apex
Contact contact = (Contact) new ContactFactory().inserted().build(new Contact()).toSObject();
Assert.isNotNull(contact.Id, 'Record not inserted.');
```

### Disable auto populate required fields

For SObjects with numerous fields, disable auto-population of required fields to
enhance performance.
