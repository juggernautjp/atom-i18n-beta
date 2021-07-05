// Class: Util

module.exports = class Util {
  static handleConfigChange() {
    atom.config.onDidChange('atom-i18n.locale', ({ newValue: newLocale }) => {
      const newLangauge = this.findLaguageNameByLocale(newLocale) || newLocale;
      this.promptUserReloadAtom(
        `Reload Atom to translate into\n- \`${newLangauge}\`.`,
      );
    });

    atom.config.onDidChange('atom-i18n.customMenuI18nPath', () => {
      this.promptUserReloadAtom('Reload Atom to translate Custom Menus');
    });
  }

  static promptUserReloadAtom(msg) {
    if (msg == null) {
      msg = 'Reload Atom for localization.';
    }
    const buttons = [
      {
        text: 'Reload',
        onDidClick() {
          atom.reload();
        },
      },
    ];
    atom.notifications.addInfo(msg, {
      dismissable: true,
      buttons,
    });
  }

  static findLaguageNameByLocale(locale) {
    const configEnum = atom.config.getSchema('atom-i18n.locale').enum;
    const option = configEnum.find((option) => option.value === locale);
    return option ? option.description : null;
  }

  /*
  * used in find.js & findProject.js
  */
  // if panel is <atom-panel class="tool-panel panel-bottm">, then return true.
  static isAtomPanel(panel) {
    // return (panel.tagName == 'atom-panel' && panel.className == 'tool-panel panel-bottom bottom')
    return panel.className == "tool-panel panel-bottom";
  }

  // replace Tooltips's title with localized title
  static setTooltipLabel(element, oldt, newt) {
    if (!element) {
      return;
    };
    const [tooltip] = atom.tooltips.findTooltips(element);
    if (!tooltip) {
      return;
    }
    if (tooltip.getTitle() == oldt) {
      tooltip.options.title = newt;
    } else if (tooltip.getTitle() !== '') {
      let str = new String(tooltip.getTitle());
      str.replace(oldt, newt);
      tooltip.options.title = str.valueOf();
    }
    tooltip.fixTitle();
  }
}
