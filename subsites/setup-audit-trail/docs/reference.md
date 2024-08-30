---
hide:
    - navigation
---

# Salesforce Setup Audit Trail Reference

List of available actions and their examples from the Setup Audit Trail.

While this list will never be exhaustive, it includes the most common actions.

Every action is in format:  
`- Action (Section_Example) - Display_Example`

Actions available in [JSON format](reference.json).

<!-- reference -->

## User Management

### User Activation and Auth

-   activateduser (Manage Users) - Activated user Anakin Skywalker (UserID:
    [0052A00000EsOI0])
-   changedpassword (Manage Users) - Set new password for user Darth Vader
-   changedsupportuseroffon (Manage Users) - For user Anakin Skywalker, changed
    Service Cloud user from off to on
-   changedsupportuseronoff (Manage Users) - For user Anakin Skywalker, changed
    Service Cloud user from on to off
-   createdcustomersuccessuser (Customer Portal) - Created new Customer User
    Anakin Skywalker
-   createdpartneruser (Partner Relationship Management) - Created new Partner
    User Anakin Skywalker
-   createduser (Manage Users) - Created new user Anakin Skywalker
-   CSPUserDisabled (Customer Portal) - User anakin@skywalker.com disabled as a
    Customer Portal user
-   deactivateduser (Manage Users) - Deactivated user Anakin Skywalker (UserID:
    [0052A00000EsOI0])
-   deleteTwoFactorWebAuthN - Security Key credential 0moJw00000004bL with
    nickname "Padme" removed for anakin@skywalker.com
-   frozeuser (Manage Users) - Froze user account for Darth Vader
-   insertTwoFactorInfo2 (Manage Users) - Time-Based Token added for
    anakin@skywalker.com
-   insertTwoFactorWebAuthN - Security Key credential 0moJw00000003sL with
    nickname "Security Key #1" added for anakin@skywalker.com
-   lightninglogincancel (Manage Users) - Canceled Lightning Login for
    anakin@skywalker.com
-   lightningloginenroll (Manage Users) - Enrolled anakin@skywalker.com in
    Lightning Login
-   overridegrantaccessenabledoff (Manage Users) - Changed Administrators Can
    Log in as Any User from off to on
-   PRMUserDisabled (Partner Relationship Management) - User
    anakin@skywalker.com disabled as a Partner user
-   sessiongen (Manage Users) - Generated session id for Anakin Skywalker
-   suloginaccessused (Manage Users) - Logged in using Login-As access for
    Anakin Skywalker
-   suLogout (Manage Users) - Logged out using Login-As access for Anakin
    Skywalker
-   suNetworkAdminLogin (Manage Users) - Logged in using Login-As access for
    Anakin Skywalker
-   suNetworkAdminLogout (Manage Users) - Logged out using Login-As access for
    Anakin Skywalker
-   suOrgAdminLogin (Manage Users) - Logged in using Login-As access for Anakin
    Skywalker
-   suOrgAdminLogout (Manage Users) - Logged out using Login-As access for
    Anakin Skywalker
-   suPRMAdminLogin (Manage Users) - Logged in using Login-As access for Anakin
    Skywalker
-   suPRMAdminLogout (Manage Users) - Logged out using Login-As access for
    Anakin Skywalker
-   twoFactorWebAuthN_editNickname - Changed Security Key nickname from
    "Security Key #1" to "Security Key" for anakin@skywalker.com
-   unfrozeuser (Manage Users) - Unfroze user account for Darth Vader
-   unlockeduser (Manage Users) - Unlocked user anakin@skywalker.com (UserID:
    [0052A00000EsOI0])

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activateduser','changedpassword','changedsupportuseroffon','changedsupportuseronoff','createdcustomersuccessuser','createdpartneruser','createduser','CSPUserDisabled','deactivateduser','deleteTwoFactorWebAuthN','frozeuser','insertTwoFactorInfo2','insertTwoFactorWebAuthN','lightninglogincancel','lightningloginenroll','overridegrantaccessenabledoff','PRMUserDisabled','sessiongen','suloginaccessused','suLogout','suNetworkAdminLogin','suNetworkAdminLogout','suOrgAdminLogin','suOrgAdminLogout','suPRMAdminLogin','suPRMAdminLogout','twoFactorWebAuthN_editNickname','unfrozeuser','unlockeduser')
ORDER BY CreatedDate DESC LIMIT 1000
```

### User Detail

-   changedApproverRequestEmails (Manage Users) - The email approval preference
    for user Anakin Skywalker (UserID: [0052A00000EsOI0]) changed from 'Only if
    I am an approver' to 'If I am an approver or delegated approver'
-   changedcommunitynickname (Manage Users) - Changed nickname for user Anakin
    Skywalker (UserID: [0052A00000EsOI0]) from Ani to Emperor
-   changedDelegateApprover (Manage Users) - The delegate approver for user
    Anakin Skywalker (UserID: [0052A00000EsOI0]) changed from Obi-Wan Kenobi to
    Sheev Palpatine
-   changedemail (Manage Users) - Changed email for user Anakin Skywalker
    (UserID: [0052A00000EsOI0]) from anakin@skywalker.com to darth@vader.com
-   changedfederationid (Manage Users) - Changed federation id for user Anakin
    Skywalker (UserID: [005Ea0000038SxN]) from null to fed1
-   changedinteractionuseroffon (Manage Users) - For user Anakin Skywalker,
    changed Flow user from off to on
-   changedinteractionuseronoff (Manage Users) - For user Anakin Skywalker,
    changed Flow user from on to off
-   changedjigsawprospectinguseronoff (Manage Users) - For user Anakin
    Skywalker, changed Data.com user from on to off
-   changedknowledgeuseroffon (Manage Users) - For user Anakin Skywalker,
    changed Knowledge user from off to on
-   changedliveagentuseroffon - For user Anakin Skywalker, changed Chat user
    from off to on
-   changedManager (Manage Users) - The manager for user Anakin Skywalker
    (UserID: [0052A00000EsOI0]) changed from Obi-Wan Kenobi to Sheev Palpatine
-   changedmarketinguseroffon (Manage Users) - For user Anakin Skywalker,
    changed marketing user from off to on
-   changedmarketinguseronoff (Manage Users) - For user Anakin Skywalker,
    changed marketing user from on to off
-   changedofflineuseroffon (Manage Users) - For user Anakin Skywalker, changed
    offline user from off to on
-   changedofflineuseronoff (Manage Users) - For user Anakin Skywalker, changed
    offline user from on to off
-   changedroleforuser (Manage Users) - Changed role for user Anakin Skywalker
    from Jedi to Sith
-   changedroleforuserfromnone (Manage Users) - Changed role for user Anakin
    Skywalker from <None Specified> to Sith
-   changedroleforusertonone (Manage Users) - Changed role for user Darth Vader
    from Sith Lord to <None Specified>
-   changedsfcontentuseroffon (Manage Users) - For user Anakin Skywalker,
    changed Salesforce CRM Content user from off to on
-   changedsfcontentuseronoff (Manage Users) - For user Anakin Skywalker,
    changed Salesforce CRM Content user from on to off
-   changedUserAdminVerifiedStatusUnverified (Manage Users) - For user
    anakin@skywalker.com, the Admin Trusted Mobile Number status changed to
    unverified
-   changedUserAdminVerifiedStatusVerified (Manage Users) - For user
    anakin@skywalker.com, the Admin Trusted Mobile Number status changed to
    verified
-   changedUserEmailVerifiedStatusUnverified (Manage Users) - For user
    anakin@skywalker.com, the User Verified Email status changed to unverified
-   changedUserEmailVerifiedStatusVerified (Manage Users) - For user
    anakin@skywalker.com, the User Verified Email status changed to verified
-   changedusername (Manage Users) - Changed username for 0052A00000EsOI0 from
    anakin@skywalker.com to darth@vader.com
-   changedUserPhoneNumber (Manage Users) - For user anakin@skywalker.com, the
    mobile phone number was changed from +65 93100001 to +65 93100002
-   changedUserPhoneVerifiedStatusUnverified (Manage Users) - For user
    anakin@skywalker.com, the User Verified Mobile Number status changed to
    unverified
-   changedUserPhoneVerifiedStatusVerified (Manage Users) - For user
    anakin@skywalker.com, the User Verified Mobile Number status changed to
    verified
-   deleteAuthenticatorPairing (Manage Users) - Salesforce Authenticator pairing
    "Salesforce Authenticator Pairing" removed for anakin@skywalker.com
-   deleteTwoFactorInfo2 (Manage Users) - Time-Based Token removed for
    anakin@skywalker.com
-   disableSIQUserNonEAC (Inbox mobile and legacy desktop apps) - Disabled
    Einstein Activity Capture activity sharing for user: Anakin Skywalker
-   flowMetricsManageFlowOnlyOff - Disabled “Users require the Manage Flow
    permission to view all Automation Home charts”
-   insertAuthenticatorPairing (Manage Users) - Salesforce Authenticator pairing
    "Salesforce Authenticator Pairing" added for anakin@skywalker.com
-   insertTwoFactorTempCode (Manage Users) - Temporary verification code
    "Salesforce generated code" added for anakin@skywalker.com
-   registeredUserPhoneNumber (Manage Users) - For user anakin@skywalker.com,
    the phone number +91 9041812345 was registered
-   resetpassword (Manage Users) - Reset password for user Darth Vader
-   siqUserAcceptedInboxTOS (Inbox mobile and legacy desktop apps) - User Anakin
    Skywalker accepted Inbox Terms of Service
-   unregisterdUserPhoneNumber (Manage Users) - For user anakin@skywalker.com,
    the phone number +91 (90418) 12345 was disconnected
-   userAllowForecastingOff (Customize Forecasts) - Changed allow forecasting
    from on to off for user Anakin Skywalker
-   userAllowForecastingOn (Customize Forecasts) - Changed allow forecasting
    from off to on for user Anakin Skywalker
-   useremailchangesent (Manage Users) - Email change attempted for user Anakin
    Skywalker (UserID: [0052A00000EsOI0]) from anakin@skywalker.com to
    darth@vader.com
-   zoomUserDeleted - User Anakin Skywalker disconnected Zoom video account
-   zoomUserTosAccepted - User Anakin Skywalker accepted Zoom Terms of Service
-   zoomUserTosReset - Zoom Terms of Service has been reset for user: Anakin
    Skywalker

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedApproverRequestEmails','changedcommunitynickname','changedDelegateApprover','changedemail','changedfederationid','changedinteractionuseroffon','changedinteractionuseronoff','changedjigsawprospectinguseronoff','changedknowledgeuseroffon','changedliveagentuseroffon','changedManager','changedmarketinguseroffon','changedmarketinguseronoff','changedofflineuseroffon','changedofflineuseronoff','changedroleforuser','changedroleforuserfromnone','changedroleforusertonone','changedsfcontentuseroffon','changedsfcontentuseronoff','changedUserAdminVerifiedStatusUnverified','changedUserAdminVerifiedStatusVerified','changedUserEmailVerifiedStatusUnverified','changedUserEmailVerifiedStatusVerified','changedusername','changedUserPhoneNumber','changedUserPhoneVerifiedStatusUnverified','changedUserPhoneVerifiedStatusVerified','deleteAuthenticatorPairing','deleteTwoFactorInfo2','disableSIQUserNonEAC','flowMetricsManageFlowOnlyOff','insertAuthenticatorPairing','insertTwoFactorTempCode','registeredUserPhoneNumber','resetpassword','siqUserAcceptedInboxTOS','unregisterdUserPhoneNumber','userAllowForecastingOff','userAllowForecastingOn','useremailchangesent','zoomUserDeleted','zoomUserTosAccepted','zoomUserTosReset')
ORDER BY CreatedDate DESC LIMIT 1000
```

### User Login Access

-   loginasgrantedtopartnerbt - anakin@skywalker.com has granted user login
    access through 11/1/2030 to package publisher salesforce.com
    (00D000000000031)
-   loginasgrantedtosfdc - anakin@skywalker.com has granted salesforce.com login
    access through 11/1/2030
-   loginasmodifiedtopartnerbt - anakin@skywalker.com has changed user login
    access through 11/1/2030 to package publisher salesforce.com
    (00D000000000031)
-   loginasmodifiedtosfdc - anakin@skywalker.com has changed salesforce.com
    login access through 11/1/2035
-   loginasrevokedtopartnerbt - anakin@skywalker.com has revoked user login
    access to package publisher Salesforce CPQ & Billing (00D300000008V7f)
-   loginasrevokedtosfdc - anakin@skywalker.com has revoked salesforce.com login
    access
-   supportaccessadmins - darth@vader.com has set support access for only admins
    to package publisher GalacticEmpire Support (00D5e000003BCef)

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('loginasgrantedtopartnerbt','loginasgrantedtosfdc','loginasmodifiedtopartnerbt','loginasmodifiedtosfdc','loginasrevokedtopartnerbt','loginasrevokedtosfdc','supportaccessadmins')
ORDER BY CreatedDate DESC LIMIT 1000
```

### User Management Settings

-   enhancedProfileMgmtOffOn (User Management Settings) - Changed Enhanced
    Profile List Views from off to on
-   enhancedProfileMgmtOnOff (User Management Settings) - Changed Enhanced
    Profile List Views from on to off
-   newProfileUIOffOn (User Management Settings) - Changed Enable Enhanced
    Profile User Interface from off to on
-   newProfileUIOnOff (User Management Settings) - Changed Enable Enhanced
    Profile User Interface from on to off
-   obfuscateUserOffOn - Organization setup action: obfuscateUserOffOn has
    changed.
-   obfuscateUserOnOff - Organization setup action: obfuscateUserOnOff has
    changed.
-   permsetsInFieldCreationOffOn (User Management Settings) - Changed
    Field-Level Security for Permission Sets during Field Creation from off to
    on
-   permsetsInFieldCreationOnOff (User Management Settings) - Changed
    Field-Level Security for Permission Sets during Field Creation from on to
    off
-   profileFilteringEnabledOffOn - Organization setup action:
    profileFilteringEnabledOffOn has changed.
-   profileFilteringEnabledOnOff - Organization setup action:
    profileFilteringEnabledOnOff has changed.
-   pSAExpirationUIEnabledOffOn - Organization setup action:
    pSAExpirationUIEnabledOffOn has changed.
-   pSAExpirationUIEnabledOnOff - Organization setup action:
    pSAExpirationUIEnabledOnOff has changed.
-   restrictedProfileCloningOffOn - Organization setup action:
    restrictedProfileCloningOffOn has changed.
-   restrictedProfileCloningOnOff - Organization setup action:
    restrictedProfileCloningOnOff has changed.
-   userAccessPoliciesEnabledOffOn (User Management Settings) - Changed User
    Access Policies from off to on
-   userAccessPoliciesEnabledOnOff (User Management Settings) - Changed User
    Access Policies from on to off
-   userSelfDeactivateOffOn (User Management Settings) - Changed Allow External
    Users to Self Deactivate from off to on
-   userSelfDeactivateOnOff (User Management Settings) - Changed Allow External
    Users to Self Deactivate from on to off

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('enhancedProfileMgmtOffOn','enhancedProfileMgmtOnOff','newProfileUIOffOn','newProfileUIOnOff','obfuscateUserOffOn','obfuscateUserOnOff','permsetsInFieldCreationOffOn','permsetsInFieldCreationOnOff','profileFilteringEnabledOffOn','profileFilteringEnabledOnOff','pSAExpirationUIEnabledOffOn','pSAExpirationUIEnabledOnOff','restrictedProfileCloningOffOn','restrictedProfileCloningOnOff','userAccessPoliciesEnabledOffOn','userAccessPoliciesEnabledOnOff','userSelfDeactivateOffOn','userSelfDeactivateOnOff')
ORDER BY CreatedDate DESC LIMIT 1000
```

### User Permissions

-   addeduserpackagelicense (Custom App Licenses) - Added 1 User Package
    Licenses for Package License with ID: 050600000008kK9
-   changedDatacloudImportLimit - For user Anakin Skywalker, changed Data.com
    Monthly Addition Limit from 100 to 300
-   changedprofileforuser (Manage Users) - Changed profile for user Anakin
    Skywalker from Jedi to Sith
-   changedprofileforusercusttostd (Manage Users) - Changed profile for user
    Darth Vader from Sith to Standard User
-   changedprofileforuserstdtocust (Manage Users) - Changed profile for user
    Anakin Skywalker from Standard User to Jedi
-   changedprofileforuserstdtostd (Manage Users) - Changed profile for user
    Anakin Skywalker from Jedi to Sith
-   granteduserpackagelicense (Custom App Licenses) - Granted 1 User Package
    Licenses for User with ID: 0052A00000EsOI0
-   PermSetAssign (Manage Users) - Permission set Sith Lord: assigned to user
    Darth Vader (UserID: [0052A00000EsOI0])
