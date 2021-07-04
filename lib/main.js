// Class: I18N

const fs = require('fs');
const path = require('path');
const CSON = require('cson');

const Menu = require('./menu');
const ContextMenu = require('./contextMenu');
const Preferences = require('./preference');
const About = require('./about');
const Util = require('./util');
const Welcome = require('./welcome');
const Consent = require('./consent');
const Guide = require('./guide');
const Find = require('./find');
const FindProject = require('./findProject');
const Keybind = require('./keybind');
const TreeView = require('./treeview');
const Notification = require('./notification');

class I18N {
  constructor() {
    this.pref = { done: false };
    this.delay = this.delay.bind(this);
    this.customMenuI18n = this.customMenuI18n.bind(this);

    // BUG when running spec, locale is not initialized
    if (!atom.config.get('atom-i18n.customMenuI18nPath')) {
      atom.config.set(
        'atom-i18n.customMenuI18nPath',
        path.join(__dirname, '../def', 'custom_menu.cson'),
      );
    }
    const LOCALE = atom.config.get('atom-i18n.locale');
    this.defM = CSON.load(
      path.join(__dirname, '../def', LOCALE, `menu_${process.platform}.cson`),
    );
    this.defC = CSON.load(path.join(__dirname, '../def', LOCALE, 'context.cson'));
    this.defS = CSON.load(path.join(__dirname, '../def', LOCALE, 'settings.cson'));
    this.defA = CSON.load(path.join(__dirname, '../def', LOCALE, 'about.cson'));
    this.defW = CSON.load(path.join(__dirname, '../def', LOCALE, 'welcome.cson'));
    this.defT = CSON.load(path.join(__dirname, "../def", LOCALE, "consent.cson"))
    this.defG = CSON.load(path.join(__dirname, "../def", LOCALE, "guide.cson"))
    this.defF = CSON.load(path.join(__dirname, "../def", LOCALE, "find.cson"))
    this.defP = CSON.load(path.join(__dirname, "../def", LOCALE, "project.cson"))
    this.defK = CSON.load(path.join(__dirname, "../def", LOCALE, "keybind.cson"))
    this.defR = CSON.load(path.join(__dirname, "../def", LOCALE, "treeview.cson"))
    this.defN = CSON.load(path.join(__dirname, "../def", LOCALE, "notification.cson"))
  }

  activate() {
    setTimeout(this.delay, 0);
    setTimeout(this.customMenuI18n, 3000);
    atom.commands.add(
      'atom-workspace',
      'atom-i18n:open-custom-menu-i18n-file',
      () => {
        atom.workspace.open(atom.config.get('atom-i18n.customMenuI18nPath'));
      },
    );
  }

  deactivate() {
    Util.promptUserReloadAtom('Reload Atom to clear translation.');
  }

  delay() {
    Menu.localize(this.defM);
    ContextMenu.localize(this.defC);
    Preferences.localize(this.defS);
    About.localize(this.defA);
    Welcome.localize(this.defW);
    Consent.localize(this.defT);
    Guide.localize(this.defG);
    Find.localize(this.defF);
    FindProject.localize(this.defP);
    Keybind.localize(this.defK);
    TreeView.localize(this.defR);
    Notification.localize(this.defN);
        // TODO localize more...
    Util.handleConfigChange();
  }

  customMenuI18n() {
    const customMenuCson = atom.config.get('atom-i18n.customMenuI18nPath');
    if (fs.existsSync(customMenuCson)) {
      this.customDefM = CSON.load(customMenuCson);
      Menu.localize(this.customDefM);
      // Set Context-Menu from 'def/custom_menu.cson'
      this.customDefM = CSON.load(customMenuCson);
      ContextMenu.localize(this.customDefM);
    }
  }
}

module.exports = window.I18N = new I18N()
