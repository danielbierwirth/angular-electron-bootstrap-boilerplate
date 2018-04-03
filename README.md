# Angular-Electron-Boilerplate

Bootstrap and package your project with Angular5+ and Electron framework for creating desktop applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

# Introduction

Boilerplate contains:

- Angular5+
- Electron with Typescript + SASS
- Bootstrap UI (Frontend)
- Electron-store package for persistent storage
- Multilinugal support

Boilerplate development features:

- Hot-Reload
- Lint Typescript files
- App packaging to build application for production use (MAC, Linux, Win)

Projects using the boilderplate can be build the following ways:

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

# Getting Started - Setup development environment

Install dependencies with npm:

`npm install`

Angular-cli should be installed `@angular/cli` in npm global context.
`npm install -g @angular/cli`


**That's all, your project and all required modules should be setup and project should be ready to be build.**


## Build electron app for development

Open terminal at root of project path and type

`npm start`

Start Angular + Electron app in a local development environment. The enty application code (creating electron window, ...) is managed by `main.ts`. `npm start` will open electron app in browser and inside electron window  with hot reload feature. Code changes will trigger 

Note: "Developer Tools" in  browser can be deactivated by commenting `win.webContents.openDevTools();` in `main.ts`.

Note: Please check `services/electron.service.ts` for conditional import import of electron/native node libraries.

## Manage your environment variables

- Using local variables :  `npm start` or `cross-env ENV=local npm start`
- Using development variables :  `cross-env ENV=dev npm start`
- Using production variables  :  `cross-env ENV=rod npm start`

# Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve`| Execute the app in the browser (including hot reloading). |
|`npm run start`| Execute the app in local development environment with hot reload enabled. |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot (production mode). Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Application is optimised. Only /dist folder and node dependencies are included in the executable.**

Run `npm run build:prod` to build application in production mode. The build artifacts will be stored in the `dist/` directory.

## Browser mode and development server

Execute the application in the browser:

`npm run ng:serve`

To start development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Note that you can't use Electron or NodeJS native libraries in this case. Please check `services/electron.service.ts` for conditional import of electron/Native libraries.

# Adding new modules, components, services, ...

Use the angular generator to generate modules, comonents, services, ...

### Create Angular Module
`ng g module annotator` generates following files that make up an angular module
src/app/annotator/annotator.module.ts

### Create Angular Component
`ng g component annotator` generates following files that make up an angular component
src/app/annotator/annotator.component.scss
src/app/annotator/annotator.component.html
src/app/annotator/annotator.component.spec.ts
src/app/annotator/annotator.component.ts

# Sample Code 

Sample demonstrates:
- global routing
- child routing (within modules)
- multi-language support
- persistent storage