-   PermSetAssign_HasExpiration - Permission set SithLord with expiration:
    assigned to user Darth Vader (UserID: [0052A00000EsOI0]), expiring on Sat
    May 20 06:59:59 GMT 2023
-   PermSetAssignmentExpirationChange - Permission set SithLord assigned to user
    Darth Vader (UserID: [0052A00000EsOI0]): expiration was changed from Sat Apr
    01 06:59:59 GMT 2023 to Sat May 20 06:59:59 GMT 2023
-   PermSetGroupAssign (Manage Users) - Permission set group Sith: assigned to
    user Darth Vader (UserID: [0052A00000EsOI0])
-   PermSetGroupUnassign (Manage Users) - Permission set group Jedi: unassigned
    from user Anakin Skywalker (UserID: [0052A00000EsOI0])
-   PermSetLicenseAssign (Manage Users) - Permission set license Galactic
    Senate: assigned to user Anakin Skywalker (UserID: [0052A00000EsOI0])
-   PermSetLicenseUnassign (Manage Users) - Permission set license Galactic
    Senate removed from user Anakin Skywalker (UserID: [0052A00000EsOI0])
-   PermSetUnassign (Manage Users) - Permission set Padawan: unassigned from
    user Anakin Skywalker (UserID: [0052A00000EsOI0])
-   PermSetUnassign_HasExpiration - Permission set SithLord with expiration:
    unassigned from user Darth Vader (UserID: [0052A00000EsOI0])
-   removeduserpackagelicense (Custom App Licenses) - Removed 1 User Package
    License for Package License with ID: 050600000008kK9
-   revokeduserpackagelicense (Custom App Licenses) - Revoked User Package
    License assignment

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('addeduserpackagelicense','changedDatacloudImportLimit','changedprofileforuser','changedprofileforusercusttostd','changedprofileforuserstdtocust','changedprofileforuserstdtostd','granteduserpackagelicense','PermSetAssign','PermSetAssign_HasExpiration','PermSetAssignmentExpirationChange','PermSetGroupAssign','PermSetGroupUnassign','PermSetLicenseAssign','PermSetLicenseUnassign','PermSetUnassign','PermSetUnassign_HasExpiration','removeduserpackagelicense','revokeduserpackagelicense')
ORDER BY CreatedDate DESC LIMIT 1000
```

## Permission Management

### Custom Permissions

-   CustomPermissionCreate (Custom Permissions) - Created custom permission
    DeathStarAccess
-   CustomPermissionDelete (Custom Permissions) - Deleted custom permission
    DeathStarAccess
-   CustomPermissionDescriptionChange (Custom Permissions) - Changed custom
    permission DeathStarAccess: description was changed
-   CustomPermissionDeveloperNameChange (Custom Permissions) - Changed custom
    permission DeathStarAccess: developer name was changed from SenateAccess to
    DeathStarAccess
-   CustomPermissionLabelChange (Custom Permissions) - Changed custom permission
    DeathStarAccess: master label was changed from Senate Access to Death Star
    Access

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('CustomPermissionCreate','CustomPermissionDelete','CustomPermissionDescriptionChange','CustomPermissionDeveloperNameChange','CustomPermissionLabelChange')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Permission Set Groups

-   PermissionSetGroupCalculationComplete (Permission Set Group) - Permission
    set group calculation completed : Jedi
-   PermissionSetGroupCalculationError
-   PermissionSetGroupCalculationStarted (Permission Set Group) - Permission set
    group calculation started : Jedi
-   PermissionSetGroupComponentAdd (Permission Set Group) - Changed permission
    set group Sith_Lord: group member Death Star was added
-   PermissionSetGroupComponentRemoved (Permission Set Group) - Changed
    permission set group Galactic Empire: group member Death Start was removed
-   PermissionSetGroupCreate (Permission Set Group) - Created permission set
    group GalacticEmpire
-   PermissionSetGroupDelete (Permission Set Group) - Deleted permission set
    group GalacticEmpire
-   PermSetGroupStandardChange - Permission set group CodeBuilderGroup: was
    automatically updated to reflect changes to the standard permission set
    CodeBuilderUserPsl

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('PermissionSetGroupCalculationComplete','PermissionSetGroupCalculationError','PermissionSetGroupCalculationStarted','PermissionSetGroupComponentAdd','PermissionSetGroupComponentRemoved','PermissionSetGroupCreate','PermissionSetGroupDelete','PermSetGroupStandardChange')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Permission Sets

-   PermSetC2CLicenselessMigration - Permission set Customer 360 Data Platform
    Integration was converted to integration permission set sfdc_a360
-   PermSetCloneNoLicense (Manage Users) - Created permission set Death Star 2:
    using permission set Death Star with no license
-   PermSetCreate (Manage Users) - Created permission set Sith Lord: with User
    License Salesforce
-   PermSetCreateNoLicense (Manage Users) - Created permission set Sith Lord:
    with no license
-   PermSetDataspaceScopeAdded (Manage Users) - Changed permission set Data
    Cloud User: Data Space default was added
-   PermSetDelete (Manage Users) - Deleted permission set Sith Lord
-   PermSetDescriptionChange (Manage Users) - Changed permission set Sith Lord:
    description was changed
-   PermSetDeveloperNameChange (Manage Users) - Changed permission set Sith
    Lord: API name was changed from Jedi to Sith_Lord
-   PermSetDisableUserPerm (Manage Users) - Changed permission set Death Star:
    Convert Leads permission was changed from enabled to disabled
-   PermSetEnableUserPerm (Manage Users) - Changed permission set Sith Lord:
    Edit Tasks permission was changed from disabled to enabled
-   PermSetEntityPermChanged (Manage Users) - Changed permission set Sith Lord:
    Death Star object permissions were changed from No Access to Read, Create,
    Edit, Delete, View All, Modify All
-   PermSetFlsChanged (Manage Users) - Changed permission set Sith Lord:
    field-level security for Opportunity: Amount was changed from No Access to
    Edit
-   PermSetHasActivationRequiredChange (Manage Users) - Changed Permission Set
    Sith Lord: Session Activation Required has changed from enabled to disabled
-   PermSetLabelChange (Manage Users) - Changed permission set Stormtrooper:
    Master Label was changed from Clone trooper to Stormtrooper
-   PermSetRecordTypeAdded (Manage Users) - Changed permission set Stormtrooper:
    Blaster Rifle record type was added to Weapon object
-   PermSetRecordTypeRemoved (Manage Users) - Changed permission set
    Stormtrooper: Lightsaber record type was removed from Weapon object
-   PermSetTabSettingsChangedNew (Manage Users) - Changed permission set Sith
    Lord: Battleships tab was changed from None to Visible
-   SetupEntityAccessAudit_PermissionSet_ApexClass_Disabled (Manage Users) -
    Changed permission set Sith Lord: DeathStarController Apex class access was
    disabled
-   SetupEntityAccessAudit_PermissionSet_ApexClass_Enabled (Manage Users) -
    Changed permission set Sith Lord: DeathStarController Apex class access was
    enabled
-   SetupEntityAccessAudit_PermissionSet_ApexPage_Disabled
-   SetupEntityAccessAudit_PermissionSet_ApexPage_Enabled
-   SetupEntityAccessAudit_PermissionSet_ConnectedApplication_Disabled (Manage
    Users) - Changed permission set DeathStar Service User Permissions:
    DeathStar connected app is disabled
-   SetupEntityAccessAudit_PermissionSet_ConnectedApplication_Enabled (Manage
    Users) - Changed permission set Sith Lord: DeathStar connected app is
    enabled
-   SetupEntityAccessAudit_PermissionSet_CustomEntityDefinition_Disabled
-   SetupEntityAccessAudit_PermissionSet_CustomEntityDefinition_Enabled (Manage
    Users) - Changed permission set Sith Lord: Lightsaber Category Custom
    Metadata Type was enabled
-   SetupEntityAccessAudit_PermissionSet_CustomPermission_Disabled (Manage
    Users) - Changed permission set Sith Lord: Death Star Access Custom
    Permission was disabled
-   SetupEntityAccessAudit_PermissionSet_CustomPermission_Enabled (Manage
    Users) - Changed permission set Sith Lord: Death_Star_Access Custom
    Permission was enabled
-   SetupEntityAccessAudit_PermissionSet_TabSet_Disabled
-   SetupEntityAccessAudit_PermissionSet_TabSet_Enabled (Manage Users) - Changed
    permission set DeathStarControls: Death Star Panel app is enabled

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('PermSetC2CLicenselessMigration','PermSetCloneNoLicense','PermSetCreate','PermSetCreateNoLicense','PermSetDataspaceScopeAdded','PermSetDelete','PermSetDescriptionChange','PermSetDeveloperNameChange','PermSetDisableUserPerm','PermSetEnableUserPerm','PermSetEntityPermChanged','PermSetFlsChanged','PermSetHasActivationRequiredChange','PermSetLabelChange','PermSetRecordTypeAdded','PermSetRecordTypeRemoved','PermSetTabSettingsChangedNew','SetupEntityAccessAudit_PermissionSet_ApexClass_Disabled','SetupEntityAccessAudit_PermissionSet_ApexClass_Enabled','SetupEntityAccessAudit_PermissionSet_ApexPage_Disabled','SetupEntityAccessAudit_PermissionSet_ApexPage_Enabled','SetupEntityAccessAudit_PermissionSet_ConnectedApplication_Disabled','SetupEntityAccessAudit_PermissionSet_ConnectedApplication_Enabled','SetupEntityAccessAudit_PermissionSet_CustomEntityDefinition_Disabled','SetupEntityAccessAudit_PermissionSet_CustomEntityDefinition_Enabled','SetupEntityAccessAudit_PermissionSet_CustomPermission_Disabled','SetupEntityAccessAudit_PermissionSet_CustomPermission_Enabled','SetupEntityAccessAudit_PermissionSet_TabSet_Disabled','SetupEntityAccessAudit_PermissionSet_TabSet_Enabled')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Profiles

-   deletedprofile (Manage Users) - Deleted profile Clone Trooper
-   deleteLoginFlow (Login Flows) - Deleted UI login flow for Stormtrooper
-   insertLightningLoginFlow (Login Flows) - Enabled UI Lightning Login flow for
    Stormtrooper profile with flow Stormtrooper login flow
-   loginIpRange (Manage Users) - Added Login Ip Range to Sith Lord from
    52.38.129.456 to 52.38.129.123
-   minimumPasswordLifetimeDisableForProfile (Password Policies) - Changed
    profile Sith Lord: Disabled requiring minimum password lifetime
-   minimumPasswordLifetimeEnableForProfile (Password Policies) - Changed
    profile Sith Lord: Enabled requiring minimum password lifetime
-   passwordexpiryForProfile (Password Policies) - Changed profile Sith Lord:
    Changed password expiry policy from 90 days to Never expires
-   passwordhistoryForProfile (Password Policies) - Changed profile Sith Lord:
    Changed password history policy from 10 passwords remembered to 1 password
    remembered
-   passwordmaxinvalidForProfile (Password Policies) - Changed profile Sith
    Lord: Changed password maximum invalid attempts policy from 5 to 10
-   PermissionSelfHealing - Changed Profile Sith: Enabled Lead<update>
    permission because Convert Leads has already been enabled.
-   profileClonedStandard (Manage Users) - Created profile Minimum Access -
    Salesforce Clone: Cloned from profile Minimum Access - Salesforce
-   profileCustAppCustom (Manage Users) - Changed profile Sith: Death Star
    application is now Not Visible
-   profileCustAppStandard (Manage Users) - Changed profile Sith: Digital
    Experiences application is now Visible
-   profileDefaultCustAppCustom (Manage Users) - Changed profile Sith:
    DeathStart2 is now the default application
-   profileDefaultRecordTypeChangedStandard (Manage Users) - Changed profile
    Stormtrooper: default record type for Weapon changed from --Master-- to
    Blaster Rifle
-   profileDescriptionChanged (Manage Users) - Changed profile Sith: Description
    was changed
-   profileEntityPermRemoved - Removed the Create on Account object permission
    from Profile 00e07000000dkb6
-   profileFlsChangedCustom (Manage Users) - Changed profile Sith: field-level
    security for Death Start: Capacity was changed from No Access to Read Only
-   profileFlsChangedStandard (Manage Users) - Changed profile Sith: field-level
    security for Opportunity: Type was changed from Read Only to Read/Write
-   profileOlpChangedCustom (Manage Users) - Changed profile Sith: Account
    object permissions were changed from Read, Edit to Read, Create, Edit
-   profilePageLayoutChangedCustom (Manage Users) - Changed profile
    Stormtrooper: Weapon page layout for Blaster Rifle record type was changed
    from Weapon Layout to Blaster Rifle
-   profilePageLayoutChangedStandard (Manage Users) - Changed profile
    Stormtrooper: Weapon page layout for Blaster Rifle record type was changed
    from Weapon Layout to Blaster Rifle
-   profilePermChangedCustom (Manage Users) - Changed profile Sith: general user
    permission Convert Leads was changed from disabled to enabled
-   profileRecordTypeAddedCustom (Manage Users) - Changed profile Sith: Blaster
    Rifle record type was added to Weapon object
-   profileRecordTypeAddedStandard (Manage Users) - Changed profile
    Stormtrooper: Blaster Rifle record type was added to Weapon object
-   profileRecordTypeRemovedCustom (Manage Users) - Changed profile
    Stormtrooper: Blaster Rifle record type was removed from Weapon object
-   profileRecordTypeRemovedStandard (Manage Users) - Changed profile Sith Lord:
    --Master-- record type was removed from Jedi object
-   profileTabsetChangedCustom (Manage Users) - Changed profile Sith: Death Star
    tab was changed from Tab Hidden to Default On
-   profileTabsetChangedStandard (Manage Users) - Changed profile Sith Lord:
    Battleships tab was changed from Tab Hidden to Default On
-   SetupEntityAccessAudit_Profile_ApexClass_DisabledCustom (Manage Users) -
    Changed profile Sith: StarshipController Apex class access was disabled
-   SetupEntityAccessAudit_Profile_ApexClass_DisabledStandard (Manage Users) -
    Changed profile Sith: StarshipController Apex class access was disabled
-   SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom (Manage Users) -
    Changed profile Sith: StarshipController Apex class access was enabled
-   SetupEntityAccessAudit_Profile_ApexClass_EnabledStandard (Manage Users) -
    Changed profile Sith Lord: DeathStarController Apex class access was enabled
-   SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom (Manage Users) -
    Changed profile Sith: DeathStarDashboard Visualforce page access was
    disabled
-   SetupEntityAccessAudit_Profile_ApexPage_EnabledCustom (Manage Users) -
    Changed profile Sith: DeathStarDashboard Visualforce page access was enabled
-   SetupEntityAccessAudit_Profile_ApexPage_EnabledStandard (Manage Users) -
    Changed profile Sith Lord: DeathStarDashboard Visualforce page access was
    enabled
-   SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledCustom (Manage
    Users) - Changed profile Sith Lord: DeathStar connected app is disabled
-   SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledStandard (Manage
    Users) - Changed profile Sith: DeathStar connected app is disabled
-   SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom (Manage
    Users) - Changed profile Sith: Death Star connected app is enabled
-   SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledStandard (Manage
    Users) - Changed profile Sith Lord: Death Star connected app is enabled
-   SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledCustom (Manage
    Users) - Changed profile Stormtrooper: Control Room Access Custom Metadata
    Type was disabled
-   SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom
-   SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledStandard
    (Manage Users) - Changed profile Sith: Manage Battleships Custom Metadata
    Type was enabled
-   SetupEntityAccessAudit_Profile_CustomPermission_DisabledCustom (Manage
    Users) - Changed profile Sith: DeathStarAccess Custom Permission was
    disabled
-   SetupEntityAccessAudit_Profile_CustomPermission_DisabledStandard (Manage
    Users) - Changed profile Sith: DeathStarAccess Custom Permission was
    disabled
-   SetupEntityAccessAudit_Profile_CustomPermission_EnabledCustom (Manage
    Users) - Changed profile Sith: DeathStarAccess Custom Permission was enabled
-   SetupEntityAccessAudit_Profile_CustomPermission_EnabledStandard (Manage
    Users) - Changed profile Sith: DeathStarAccess Custom Permission was enabled
-   updateLoginFlowProfile (Login Flows) - Reassigned UI login flow for Clone
    Trooper to Stormtrooper
-   userLicenseEntityPermRevoked - Removed the Create on Account object
    permission as allowed by User License 100070000009FRQ

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('deletedprofile','deleteLoginFlow','insertLightningLoginFlow','loginIpRange','minimumPasswordLifetimeDisableForProfile','minimumPasswordLifetimeEnableForProfile','passwordexpiryForProfile','passwordhistoryForProfile','passwordmaxinvalidForProfile','PermissionSelfHealing','profileClonedStandard','profileCustAppCustom','profileCustAppStandard','profileDefaultCustAppCustom','profileDefaultRecordTypeChangedStandard','profileDescriptionChanged','profileEntityPermRemoved','profileFlsChangedCustom','profileFlsChangedStandard','profileOlpChangedCustom','profilePageLayoutChangedCustom','profilePageLayoutChangedStandard','profilePermChangedCustom','profileRecordTypeAddedCustom','profileRecordTypeAddedStandard','profileRecordTypeRemovedCustom','profileRecordTypeRemovedStandard','profileTabsetChangedCustom','profileTabsetChangedStandard','SetupEntityAccessAudit_Profile_ApexClass_DisabledCustom','SetupEntityAccessAudit_Profile_ApexClass_DisabledStandard','SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom','SetupEntityAccessAudit_Profile_ApexClass_EnabledStandard','SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom','SetupEntityAccessAudit_Profile_ApexPage_EnabledCustom','SetupEntityAccessAudit_Profile_ApexPage_EnabledStandard','SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledCustom','SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledStandard','SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom','SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledStandard','SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledCustom','SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom','SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledStandard','SetupEntityAccessAudit_Profile_CustomPermission_DisabledCustom','SetupEntityAccessAudit_Profile_CustomPermission_DisabledStandard','SetupEntityAccessAudit_Profile_CustomPermission_EnabledCustom','SetupEntityAccessAudit_Profile_CustomPermission_EnabledStandard','updateLoginFlowProfile','userLicenseEntityPermRevoked')
ORDER BY CreatedDate DESC LIMIT 1000
```

