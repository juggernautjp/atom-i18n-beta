
## 0.2.4 - atom-i18n-beta version 0.2.4

fix some minor bugs:
- syntax error at about.js (atom-i18n-beta needs Atom version 1.57.0)
- not change Atom appearance, after changing locale (language) of the package
- not save locale
- default locale is not "en (English)"


## 0.2.0 - atom-i18n-beta version 0.2.0

add the following features from atom-i18n v0.26.0:

- About: add "About" view
- Modify .eslintrc.yml:
    ```yaml
    parser: babel-eslint
    parserOptions:
      ecmaVersion: 12
    ```

## 0.1.0 - atom-i18n-beta version 0.1.0

add the following features from atom-i18n v0.26.0:

- Welcome: add "Welcome Guide", "Telemetry Consent" view
- Menu and Context Menu: add Git related menu items
- Find: add "Find and Replace", "Find in Repository"
- Tree View: add "Tree View" dock. (Bug remains)
- Keybind: add "Keybinding Resolver" dock
- Custom menu: add "Context" in def/custom_menu.cson

