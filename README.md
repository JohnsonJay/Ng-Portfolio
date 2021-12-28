# NgPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

This project, paired with the tutorials, is aimed at allowing devs to create and customize their own portfolio site using Angular.
With Firebase there is an added benefit of being able to store data and host your site (free of charge).

## Getting Started
### The Angular App
* Once you've cloned the repo, be sure to run `npm i`.
* Assuming you have an existing firebase project: 
    * Run `firebase init` to initialize firebase in your project and be sure to select the existing project.
    * Be sure to include Firebase Hosting, and Firestore
    * Ensure that your public directory is the same as the build `outputPath` in your `angular.json`. In this case it will be `/dist/Ng-Portfolio`.
* **Be sure to include your Firebase config settings inside the `environment.ts` and `environment.prod.ts`** (Feels like a bit too much effort to create separate environments for a portfolio app.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build and Deploy to Firebase

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Be sure to delete the current `/dist` directory and all of its contents. 
* Run `ng build --prod`.
* Cd in to the `/dist/Ng-Portfolio` directory and run the command: `firebase deploy --only hosting`.
* Have a look at the terminal for the URL which your app will be hosted on.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Buy me a coffee... pretty please
<a href="https://www.buymeacoffee.com/jayjohnson" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>