## Automation

### Apex

-   changedApexClass (Apex Class) - Changed DeathStarController Apex Class code
-   changedApexComponent (Component) - Changed Component deathStarControlPanel
-   changedApexPage (Page) - Changed Page DeathStarDashboard
-   changedApexTrigger (Apex Trigger) - Changed Battleship Trigger code:
    BattleshipTrigger
-   createdApexClass (Apex Class) - Created DeathStarController Apex Class code
-   createdApexComponent (Component) - Created Component deathStarControlPanel
-   createdApexPage (Page) - Created Page DeathStarDashboard
-   createdApexTrigger (Apex Trigger) - Created Battleship Trigger code:
    BattleshipTrigger
-   deletedApexClass (Apex Class) - Deleted DeathStarController Apex Class code
-   deletedApexComponent (Component) - Deleted Component deathStarControlPanel
-   deletedApexPage (Page) - Deleted Page DeathStarDashboard
-   deletedApexTrigger (Apex Trigger) - Deleted Battleship Trigger code:
    BattleshipTrigger

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedApexClass','changedApexComponent','changedApexPage','changedApexTrigger','createdApexClass','createdApexComponent','createdApexPage','createdApexTrigger','deletedApexClass','deletedApexComponent','deletedApexPage','deletedApexTrigger')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Approval Process

-   activatedprocessdefinition (Approval Process) - Activated Approval Process:
    Visit Approval v2 for Object: Death Star Visit
-   addedprocessactionitem (Approval Process) - Added Action: Request Approved
    for Approval Process: Visit Approval for Object: Death Star Visit
-   changedprocessdefinition (Approval Process) - Changed Approval Process:
    Visit Approval v2 for Object: 01I60000000BHI0
-   changedprocessnode (Approval Process) - Changed Process Step: Trooper
    Approval for Approval Process: Visit Approval v2 for Object: Death Star
    Visit
-   createdprocessdefinition (Approval Process) - Created Approval Process:
    Visit Approval v2 for Object: Death Star Visit
-   createdprocessnode (Approval Process) - Created Process Step: Trooper
    Approval for Approval Process: Visit Approval v2 for Object: Death Star
    Visit
-   deactivatedprocessdefinition (Approval Process) - Deactivated Approval
    Process: OVisit Approval v2 for Object: Death Star Visit
-   deletedprocessdefinition (Approval Process) - Deleted Approval Process:
    Visit Approval v2 for Object: Death Star Visit
-   deletedprocessnode (Approval Process) - Deleted Process Step: Trooper
    Approval for Approval Process: Visit Approval v2 for Object: Death Star
    Visit
-   removedprocessactionitem (Approval Process) - Removed Action: Approval for
    Approval Process: Visit Approval v2 for Object: Death Star Visit

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activatedprocessdefinition','addedprocessactionitem','changedprocessdefinition','changedprocessnode','createdprocessdefinition','createdprocessnode','deactivatedprocessdefinition','deletedprocessdefinition','deletedprocessnode','removedprocessactionitem')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Flows

-   activatedinteractiondefinition (Flows) - Activated flow version #11 "Send
    Death Star Welcome Package" for flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   activatedinteractiondefinitionWithSystemMode (Flows) - Activated "System
    Mode without Sharing" for flow with Name "Send Death Star Welcome Package"
    and Unique Name "Send_Death_Star_Welcome_Package"
-   activatedinteractiondefversion (Flows) - Activated flow with Name "Send
    Death Star Welcome Package" and Unique Name
    "Send_Death_Star_Welcome_Package"
-   activatedinteractiondefversionWithSystemMode (Flows) - Activated "System
    Mode without Sharing" for version #2 of flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   createdinteractiondefinition (Flows) - Created flow with Name "Send Death
    Star Welcome Package" and Unique Name "Send_Death_Star_Welcome_Package"
-   createdinteractiondefversion (Flows) - Created flow version #3 "Send Death
    Star Welcome Package" for flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   deactivatedinteractiondefinition (Flows) - Deactivated flow with Name "Send
    Death Star Welcome Package" and Unique Name
    "Send_Death_Star_Welcome_Package"
-   deactivatedinteractiondefversion (Flows) - Deactivated flow version #3 "Send
    Death Star Welcome Package" for flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   deactivatedinteractiondefversionWithSystemMode (Flows) - Deactivated "Send
    Death Star Welcome Package" for version #7 of flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   debugFlowAsAnotherUser (Flows) - Started debug run of flow
    "DeathStarControl" version 10 as user "darth@vader.com"
-   deletedinteractiondefinition (Flows) - Deleted flow with Name "Send Death
    Star Welcome Package" and Unique Name "Send_Death_Star_Welcome_Package"
-   deletedinteractiondefversion (Flows) - Deleted flow version #-1 "Send Death
    Star Welcome Package" for flow with Unique Name
    "Send_Death_Star_Welcome_Package"
-   renamedinteractiondefinition (Flows) - Renamed flow from "Send Death Star 2
    Welcome Package" to "Sned Death Star Welcome Package" for flow with Unique
    Name "Send_Death_Star_2_Welcome_Package"

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activatedinteractiondefinition','activatedinteractiondefinitionWithSystemMode','activatedinteractiondefversion','activatedinteractiondefversionWithSystemMode','createdinteractiondefinition','createdinteractiondefversion','deactivatedinteractiondefinition','deactivatedinteractiondefversion','deactivatedinteractiondefversionWithSystemMode','debugFlowAsAnotherUser','deletedinteractiondefinition','deletedinteractiondefversion','renamedinteractiondefinition')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Integrations

-   ExternalServicesCreate (Integrations) - Created External Service
    Registration QuoteAutoApprovals
-   ExternalServicesDelete (Integrations) - Deleted External Service
    Registration AuthorizationToken2
-   ExternalServicesSchemaChange (Integrations) - Changed External Service
    Registration QuoteAutoApprovals: schema was changed

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('ExternalServicesCreate','ExternalServicesDelete','ExternalServicesSchemaChange')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Validation Rules

-   changedValidationActive (Validation Rules) - Changed active flag for Death
    Star Visit validation "Death_Star_Access" from 0 to 1
-   changedValidationFormula (Validation Rules) - Changed formula for
    DeathStarVisit validation "Death_Star_Access" from
    "NOT(ISPICKVAL(Visitor**r.Affiliation**c, "Galactic_Empire"))" to
    "NOT($Permission.DeathStarAccess)"
-   changedValidationLocation (Validation Rules) - Changed error location for
    Death Star Visits validation "Death_Star_Access" from "Visitor" to "Top of
    Page"
-   changedValidationMessage (Validation Rules) - Changed error message for
    Death Star Visit validation "Death_Star_Access" from "No Access" to "Access
    Denied"
-   changedValidationName (Validation Rules) - Changed name for Death Star Visit
    validation from "DeathStarEntry" to "DeathStarVisit"
-   newValidation (Validation Rules) - New DeathStarVisit validation rule
    "Death_Star_Access"
-   removedValidation (Validation Rules) - Removed DeathStarVisit validation
    "Death_Star_Access"

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedValidationActive','changedValidationFormula','changedValidationLocation','changedValidationMessage','changedValidationName','newValidation','removedValidation')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Workflow Rule

-   activatedworkflowrule (Workflow Rule) - Activated workflow rule Opportunity
-   changedworkflowrule (Workflow Rule) - Changed workflow rule Opportunity
-   createdemailalert (Workflow Rule) - Created Email Alert Unauthorized Access
    for Object: Death Star
-   createdfieldupdate (Workflow Rule) - Created Field Update Affiliation for
    Object: Character
-   createdflowtrigger (Workflow Rule) - Created Flow Trigger
    Opportunity_Flow3014W000000Fbld for Object: Opportunity
-   createdworkflowrule (Workflow Rule) - Created workflow rule
    Opportunity_Process3010z0000002oy4 for Object: Opportunity
-   deactivatedworkflowrule (Workflow Rule) - Deactivated workflow rule
    Opportunity_Process3010z0000002oy4 for Object: Opportunity
-   deletedemailalert (Workflow Rule) - Deleted Email Alert POA Update Email for
    Object: Case
-   deletedfieldupdate (Workflow Rule) - Deleted Field Update PRM-Update Sync
    Litmos for Object: User
-   deletedflowtrigger (Workflow Rule) - Deleted Flow Trigger
    Opportunity_Flow3014W000000Fbld for Object: Opportunity
-   deletedoutboundmessage (Workflow Rule) - Deleted Outbound Message
    Unauthorized_Access for Object: Death Star
