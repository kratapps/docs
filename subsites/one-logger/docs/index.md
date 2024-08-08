<a href="https://docs.kratapps.com/one-logger">
  <img title="One Logger" alt="TDF" width="60px" height="60px" align="right"
       src="./images/one_logger_logo_200_200.png"  />
</a>

# One Logger

[![App Exchange](https://img.shields.io/badge/AppExchange-One%20Logger%20-blue?logo=salesforce)](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000GV75lUAD)
[![Security Review](https://img.shields.io/badge/Security%20Review-Passed-green)](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000GV75lUAD)

Enterprise logger for all organizations.

Collect and monitor logs across all your Salesforce apps.

## Features

-   Platform event based logging utility, featuring a fluent interface.
-   Ability to import logs from various external solutions.
-   Support for Apex, Flows, database errors, HTTP/REST requests, inbound
    emails.
-   User-friendly interface for easy exploration and monitoring of logs.
-   Slack integration plugin.
-   Flexibility to create custom plugins as per specific requirements.

## Logging API example

```apex
public class SpaceshipController {
    private static ok.Logger logger = ok.Logger.getLogger(SpaceshipController.class);
    private Spaceship__c spaceship;

    public Boolean prepareForHyperspaceJump() {
        Id pilotId = UserInfo.getUserId();
        Boolean isAuthorized = isHyperspaceJumpAuthorized(pilotId);
        if (!isAuthorized) {
            // WARNING log.
            logger.warn().linkSObject(spaceship).linkSObject2(pilotId).log('Pilot is not authorized.');
            return false;
        }
        // INFO log.
        logger.info().addPayloadJson(spaceship.getEngineStatus()).log('Hyperspace jump is ready.');
        return true;
    }
}
```

See more [examples](docs/api/logging-examples.md).

## Contents

-   [Docs](docs/getting-started/setup.md)
-   [Object Reference](docs/reference/ok__Log__c.md)
-   [Apex Reference](docs/reference/Log.md)
-   [Release Notes](docs/release-notes/1.44.md)
-   [Plugins](docs/plugins/slack-for-one-logger.md)

## Pricing

See [pricing](pricing.md).
