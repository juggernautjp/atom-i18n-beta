
# How to Localize (For translators)

Japanese localization is finished, but other language localization are not finished, mentioned above table.

All localized files for language that mentioned above table, have been modified to work with `atom-i18n-beta`.
If you want to finish the localization, or your language is not localized, you can localize the following steps.


## 1. Download (Clone) from GitHub

1. sign in to GitHub.com
2. go to [atom-i18n](https://github.com/liuderchi/atom-i18n)
3. fork the above repository to your remote repository
4. clone to your local PC with `git clone` command

- For further information, see [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced) of GitHub Docs.



### 2. Translate

Not yet translation is done, you can localize for your language.
Already localization is done, you can modify the files for your language.

- For further information, see [TRANSLATE](https://github.com/juggernautjp/atom-i18n-beta/blob/main/doc/TRANSLATE.md).




### 3. Upload (Pull Request) the modified files

1. Translate your locale (this example is "ja")
2. `git add -A`
3. `git commit -m "fix bug of ja localization file"`
4. login GitHub.com, and move to your `atom-i18n` repository
5. create a pull request on your `atom-i18n` repository on GitHub.com [^1]

[^1]: For further information on pull request, see [Creating a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) of GitHub Docs.