-   deletedworkflowrule (Workflow Rule) - Deleted workflow rule
    Opportunity_Process3010z0000002oy4 for Object: Opportunity

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activatedworkflowrule','changedworkflowrule','createdemailalert','createdfieldupdate','createdflowtrigger','createdworkflowrule','deactivatedworkflowrule','deletedemailalert','deletedfieldupdate','deletedflowtrigger','deletedoutboundmessage','deletedworkflowrule')
ORDER BY CreatedDate DESC LIMIT 1000
```

## Organization Management

### Adoption Assistance

-   suggestedForYouOffOn (Adoption Assistance) - Changed Suggested for You from
    off to on

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('suggestedForYouOffOn')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Auth. Providers

-   deleteAuthProvider (Auth. Providers) - Deleted Auth. Provider Meta Ads Data
    Cloud
-   insertAuthProvider (Auth. Providers) - Created Auth. Provider Meta Ads Data
    Cloud

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('deleteAuthProvider','insertAuthProvider')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Black Tab Framework

-   BlackTabFrameworkActionChange - A Salesforce employee changed
    'ScaleCenterPilot' from 'false' to 'true' when using ManageOrgPermForBT
-   BlackTabFrameworkActionRun - A Salesforce employee ran
    EventLogFileOptInReleaseTask in Update mode

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('BlackTabFrameworkActionChange','BlackTabFrameworkActionRun')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Certificate and Key Management

-   insertCertificate (Certificate and Key Management) - Created Certificate
    DeathStarCert
-   uploadCertificateChain (Certificate and Key Management) - Uploaded
    Certificate Chain for DeathStar IDP

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('insertCertificate','uploadCertificateChain')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Chatter Settings

-   ApprovalsInChatterEnabledPrefOn (Chatter Settings) - Organization setup
    action: ApprovalsInChatterEnabledPrefOn has changed.
-   value_CHATTER_EMAIL_SENDER_ADDRESS (Chatter Settings) - Changed verified
    sender from address on Chatter Email Settings page from "" to
    no-reply@galactic-empire.com
-   value_CHATTER_EMAIL_SENDER_NAME (Chatter Settings) - Changed sender from
    name on Chatter Email Settings page from "" to Salesforce Chatter
-   value_CHATTER_NEW_SENDER_ADDRESS (Chatter Settings) - Changed unverified
    sender from address on Chatter Email Settings page from "" to
    no-reply@galactic-empire.com

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('ApprovalsInChatterEnabledPrefOn','value_CHATTER_EMAIL_SENDER_ADDRESS','value_CHATTER_EMAIL_SENDER_NAME','value_CHATTER_NEW_SENDER_ADDRESS')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Connected Apps

-   addOauthClientCredentialUser (OAuth Client Credentials User) - Assigned
    OAuth client credentials user darth@vader.com (UserID: [005790000024p8r]) to
    app Death Star Connector (AppID: [0H479000000CcUh])
-   adminApprovedAppsOnlyOffOn (Connected Apps) - Enabled For admin-approved
    users, limit API access to only allowlisted connected apps
-   adminApprovedAppsOnlyOnOff (Connected Apps) - Disabled For admin-approved
    users, limit API access to only allowlisted connected apps
-   blockConnectedApplication (Connected Apps) - Blocked Connected App Death
    Star
-   changeApplicationCallbackUrl (Application) - Changed Connected App Callback
    URL from https://death-star.cloud to
    https://death-star.cloud/oauth2/callback
-   changeApplicationCertificate (Remote Access) - Changed Connected App
    Certificate from EMAILADDRESS=anakin@skywalker.com, O=DeathStar, L=Tatooine,
    ST=CA, C=GE to EMAILADDRESS=darth@vader.com, O=DeathStar, L=Tatooine, ST=CA,
    C=GE
-   changeApplicationClientCredentialEnabled (Application) - Changed Enable
    Client Credentials Flow from false to true
-   changeApplicationCodeCredentialEnabled (Application) - Changed connected app
    Enable Authorization Code and Credentials Flow setting from false to true
-   changeApplicationCodeCredentialPostOnly (Application) - Changed connected
    app Require user credentials in the POST body for Authorization Code and
    Credentials Flow setting from false to true
-   changeApplicationContactEmail (Application) - Changed Connected App Contact
    Email from anakin@skywalker.com to darth@vader.com
-   changeApplicationMobileSessionTimeout (Application) - Changed Connected App
    Mobile Session Timeout from null to null
-   changeApplicationNamedUserJwtEnabled (Application) - Changed connected app
    Issue JSON Web Token(JWT)-based access tokens for named users setting from
    false to true
-   changeApplicationOptionalConsumerSecret (Application) - Changed connected
    app Require Secret for Web Server Flow OAuth setting from false to true
-   changeApplicationPinLength (Application) - Changed Connected App PIN Length
    from null to null
-   changeApplicationPkceRequired (Application) - Changed the Death Star
    connected app setting Require Proof Key for Code Exchange (PKCE) Extension
    for Supported Authorization Flows from false to true
-   changeApplicationRefreshTokenRotationEnabled (Application) - Changed the
    Death_Star connected app setting Enable Refresh Token Rotation from false to
    true
-   changeApplicationSecretRequiredForRefreshToken (Application) - Changed the
    connected app's Require Secret for Refresh Token Flow setting from true to
    false
-   changeApplicationSecretRequiredForTokenExchange (Application) - Changed the
    Death_Star connected app setting Require Secret for Token Exchange from
    false to true
-   changeApplicationTokenExchangeEnabled (Application) - Changed the Death_Star
    connected app setting Enable Token Exchange Flow from false to true
-   changeIpRelaxationPolicy (Application) - Changed connected app DeathStar IP
    relaxation setting from Enforce IP restrictions to Relax IP restrictions
-   changeOauthDefaultScope (Application) - Changed connected app DeathStar
    scopes from null to full, refresh_token
-   changeUserRuntimeAccessPolicy (Application) - Changed connected app Death
    Start Permitted Users setting from All users may self-authorize to Admin
    approved users are pre-authorized
-   deleteApplication (Application) - Deleted Connected App Death Star
-   deleteApplicationCertificate (Remote Access) - Deleted Connected App
    Certificate EMAILADDRESS=anakin@skywalker.com, CN=GE, OU=GalacticEmpire,
    O=DeathStar, L=Tatooine, ST=CA, C=GE
-   deleteConnectedApplication (Connected Apps) - Uninstalled Connected App
    DeathStar
-   deleteCustomAttribute (Application) - Deleted custom attribute
    WORK_ORDER_SERVICE_NOTE with value of "" for connected app
-   dynamicInitialTokenGeneration (Application) - Generated a new initial access
    token for connected app Death Star
-   enableOauth (Application) - Enabled connected Death Star OAuth 2.0
    authorization settings
-   generateOauthStagedCredential (Oauth Staged Credential) - Generated
    temporary credentials for connected app Death Star
-   insertApplication (Application) - Created Connected App Death Star
-   insertApplicationCertificate (Remote Access) - Created Connected App
    Certificate EMAILADDRESS=anakin@skywalker.com, O=Republic, L=Coruscant,
    ST=CW, C=SW
-   insertConnectedApplication (Connected Apps) - Installed Connected App Death
    Star to Salesforce
-   insertConnectedAppSessionPolicy (Connected App Session Policy) - Created
    connected app session policy for app 0H44W000002DeeO with Session Timeout
    null
-   unblockConnectedApplication (Connected Apps) - Unblocked Connected App Death
    Star to Salesforce
-   visualforceApiAccessAllowedOffOn (Connected Apps) - Enabled Allow
    Visualforce pages to access APIs
-   visualforceApiAccessAllowedOnOff (Connected Apps) - Disabled Allow
    Visualforce pages to access APIs

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('addOauthClientCredentialUser','adminApprovedAppsOnlyOffOn','adminApprovedAppsOnlyOnOff','blockConnectedApplication','changeApplicationCallbackUrl','changeApplicationCertificate','changeApplicationClientCredentialEnabled','changeApplicationCodeCredentialEnabled','changeApplicationCodeCredentialPostOnly','changeApplicationContactEmail','changeApplicationMobileSessionTimeout','changeApplicationNamedUserJwtEnabled','changeApplicationOptionalConsumerSecret','changeApplicationPinLength','changeApplicationPkceRequired','changeApplicationRefreshTokenRotationEnabled','changeApplicationSecretRequiredForRefreshToken','changeApplicationSecretRequiredForTokenExchange','changeApplicationTokenExchangeEnabled','changeIpRelaxationPolicy','changeOauthDefaultScope','changeUserRuntimeAccessPolicy','deleteApplication','deleteApplicationCertificate','deleteConnectedApplication','deleteCustomAttribute','dynamicInitialTokenGeneration','enableOauth','generateOauthStagedCredential','insertApplication','insertApplicationCertificate','insertConnectedApplication','insertConnectedAppSessionPolicy','unblockConnectedApplication','visualforceApiAccessAllowedOffOn','visualforceApiAccessAllowedOnOff')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Custom Apps

-   changedTabSetName (Custom Apps) - Changed label of custom app from Death
    Star to Death Star II
-   installedpackagingapp (Custom Apps) - Installed AppExchange package: One
    Logger
-   nonSecurityReviewedManagedPackageInstalled - The managed package "Salesforce
    CPQ" version "Winter '24" has not been security reviewed and was installed
    by user "033a0000000pgefiak@00d60000000j3aqea0".
-   package2VersionUpgradeDeprecate (Second Generation Package Version) -
    Deprecated package member component "ExternalString" "usageWarningTooltip"
-   purged_uninstall_export (Custom Apps) - Purged uninstall export for package
    Death Star (Version Name 6.11 (February 28, 2022))
-   uninstalledpackagingapp (Custom Apps) - Uninstalled AppExchange package:
    Salesforce CPQ
-   upgradedpackagingapp (Custom Apps) - Upgraded AppExchange package:
    Salesforce CPQ

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedTabSetName','installedpackagingapp','nonSecurityReviewedManagedPackageInstalled','package2VersionUpgradeDeprecate','purged_uninstall_export','uninstalledpackagingapp','upgradedpackagingapp')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Deployment Connections

-   deployConnectionAuthorized (Deployment Connections) - Authorized inbound
    changes from: UAT (Full Sandbox)

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('deployConnectionAuthorized')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Einstein GPT

-   einsteinGPTCopilotEnabledOffOn - Organization setup action:
    einsteinGPTCopilotEnabledOffOn has changed.
-   einsteinGPTCopilotEnabledOnOff - Organization setup action:
    einsteinGPTCopilotEnabledOnOff has changed.
-   einsteinGPTPlatformEnabledOffOn - Organization setup action:
    einsteinGPTPlatformEnabledOffOn has changed.
-   einsteinGPTSalesEmailsPrefOffOn - Organization setup action:
    einsteinGPTSalesEmailsPrefOffOn has changed.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('einsteinGPTCopilotEnabledOffOn','einsteinGPTCopilotEnabledOnOff','einsteinGPTPlatformEnabledOffOn','einsteinGPTSalesEmailsPrefOffOn')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Email Administration

-   dkimRotationPreparationSuccessful (Email Administration) - Generated new
    public and private keys for DKIM key 09P4W000000YNCD in preparation for key
    rotation in 5 days.
-   dkimRotationSuccessful (Email Administration) - Rotated public and private
    keys for DKIM key 09P4W000000YNCD
-   emailConsentManagementOff - Changed Enforce email privacy settings from on
    to off
-   emailConsentManagementOn - Changed Enforce email privacy settings from off
    to on
-   emailsenderidcomplianceoff (Email Administration) - Changed SenderId
    compliance from on to off
-   emailspfcomplianceoff (Email Administration) - Changed SPF compliance from
    on to off
-   emailspfcomplianceon (Email Administration) - Changed SPF compliance from
    off to on
-   handlebouncedemailsoff - Changed Activate bounce management from on to off
-   handlebouncedemailson - Changed Activate bounce management from off to on
-   resendBouncedEmailsoff (Email Administration) - Changed Return bounced
    emails to sender from on to off
-   resendBouncedEmailson (Email Administration) - Changed Return bounced emails
    to sender from off to on
-   restricttlstodomainsoff (Email Administration) - Changed Restrict TLS to
    these domains from on to off
-   restricttlstodomainson (Email Administration) - Changed Restrict TLS to
    these domains from off to on
-   sendEmailAccessControl (Email Administration) - Changed Access to Send Email
    level from System email only to No access
-   setupObjectChanged (Email Administration) - Changed Email Domain Key
    09P4W000000TNCC. Field Is Key1 Active value changed from 1 to 0.
-   setupObjectChangedSkipValue (Email Administration) - Changed Email Domain
    Key 09P4W000000TNCC. Field Public Key value changed.
-   setupObjectCreated (Email Administration) - Created Email Domain Filter
    0T6Ea000000003d.
-   setupObjectDeleted (Email Administration) - Deleted Email Domain Filter
    0T60z000000000R.
-   value_RESTRICT_TLS_TO_DOMAINS (Email Administration) - Restrict TLS to these
    domains changed from "" to skywalker.com
-   value_TLS_SETTING (Email Administration) - TLS Setting changed from 4 to 1
-   verifyemaildomainownershipbydkimoff - Organization setup action:
    verifyemaildomainownershipbydkimoff has changed.
-   verifyemaildomainownershipbydkimon - Organization setup action:
    verifyemaildomainownershipbydkimon has changed.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('dkimRotationPreparationSuccessful','dkimRotationSuccessful','emailConsentManagementOff','emailConsentManagementOn','emailsenderidcomplianceoff','emailspfcomplianceoff','emailspfcomplianceon','handlebouncedemailsoff','handlebouncedemailson','resendBouncedEmailsoff','resendBouncedEmailson','restricttlstodomainsoff','restricttlstodomainson','sendEmailAccessControl','setupObjectChanged','setupObjectChangedSkipValue','setupObjectCreated','setupObjectDeleted','value_RESTRICT_TLS_TO_DOMAINS','value_TLS_SETTING','verifyemaildomainownershipbydkimoff','verifyemaildomainownershipbydkimon')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Named Credentials

-   externalCredentialDelete (External Credentials) - Deleted external
    credential: AddApprovalApi
-   externalCredentialFieldChange (External Credentials) - Label changed for
    external credential DeathStar_API_v2 from Death Star API to Death Star API
    v2
-   externalCredentialInsert (External Credentials) - Created a new external
    credential: DeathStarExternal
-   externalCredentialParameterDelete (External Credentials) - Deleted the
    parameter: x-api-key for DeathStar
-   externalCredentialParameterFieldsChange (External Credentials) - Updated the
    parameter: Authorization from (Parameter Type: Authentication Header,
    Parameter Value: {!'Basic ' &
    BASE64ENCODE(BLOB($Credential.Death_Star_API.Username & ':' & $Credential.Death_Star_API.Password))}, Sequence Number: 2) to (Parameter Type: Authentication Header, Parameter Value: {!'Basic ' & BASE64ENCODE(BLOB($Credential.DeathStarAPI.Username
    & ':' & $Credential.DeathStarAPI.Password))}, Sequence Number: 2) for
    DeathStarAPI
-   externalCredentialParameterInsert (External Credentials) - Created a new
    parameter: x-api-key (Parameter Type: Authentication Header, Parameter
    Value: {!$Credential.DeathStar.x-api-key}, Sequence Number: 1) for DeathStar
-   namedCredentialDelete (Named Credentials) - Deleted named credential:
    ApproveApprovalApi
-   namedCredentialEncryptedFieldChange (Named Credentials) - Password changed
    for named credential DeathStar
-   namedCredentialFieldChange (Named Credentials) - URL changed for named
    credential DeathStar from https://death-star.com to https://death-star.cloud
-   namedCredentialInsert (Named Credentials) - Created a new named credential:
    DeathStarWebhook
-   namedCredentialParameterDelete (Named Credentials) - Deleted the parameter:
    Authorization for DeathStar
-   namedCredentialParameterFieldsChange (Named Credentials) - Updated the
    parameter: Url from (Parameter Type: Url, Parameter Value:
    https://death-star.cloud) to (Parameter Type: Url, Parameter Value:
    https://death-star.cloud/api) for DeathStar
-   namedCredentialParameterInsert (Named Credentials) - Created a new
    parameter: ExternalCredential (Parameter Type: Authentication, External
    Credential: DeathStarExternal) for DeathStar

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('externalCredentialDelete','externalCredentialFieldChange','externalCredentialInsert','externalCredentialParameterDelete','externalCredentialParameterFieldsChange','externalCredentialParameterInsert','namedCredentialDelete','namedCredentialEncryptedFieldChange','namedCredentialFieldChange','namedCredentialInsert','namedCredentialParameterDelete','namedCredentialParameterFieldsChange','namedCredentialParameterInsert')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Network

-   AuthConfig_UsernamePasswordActivated_MyDomain - Displayed username-password
    login form on the My Domain login page
-   AuthConfig_UsernamePasswordDeactivated_MyDomain - Hid username-password
    login form from the My Domain login page
-   changedStaticResource (Static Resource) - Changed Static Resource
    deathStarResource
-   changeServiceProviderAcsUrl (Service Provider) - ACS URL changed from
    https://republic.com/acs to https://galactic-empire.com/acs for Service
    Provider: GalacticEmpire
-   changeServiceProviderIssuer (Service Provider) - Issuer changed from
    https://republic.my.salesforce.com to
    https://galactic-empire.my.salesforce.com for Service Provider:
    GalacticEmpire
-   changeServiceProviderSamlEntityUrl (Service Provider) - Entity URL changed
    from https://republic.com to https://galactic-empire.com for Service
    Provider: GalacticEmpire
-   changeServiceProviderStartUrl (Service Provider) - Start URL changed from
    https://republic.com/api/v1/saml to https://galactic-empire.com/api/v1/saml
    for Service Provider: GalacticEmpire
-   communitiesDefaultCdnPrefOffOn - Organization setup action:
    communitiesDefaultCdnPrefOffOn has changed.
-   communitiesDefaultCdnPrefOnOff - Organization setup action:
    communitiesDefaultCdnPrefOnOff has changed.
-   createdStaticResource (Static Resource) - Created Static Resource
    deathStarResource
-   customDomainRedirectPolicy (My Domain) - Changed the My Domain Login policy
    from Redirect with a warning to the same page within the domain to Don’t
    redirect (recommended)
-   deletedStaticResource (Static Resource) - Deleted Static Resource
    deathStarResource
-   disableAPILoginRequiresOrgDomain (My Domain) - Disabled SOAP API logins from
    https://test.salesforce.com
-   disableRequireLoginFromOrgDomain (My Domain) - Disabled user logins from
    https://test.salesforce.com
-   domainChosen (My Domain) - Deployed a My Domain change with My Domain login
    URL galactic-empire.my.salesforce.com without enhanced domains
-   enableAPILoginRequiresOrgDomain (My Domain) - Enabled SOAP API logins from
    https://test.salesforce.com
-   enableRequireLoginFromOrgDomain (My Domain) - Enabled user logins from
    https://test.salesforce.com
-   enhancedDomainChosen (My Domain) - Deployed a My Domain change with My
    Domain login URL galactic-empire.my.salesforce.com with enhanced domains
-   insertServiceProvider (Service Provider) - Created Service Provider
    GalacticEmpire Connected App
-   logHostnameRedirectionsOffOn - Enabled Log redirections for My Domain
    hostnames
-   logHostnameRedirectionsOnOff - Disabled Log redirections for My Domain
    hostnames
-   maintainForceDotComCnamesOffOn - Enabled redirections from previous
    .force.com site URLs to current My Domain site URLs
-   maintainForceDotComCnamesOnOff - Disabled redirections from previous
    .force.com site URLs to current My Domain site URLs
-   mobileSdkBrowserOnAndroidOffOn - Enabled use of the native browser for user
    authentication on Android
-   mobileSdkBrowserOnAndroidOnOff - Disabled use of the native browser for user
    authentication on Android
-   mobileSdkNativeBrowserOffOn - Enabled use of the native browser for user
    authentication on iOS
-   mobileSdkNativeBrowserOnOff - Disabled use of the native browser for user
    authentication on iOS
-   remoteproxy (Security Controls) - Remote Proxy insert CPI:
    https://death-star.com
-   saveDomainProvisioned (My Domain) - Saved a change to My Domain details that
    started the provisioning process for galactic-empire.my.salesforce.com
    without enhanced domains. This change takes effect after the new My Domain
    is deployed.
-   saveEnhancedDomainProvisioned (My Domain) - Saved a change to My Domain
    details that started the provisioning process for
    galactic-empire.my.salesforce.com with enhanced domains. This change takes
    effect after the new My Domain is deployed.
-   shareBrowserSessionAndroidOffOn - Organization setup action:
    shareBrowserSessionAndroidOffOn has changed.
-   shareBrowserSessionAndroidOnOff - Organization setup action:
    shareBrowserSessionAndroidOnOff has changed.
-   shareBrowserSessionIOSOffOn - Organization setup action:
    shareBrowserSessionIOSOffOn has changed.
-   shareBrowserSessionIOSOnOff - Organization setup action:
    shareBrowserSessionIOSOnOff has changed.
-   warnForceDotComRedirectionOffOn - Enabled warnings for previous .force.com
    site hostname redirections
-   warnForceDotComRedirectionOnOff - Disabled warnings for previous .force.com
    site hostname redirections

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('AuthConfig_UsernamePasswordActivated_MyDomain','AuthConfig_UsernamePasswordDeactivated_MyDomain','changedStaticResource','changeServiceProviderAcsUrl','changeServiceProviderIssuer','changeServiceProviderSamlEntityUrl','changeServiceProviderStartUrl','communitiesDefaultCdnPrefOffOn','communitiesDefaultCdnPrefOnOff','createdStaticResource','customDomainRedirectPolicy','deletedStaticResource','disableAPILoginRequiresOrgDomain','disableRequireLoginFromOrgDomain','domainChosen','enableAPILoginRequiresOrgDomain','enableRequireLoginFromOrgDomain','enhancedDomainChosen','insertServiceProvider','logHostnameRedirectionsOffOn','logHostnameRedirectionsOnOff','maintainForceDotComCnamesOffOn','maintainForceDotComCnamesOnOff','mobileSdkBrowserOnAndroidOffOn','mobileSdkBrowserOnAndroidOnOff','mobileSdkNativeBrowserOffOn','mobileSdkNativeBrowserOnOff','remoteproxy','saveDomainProvisioned','saveEnhancedDomainProvisioned','shareBrowserSessionAndroidOffOn','shareBrowserSessionAndroidOnOff','shareBrowserSessionIOSOffOn','shareBrowserSessionIOSOnOff','warnForceDotComRedirectionOffOn','warnForceDotComRedirectionOnOff')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Org Config

-   changedconvrates (Currency) - Changed conversion rates
-   changedOrganizationAddress (Company Information) - Changed Organization
    Address from Coruscant null null to Death Star null null
-   changeServiceProviderSubjectType
-   createAllowedEmailDomain (Manage Users) - Allowed email domain
    death-star.com added.
-   createdgroup (Groups) - Created Public Group Rebels
-   createdrole (Manage Users) - Created new role Sith Lord
-   deleteAllowedEmailDomain (Manage Users) - Allowed email domain
    death-star.com deleted.
-   deletedgroup (Groups) - Deleted Public Group Rebellion Members
-   deletedrole (Manage Users) - Deleted role Sith Lord
-   groupMembership (Groups) - Changed membership of Group Death Star Visitors
-   holiday_insert (Holidays) - Created holiday May the 4th Be With You
-   inserteddatedexchrate (Currency) - Inserted dated exchange rate for currency
    AUD, CAD, EUR, GBP for start date 1/1/2030
-   oauthCorsPolicyEnabledOffOn - Changed Enable CORS for OAuth endpoints from
    off to on
-   oauthCorsPolicyEnabledOnOff - Changed Enable CORS for OAuth endpoints from
    on to off
-   relationshipGraphPrefOffOn - Enabled Sales Cloud Buyer Relationship Map.
-   role (Manage Users) - Changed role Sith Lord
-   tm_forecastUserChangedFor (Manage Territories) - Forecast manager changed to
    Anakin Skywalker for Imperial Space
-   updatedBusinessProcess - Updated business process "Rebel Alliance
    Recruitment"
-   updatedBusinessProcessValues - Updated business process "Rebel Alliance
    Recruitment" picklist values: added Recruit Assessment, Onboarding, removed
    Recruit Approval
-   updateddatedexchrate (Currency) - Updated dated exchange rate for currency
    EUR for start date 11/10/2021 from 0.864155 to 0.864155
-   updatedgroup (Groups) - Updated Public Group Rebellion Members: Changed Name
    from Senate Members to Rebellion Members, DeveloperName from Senate_Members
    to Rebellion_Members

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedconvrates','changedOrganizationAddress','changeServiceProviderSubjectType','createAllowedEmailDomain','createdgroup','createdrole','deleteAllowedEmailDomain','deletedgroup','deletedrole','groupMembership','holiday_insert','inserteddatedexchrate','oauthCorsPolicyEnabledOffOn','oauthCorsPolicyEnabledOnOff','relationshipGraphPrefOffOn','role','tm_forecastUserChangedFor','updatedBusinessProcess','updatedBusinessProcessValues','updateddatedexchrate','updatedgroup')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Org Limits

-   RateLimitingNotification (API Usage Notification) - API Usage Notification
    insert for TotalRequests Recipient: 0054W00000EwVFB Threshold / Interval: 50
    / 24
-   value_MAX_STREAMING_TOPICS_PROV - Max number of streaming topics
-   value_OMNI_STUDIO_CALLS_LIMIT - Organization setup action:
    value_OMNI_STUDIO_CALLS_LIMIT has changed from 1000000 to 1000000
-   value_PROV_SCRATCH_ACTIVE_LIMIT - Changed Provisioned Active Scratch Org
    Limit from 100 to 100
-   value_PROV_SCRATCH_DAILY_LIMIT - Changed Provisioned Daily Scratch Org Limit
    from 200 to 200
-   value_PROV_SNAPSHOT_ACTIVE_LIMIT - Changed Provisioned Snapshot Active Limit
    from 0 to 100
-   value_PROV_SNAPSHOT_DAILY_LIMIT - Changed Provisioned Snapshot Daily Request
    Limit from 0 to 100
-   value_RULES_ENGINE_CALLS_LIMIT - Organization setup action:
    value_RULES_ENGINE_CALLS_LIMIT has changed from 50000 to 50000

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('RateLimitingNotification','value_MAX_STREAMING_TOPICS_PROV','value_OMNI_STUDIO_CALLS_LIMIT','value_PROV_SCRATCH_ACTIVE_LIMIT','value_PROV_SCRATCH_DAILY_LIMIT','value_PROV_SNAPSHOT_ACTIVE_LIMIT','value_PROV_SNAPSHOT_DAILY_LIMIT','value_RULES_ENGINE_CALLS_LIMIT')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Org Preferences

-   aCATAcceptedOffOn - Organization setup action: aCATAcceptedOffOn has
    changed.
-   accountInspectorPrefOffOn - Organization setup action:
    accountInspectorPrefOffOn has changed.
-   accountInspectorSetupOffOn - Organization setup action:
    accountInspectorSetupOffOn has changed.
-   advancedCMTSecurityOffOn - Organization setup action:
    advancedCMTSecurityOffOn has changed.
-   advancedCMTSecurityOnOff - Organization setup action:
    advancedCMTSecurityOnOff has changed.
-   aITrustPIIMaskingEnabledOffOn - Organization setup action:
    aITrustPIIMaskingEnabledOffOn has changed.
-   alarmResumeSameRunContextOffOn - Organization setup action:
    alarmResumeSameRunContextOffOn has changed.
-   autonomousExperienceOffOn
-   bYOLMigrationStatusPrefOffOn - Organization setup action:
    bYOLMigrationStatusPrefOffOn has changed.
-   callSummarizationOffOn - Organization setup action: callSummarizationOffOn
    has changed.
-   cDPEnabledPrefOffOn - Organization setup action: cDPEnabledPrefOffOn has
    changed.
-   changedCFUniqueOffCustom (Custom Metadata Types) - Organization setup
    action: changedCFUniqueOffCustom has changed from Blaster to Stormtroopers
-   changedCFUniqueOnCustom (Custom Metadata Types) - Organization setup action:
    changedCFUniqueOnCustom has changed from Blaster to Stormtroopers
-   changedOrgWideEmailAddress - Organization setup action:
    changedOrgWideEmailAddress has changed.
-   chatbotEnabledOffOn - Organization setup action: chatbotEnabledOffOn has
    changed.
-   codeBuilderOffOn - Organization setup action: codeBuilderOffOn has changed.
-   codeBuilderOnOff - Organization setup action: codeBuilderOnOff has changed.
-   contactInspectorPrefOffOn - Organization setup action:
    contactInspectorPrefOffOn has changed.
-   contactLeadInspectorSetupOffOn - Organization setup action:
    contactLeadInspectorSetupOffOn has changed.
-   contactUpdateProfileFLSOffOn - Organization setup action:
    contactUpdateProfileFLSOffOn has changed.
-   contextualEverywhereEnabledOffOn - Organization setup action:
    contextualEverywhereEnabledOffOn has changed.
-   conversationPilotPrefOffOn - Organization setup action:
    conversationPilotPrefOffOn has changed.
-   conversationZoomPrefOffOn - Organization setup action:
    conversationZoomPrefOffOn has changed.
-   conversationZoomPrefOnOff - Organization setup action:
    conversationZoomPrefOnOff has changed.
-   crossOrgRedirectsEnabledOffOn - Organization setup action:
    crossOrgRedirectsEnabledOffOn has changed.
-   crossOrgRedirectsEnabledOnOff - Organization setup action:
    crossOrgRedirectsEnabledOnOff has changed.
-   dataCloudReportingPrefOffOn - Organization setup action:
    dataCloudReportingPrefOffOn has changed.
-   dataSpacesPlatformSecurityOffOn - Organization setup action:
    dataSpacesPlatformSecurityOffOn has changed.
-   debugFlowAsAnotherUserEnabledOff (Process Automation Settings) - Changed Let
    admins debug flows as other users from on to off
-   debugFlowAsAnotherUserEnabledOn (Process Automation Settings) - Changed Let
    admins debug flows as other users from off to on
-   debugFlowAsAnotherUserOffOn - Organization setup action:
    debugFlowAsAnotherUserOffOn has changed.
-   debugFlowAsAnotherUserOnOff - Organization setup action:
    debugFlowAsAnotherUserOnOff has changed.
-   DELETECallCenter (Call Centers) - Organization setup action:
    DELETECallCenter has changed.
-   deleteIpWhiteList (Security Controls) - Deleted Ip AllowList from
    14.101.11.1 to 14.101.11.1
-   deployEdgeDuringRolloutOffOn - Organization setup action:
    deployEdgeDuringRolloutOffOn has changed.
-   depriveSoqlAccessOffOn - Organization setup action: depriveSoqlAccessOffOn
    has changed.
-   diarizationPrefOffOn - Organization setup action: diarizationPrefOffOn has
    changed.
-   diarizationPrefOnOff - Organization setup action: diarizationPrefOnOff has
    changed.
-   diarizationUserDisabled - Organization setup action: [Anakin Skywalker] has
    changed.
-   disableSocialProfilesTWOffOn - Organization setup action:
    disableSocialProfilesTWOffOn has changed.
-   disableSocialProfilesYTOffOn - Organization setup action:
    disableSocialProfilesYTOffOn has changed.
-   disableSocialProfilesYTOnOff - Organization setup action:
    disableSocialProfilesYTOnOff has changed.
-   eDCEinsteinFeatureEnabledOffOn - Organization setup action:
    eDCEinsteinFeatureEnabledOffOn has changed.
-   enablementPartnerPrgmEmailsOffOn - Organization setup action:
    enablementPartnerPrgmEmailsOffOn has changed.
-   enableOverrideGrantAccessOnOff - Organization setup action:
    enableOverrideGrantAccessOnOff has changed.
-   enableSIQUserInbox (Inbox mobile and legacy desktop apps) - Enabled Inbox
    for user: Platform Integration User
-   enhancedUserFieldMaskingOffOn - Organization setup action:
    enhancedUserFieldMaskingOffOn has changed.
-   enhancedUserFieldMaskingOnOff - Organization setup action:
    enhancedUserFieldMaskingOnOff has changed.
-   eventLogGenerationEnabledOffOn - Organization setup action:
    eventLogGenerationEnabledOffOn has changed.
-   expBundleMetadataPrefOffOn - Organization setup action:
    expBundleMetadataPrefOffOn has changed.
-   extensionHostUnrestrictedOffOn - Organization setup action:
    extensionHostUnrestrictedOffOn has changed.
-   flowBlockAxsToSessionIdOffOn - Organization setup action:
    flowBlockAxsToSessionIdOffOn has changed.
-   flowsLightningAppOffOn - Organization setup action: flowsLightningAppOffOn
    has changed.
-   flowUseApexExceptionEmailOffOn - Organization setup action:
    flowUseApexExceptionEmailOffOn has changed.
-   gCSCFMigrationMigratedOffOn - Organization setup action:
    gCSCFMigrationMigratedOffOn has changed.
-   INSERTCallCenter (Call Centers) - Organization setup action:
    INSERTCallCenter has changed.
-   inviteCsnUserEnabledOnOff - Organization setup action:
    inviteCsnUserEnabledOnOff has changed.
-   jSPublicLoggingLibAllowUIOffOn - Organization setup action:
    jSPublicLoggingLibAllowUIOffOn has changed.
-   jSPublicLoggingLibAllowUIOnOff - Organization setup action:
    jSPublicLoggingLibAllowUIOnOff has changed.
-   leadInspectorPrefOffOn - Organization setup action: leadInspectorPrefOffOn
    has changed.
-   lockerServiceNextControlOn - Organization setup action:
    lockerServiceNextControlOn has changed.
-   lockerServiceNextOff - Organization setup action: lockerServiceNextOff has
    changed.
-   lockerServiceNextOffOn - Organization setup action: lockerServiceNextOffOn
    has changed.
-   lockerServiceNextOn - Organization setup action: lockerServiceNextOn has
    changed.
-   lockerServiceNextOnOff - Organization setup action: lockerServiceNextOnOff
    has changed.
-   mailAppProductivityEnabledOffOn - Organization setup action:
    mailAppProductivityEnabledOffOn has changed.
-   manyWhoPreferenceOffOn - Changed Shared Activities from off to on.
-   ManyWhoReadyOffOn - Changed Shared Activities Data Upgraded from off to on.
-   mFADirectUILoginOptInOffOn - Organization setup action:
    mFADirectUILoginOptInOffOn has changed.
-   mFADirectUILoginOptInOnOff - Organization setup action:
    mFADirectUILoginOptInOnOff has changed.
-   multipleSAMLConfigsOffOn - Organization setup action:
    multipleSAMLConfigsOffOn has changed.
-   negativeOIQuantityEnabledOffOn - Organization setup action:
    negativeOIQuantityEnabledOffOn has changed.
-   optimizerAppEnabledOffOn - Enabled the Salesforce Optimizer Lightning App
-   orchestrationInSandboxOffOn - Organization setup action:
    orchestrationInSandboxOffOn has changed.
-   orgWideMergeLeadsOnOff (Customize Leads) - Organization setup action:
    orgWideMergeLeadsOnOff has changed.
-   pipelineInspectionPrefOffOn - Organization setup action:
    pipelineInspectionPrefOffOn has changed.
-   pipelineInspectionPrefOnOff - Organization setup action:
    pipelineInspectionPrefOnOff has changed.
-   pipelineInspectionSetupPrefOffOn - Organization setup action:
    pipelineInspectionSetupPrefOffOn has changed.
-   pipelineInspectorSglRollupOffOn - Organization setup action:
    pipelineInspectorSglRollupOffOn has changed.
-   restrictEmailDomainsEnabledOffOn - Organization setup action:
    restrictEmailDomainsEnabledOffOn has changed.
-   restrictEmailDomainsEnabledOnOff - Organization setup action:
    restrictEmailDomainsEnabledOnOff has changed.
-   restrictPasswordAuthOffOn - Organization setup action:
    restrictPasswordAuthOffOn has changed.
-   retainloginhintson - Organization setup action: retainloginhintson has
    changed.
-   rqrEmailChangeConfirmPrefOffOn - Organization setup action:
    rqrEmailChangeConfirmPrefOffOn has changed.
-   rqrEmailChangeConfirmPrefOnOff - Organization setup action:
    rqrEmailChangeConfirmPrefOnOff has changed.
-   rRHInExpAuraSitesPrefOffOn - Organization setup action:
    rRHInExpAuraSitesPrefOffOn has changed.
-   s1encryptedstoragepref2off - Organization setup action:
    s1encryptedstoragepref2off has changed.
-   s1encryptedstoragepref2on - Organization setup action:
    s1encryptedstoragepref2on has changed.
-   s1EncryptedStoragePref2OnOff - Organization setup action:
    s1EncryptedStoragePref2OnOff has changed.
-   salesforceInboxReadReceiptsOffOn - Organization setup action:
    salesforceInboxReadReceiptsOffOn has changed.
-   salesforceInboxReadReceiptsOnOff - Organization setup action:
    salesforceInboxReadReceiptsOnOff has changed.
-   salesforceIqOrgBlocklistCreated (Inbox mobile and legacy desktop apps) -
    Added rebel-alliance.com to org blocklist
-   salesforceIqOrgBlocklistDeleted (Inbox mobile and legacy desktop apps) -
    Removed darth@vader.com from org blocklist
-   selectNoOpptyOnLeadConvertOffOn (Customize Leads) - Organization setup
    action: selectNoOpptyOnLeadConvertOffOn has changed.
-   sellerHomePrefOffOn - Organization setup action: sellerHomePrefOffOn has
    changed.
-   sellerHomeSetupOffOn - Organization setup action: sellerHomeSetupOffOn has
    changed.
-   selNoOpptyOnLeadConvertOffOn - Organization setup action:
    selNoOpptyOnLeadConvertOffOn has changed.
-   showGeneratedEmailCheckboxOffOn - Organization setup action:
    showGeneratedEmailCheckboxOffOn has changed.
-   showSalesblazerInGuidanceCenterOffOn - Organization setup action:
    showSalesblazerInGuidanceCenterOffOn has changed.
-   siqOrgProvisionedOffOn (Inbox mobile and legacy desktop apps) - Enabled
    sales productivity features that require data to be stored using a public
    cloud provider
-   siqUserBlocklistCreated (Inbox mobile and legacy desktop apps) - Added
    anakin@skywalker.com to user blocklist
-   siqUserBlocklistDeleted (Inbox mobile and legacy desktop apps) - Removed
    anakin@skywalker.com from user blocklist
-   skipAsyncApexValidationOffOn - Organization setup action:
    skipAsyncApexValidationOffOn has changed.
-   skipSFAWhenMFAUILoginOffOn - Organization setup action:
    skipSFAWhenMFAUILoginOffOn has changed.
-   skipSFAWhenMFAUILoginOnOff - Organization setup action:
    skipSFAWhenMFAUILoginOnOff has changed.
-   socialProfilesEnableOffOn - Organization setup action:
    socialProfilesEnableOffOn has changed.
-   socialProfilesEnableOnOff - Organization setup action:
    socialProfilesEnableOnOff has changed.
-   stackedModalManagerEnabledOffOn - Organization setup action:
    stackedModalManagerEnabledOffOn has changed.
-   templateEnhancedFolderPrefOffOn - Enable Lightning Email Template Enhanced
    Folder Pref
-   templateEnhancedFolderPrefOnOff - Disable Lightning Email Template Enhanced
    Folder Pref
-   u2FEnabledOffOn - Organization setup action: u2FEnabledOffOn has changed.
-   unifiedActivitiesForECIOffOn - Organization setup action:
    unifiedActivitiesForECIOffOn has changed.
-   uploadFilesOnAttachmentsOffOn - Organization setup action:
    uploadFilesOnAttachmentsOffOn has changed.
-   uploadFilesOnAttachmentsOnOff - Organization setup action:
    uploadFilesOnAttachmentsOnOff has changed.
-   useApexExceptionEmailOn - Organization setup action: useApexExceptionEmailOn
    has changed.
-   useEmailHeadersForThreadingOffOn - Organization setup action:
    useEmailHeadersForThreadingOffOn has changed.
-   useSandboxOrgDomainPrefOffOn - Enabled use of the sandbox org domain
-   useSharingForFlowOrchObjectsOffOn - Organization setup action:
    useSharingForFlowOrchObjectsOffOn has changed.
-   value_VIDEO_CONFERENCE_ZOOM_T_O_S - Organization setup action:
    value_VIDEO_CONFERENCE_ZOOM_T_O_S has changed from false to true
-   verifyOn2faRegistrationOffOn - Organization setup action:
    verifyOn2faRegistrationOffOn has changed.
-   verifyOn2faRegistrationOnOff - Organization setup action:
    verifyOn2faRegistrationOnOff has changed.
-   verifyOnEmailChangeOffOn - Organization setup action:
    verifyOnEmailChangeOffOn has changed.
-   verifyOnEmailChangeOnOff - Organization setup action:
    verifyOnEmailChangeOnOff has changed.
-   videoConferenceZoomOffOn - Organization setup action:
    videoConferenceZoomOffOn has changed.
-   videoConferenceZoomOnOff - Organization setup action:
    videoConferenceZoomOnOff has changed.
-   workOrdersEnabledOffOn - Organization setup action: workOrdersEnabledOffOn
    has changed.
-   workOrdersEnabledOnOff - Organization setup action: workOrdersEnabledOnOff
    has changed.
-   zeroOIQuantityEnabledOffOn - Organization setup action:
    zeroOIQuantityEnabledOffOn has changed.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('aCATAcceptedOffOn','accountInspectorPrefOffOn','accountInspectorSetupOffOn','advancedCMTSecurityOffOn','advancedCMTSecurityOnOff','aITrustPIIMaskingEnabledOffOn','alarmResumeSameRunContextOffOn','autonomousExperienceOffOn','bYOLMigrationStatusPrefOffOn','callSummarizationOffOn','cDPEnabledPrefOffOn','changedCFUniqueOffCustom','changedCFUniqueOnCustom','changedOrgWideEmailAddress','chatbotEnabledOffOn','codeBuilderOffOn','codeBuilderOnOff','contactInspectorPrefOffOn','contactLeadInspectorSetupOffOn','contactUpdateProfileFLSOffOn','contextualEverywhereEnabledOffOn','conversationPilotPrefOffOn','conversationZoomPrefOffOn','conversationZoomPrefOnOff','crossOrgRedirectsEnabledOffOn','crossOrgRedirectsEnabledOnOff','dataCloudReportingPrefOffOn','dataSpacesPlatformSecurityOffOn','debugFlowAsAnotherUserEnabledOff','debugFlowAsAnotherUserEnabledOn','debugFlowAsAnotherUserOffOn','debugFlowAsAnotherUserOnOff','DELETECallCenter','deleteIpWhiteList','deployEdgeDuringRolloutOffOn','depriveSoqlAccessOffOn','diarizationPrefOffOn','diarizationPrefOnOff','diarizationUserDisabled','disableSocialProfilesTWOffOn','disableSocialProfilesYTOffOn','disableSocialProfilesYTOnOff','eDCEinsteinFeatureEnabledOffOn','enablementPartnerPrgmEmailsOffOn','enableOverrideGrantAccessOnOff','enableSIQUserInbox','enhancedUserFieldMaskingOffOn','enhancedUserFieldMaskingOnOff','eventLogGenerationEnabledOffOn','expBundleMetadataPrefOffOn','extensionHostUnrestrictedOffOn','flowBlockAxsToSessionIdOffOn','flowsLightningAppOffOn','flowUseApexExceptionEmailOffOn','gCSCFMigrationMigratedOffOn','INSERTCallCenter','inviteCsnUserEnabledOnOff','jSPublicLoggingLibAllowUIOffOn','jSPublicLoggingLibAllowUIOnOff','leadInspectorPrefOffOn','lockerServiceNextControlOn','lockerServiceNextOff','lockerServiceNextOffOn','lockerServiceNextOn','lockerServiceNextOnOff','mailAppProductivityEnabledOffOn','manyWhoPreferenceOffOn','ManyWhoReadyOffOn','mFADirectUILoginOptInOffOn','mFADirectUILoginOptInOnOff','multipleSAMLConfigsOffOn','negativeOIQuantityEnabledOffOn','optimizerAppEnabledOffOn','orchestrationInSandboxOffOn','orgWideMergeLeadsOnOff','pipelineInspectionPrefOffOn','pipelineInspectionPrefOnOff','pipelineInspectionSetupPrefOffOn','pipelineInspectorSglRollupOffOn','restrictEmailDomainsEnabledOffOn','restrictEmailDomainsEnabledOnOff','restrictPasswordAuthOffOn','retainloginhintson','rqrEmailChangeConfirmPrefOffOn','rqrEmailChangeConfirmPrefOnOff','rRHInExpAuraSitesPrefOffOn','s1encryptedstoragepref2off','s1encryptedstoragepref2on','s1EncryptedStoragePref2OnOff','salesforceInboxReadReceiptsOffOn','salesforceInboxReadReceiptsOnOff','salesforceIqOrgBlocklistCreated','salesforceIqOrgBlocklistDeleted','selectNoOpptyOnLeadConvertOffOn','sellerHomePrefOffOn','sellerHomeSetupOffOn','selNoOpptyOnLeadConvertOffOn','showGeneratedEmailCheckboxOffOn','showSalesblazerInGuidanceCenterOffOn','siqOrgProvisionedOffOn','siqUserBlocklistCreated','siqUserBlocklistDeleted','skipAsyncApexValidationOffOn','skipSFAWhenMFAUILoginOffOn','skipSFAWhenMFAUILoginOnOff','socialProfilesEnableOffOn','socialProfilesEnableOnOff','stackedModalManagerEnabledOffOn','templateEnhancedFolderPrefOffOn','templateEnhancedFolderPrefOnOff','u2FEnabledOffOn','unifiedActivitiesForECIOffOn','uploadFilesOnAttachmentsOffOn','uploadFilesOnAttachmentsOnOff','useApexExceptionEmailOn','useEmailHeadersForThreadingOffOn','useSandboxOrgDomainPrefOffOn','useSharingForFlowOrchObjectsOffOn','value_VIDEO_CONFERENCE_ZOOM_T_O_S','verifyOn2faRegistrationOffOn','verifyOn2faRegistrationOnOff','verifyOnEmailChangeOffOn','verifyOnEmailChangeOnOff','videoConferenceZoomOffOn','videoConferenceZoomOnOff','workOrdersEnabledOffOn','workOrdersEnabledOnOff','zeroOIQuantityEnabledOffOn')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Password Policies

-   minimumPasswordLifetimeDisable (Password Policies) - Disabled requiring
    minimum password lifetime
-   minimumPasswordLifetimeEnable (Password Policies) - Enabled requiring
    minimum password lifetime
-   obscureSecretAnswerDisable (Password Policies) - Disabled obscuring of
    secret answer
-   obscureSecretAnswerEnable (Password Policies) - Enabled obscuring of secret
    answer
-   passwordcomplexity (Password Policies) - Changed password complexity policy
    from Must include alpha and numeric characters to Must include alpha,
    numeric, and special characters
-   passwordexpiry (Password Policies) - Changed password expiry policy from 90
    days to One year
-   passwordhistory (Password Policies) - Changed password history policy from 3
    passwords remembered to 1 password remembered
-   passwordlockout (Password Policies) - Changed password lockout period policy
    from 15 minutes to 30 minutes
-   passwordmaxinvalid (Password Policies) - Changed password maximum invalid
    attempts policy from 10 to 5
-   passwordminlength (Password Policies) - Changed password minimum length
    policy from 8 characters to 7 characters
-   passwordminlengthForProfile (Password Policies) - Changed profile Sith Lord:
    Changed password minimum length policy from 16 characters to 32 characters
-   passwordquestion (Password Policies) - Changed password question policy from
    Cannot contain password to None
-   selfApiSetPasswordDisable (Password Policies) - Disabled use of API
    setPassword() for self-resets

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('minimumPasswordLifetimeDisable','minimumPasswordLifetimeEnable','obscureSecretAnswerDisable','obscureSecretAnswerEnable','passwordcomplexity','passwordexpiry','passwordhistory','passwordlockout','passwordmaxinvalid','passwordminlength','passwordminlengthForProfile','passwordquestion','selfApiSetPasswordDisable')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Portal

-   AccountPRMEnabled (Partner Relationship Management) - Account Confederacy of
    Independent Systems enabled as a Partner Account
-   CSPAccountDisabled (Customer Portal) - Account Confederacy of Independent
    Systems disabled as a Customer Portal account
-   NetworkMemberGroupAdd (Experiences network Member Group) - Added Sith member
    group to Galactic Empire Community
-   NetworkMemberGroupRemove (Experiences network Member Group) - Removed Sith
    member group from Galactic Empire Community
-   NetworksChangedSendWelcomeEmailOn (Experiences send welcome email pref) -
    Enabled welcome emails for Galactic Empire Community
-   NetworksChangedStatusOn (Experiences network status) - Activated Galactic
    Empire Community site
-   ootbProfExtUserOpsEnableOffOn - Organization setup action:
    ootbProfExtUserOpsEnableOffOn has changed.
-   ootbProfExtUserOpsEnableOnOff - Organization setup action:
    ootbProfExtUserOpsEnableOnOff has changed.
-   PRMAccountDisabled (Partner Relationship Management) - Account Confederacy
    of Independent Systems disabled as a Partner account
-   sitesRecordReassignOrgPrefOnOff - Organization setup action:
    sitesRecordReassignOrgPrefOnOff has changed.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('AccountPRMEnabled','CSPAccountDisabled','NetworkMemberGroupAdd','NetworkMemberGroupRemove','NetworksChangedSendWelcomeEmailOn','NetworksChangedStatusOn','ootbProfExtUserOpsEnableOffOn','ootbProfExtUserOpsEnableOnOff','PRMAccountDisabled','sitesRecordReassignOrgPrefOnOff')
ORDER BY CreatedDate DESC LIMIT 1000
```

