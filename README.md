# LiteNg
This is a liteweight UI components library for use with the Angular framework. The aim is to provide basic functionality while minimizing the size of the compiled script.

## Linking with NPM LINK
Follow these steps to link this library using NPM LINK:

	+ CD into hthe root directory of the lite-ng repository
	+ Run the "npm build" command
	+ From the root directory of the lite-ng repository, CD into dist/lite-ng
	+ From within dist/lite-ng, issue the "npm link" command (no parameters, just the command)
		- After the above step, your NPM prefix shoud contain a directory called "@desolatetimelines" and, under that directory, there should be another called "lite-ng"
			- To find out where your NPM prefix is located, issue the command "npm prefix -g"
	+ CD into the root directory of your project
	+ From within the root directory of your project, issue the "npm link @desolatetimelines/lite-ng"
	+ Open the "angular.json" file located in the root directory of your project and add the following property under "projects.$yourProjectName.architect.build.options"
		- "preserveSymlinks":true



## Before using the components

	+ Copy the "skins" directory from the root of the lite-ng repository into the the "assets" directory of your project. It contains CSS files for a light skin and a dark skin. Custom skins may be added here.
	+ Add references to the CSS files in the "head" section of your projects's "index.html" file:
```html
	<link rel="stylesheet" type="text/css" href="assets/skins/_common/style.css">
	<link rel="stylesheet" type="text/css" href="assets/skins/light/style.css">
	<link rel="stylesheet" type="text/css" href="assets/skins/dark/style.css">
```
	+ Add or update the "base" tag inside the "head" tag in your "index.html":
```html
	<head>
		<base href="/">
		...
	</head>
```
	+ Add a skin class to the "body" tag in your project's "index.html" file:
```html
	<body class="light"> <!-- light skin -->
```
```html
	<body class="dark"> <!-- dark skin -->
```



## Using the components

	Each component is part of a library module. To use the components, one must first reference their respective modules from the project's app.module.ts.
```typescript
	import { LiteNgLoadingModalModule, LiteNgMessageBoxModule, LiteNgToastModule } from "@desolatetimelines/lite-ng";
```
```typescript
	imports: [
     ...
     LiteNgLoadingModalModule,
     LiteNgMessageBoxModule,
     LiteNgToastModule,
	 ...
  ],
```

	To add the components provided in the above example, put the following tags in app.component.html, or any other top-level component
```html
	<lite-ng-loading-modal></lite-ng-loading-modal>
	<lite-ng-serviceable-msgbox></lite-ng-serviceable-msgbox>
	<lite-ng-serviceable-toast></lite-ng-serviceable-toast>
```

	To activate the components, import the services, inject them into any component class via the constructor and then call their functionality
```typescript
	import { LiteNgLoadingModalService, LiteNgMsgboxService, LiteNgToastService } from '@desolatetimelines/lite-ng';
```
```typescript
	constructor(
		private loadingModal : LiteNgLoadingModalService,
		private msgBox : LiteNgMsgboxService,
		private toast : LiteNgToastService
	) {}
```
```typescript
	ngAfterViewInit() {
		this.loadingModal.show();
		this.msgBox.show("My title aaa", "My message aaa");
		this.toast.showInfo("Err title", "Err desc");
	}
```

