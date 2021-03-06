// "Find and Replace" panel
//
const path = require('path');
const CSON = require('cson');
const Util = require('./util');

module.exports = class Find {

  // updateFindProject
  static updateFind(panel) {
    // if (!panel) { 1st }, if (panel) { 2nd }
    if (panel && !Util.isAtomPanel(panel)) {
      return;
    };
    // "Find and Replace" panel
    // const findPanel = document.querySelector('atom-panel.tool-panel>div.find-and-replace');
    const findPanel = document.querySelector("div.find-and-replace");
    if (!findPanel) {
      return;
    };
    if (findPanel.getAttribute("data-localized") === "true") {
      // if already localized, then return.
      return;
    };
    // Line #1: Label
    const label = findPanel.getElementsByClassName("header-item description");
    if (label) {
      label.item(0).textContent = this.defF.Find.findLabel;
    };
    // Line #1: Options Label
    const options = findPanel.querySelector("span.header-item.options-label");
    const lclzdOptions = this.defF.Find.option;
    if (options) {
      options.childNodes[0].textContent = this.defF.Find.optionLabel;
      let str = "";
      Object.entries(this.tmpltF.Find.option).forEach(([key, value]) => {
        if (options.childNodes[1].textContent.includes(value)) {
          if ( str == "" ) {
            str += `${lclzdOptions[key]}` ;
          } else {
            str += ', ' + `${lclzdOptions[key]}`;
          }
        }
      });
      options.childNodes[1].textContent = str;
    };
    // Line #1: Close Button
    const closeb = findPanel.getElementsByClassName("header-item close-button pull-right");
    if (closeb && closeb[0]) {
      Util.setTooltipLabel(closeb[0],
        this.tmpltF.Find.optionTooltip.closePanel,
        this.defF.Find.optionTooltip.closePanel
        );
    }
    // Line #1: Options Button
    const buttons = findPanel.getElementsByClassName("btn-group btn-toggle btn-group-options");
    if (buttons && buttons[0]) {
      // Tooltip title
      const btnRegex = buttons[0].childNodes[0];
      if (btnRegex) {
        Util.setTooltipLabel(btnRegex,
          this.tmpltF.Find.optionTooltip.useRegex, this.defF.Find.optionTooltip.useRegex
          );
      };
      const btnCase = buttons[0].childNodes[1];
      if (btnCase) {
        Util.setTooltipLabel(btnCase,
          this.tmpltF.Find.optionTooltip.matchCase, this.defF.Find.optionTooltip.matchCase
          );
      };
      const btnOnly = buttons[0].childNodes[2];
      if (btnOnly) {
        Util.setTooltipLabel(btnOnly,
          this.tmpltF.Find.optionTooltip.onlyIn, this.defF.Find.optionTooltip.onlyIn
          );
      };
      const btnWhole = buttons[0].childNodes[3];
      if (btnWhole) {
        Util.setTooltipLabel(btnWhole,
          this.tmpltF.Find.optionTooltip.wholeWord, this.defF.Find.optionTooltip.wholeWord
          );
      }
    }
    // Line #2: Find Button
    const findNext = findPanel.querySelector("div.btn-group-find>button.btn-next");
    if (findNext) {
      findNext.textContent = this.defF.Find.button["find-next"];
      // Tooltip title
      Util.setTooltipLabel(findNext,
        this.tmpltF.Find.buttonTooltip.findNext,
        this.defF.Find.buttonTooltip.findNext
        );
      Util.setTooltipLabel(findNext,
        this.tmpltF.Find.buttonTooltip.findNextDisabled,
        this.defF.Find.buttonTooltip.findNextDisabled
        );
      };
    const findAll = findPanel.querySelector("div.btn-group-find-all>button.btn-all");
    if (findAll) {
      findAll.textContent = this.defF.Find.button["find-all"];
      // Tooltip title
      Util.setTooltipLabel(findAll,
        this.tmpltF.Find.buttonTooltip.findAll,
        this.defF.Find.buttonTooltip.findAll
        );
      Util.setTooltipLabel(findAll,
        this.tmpltF.Find.buttonTooltip.findAllDisabled,
        this.defF.Find.buttonTooltip.findAllDisabled
        );
      };
    // Line #2: Find Placeholder Text
    const findPlace = findPanel.querySelector("section.find-container div.placeholder-text");
    if (findPlace) {
      findPlace.textContent = this.defF.Find.placeholder.find;
    };
    // Line #3: Replace Button
    const replaceNext = findPanel.querySelector("div.btn-group-replace>button.btn-next");
    if (replaceNext) {
      replaceNext.textContent = this.defF.Find.button["replace-next"];
      // Tooltip title
      Util.setTooltipLabel(replaceNext,
        this.tmpltF.Find.buttonTooltip.replaceNext,
        this.defF.Find.buttonTooltip.replaceNext
        );
      Util.setTooltipLabel(replaceNext,
        this.tmpltF.Find.buttonTooltip.replaceNextDisabled,
        this.defF.Find.buttonTooltip.replaceNextDisabled
        );
    };
    const replaceAll = findPanel.querySelector("div.btn-group-replace-all>button.btn-all");
    if (replaceAll) {
      replaceAll.textContent = this.defF.Find.button["replace-all"];
      // Tooltip title
      Util.setTooltipLabel(replaceAll,
        this.tmpltF.Find.buttonTooltip.replaceAll,
        this.defF.Find.buttonTooltip.replaceAll
        );
      Util.setTooltipLabel(replaceAll,
        this.tmpltF.Find.buttonTooltip.replaceAllDisabled,
        this.defF.Find.buttonTooltip.replaceAllDisabled
        );
    };
    // Line #3: Replace Placeholder Text
    const replacePlace = findPanel.querySelector("section.replace-container div.placeholder-text");
    if (replacePlace) {
      replacePlace.textContent = this.defF.Find.placeholder.replace;
    };
    // finish localized ("data-localized" = "true"), will never localize.
    return findPanel.setAttribute("data-localized", "true");
  }

  // Public: called from main.js
  static localize(defF) {
    this.defF = defF;
    this.tmpltF = CSON.load(path.join(__dirname, "../def/template/find.cson"));
    this.updateFind(null); // first time localize
    /* the following codes do not work!
    atom.workspace.onDidChangeActivePaneItem(item => {
      if (!item) { return }
      if (item.__proto__.constructor.name === 'FindView') {
        return setTimeout(() => this.updateFind(), 0);
      }
    }) */
    // atom.workspace.onDidAddPaneItem(({ item, pane, index }) => {    // Error!
    atom.workspace.panelContainers.bottom.onDidAddPanel((addPanelSpy) => {
      if (!addPanelSpy) {
        return;
      }
      return setTimeout(() => this.updateFind(addPanelSpy.panel), 0);
    })
  }
}