### SAML Configuration

-   multipleSamlConverted (SAML Configuration) - Converted SAML Configuration as
    Migrated SAML Config
-   multipleSamlEnabled (SAML Configuration) - Enabled Multiple SAML
    Configurations
-   samlSsoConfig_create (SAML Configuration) - Created SAML Configuration
    Migrated SAML Config

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('multipleSamlConverted','multipleSamlEnabled','samlSsoConfig_create')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Sandboxes

-   DeleteSandbox (Sandboxes) - Deleted sandbox, name: mySandbox, sandboxid:
    07E4W000000KINO, sandboxOrgId: 00D770000003f4V, deleted by: 00560000001JNq5
-   deleteScratchOrg - Deleted scratch org with ID: "00D1X000000AmYD"
-   deployedchangeset (Inbound Change Sets) - Deployed Change Set: Quoting
    Process
-   DiscardSandbox (Sandboxes) - Discarded sandbox, name: mySandbox, sandboxid:
    07E4W000000KINO, sandboxOrgId: null, discarded by: 00560000001JNq5
-   SandboxLicenseMatch (Sandboxes) - License match requested, sandboxOrgId:
    00D790000000Nq2, requested by: 0054W00000DiLY4

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('DeleteSandbox','deleteScratchOrg','deployedchangeset','DiscardSandbox','SandboxLicenseMatch')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Security Controls

