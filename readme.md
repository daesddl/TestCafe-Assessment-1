# Testcafe Workshop (Front End)

### First Assessment

Author: Daniel Espinosa.

email: daes.ddl@gmail.com

---

Automate given scenarios for the sample page [SauceDemo](https://www.saucedemo.com/)

Test Files:

1. `Login_ValidUsers.test.js` 
    * Script Name:  ` test_login_ValidUsers `
    * Covering Valid Usernames provided by the Website:
        * standard_user
        * problem_user
        * performance_glitch_use
2. `Login_InvalidUsers.test.js` 
    * Script Name: ` test_login_InvalidUsers `
    * Verifying that the Login proceed can not proceed without using provided valid Users/Passwords
    * Test validates all possible errors handled by the Login Process.
        * Epic sadface: Username and password do not match any user in this service
        * Epic sadface: Username and password do not match any user in this service
        * Epic sadface: Sorry, this user has been locked out.
3. `Logout.test.js` 
    * Script Name: ` test_logout `
    * Validate user navigates to the Login Page.
4. `Navigate_ShoppingCart.test.js` 
    * Script Name: ` test_Navigate_ShoppingCart `
    * Validate user navigate to the Shopping Cart Page
5. `AddItem_ShoppingCart.test.js` 
    * Script Name: ` test_AddItem_ShoppingCart `
    * Validate that items added to the Shopping Cart matches with the information at Shopping Cart Page.
    * Validate multiple items added to the Shopping Cart
6. `MissingInformation_Checkout.test.js` 
    * Script Name: ` test_MissingInformation_Checkout `
    * Validate Error Messages are within filling the mail information:
        * Error: First Name is required
        * Error: Last Name is required
        * Error: Postal Code is required
7. `Overview_Checkout.test.js` 
    * Script Name: ` test_Overview_Checkout `
    * Validates the user navigates to the Overview Page once data has been filled
8. `ValidateItems_Overview_Checkout.test.js` 
    * Script Name: ` test_ValidateItems_Checkout `
    * Validates items in the Overview Page match with added items
        * Single Item
        * Multiple Dynamic Items
9. `Complete_Purchase.test.js` 
    * Script Name: ` test_Complete_Purchase `
    * Validate the user navigates to the Confirmation Page.

---
#### Full Coverage Test ran with the following Script using npm resources from the json package
- It covers the test on the available Web browsers:
    * Firefox
    * Chrome
    * Chromium
    * Internet Explorer
    * Edge
    * Opera
    * Safari
-  Using XUNIT as the main Reporter under console
- JSON File: ` testData.json ` provided as the Data File
-

        npm run all_test

In case may be needed to run the full coverage test only on Chrome Web browser:
        
        npm run test_all_Chrome
