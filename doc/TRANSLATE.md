# How to Translate



## 1. Determine your locale (language code)

You search your `locale` (language code) in the list of [ISO 639-1 standard language codes](https://www.andiamo.co.uk/resources/iso-language-codes/) and [ISO 639 Code Tables](https://iso639-3.sil.org/code_tables/639/data). 
- ja: [ISO 639言語コード](https://www.asahi-net.or.jp/~ax2s-kmtn/ref/iso639.html) and [付録A 言語設定 - ISO 639 コード一覧](https://omegat.sourceforge.io/manual-standard/ja/appendix.languages.html).

Locale is a string, which format is "??" or "??_??", in which "?" is [a-zA-Z].
You can know your LOCALE of your OS by the following command;

### a. Windows (in PowerShell)
```shell
> Get-WinSystemLocale

LCID             Name             DisplayName
----             ----             -----------
1041             ja-JP            日本語 (日本)

```

### b. Linux (in Terminal, xterm, etc.) and macOS (in Terminal app)
```shell
$ locale
LANG=ja_JP.UTF-8
LC_CTYPE="ja_JP.UTF-8"
LC_NUMERIC="ja_JP.UTF-8"
LC_TIME="ja_JP.UTF-8"
LC_COLLATE="ja_JP.UTF-8"
LC_MONETARY="ja_JP.UTF-8"
LC_MESSAGES="ja_JP.UTF-8"
LC_PAPER="ja_JP.UTF-8"
LC_NAME="ja_JP.UTF-8"
LC_ADDRESS="ja_JP.UTF-8"
LC_TELEPHONE="ja_JP.UTF-8"
LC_MEASUREMENT="ja_JP.UTF-8"
LC_IDENTIFICATION="ja_JP.UTF-8"
LC_ALL=
```

In the above case, Japanese locale (language code) is "ja", not "ja_JP". "_JP" specify the region of the same language, such as "en_US" (U.S. English).



## 2. Localization files to be translated

The path that includes the localization files:
```
packages/atom-i18n/def/<locale>/
```

The files for your localization:

| file name         | Atom part                | difference from atom-i18n 0.25.0 |
|:------------------|:-------------------------|:---------------------------------|
| about.cson        | "About" view             | some items are added/changed     |
| context.cson      | Context menu             | some items are added/changed     |
| menu_darwin.cson  | Menu for macOS           | some items are added/changed     |
| menu_linux.cson   | Menu for Linux           | some items are added/changed     |
| menu_win32.cson   | Menu for Windows         | some items are added/changed     |
| settings.cson     | "Settings" view          | some items are added/changed     |
| welcome.cson      | "Welcome" view           | nothing changed                  |
| consent.cson      | "Telemetry Consent" view | **newly added**                  |
| guide.cson        | "Windows Guide" view     | **newly added**                  |
| find.cson         | "Find and Replace" pane  | **newly added**                  |
| project.cson      | "Find in Project" pane   | **newly added**                  |
| keybind.cson      | "Keybind Resolver" dock  | **newly added**                  |
| treeview.cson     | "Tree View" tab          | **newly added**                  |



## 3. Translate

You can use on-online translation site;
- [Google Translation](https://translate.google.com/) - Online only
- [DeepL](https://www.deepl.com/) - Online and desktop
- [Reverso Translation](https://context.reverso.net/translation/) - Online and desktop
- [Glosbe Online Dictionary](https://glosbe.com/)

Also, you can use **Microsoft Glossary** in [Microsoft Language Portal](https://www.microsoft.com/ja-jp/language/), for translating the technical terms.

While translating menu, you can compare the three files (menu_{darwin, linux, win32}.cson) with the tool of [WinMerge](https://winmerge.org/), and translate the same English text.


You can read the on-line [Atom Flight Manual](https://flight-manual.atom.io/) about the Atom feature.
- [Handling URIs](https://flight-manual.atom.io/hacking-atom/sections/handling-uris/)


#### Caution! while editing
- Do not use hard tab (`\t`) instead of soft tab (white space) for indent
- Do not delete any white spaces at the left-most side of the line
- Change only `"`-enclosed and `` ` `` -enclosed  text at the right side of  `:`


## 4. Check CSON syntax

### 4.1. CoffeeLint
**lint**, or a **linter**, is a static code analysis tool used to flag programming errors, bugs, stylistic errors, and suspicious constructs (cf. [Lint](https://en.wikipedia.org/wiki/Lint_(software)))
`CoffeeScript` is a tool to check the CoffeeScript and CSON format.

Indent is very important for the localization files. The incorrect indent in it cause Atom parser's syntax error.
So, after your translation, you had better check the syntax of CSON files, with the on-line site, [CoffeeLint](http://www.coffeelint.org/).



## 5. Verify with debugging mode of Atom
The shell commands in this section are written in Linux format. `~` represent the home directory. 
In the case of Windows, you can use `~` and Linux shell command in "Windows PowerShell".


### 5.1. Backup `~/.atom`
```shell
$ cd ~
$ mv .atom .atom.back
```

### 5.2. Backup `~/github/atom-i18n`, if it exists
```shell
$ cd ~/github
$ mv atom-i18n atom-i18n.back
```

### 5.3.  Clone the current atom-i18n package from GitHub to ~/github/atom-i18n

```shell
$ apm develop atom-i18n-beta
$ apm links
~/.atom/dev/packages (1)
└── atom-i18n -> ~/github/atom-i18n-beta
~/.atom/packages (0)
└── (no links)
```
After execute the above commands, `~/github/atom-i18n-beta` directory was created, and copied from remote package in GitHub.

### 5.4. Edit the file in `~/github/atom-i18n-beta`

Edit and translate the files in the `~/github/atom-i18n-beta/def/` directory.
If you already have edited files, you can move them into `~/github/atom-i18n-beta/def/` directory.


### 5.5. Check .cson files

```shell
$ cd ~/github/atom-i18n-beta
$ npm run validation -- --locale <your locale>
```

- ref. [npm-test](https://docs.npmjs.com/cli/v7/commands/npm-test) in [npm docs](https://docs.npmjs.com/)


### 5.6. Launch Atom with debug mode

```shell
$ cd ~/github
$ atom -d .
```

### 5.7. After publish, recover your atom environment

```shell
$ cd ~
$ rm -rf .atom
$ mv .atom.back .atom
```