-   adddelegatedgroup (Security Controls) - Added new delegated group:
    Confederacy_of_Independent_Systems
-   addedtodelegatedgroup (Security Controls) - Added Geonosis to
    Confederacy_of_Independent_Systems delegated group
-   changeDelegateGroupLoginAccess (Security Controls) - Enabled login access on
    delegated group Confederacy_of_Independent_Systems
-   removedfromdelegatedgroup (Security Controls) - Removed Count Dooku from
    Confederacy_of_Independent_Systems delegated group

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('adddelegatedgroup','addedtodelegatedgroup','changeDelegateGroupLoginAccess','removedfromdelegatedgroup')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Session Settings

-   clickjacknoncustomheaderlessoff - Changed clickjack protection for customer
    Visualforce pages with headers disabled attribute from on to off
-   clickjacknoncustomheaderlesson - Changed clickjack protection for customer
    Visualforce pages with headers disabled attribute from off to on
-   clickjacknoncustomoff (Session Settings) - Changed clickjack protection for
    customer Visualforce pages with standard headers attribute from on to off
-   clickjacknoncustomon (Session Settings) - Changed clickjack protection for
    customer Visualforce pages with standard headers attribute from off to on
-   insertAuthSecurityLevel (Session Settings) - Session Security Level for
    Death Star was set to Standard
-   LocalStorageForLogoutUrlOffOn (Session Settings) - Changed Use Local Storage
    for Logout URL from Off to On
-   requiredSessionLevelForProfile (Session Settings) - Changed profile Admin:
    Changed RequiredSessionLevel Value from None to High Assurance
-   updateSessionSecurityLevel (Session Settings) - Session Security Level for
    Passwordless Login changed from High Assurance to Standard

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('clickjacknoncustomheaderlessoff','clickjacknoncustomheaderlesson','clickjacknoncustomoff','clickjacknoncustomon','insertAuthSecurityLevel','LocalStorageForLogoutUrlOffOn','requiredSessionLevelForProfile','updateSessionSecurityLevel')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Transaction Security

-   transactionSecurityPolicyCreatedDisabled (Transaction Security) - Darth
    Vader created a disabled transaction security policy "Block Large Data
    Export".
-   transactionSecurityPolicyCreatedEnabled (Transaction Security) - Darth Vader
    created an enabled transaction security policy "Prevent Large Report
    Download".
-   transactionSecurityPolicyEnabledDisabled (Transaction Security) - Darth
    Vader enabled transaction security policy "Block Large Data Export".
-   transactionSecurityPolicyOffOn - Organization setup action:
    transactionSecurityPolicyOffOn has changed.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('transactionSecurityPolicyCreatedDisabled','transactionSecurityPolicyCreatedEnabled','transactionSecurityPolicyEnabledDisabled','transactionSecurityPolicyOffOn')
