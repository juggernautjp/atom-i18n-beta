'use babel';
// "Keybinding Resolver" dock
//
// "Keybinding Resolver" exists while Atom editor exists.
// So, it can be localized, when atom-i18n package is enabled.

export default class Keybind {
  // inner
  static updateKeybind(def) {
    if (!def) {
      return;
    }
    const bottomDock = document.querySelector("div.atom-dock-inner.bottom");
    if (!bottomDock) {
      return;
    }
    const title = bottomDock.querySelector('li.tab[data-type="KeyBindingResolverView"]>div.title');
    if (title !== null) {
      title.textContent = def.title;
    }
    const prompt = bottomDock.querySelector("div.key-binding-resolver>div.panel-heading");
    if (prompt !== null) {
      prompt.textContent = def.prompt;
    }
  }

  // call from main.js
  static localize(defK) {
    this.updateKeybind(defK.Keybind);
  }
}
