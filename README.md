# Smart-Human-Resources

##Steps to Install##

-After that, you need to install Angular CLI.The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications.
-By using command Prompt you can install this setup, one thing in mind you need to get in to the folder path where source code inside smartscroll located and then proceed the below steps.
(For example: C:\smartscroll\source code\npm install)
-First you need to install the Angular CLI: npm install -g @angular/cli
-After that you should install the node packages: npm install
-After completing installation process you can run using ng serve -o.Wait for few seconds to open in browser.
-Now you can run this Template in web browser from your PC or Laptop locally.
-After that if you want integrate this scrollPack Component into your product.

##Steps for Deployment##

1. To install NodeJS
   https://nodejs.org/en/download/
2. To install Ionic and cordova
   use command in your terminal
   npm install -g ionic cordova
3. After extracted the code
   npm install
4. To change the logo and color code of the app refer highlighted lines in the below image and made changes in home.ts file
5. check the installed plugins list use this cmd ionic cordova plugin ls
   if any plugin is missing please refer
   https://ionicframework.com/docs/native
   and install the plugins
6. To take build in (android/ios/browser) you need to add the platform
   ionic cordova platform add platform_name
7. To take build
   ionic cordova build platform_name
