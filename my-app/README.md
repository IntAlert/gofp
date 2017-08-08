# #IScreamForPeace


# TODO:
- Hook up Twitter flow
- Hook up Facebook flow
- Create Service for upload API
- Create Service for Prize Draw
- Desktop view
- Deploy



# Development
0. Clone this repo
1. `npm install`
2. `npm run build`
3. `npm start`

# Deployment
1. `az login`
2. `ng build -prod --aot=false`
3. `cd ..`
3. `git add .`
4. `git commit -m ...`
5. `git push azure master`

# Setting up the Azure Environment
cf. https://docs.microsoft.com/en-us/azure/app-service-web/app-service-web-get-started-nodejs
1. `az login`
2. Configure a deployment user: `az appservice web deployment user set --user-name ***`
3. Enter deployment user password
4. Create a resource group: `az group create --name GOFP_RG --location westeurope`
5. Create FREE Azure App Service plan: `az appservice plan create --name quickStartPlan --resource-group GOFP_RG --sku FREE`
6. Create a web app: `az appservice web create --name GOFP --resource-group GOFP_RG --plan quickStartPlan`
7. Configure local Git deployment: `az appservice web source-control config-local-git --name GOFP --resource-group GOFP_RG --query url --output tsv`
8. Add Git Remote: `git remote add azure https://GOFP@GOFP.scm.azurewebsites.net/GOFP.git`
9. Update Application Settings: `az appservice web config appsettings update --name GOFP --resource-group GOFP_RG --settings NODE_ENV=production`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