ORDER BY CreatedDate DESC LIMIT 1000
```

## Schema

### Big Objects

-   createdBigObj (Big Objects) - Created Big Object: Atom
-   createdCFBigObjects (Big Objects) - Created custom field Description (Text)
    on Atoms
-   deletedBigObj (Big Objects) - Deleted Big Object: Atom
-   hardDeletedBigObj (Big Objects) - Permanently deleted Big Object: Atom

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('createdBigObj','createdCFBigObjects','deletedBigObj','hardDeletedBigObj')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Custom Fields

-   activatedPicklistValueWithColor (Customize Products) - Activated value
    Blaster to Weapon picklist with color Assigned dynamically
-   activatedPicklistValueWithColorCustom (Custom Objects) - Activated value
    Blaster to Weapon picklist with color Assigned dynamically on Stormtrooper
-   changedCF (Customize Order Items) - Changed label of custom field from
    Spaceship to Battleship
-   changedCF_RSFFilter (Customize Accounts) - Changed filter of rollup summary
    field Planets in the Empire
-   changedCF_RSFFilterCustom (Custom Objects) - Changed filter of rollup
    summary field Planets in the Empire custom field on Galaxies
-   changedCFCustom (Custom Objects) - Changed label of custom field on
    Lightsaber from Owner to
-   changedCFDefault - Changed default value for Is Padawan custom field from
    Checked to Unchecked
-   changedCFDefaultCustom (Custom Objects) - Changed default value for Prepaid
    Margin custom field on Quotes from Checked to Unchecked
-   changedCFDefaultFormula
-   changedCFDefaultFormulaCustom (Custom Metadata Types) - Changed default
    value for Light Saber Color custom field on Jedi from "Green" to null
-   changedCFDevName (Customize Opportunities) - Changed field name of Sith Lord
    custom field from Jedi_Master to Sith_Lord
-   changedCFDevNameCustom (Custom Metadata Types) - Changed field name of Sith
    Lord custom field on Character from Jedi_Master to Sith_Lord
-   changedCFFieldHelp (Customize Opportunities) - Changed help text of
    Affiliation custom field
-   changedCFFieldHelpCustom (Custom Objects) - Changed help text of Share with
    Partners custom field on Quotes
-   changedCFFormula (Customize Order Items) - Changed formula of
    Lightsaber_Color custom field from "IF(ISPICKVAL(Affiliation**c, "Jedi"),
    "Blue", "Red")" to "IF(ISPICKVAL(Affiliation**c, "Jedi"), "Green", "Red")"
-   changedCFFormulaCustom (Custom Objects) - Changed formula of
    Lightsaber_Color custom field from "IF(ISPICKVAL(Affiliation**c, "Jedi"),
    "Blue", "Red")" to "IF(ISPICKVAL(Affiliation**c, "Jedi"), "Green", "Red")"
-   changedCFLength (Customize Opportunities) - Changed length of Ship
    restriction background custom field from 32768 to 4000
-   changedCFLengthCustom (Custom Objects) - Changed length of Battleship Name
    custom field on Battleship from 16 to 32
-   changedCFLineCustom (Custom Objects) - Changed # of visible lines for
    Commander Notes custom field on Death Star from 3 to 4
-   changedCFOptionOffOn (Customize Opportunities) - The custom field option
    Required for Lightsaber has changed from off to on
-   changedCFOptionOffOnCustom (Custom Objects) - The custom field option
    Required for Lightsaber on object Character has changed from off to on
-   changedCFOptionOnOff (Customize Opportunities) - The custom field option
    Required for Lightsaber has changed from on to off
-   changedCFOptionOnOffCustom (Custom Objects) - The custom field option
    Required on object Lightsaber has changed from on to off
-   changedCFScale (Customize Opportunities) - Changed decimal places for Max
    Speed custom field from 0 to 2
-   changedCFScaleCustom (Custom Objects) - Changed decimal places for Max Speed
    custom field on Battleship from 0 to 2
-   changedCFType (Customize Campaigns) - Changed field type of Lightsaber
    custom field from Text to Picklist
-   changedCFTypeCustom (Custom Objects) - Changed field type of Lightsaber
    Color custom field on Lightsaber from Text to Picklist
-   changedCFTypeFormula - Changed field type of Lightsaber Color custom formula
    field from Percent to Number
-   changedCFTypeFormulaCustom (Custom Objects) - Changed field type of
    Lightsaber Color custom formula field on Lightsaber from Percent to Number
-   changedCFUniqueOn (Customize Accounts) - Changed unique flag of Battleship
    Factory ID custom field from off to on
-   changedCustEntMaskFromNull (Custom Objects) - Changed record name display
    format for custom object Death Star from blank to DS-{0000}
-   createdCF (Customize Accounts) - Created custom field: Light Saber Color
    (Piklist)
-   createdCF_RSF (Customize Opportunities) - Created roll up summary field:
    Planets in the Empire (count)
-   createdCF_RSFCustom (Custom Objects) - Created roll up summary field Planets
    in the Empire (count) on Galactic Empire
-   createdCFCustom (Custom Objects) - Created custom field Color (Picklist) on
    Light Saber
-   createdCFFormula (Customize Opportunities) - Created custom formula field:
    Affiliation (Text)
-   createdCFFormulaCustom (Custom Objects) - Created custom formula field
    IsPadawan (Checkbox) on Jedi
-   createdCFLookup (Customize Opportunities) - Created custom lookup
    relationship Padawan (Jedi)
-   createdCFLookupCustom (Custom Metadata Types) - Created custom lookup
    relationship Approver (User) on Death Star Visit
-   createdCFMasterDetailCustom (Custom Objects) - Created master-detail field:
    Padawan (Jedi) on Jedi
-   createdDependency (Field Dependencies) - Created dependency for "Tested
    Field" controlled by "Tested Object" on object Error Condition
-   dataClassificationNewField (Data Classification) - Set Field Usage to Active
    for the Lightsaber field on Jedi\_\_c
-   dataClassificationUpdate (Data Classification) - Changed the Data Owner
    metadata field from None to None for the Type field on Opportunity
-   deactivatePicklistValueWithColor (Global Value Sets) - Deactivated value
    Blaster from Weapon picklist with color Assigned dynamically
-   deactivatePicklistValueWithColorCustom (Custom Objects) - Deactivated value
    Blaster from Weapon picklist with color Assigned dynamically on Stormtrooper
-   deletedCF (Customize Leads) - Deleted custom field Jedi Master
-   deletedCFCustom (Custom Objects) - Deleted custom field Jedi Master from
    Jedi
-   entity_history_field_tracked (Track Field History) - Track History for Order
    field Opportunity on
-   entity_history_field_untracked (Track Field History) - Track History for
    Order field Opportunity off
-   feed_field_tracked (Feed Tracking) - Feed Tracking for Stormtrooper field
    Blaster on
-   feed_field_untracked (Feed Tracking) - Feed Tracking for Stormtrooper field
    Blaster off
-   filteredLookupActivate (Customize Opportunities) - Activated Lookup Filter
    for Padawan
-   filteredLookupCreate (Customize Opportunities) - Added Lookup Filter to
    Padawan
-   filteredLookupCreateNewField (Customize Opportunities) - Set Lookup Filter
    Error Message for Padawan to Sith cannot be a Padawan.
-   filteredLookupDeactivate (Customize Opportunities) - Deactivated Lookup
    Filter for Padawan
-   filteredLookupDelete (Customize Opportunities) - Deleted Lookup Filter from
    Marketplace Account
-   filteredLookupEdit (Customize Opportunities) - Changed Lookup Filter Error
    Message for Capital City from Value does not exist to Value does not match
    filter criteria
-   filteredLookupOptional (Customize Opportunities) - Set lookup Filter for
    Padawan to optional
-   filteredLookupRequired (Customize Opportunities) - Set lookup Filter for
    Padawan to required
-   hardDeletedCF (Customize Accounts) - Permanently deleted custom field
    Battleship
-   hardDeletedCFCustom (Custom Objects) - Permanently deleted custom field
    Lightsaber from Jedi
-   removedDependency (Field Dependencies) - Removed dependency for "Tested
    Field" controlled by "Tested Object" on object Error Condition
-   undeletedCF (Customize Order Items) - Undeleted custom field Jedi Master
-   updatedDependency (Field Dependencies) - Updated dependency rules for
    "Tested Field" controlled by "Tested Object" on object Error Condition

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activatedPicklistValueWithColor','activatedPicklistValueWithColorCustom','changedCF','changedCF_RSFFilter','changedCF_RSFFilterCustom','changedCFCustom','changedCFDefault','changedCFDefaultCustom','changedCFDefaultFormula','changedCFDefaultFormulaCustom','changedCFDevName','changedCFDevNameCustom','changedCFFieldHelp','changedCFFieldHelpCustom','changedCFFormula','changedCFFormulaCustom','changedCFLength','changedCFLengthCustom','changedCFLineCustom','changedCFOptionOffOn','changedCFOptionOffOnCustom','changedCFOptionOnOff','changedCFOptionOnOffCustom','changedCFScale','changedCFScaleCustom','changedCFType','changedCFTypeCustom','changedCFTypeFormula','changedCFTypeFormulaCustom','changedCFUniqueOn','changedCustEntMaskFromNull','createdCF','createdCF_RSF','createdCF_RSFCustom','createdCFCustom','createdCFFormula','createdCFFormulaCustom','createdCFLookup','createdCFLookupCustom','createdCFMasterDetailCustom','createdDependency','dataClassificationNewField','dataClassificationUpdate','deactivatePicklistValueWithColor','deactivatePicklistValueWithColorCustom','deletedCF','deletedCFCustom','entity_history_field_tracked','entity_history_field_untracked','feed_field_tracked','feed_field_untracked','filteredLookupActivate','filteredLookupCreate','filteredLookupCreateNewField','filteredLookupDeactivate','filteredLookupDelete','filteredLookupEdit','filteredLookupOptional','filteredLookupRequired','hardDeletedCF','hardDeletedCFCustom','removedDependency','undeletedCF','updatedDependency')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Custom Metadata

-   changedCustMdTypeToProtected (Custom Metadata Types) - Changed Death Star
    Settings from public to protected
-   changedFieldManageabilityCustom (Custom Metadata Types) - Changed field
    manageability of Star Wars Character from Upgradable to Subscriber editable
-   createdCustMdType (Custom Metadata Types) - Created custom metadata type:
    Star Wars Character
-   hardDeletedCustMdType - Deleted custom metadata type: Star Wars Character
-   setupEntityObjectCreated (Star Wars Characters) - Anakin Skywalker was
    created
-   setupEntityObjectDeleted (Opportunity Stage Numbers) - Anakin Skywalker was
    deleted
-   setupEntityObjectFieldUpdated (Star Wars Characters) - Anakin Skywalker:
    Affiliation has changed from Jedi to Sith

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedCustMdTypeToProtected','changedFieldManageabilityCustom','createdCustMdType','hardDeletedCustMdType','setupEntityObjectCreated','setupEntityObjectDeleted','setupEntityObjectFieldUpdated')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Custom Objects

-   add_external_id (Company Information) - Created external identifier
    designation: Account.Battleship Factory ID
-   changeDataCaptureCreatedWithChannel (Change Data Capture) - Added Change
    Data Capture entity User to channel ChangeEvents
-   changedCustEntActivityOn (Custom Objects) - Changed Track Activities setting
    for custom object Stormtrooper from off to on
-   changedCustEntDeployment (Custom Objects) - Changed deployment status of
    custom object Battleship from In Development to Deployed
-   changedCustEntLabel (Custom Objects) - Changed label for custom object from
    Death Star to Death Star 2
-   changedCustEntMask (Custom Objects) - Changed record name display format for
    custom object Estimate from Estimate-{000000} to E-{000000}
-   changedCustEntName (Custom Objects) - Changed object name of Death Star 2
    custom object from Death_Star to Death_Star_2
-   changedCustEntRecName (Custom Objects) - Changed record name of custom
    object Droid from Droid Name to Droid Serial Number
-   changedCustEntRptOn (Custom Objects) - Changed Enable Reports setting for
    custom object Battleship from off to on
-   changedCustEntSearchIndexingOn (Custom Objects) - Changed Search Indexing
    setting for custom object Stormtrooper from off to on
-   changedCustEntTypeAutoNum (Custom Objects) - Changed record name data type
    of custom object Staging Utility to Auto Number (Starting from 0)
-   createdCustEnt (Custom Objects) - Created custom object: Battleship
-   createdFieldSet (Customize Assets) - Created Field Set Line Editor on Quote
-   createdRecordTypeCustom (Custom Objects) - Created record type: Stormtrooper
    on Trooper
-   delete_external_id (Company Information) - Dropped external identifier
    designation: Account.Battleship Factory ID
-   deletedCustEnt (Custom Objects) - Deleted custom object: Battleship
-   deletedFieldSet (Customize Cases) - Deleted Field Set Switchboard Popover
    Fields on Case
-   feed_entity_untracked (Feed Tracking) - Feed Tracking for Asset off
-   hardDeletedCustEnt - Permanently deleted custom object: Battleship
-   updatedFieldSet (Custom Objects) - Changed Field Set Line Editor on Quote

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('add_external_id','changeDataCaptureCreatedWithChannel','changedCustEntActivityOn','changedCustEntDeployment','changedCustEntLabel','changedCustEntMask','changedCustEntName','changedCustEntRecName','changedCustEntRptOn','changedCustEntSearchIndexingOn','changedCustEntTypeAutoNum','createdCustEnt','createdFieldSet','createdRecordTypeCustom','delete_external_id','deletedCustEnt','deletedFieldSet','feed_entity_untracked','hardDeletedCustEnt','updatedFieldSet')
ORDER BY CreatedDate DESC LIMIT 1000
```

### External Objects

-   hardDeletedExtObj (External Objects) - Permanently deleted external object:
    DeathStar
-   xdsDelete (External Objects) - Deleted Datajourney external data source:
    Death Star

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('hardDeletedExtObj','xdsDelete')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Picklists

-   changedPicklist (Customize Opportunities) - Changed Affiliation picklist
    value from Republic to Galactic Empire
-   changedPicklistCustom (Custom Objects) - Changed Affiliation picklist value
    on Droids from Republic to Galactic Empire
-   changedPicklistDefault (Customize Opportunities) - Changed Affiliation
    picklist default value from Republic to none
-   changedPicklistDefaultCustom (Custom Objects) - Changed Affiliation picklist
    default value on Droids from Republic to none
-   changedPicklistPromote (Customize Products) - Promoted picklist field
    Macaron Flavor to new global value set Flavors
-   changedPicklistPromoteCustom (Custom Objects) - Promoted picklist field
    Planets on Galaxy to new global value set Planets
-   changedPicklistReplace (Customize Opportunities) - Replaced Affiliation
    picklist value from Republic to Galactic Empire
-   changedPicklistSort (Customize Opportunities) - Reordered Weapon picklist
-   changedPicklistSortCustom (Custom Objects) - Reordered Weapon picklist on
    Stormtrooper
-   changedPicklistValueApiName (Customize Opportunities) - Changed Affiliation
    picklist value's API name from Republic to Galactic Empire
-   changedPicklistValueApiNameCustom (Custom Objects) - Changed Affiliation
    picklist value on Droids from Republic to Galactic Empire
-   changedPicklistWithColor - Changed Stage picklist value Prospecting color
    from #a845dc to #993399
-   changedUniPickDevName (Global Value Sets) - Changed name of Planets in the
    System global picklist from Planets to Planets_in_the_System
-   changedUniPicklist (Global Value Sets) - Changed label of global picklist
    from Planets to Planets in the System
-   createdPicklistWithColor (Customize Opportunities) - Added value Blaster to
    Weapon picklist with color Assigned dynamically
-   createdPicklistWithColorCustom (Custom Objects) - Added value Blaster to
    Weapon picklist with color Assigned dynamically on Stormtrooper
-   createGlobalPicklist (Global Value Sets) - Created global picklist : Planets
    in the System
-   deletedGlobalPicklist (Global Value Sets) - Deleted global picklist :
    Planets in the System
-   deletedPicklistMapWithColor (Customize Accounts) - Deleted value Blaster
    with color Assigned dynamically from Weapon picklist and replaced with value
    Pistol
-   deletedPicklistMapWithColorCustom (Custom Objects) - Deleted value Blaster
    with color Assigned dynamically from Weapon picklist on Stormtrooper and
    replaced with value Pistol
-   deletedPicklistWithColor (Customize Opportunities) - Deleted value Pistol
    from Weapon picklist with color Assigned dynamically
-   deletedPicklistWithColorCustom (Custom Objects) - Deleted value Pistol from
    Weapon picklist with color Assigned dynamically on Stormtrooper
