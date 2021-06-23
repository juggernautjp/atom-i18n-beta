
# Atom Component for atom-i18n to localize


## 1. Atom parts to be localized

| No  | Parts                | description                                      |
|----:|:---------------------|:-------------------------------------------------|
|   1 | Menu                 | You can select the item to execute the functions from Menu-bar, which is displayed at the top of the window. |
|   2 | Context Menu         | You can select the item to execute the functions from pop-up menu, by mouse right click. |
|   3 | Settings             | You can change and set the 'Atom' configuration.   |
|   4 | About                | You can update 'Atom' version in 'About Atom' view.   |
|   5 | Welcome              | Initially launch Atom show 'Welcome',  'Welcome Guide' and 'Telemetry Consent' view. |
|   6 | Find panel           | You can search with 'Find and Replace' and 'Find in Project' panel. |
|   7 | Keybind dock         | You can see the keybinding in 'Keybinding Resolver'. |
|   8 | Git/GitHub tab       | You can connect Git and GitHub in 'Git/GitHub' tab.  |
|   9 | Tree View            | 'Atom' show the file and directory list at the left panel |
|  10 | Notification         | 'Atom' show the dialog as 'Notification' at upper-right corner in the Atom window. |


## 1. Menu

![Menu](./img/Atom_Menu.png)


| type          | file path                                                |
|:--------------|:---------------------------------------------------------|
| atom/         | [menus](https://github.com/atom/atom/tree/master/menus)  |
| atom-i18n/lib | menu.js                                                  |
| atom-i18n/def | menu_{darwin, linux, win32}.cson                         |


## 2. Context Menu

![Context Menu](./img/Atom_Context_Menu.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [Atom Core Packages](https://github.com/atom/atom/tree/master/packages)/menus/  |
| atom-i18n/lib | contextMenu.js                                           |
| atom-i18n/def | context.cson                         |


## 3-a. Settings -> Core

![Settings Core](./img/Atom_Settings_Core.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [Atom Core Packages](https://github.com/atom/atom/tree/master/packages)/menus/  |
| atom-i18n/lib | preference/{index, settings, utils}.js                                          |
| atom-i18n/def | settings.cson                                                                   |


### 3-b. Settings -> Editor

![Settings Editor](./img/Atom_Settings_Editor.png)

### 3-c. Settings -> URI 

![Settings URI](./img/Atom_Settings_URI.png)

### 3-d. Settings -> System 

![Settings System](./img/Atom_Settings_System.png)

### 3-e. Settings -> Keybindings 

![Settings Keybindings](./img/Atom_Settings_Keybind.png)

### 3-f. Settings -> Packages

![Settings Packages](./img/Atom_Settings_Packages.png)

### 3-g. Settings -> Themes

![Settings Themes](./img/Atom_Settings_Themes.png)

### 3-h. Settings -> Updates

![Settings Updates](./img/Atom_Settings_Updates.png)

### 3-i. Settings -> Install

![Settings Install](./img/Atom_Settings_Install.png)


## 4. About Atom

![About Atom](./img/Atom_About.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [packages/about/](https://github.com/atom/atom/tree/master/packages/about)      |
| atom-i18n/lib | about.js                                                                        |
| atom-i18n/def | about.cson                                                                      |


## 5-a. Welcome

![Welcome](./img/Atom_Welcome.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [packages/welcome/](https://github.com/atom/atom/tree/master/packages/welcome)  |
| atom-i18n/lib | welcome.js                                                                      |
| atom-i18n/def | welcome.cson                                                                    |

### 5-b. Welcome Guide

![Welcome Guide](./img/Atom_Welcome_Guide.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [packages/welcome/](https://github.com/atom/atom/tree/master/packages/welcome)  |
| atom-i18n/lib | guide.js                                                                        |
| atom-i18n/def | guide.cson                                                                      |

### 5-c. Telemetry Consent

![Telemetry Consent](./img/Atom_Telemetry_Consent.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [packages/welcome/](https://github.com/atom/atom/tree/master/packages/welcome)  |
| atom-i18n/lib | consent.js                                                                      |
| atom-i18n/def | consent.cson                                                                    |


## 6-a. Find and Replace

![Find and Replace](./img/Atom_Find_Replace.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/find-and-replace](https://github.com/atom/find-and-replace)               |
| atom-i18n/lib | find.js                                                                         |
| atom-i18n/def | find.cson                                                                       |

### 6-b. Find in Project

![Find in Project](./img/Atom_Find_Project.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/find-and-replace](https://github.com/atom/find-and-replace)               |
| atom-i18n/lib | findProject.js                                                                  |
| atom-i18n/def | project.cson                                                                    |


## 7. Keybinding Resolver

![Keybinding Resolver](./img/Atom_Keybind_Resolver.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/keybinding-resolver](https://github.com/atom/keybinding-resolver)         |
| atom-i18n/lib | keybind.js                                                                      |
| atom-i18n/def | keybind.cson                                                                    |


## 8-a. Git tab

![Git tab](./img/Atom_Git.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/github](https://github.com/atom/github)                                   |
| atom-i18n/lib | github.js                                                                       |
| atom-i18n/def | github.cson                                                                     |

### 8-b. GitHub tab

![GitHub tab](./img/Atom_GitHub.png)


## 9. Tree View

![Project](./img/Atom_Project.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/tree-view](https://github.com/atom/tree-view)                             |
| atom-i18n/lib | treeview.js                                                                         |
| atom-i18n/def | treeview.cson                                                                       |


## 10. Notification

![Notification](./img/Atom_Notification.png)

| type          | file path                                                                       |
|:--------------|:--------------------------------------------------------------------------------|
| atom/         | [atom/find-and-replace](https://github.com/atom/find-and-replace)               |
| atom-i18n/lib | notification.js                                                                 |
| atom-i18n/def | notification.cson                                                               |
