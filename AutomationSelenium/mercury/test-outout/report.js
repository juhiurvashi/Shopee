$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Admin Login Feature",
  "description": "",
  "id": "admin-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Test Scenario",
  "description": "",
  "id": "admin-login-feature;login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "admin is already on Logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "admin delete a user by clicking on more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "admin clicks on delete",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Admin confirms to delete",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user should be deleted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.admin_is_already_on_Logged_in()"
});
formatter.result({
  "duration": 80558179400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Delete\"}\n  (Session info: chrome\u003d81.0.4044.113)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLU-LP-00004\u0027, ip: \u002710.81.234.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d81.0.4044.20 (f006328e39a9769596eb506c8841c3004b24e747-refs/branch-heads/4044@{#244}), userDataDir\u003dC:\\Users\\urvashi\\AppData\\Local\\Temp\\scoped_dir9944_1274787131}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63367}, acceptInsecureCerts\u003dfalse, browserVersion\u003d81.0.4044.113, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 4ad5edc9ec470bc3021857002df1f28f\n*** Element info: {Using\u003dlink text, value\u003dDelete}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:470)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.StepDefinition.admin_is_already_on_Logged_in(StepDefinition.java:42)\r\n\tat ✽.Given admin is already on Logged in(AdminLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.admin_clicks_on_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.admin_confirms_to_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_should_be_deleted_successfully()"
});
formatter.result({
  "status": "skipped"
});
});