-   hardDeletedGlobalPicklist (Global Value Sets) - Permanently deleted global
    picklist : Status

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedPicklist','changedPicklistCustom','changedPicklistDefault','changedPicklistDefaultCustom','changedPicklistPromote','changedPicklistPromoteCustom','changedPicklistReplace','changedPicklistSort','changedPicklistSortCustom','changedPicklistValueApiName','changedPicklistValueApiNameCustom','changedPicklistWithColor','changedUniPickDevName','changedUniPicklist','createdPicklistWithColor','createdPicklistWithColorCustom','createGlobalPicklist','deletedGlobalPicklist','deletedPicklistMapWithColor','deletedPicklistMapWithColorCustom','deletedPicklistWithColor','deletedPicklistWithColorCustom','hardDeletedGlobalPicklist')
ORDER BY CreatedDate DESC LIMIT 1000
```

## Data Management

### Case Feeds

-   value_CASE_FEEDS_JOB_STATUS - Case Feeds Job Status
-   value_CASE_FEEDS_PROCESSING_STATE - Case Feeds Processing State

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('value_CASE_FEEDS_JOB_STATUS','value_CASE_FEEDS_PROCESSING_STATE')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Einstein

-   ci_createdNew (Einstein Email Insights) - Created a new custom insight:
    Rebel Alliance
-   ci_updatedCUnknown (Einstein Email Insights) - Organization setup action:
    [Competitor Mentioned] has changed.
-   eCIAutoOpptyMatchingPrefOffOn - Einstein Conversation Insights
    configuration: Turn On Related Record Matching was turned on.
-   enableSIQUserNonEAC (Inbox mobile and legacy desktop apps) - Enabled
    Einstein Activity Capture activity sharing for user: Sith Lord

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('ci_createdNew','ci_updatedCUnknown','eCIAutoOpptyMatchingPrefOffOn','enableSIQUserNonEAC')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Historical Trending

-   HistoricalTrendingEntityDeleted (Customize Historical Entity Trending) -
    Historical Trending for Product Feature Request deleted
-   HistoricalTrendingEntityTracked (Customize Historical Entity Trending) -
    Historical Trending for Product Feature Request on
-   HistoricalTrendingEntityUnTracked (Customize Historical Entity Trending) -
    Historical Trending for Product Feature Request off
-   HistoricalTrendingFieldDeleted - Historical Trending for Product Feature
    Request field 00N60000002boqR deleted
-   HistoricalTrendingFieldTracked (Customize Historical Field Trending) -
    Historical for Product Feature Request field 00N60000002boqR on
-   HistoricalTrendingFieldUnTracked (Customize Historical Field Trending) -
    Historical Trending for Product Feature Request field 00N60000002boqR off
-   HistoricalTrendingFilterChanged (Customize Historical Entity Trending) -
    Historical data filter for Product Feature Request changed
-   HistoricalTrendingFilterDeleted (Customize Historical Entity Trending) -
    Historical data filter for Product Feature Request deleted

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('HistoricalTrendingEntityDeleted','HistoricalTrendingEntityTracked','HistoricalTrendingEntityUnTracked','HistoricalTrendingFieldDeleted','HistoricalTrendingFieldTracked','HistoricalTrendingFieldUnTracked','HistoricalTrendingFilterChanged','HistoricalTrendingFilterDeleted')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Mass Utility

-   accountteamreassign (Data Management) - Used mass account team reassign
    utility
-   accounttransfer (Data Management) - Used mass account transfer utility
-   emptiedAdminRecycleBin (Data Management) - Emptied 25596 record(s) from the
    organization's Recycle Bin
-   emptiedUserRecycleBin (Data Management) - Emptied 15 record(s) from the
    Recycle Bin
-   forceRecalc_RSFField (Customize Orders) - the RSF field Planets in the
    Empire has been re-calculated
-   forceRecalc_RSFFieldCustom (Custom Objects) - the RSF field Planets in the
    Empire for Accounts has been re-calculated
-   opportunityteamreassign (Data Management) - Used mass opportunity team
    reassign utility

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('accountteamreassign','accounttransfer','emptiedAdminRecycleBin','emptiedUserRecycleBin','forceRecalc_RSFField','forceRecalc_RSFFieldCustom','opportunityteamreassign')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Matching and Duplicate Rules

-   activatedMatchRule (Matching Rule) - Droid matching rule, Droid Serial
    Number Matching Rule, activating by Darth Vader
-   changedDuplicateFilter (Duplicate Rule) - For duplicate rule Standard
    Duplicate Rule for Accounts, changed evaluation criteria.
-   changedDuplicateRule (Duplicate Rule) - For the Account duplicate rule Droid
    Serial Number, changed "Active" from "true" to "false"
-   changedDuplicateRuleMatchRule (Duplicate Rule) - For duplicate rule Standard
    Duplicate Rule for Accounts Extended, changed matching rules.
-   changedMatchRule (Matching Rule) - For matching rule Standard Account
    Matching Rule, changed Advanced Logic from null to 1 AND 2
-   createdDuplicateRule (Duplicate Rule) - Created new 01I4W000002HdqL
    duplicate rule "Droid Serial Number". Set "Record-Level Security" to
    "Enforce sharing rules"
-   createdMatchRule (Matching Rule) - Created new Account matching rule
    Standard Account Matching Rule
-   createdMatchRuleItem (Matching Rule) - For matching rule Standard Account
    Matching Rule, added matching criteria where matching method is Exact, the
    field is Website and match blank fields is "Does Not Match If Null"
-   setMatchEngine (Matching Rule) - For matching rule Standard Account Matching
    Rule, matching engine set to Fuzzy Match Engine.

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('activatedMatchRule','changedDuplicateFilter','changedDuplicateRule','changedDuplicateRuleMatchRule','changedMatchRule','createdDuplicateRule','createdMatchRule','createdMatchRuleItem','setMatchEngine')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Miscellaneous

-   changedCleanRule (Data Integration Rule) - For Data Integration Rule
    Geocodes for the Address field of Address, changed "Current Status" from
    "Inactive" to "Active"
-   createdqueue (Data Management) - Created Queue Death Star Escalations
-   deletedqueue (Data Management) - Deleted Queue Death Star Escalations
-   deletedReportJob (Reporting Snapshots) - Deleted reporting snapshot Planets
-   export (Data Export) - Requested an export
-   leadassrule (Customize Leads) - Changed Lead Assignment Rule New Default
    Rule
-   queueMembership (Data Management) - Changed membership for Queue Death Star
    Escalations
-   updatedqueue (Data Management) - Updated Queue Death Star Escalations:
    Changed Name from Death Star Requests to Death Star Escalations

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedCleanRule','createdqueue','deletedqueue','deletedReportJob','export','leadassrule','queueMembership','updatedqueue')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Sharing Defaults

-   defaultCustomEntityExtAccess (Sharing Defaults) - Changed default external
    access for Stormtrooper from Public Read Only to Private
-   extAccessChanged (Sharing Defaults) - Changed default external access for
    User from Public Read Only to Private
-   owdExternalUpdateStartedForEntity (Sharing Defaults) - Started default
    external access update for Stormtrooper from Public Read Only to Private
-   owdUpdateFinished (Sharing Defaults) - Finished Organization-Wide Defaults
    update
-   owdUpdateStarted (Sharing Defaults) - Started Organization-Wide Defaults
    update

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('defaultCustomEntityExtAccess','extAccessChanged','owdExternalUpdateStartedForEntity','owdUpdateFinished','owdUpdateStarted')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Sharing Rules

-   deleteRoleSharingRuleCascade (Sharing Rules) - Cascade deleted Opportunity
    Owner Rule EMEA due to deletion of role EMEA Manager
-   deleteSharingRule (Sharing Rules) - Deleted Opportunity Owner Sharing Rule
    EMEA
-   externalSharingModelEnabled (Sharing Defaults) - Enabled External Sharing
    Model
-   insertSharingRule (Sharing Rules) - Created Opportunity Owner Sharing Rule
    EMEA
-   noChildImplicitEnabled (Sharing Rules) - Enabled faster account sharing
    recalculation by not storing contact implicit child shares
-   recalcSharingRuleComplete (Sharing Rules) - Completed sharing rule
    recalculation: Account
-   recalcSharingRuleStart (Sharing Rules) - Initiated sharing rule
    recalculation: Opportunity
-   recalcSingleSharingRuleComplete (Sharing Rules) - Completed Opportunity
    Owner Rule recalculation: EMEA
-   recalcSingleSharingRuleStart (Sharing Rules) - Initiated Opportunity Owner
    Rule recalculation: EMEA
-   secureGuestUserRecordAccessEnabled (Sharing Defaults) - Enabled Secure Guest
    User Record Access
-   updateSharingRule (Sharing Rules) - Updated Opportunity Criteria-Based
    Sharing Rule Owned By CORP: Changed Name from Owned By ISO to Owned By CORP,
    DeveloperName from Owned_By_ISO to Owned_By_CORP

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('deleteRoleSharingRuleCascade','deleteSharingRule','externalSharingModelEnabled','insertSharingRule','noChildImplicitEnabled','recalcSharingRuleComplete','recalcSharingRuleStart','recalcSingleSharingRuleComplete','recalcSingleSharingRuleStart','secureGuestUserRecordAccessEnabled','updateSharingRule')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Sharing Sets

-   insertLpuAccessMapping (Sharing Sets) - Created access mapping for sharing
    set 0H279000000009J on 01I7900000097jP with access
    Contact.ReportsTo=Owner.Contact(Public Read/Write)
-   insertSharingSets (Sharing Sets) - Created sharing set Stormtroopers
    (0H279000000009J )
-   updateLpuAccessMapping (Sharing Sets) - Updated access mapping for sharing
    set 0H279000000009J on 01I7900000097jP. Changed UserField from
    Contact.ReportsTo to Contact.00N60000002gfBS, Field from Owner.Contact to
    Owner.Account
-   updateProfileMapping (Sharing Sets) - Updated sharing set 0H279000000009J
    with profiles 00e60000001BgPF
-   updateSharingSets (Sharing Sets) - Updated sharing set Stormtroopers
    (0H279000000009J )

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('insertLpuAccessMapping','insertSharingSets','updateLpuAccessMapping','updateProfileMapping','updateSharingSets')
ORDER BY CreatedDate DESC LIMIT 1000
```

## UI

### Apps, Tabs and Pages

-   changedCustEntTabMotif (Custom Tabs) - Changed style of Death Star custom
    object tab from Boat to Leaf
-   changedCustomTabField (Custom Tabs) - Changed Label of custom Lightning Page
    tab Death Star from DeathStar to Death Star 2
-   changedCustWebTabURL (Custom Tabs) - Changed link URL for Death Star
    Position custom web tab from https://death-star.com/coordinates to
    https://death-star.com/position
-   changedFlexiPage (Lightning Pages) - Changed Lightning Page: Death Star
-   changedTabSetTabs (Custom Apps) - Changed tabs of custom app Death Star
-   createdCustEntTab (Custom Tabs) - Created custom object tab: Death Star
-   createdCustomTab (Custom Tabs) - Created custom Lightning Component tab:
    Death Star Controls
-   createdFlexiPage (Lightning Pages) - Created Lightning Page: Death Star
-   createdTabSet (Custom Apps) - Created custom app Death Star
-   deletedCustEntTab (Custom Tabs) - Deleted custom object tab: Death Star
-   deletedCustomTab (Custom Tabs) - Deleted custom Lightning Component tab:
    Death Star
-   deletedCustWebTab (Custom Tabs) - Deleted custom web tab: Death Star Portal
-   deletedFlexiPage (Lightning Pages) - Deleted Lightning Page: Death Star
-   deletedTabSet (Custom Apps) - Deleted custom app Death Star
-   renamedtab (Rename Tabs and Labels) - Install Processor Log: Changed tab
    name from インストールプロセッサログ to インストールプロセッサーログ

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedCustEntTabMotif','changedCustomTabField','changedCustWebTabURL','changedFlexiPage','changedTabSetTabs','createdCustEntTab','createdCustomTab','createdFlexiPage','createdTabSet','deletedCustEntTab','deletedCustomTab','deletedCustWebTab','deletedFlexiPage','deletedTabSet','renamedtab')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Layouts

-   accountlayout (Customize Accounts) - Changed Account page layout Account
    Layout
-   activitylayout (Customize Activities) - Changed Activity page layout Task
    Layout
-   addedFieldToCompactLayout (Custom Objects) - Added Name field to Death_Star
    Compact Layout on Death Star
-   assetlayout (Customize Assets) - Changed Asset page layout Asset Layout
-   campaignlayout (Customize Campaigns) - Changed Campaign page layout Campaign
    Layout
-   caselayout (Customize Cases) - Changed Cases page layout CSS Page Layout 2.0
-   contactlayout (Customize Contacts) - Changed Contact page layout Contact
    Layout
-   contractlayout (Customize Contracts) - Changed Contract page layout Contract
    Layout
-   createdCompactLayout (Custom Objects) - Created Compact Layout Planet on
    Planet
-   createdcustentlayout (Custom Objects) - Created Planet page layout Death
    Star Layout
-   custentlayout (Custom Objects) - Changed Planet page layout Death Star
    Layout
-   custmdtypelayout (Custom Metadata Types) - Changed Star Wars Character page
    layout Star Wars Character Layout
-   deletedaccountlayout (Customize Accounts) - Deleted Account page layout
    Republic Manager Layout
-   deletedcontactlayout (Customize Contacts) - Deleted Contact page layout
    Republic Contact Layout
-   deletedcustentlayout (Custom Objects) - Deleted Planet page layout Death
    Star Layout
-   deletedopplayout (Customize Opportunities) - Deleted Opportunity page layout
    PRM Deal Registration - Direct Partner
-   leadlayout (Customize Leads) - Changed Lead page layout Lead
-   opplayout (Customize Opportunities) - Changed Opportunity page layout
    Opportunity Layout
-   orderlayout (Customize Orders) - Changed Order page layout Order Layout
-   productlayout (Customize Products) - Changed Product page layout Product
    Layout
-   removedFieldOnCompactLayout (Custom Objects) - Removed 00N5e00000fbJFn field
    from Death_Star Compact Layout on Death Star
-   savedlistlayoutCase (Customize Cases) - Changed Case search layout Search
    Results
-   savedlistlayoutCustomObject (Custom Objects) - Changed Quote search layout
    Search Results
-   savedlistlayoutOpportunity (Customize Opportunities) - Changed Opportunity
    search layout List View
-   updatedCompactLayoutMapping (Customize Opportunities) - Weapon Compact
    Layout for Blaster Rifle record type was changed from System Default to
    Inherit from Primary
-   updatedDefaultCompactLayoutMapping (Custom Objects) - Weapon primary Compact
    Layout was changed from System Default to Weapon
-   userlayout (Customize Users) - Changed User page layout User Layout
-   wolayout (Customize Work Orders) - Changed Work Order page layout Install
    Work Order

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('accountlayout','activitylayout','addedFieldToCompactLayout','assetlayout','campaignlayout','caselayout','contactlayout','contractlayout','createdCompactLayout','createdcustentlayout','custentlayout','custmdtypelayout','deletedaccountlayout','deletedcontactlayout','deletedcustentlayout','deletedopplayout','leadlayout','opplayout','orderlayout','productlayout','removedFieldOnCompactLayout','savedlistlayoutCase','savedlistlayoutCustomObject','savedlistlayoutOpportunity','updatedCompactLayoutMapping','updatedDefaultCompactLayoutMapping','userlayout','wolayout')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Lightning Components

-   changedAuraComponent (Lightning Components) - Changed DeathStarPanel Aura
    Component
-   changedLightningWebComponent (Lightning Components) - Changed
    deathStarTargetLookup Lightning Web Component
-   createdAuraComponent (Lightning Components) - Created DeathStarPanel Aura
    Component
-   createdLightningWebComponent (Lightning Components) - Created
    deathStarTargetLookup Lightning Web Component
-   deletedAuraComponent (Lightning Components) - Deleted DeathStarPanel Aura
    Component
-   deletedLightningWebComponent (Lightning Components) - Deleted
    deathStarTargetLookup Lightning Web Component

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedAuraComponent','changedLightningWebComponent','createdAuraComponent','createdLightningWebComponent','deletedAuraComponent','deletedLightningWebComponent')
ORDER BY CreatedDate DESC LIMIT 1000
```

### Links, Buttons and Actions

-   changedCustLinkBehavior (Customize Cases) - Changed Activate_Superlaser
    button or link behavior from Display in existing window without sidebar or
    header to Display in existing window with sidebar
-   changedCustLinkContent (Customize Opportunities) - Changed
    Death_Star_Position button or link content
-   changedCustLinkContentCustom
-   changedCustLinkContentCustomPageItem
-   changedCustLinkContentSource (Customize Cases) - Changed Death_Star_Position
    button or link content source from Visualforce Page to URL
-   changedCustLinkContentSourceCustom (Custom Objects) - Changed
    Add_Change_Address button or link content source on Contract Licenses from
    Visualforce Page to URL
-   changedCustLinkContentSourceCustomPageItem
-   changedCustLinkDisplayType - Changed Death_Star_Position button or link
    display type from Detail Page Button to Detail Page Link
-   changedCustLinkLabel (Customize Opportunities) - Changed Death_Star_Position
    button or link label from Death Star Coordinates to Death Star Position
-   changedCustLinkLabelCustom (Custom Objects) - Changed Activate_Superlaser
    button or link label on DeathStar from Activate_Superlaser (beta) to
    Activate_Superlaser
-   changedCustLinkLabelCustomPageItem
-   changedQuickActionLabelCustom (Customize Cases) - Changed
    Activate_Superlaser Action label on DeathStar from Activate Laser to
    Activate Superlaser
-   changedQuickActionLayout (Customize Opportunities) - Changed Action Layout
    for action: Activate_Superlaser
-   createdActionOverride - Added standard button override: View (Lightning Page
    null)
-   createdActionOverrideCustom (Custom Objects) - Added standard button
    override on Quote Lines: View (Lightning Page null)
-   createdCustLink - Created custom button or link: Character_Promoted (List
    Button)
-   createdCustLinkCustom (Custom Objects) - Created custom button or link on
    DeathStar: Death_Star_Position (Detail Page Button)
-   createdCustLinkCustomPageItem (Customize Home) - Created home page custom
    link: Activate_Superlaser (Detail Page Link)
-   createdQuickAction (Global Actions) - Created Action: Activate_Superlaser
-   createdQuickActionCustom (Global Actions) - Created Action on DeathStar:
    Activate_Superlaser
-   deletedActionOverride - Reset standard button override:
    AddAccountDefaultTeam
-   deletedActionOverrideCustom (Custom Objects) - Reset standard button
    override on Battleship: Edit
-   deletedCustLink (Customize Cases) - Deleted custom button or link:
    Death_Star_Position
-   deletedCustLinkCustom (Custom Objects) - Deleted custom button or link on
    DeathStar: Death_Star_Position
-   deletedCustLinkCustomPageItem (Customize Home) - Deleted home page custom
    link: Death_Star_Position
-   deletedQuickAction (Global Actions) - Deleted Action: Activate_Superlaser
-   deletedQuickActionCustom (Customize Cases) - Deleted Action on DeathStar:
    Activate_Superlaser

```
SELECT CreatedDate, CreatedById, CreatedBy.Username, Action, Display, Section, DelegateUser
FROM SetupAuditTrail
WHERE Action IN ('changedCustLinkBehavior','changedCustLinkContent','changedCustLinkContentCustom','changedCustLinkContentCustomPageItem','changedCustLinkContentSource','changedCustLinkContentSourceCustom','changedCustLinkContentSourceCustomPageItem','changedCustLinkDisplayType','changedCustLinkLabel','changedCustLinkLabelCustom','changedCustLinkLabelCustomPageItem','changedQuickActionLabelCustom','changedQuickActionLayout','createdActionOverride','createdActionOverrideCustom','createdCustLink','createdCustLinkCustom','createdCustLinkCustomPageItem','createdQuickAction','createdQuickActionCustom','deletedActionOverride','deletedActionOverrideCustom','deletedCustLink','deletedCustLinkCustom','deletedCustLinkCustomPageItem','deletedQuickAction','deletedQuickActionCustom')
ORDER BY CreatedDate DESC LIMIT 1000
```

<!-- referencestop -->
