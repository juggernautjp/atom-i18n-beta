
# atom-i18n-beta


## 1. What is 'atom-i18n-beta' package?

[atom-i18n-beta](https://github.com/juggernautjp/atom-i18n-beta) is a fork of [`atom-i18n`](https://github.com/liuderchi/atom-i18n) package for Atom Editor localization (internationalization).

[`atom-i18n-beta`](https://github.com/juggernautjp/atom-i18n-beta) is being developed based on [`atom-i18n`](https://github.com/liuderchi/atom-i18n) version 0.25.0.


## 2. 'atom-i18n-beta' objectives

1. `atom-i18n` is stable. So, before published as `atom-i18n`, new features are released for early adopters, as `atom-i18n-beta`.
2. `atom-i18n-beta` translation environment is planned to enhance for translations.


## 3. Atom compoenrt to be localized

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

- For further information, see. [CONPONENTS](https://github.com/juggernautjp/atom-i18n-beta/blob/main/doc/COMPONENTS.md)


## 4. What is the difference among 'japanese-menu', 'atom-i18n' and 'atom-i18n-beta'

- [`japanese-menu`](https://github.com/syon/atom-japanese-menu): a package for localizing to Japanese.
- [`atom-i18n`](https://github.com/liuderchi/atom-i18n): a package for internationalization (i18n), based on `japanese-menu` package.
- [`atom-i18n-beta`](https://github.com/juggernautjp/atom-i18n-beta): a fork of `atom-i18n` package.



### a. `atom-i18n` global configuration


| package                | Menu       | Context menu    | Settings     | About        | Welcome       | 
|:-----------------------|:-----------|:----------------|:-------------|:-------------|:--------------|
| `japanese-menu`        | △         | △              | △           | ×             | ×             |
| `atom-i18n` (*v0.26*)  | △         | △              | △           | △            | △            |
| `atom-i18n-beta`       | 〇 [^1]    | 〇 [^2]         | 〇 [^3]      | △ [^4]       | 〇 [^5]       |


| package                | Find panel    | Keybind dock  | Git/GitHub    | Tree View      | Notification   |
|:-----------------------|:--------------|:--------------|:--------------|:---------------|:---------------|
| `japanese-menu`        | △            | ×             | ×             | ×              | ×              |
| `atom-i18n` (*v0.26*)  | ×             | ×             | ×             | ×              | ×              |
| `atom-i18n-beta`       | △ [^6]       | 〇 [^7]        | × [^8]       | △ [^9]        | × [^10]         |



### b. Personal configuration

| package                | Menu            | Context menu    |
|:-----------------------|:----------------|:----------------|
| `japanese-menu`        | ×               | ×              |
| `atom-i18n` (*v0.26*)  | 〇              | ×              |
| `atom-i18n-beta`       | 〇              | 〇 [^11]       |




### c. Changes from 'atom-i18n' package

[^1]: `atom-i18n-beta` can localize all "Packages" and "View" menus for [Atom Core Package](https://github.com/atom/atom/tree/6b9b4f96f8fd81e573de895f5fb8b444c78760ad/packages).
[^2]: `atom-i18n-beta` can localize all context-menus for [Atom Core Package](https://github.com/atom/atom/tree/6b9b4f96f8fd81e573de895f5fb8b444c78760ad/packages).
[^3]: 'atom-i18n-beta` can localize all Settings view.
[^4]: <font color="Orange">TODO:</font> 'atom-i18n-beta` can not localize "Check now" button. Because it needs to modify `atom/about` package. 
[^5]: `atom-i18n-beta` can localize "Welcome Guide" and "Telemetry Consent" view.
[^6]: `atom-i18n-beta` can localize "Find and Replace" and "Find in Project" panel. 
[^7]: `atom-i18n-beta` can localize "Keybinding Resolver" dock.
[^8]: <font color="Orange">TODO:</font> In near future, 'atom-i18n-beta' can localize "Git" and "GitHub" panel.
[^9]: <font color="Orange">TODO:</font> In near future, 'atom-i18n-beta' can localize "Tree View" panel.
[^10]: `atom-i18n-beta` can not localize dialog, called "Notification". Because it needs to modify `atom` source code. 
[^11]: `atom-i18n-beta` can localize Context menu, that dose not include [Atom Core Package](https://github.com/atom/atom/tree/6b9b4f96f8fd81e573de895f5fb8b444c78760ad/packages).


### d. Fixed bug

- Atom Core - Issue [#22594](https://github.com/atom/atom/issues/22594): Not update "Reopen Project" and "Check for Update" menu, correctly.



## 5. TODO: Remaining (not-localized yet)

| Parts            | description                                      |
|:-----------------|:-------------------------------------------------|
| `Error()`        | [Error - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error)          |
| Find Panel       | <font color="Orange">TODO:</font> But not localize ToolTip and Statusbar. It is necessary for Atom Core to be fixed. |
| `Notification`   | <font color="Orange">TODO:</font> not localized yet. It is necessary for Atom Core to be fixed?                      |
| About View       | It is necessary to modify `atom/about` package. (possible to use React?)   |
| Tree View        | <font color="Orange">TODO:</font> not localize AddDialog, CopyDialog and MoveDialog. |
| Git and GitHub   | <font color="Orange">TODO:</font> not localized yet.                       |

