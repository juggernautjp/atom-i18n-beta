
# How to customize atom with atom-i18n-i18n


You can customize your Atom configuration with your `def/config.cson` file.
For further information, see [Basic Customization - Atom.io](https://flight-manual.atom.io/using-atom/sections/basic-customization/).


## 1. ~/.atom/config.cson ($ATOM_HOME/config.{cson, json})

```coffeescript
"*":
  "atom-i18n-i18n":
    customMenuI18nPath: "<user home>\\.atom\\packages\\atom-i18n-i18n\\def\\custom_menu.cson"
    locale: "ja"
```


## 2. ~/.atom/packages/atom-i18n-i18n/def/custom_menu.cson

You can localize menu items, which dose not belong to [Atom Core Packages](https://github.com/atom/atom/tree/6b9b4f96f8fd81e573de895f5fb8b444c78760ad/packages), 
with your `~/.atom/packages/atom-i18n-i18n/def/custom_menu.cson` file.


```javascript
# The following code are for two different situations of the Menu localiztion

Menu:  # Must keep this line
# Case One: target is a *new* individual menu
#
#   "TITLE #1":
#     value: "I18N TITLE #1"
#     submenu:
#       "ITEM #2":
#         value: "I18N ITEM #2"
#       "SUBTITLE #3":
#         value: "I18N SUBTITLE #3"
#         submenu:
#           "SUBITEM #4":
#             value: "I18N SUBITEM #4"
#
# Case Two: target is in the *existed* translated menu
#   for example let's translate "Minimap" into Japanese
#
#   "パッケージ(&P)":
#     value: "パッケージ(&P)" # translated "Packages" into Japanese (see def/LOCALE/menu_*.cson for reference)
#     submenu:
#       "Minimap":
#         value: "I18N: Minimap"
#         submenu:
#           "Toggle":
#             value: "I18N: Toggle"
# Example: for localization of cson package
  "パッケージ(&P)":
    value: "パッケージ(&P)"
    submenu:
      "CSON":
        value: "CSON"
        submenu:
          "convert JSON to CSON":
            value: "JSON を CSON に変換"
          "convert CSON to JSON":
            value: "CSON を JSON に変換"
  "File":
    value: "ファイル"
    submenu:
      "Reopen Project":
        value: "最近使用したプロジェクト"

# The following code are for localization of Context Menu
Context:  # Must keep this line
  "atom-text-editor":
    'Convert:JSON to CSON': "JSON を CSON に変換"
    'Convert:CSON to JSON': "CSON を JSON に変換"
```


## 3. ~/.atom/keymap.cson

You can customize your keymap with `~/.atom/keymap.cson` file.


## 4. ~/.atom/snippets.cson

You can customize your snippets with `~/.atom/snippets.cson`.

Atom snippets allow you to enter a simple prefix in the editor and hit tab to expand the prefix into a larger code block with templated values.


