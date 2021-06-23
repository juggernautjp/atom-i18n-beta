'use babel';
// "Tree View" dock
//
// "Tree View" exists while Atom editor exists.
// So, it can be localized, when atom-i18n package is enabled.

export default class TreeView {
  // inner
  static updateTreeView(def) {
    if (!def) {
      return;
    }
    const treeTab = document.querySelector('.tab[data-type="TreeView"]')
    if (treeTab !== null) {
      const title = treeTab.querySelector('div.title');
      if (title !== null) {
        title.textContent = def.title;
      }
    }
    const treePane = document.getElementById('add-projects-view');
    if (!treePane) {
      return;
    }
    const desc = treePane.querySelector('div.description');
    if (desc !== null) {
      desc.textContent = def.desc;
    }
    const buttons = treePane.getElementsByTagName('button');
    if (buttons !== null) {
      buttons[0].textContent = def.button.addFolder;
      buttons[1].textContent = def.button.reopenProject;
    }
  }

  // call from main.js
  static localize(defR) {
    this.updateTreeView(defR.TreeView);
  }
}
