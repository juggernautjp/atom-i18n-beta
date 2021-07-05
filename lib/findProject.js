// "Find in Project" panel
//
const path = require('path');
const CSON = require('cson');
const Util = require('./util');

module.exports = class FindProject {

  // updateFindProject
  static updateFindProject(panel) {
    // if (!panel) { 1st }, if (panel) { 2nd }
    if (panel && !Util.isAtomPanel(panel)) {
      return;
    }
    // "Find in Project" panel
    // const findPanel = document.querySelector('atom-panel.tool-panel>div.find-and-replace')
    const findPanel = document.querySelector("div.project-find");
    if (!findPanel) {
      return;
    }
    if (findPanel.getAttribute("data-localized") === "true") {
      // if already localized, then return.
      return;
    }
    // Line #1: Label
    const label = findPanel.getElementsByClassName("header-item description");
    if (label) {
      label.item(0).textContent = this.defP.FindProject.findLabel;
    }
    // Line #1: Options Label
    const options = findPanel.querySelector("span.header-item.options-label");
    const lclzdOptions = this.defP.FindProject.option;
    if (options) {
      options.childNodes[0].textContent = this.defP.FindProject.optionLabel;
      let str = "";
      Object.entries(this.tmpltP.FindProject.option).forEach(([key, value]) => {
        if (options.childNodes[1].textContent.includes(value)) {
          if ( str == "" ) {
            str += `${lclzdOptions[key]}`;
          } else {
            str += ', ' + `${lclzdOptions[key]}`;
          }
        };
      });
      options.childNodes[1].textContent = str;
    };
    // Line #1: Close Button
    const closeb = findPanel.getElementsByClassName("header-item close-button pull-right");
    if (closeb && closeb[0]) {
      Util.setTooltipLabel(closeb[0],
        this.tmpltP.FindProject.optionTooltip.closePanel,
        this.defP.FindProject.optionTooltip.closePanel
        );
    }
    // Line #1: Options Button
    const buttons = findPanel.getElementsByClassName("btn-group btn-toggle btn-group-options");
    if (buttons && buttons[0]) {
      // Tooltip title
      const btnRegex = buttons[0].childNodes[0];
      if (btnRegex) {
        Util.setTooltipLabel(btnRegex,
          this.tmpltP.FindProject.optionTooltip.useRegex,
          this.defP.FindProject.optionTooltip.useRegex
          );
      };
      const btnCase = buttons[0].childNodes[1];
      if (btnCase) {
        Util.setTooltipLabel(btnCase,
          this.tmpltP.FindProject.optionTooltip.matchCase,
          this.defP.FindProject.optionTooltip.matchCase
          );
      };
      const btnWhole = buttons[0].childNodes[2];
      if (btnWhole) {
        Util.setTooltipLabel(btnWhole,
          this.tmpltP.FindProject.optionTooltip.wholeWord,
          this.defP.FindProject.optionTooltip.wholeWord
          );
      }
    };
    // Line #2: FindProject Button
    const findAll = findPanel.querySelector("div.btn-group-find>button.btn");
    if (findAll) {
      findAll.textContent = this.defP.FindProject.button["find-all"];
      // Tooltip title
      Util.setTooltipLabel(findAll,
        this.tmpltP.FindProject.buttonTooltip.findAll,
        this.defP.FindProject.buttonTooltip.findAll
        )
    };
    // Line #2: FindProject Placeholder Text
    const findPlace = findPanel.querySelector("section.find-container div.placeholder-text");
    if (findPlace) {
      findPlace.textContent = this.defP.FindProject.placeholder.find;
    };
    // Line #3: Replace Button
    const replaceAll = findPanel.querySelector("div.btn-group-replace-all>button.btn");
    if (replaceAll) {
      replaceAll.textContent = this.defP.FindProject.button["replace-all"];
      // Tooltip title
      Util.setTooltipLabel(replaceAll, 
        this.tmpltP.FindProject.buttonTooltip.replaceAll,
        this.defP.FindProject.buttonTooltip.replaceAll
        )
      Util.setTooltipLabel(replaceAll,
        this.tmpltP.FindProject.buttonTooltip.replaceAllDisabled,
        this.defP.FindProject.buttonTooltip.replaceAllDisabled
        )
    };
    // Line #3: Replace Placeholder Text
    const replacePlace = findPanel.querySelector("section.replace-container div.placeholder-text");
    if (replacePlace) {
      replacePlace.textContent = this.defP.FindProject.placeholder.replace;
    };
    // Line #4: File/directory pattern
    const pathPlace = findPanel.querySelector("section.paths-container div.placeholder-text");
    if (pathPlace) {
      pathPlace.textContent = this.defP.FindProject.placeholder.path;
    };
    // finish localized ("data-localized" = "true"), will never localize.
    return findPanel.setAttribute("data-localized", "true");
  }

  // Public: called from main.js
  static localize(defP) {
    this.defP = defP;
    this.tmpltP = CSON.load(path.join(__dirname, "../def/template/project.cson"));
    this.updateFindProject(null) ;// first time localize
    atom.workspace.panelContainers.bottom.onDidAddPanel((addPanelSpy) => {
      if (!addPanelSpy) {
        return;
      };
      return setTimeout(() => this.updateFindProject(addPanelSpy.panel), 0);
    })
  }
}
