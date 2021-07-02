// "About Atom" view
// TODO: "check for update" can not be localized!
//
// const UpdateManager = require('update-manager') // Error: can not find module 'update-manager'!
const path = require("path")
const CSON = require("cson")
const UpdateView = require("atom/packages/about/components/update-view")

export default class About {
  // inner: localize About Status, for AboutView
  static setUpdateStatus(pane) {
    if (!pane) return
    //    pane.setUpdateStatusLabel(this.defA.About.statusLabel)
    //    pane.setUpdateStatusButton(this.defA.About.updateButton, this.defA.About.automaticDownloadUpdates)
    //    pane.setTitle(this.defA.About.tabTitle)
    UpdateView.setUpdateStatusLabel(pane, this.defA.About.statusLabel)
    UpdateView.setUpdateStatusButton(pane, this.defA.About.updateButton, this.defA.About.automaticDownloadUpdates)
    UpdateView.setTitle(pane, this.defA.About.tabTitle)
  }

  // inner: localize About Status, when Status is changed
  static updateAboutStatus() {
    console.log("About-i18n.updateAboutStatus: ", "0")
    // "About" pane
    // const about = document.querySelector('div[class="pane-item native-key-bindings about"]')
    const about = document.getElementsByClassName("pane-item native-key-bindings about")?.item(0) ?? null
    if (!about) {
      return
    }
    // const updatesBox = aboutUpdates.getElementsByClassName('div.about-updates.group-start>div.about-updates-box')
    const aboutUpdates = about.getElementsByClassName("about-updates group-start")?.item(0) ?? null
    if (!aboutUpdates) {
      return
    }
    const updatesBox = aboutUpdates.getElementsByClassName("about-updates-box")?.item(0) ?? null
    if (!updatesBox) {
      return
    }
    // Line #3: Label in <div classname="about-update-item">
    let item = updatesBox.querySelector("div.about-updates-item.is-shown.about-default-update-message")
    if (item) {
      switch (item.textContent) {
        case this.tmpltA.About.statusLabel.defaultUpdateAuto:
          // item.textContent = this.defA.About.statusLabel.defaultUpdateAuto
          break
        case this.tmpltA.About.statusLabel.defaultUpdateManual:
          // item.textContent = this.defA.About.statusLabel.defaultUpdateManual
          break
      }
    }
    // Label: "Checking update"
    item = updatesBox.querySelector("div.about-updates-item.app-checking-for-updates>span.about-updates-label")
    if (item && item.textContent == this.tmpltA.About.statusLabel.checkingForUpdates) {
      item.textContent = this.defA.About.statusLabel.checkingForUpdates
    }
    // Label: "Downloading update"
    item = updatesBox.querySelector("div.about-updates-item.app-downloading-update>span.about-updates-label")
    if (item && item.textContent == this.tmpltA.About.statusLabel.downloadingUpdates) {
      item.textContent = this.defA.About.statusLabel.downloadingUpdates
    }
    // Label: "Update available"
    item = updatesBox.querySelector("div.about-updates-item.app-update-available-to-install>span.about-updates-label")
    if (item && item.textContent == this.tmpltA.About.statusLabel.newUpdate) {
      item.textContent = this.defA.About.statusLabel.newUpdate
    }
    item = updatesBox.querySelector(
      "div.about-updates-item.app-update-available-to-install>a.about-updates-release-notes"
    )
    if (item && item.textContent == this.tmpltA.About.statusLabel.updateReleaseNotes) {
      item.textContent = this.defA.About.statusLabel.updateReleaseNotes
    }
    // Label: "Up to date"
    item = updatesBox.querySelector("div.about-updates-item.app-up-to-date>span.about-updates-label")
    if (item) {
      console.log("About-i18n: updateAboutStatus(): 1", "about-updates-item.app-up-to-date: " + item.textContent)
      if (item.textContent == this.tmpltA.About.statusLabel.upToDate) {
        item.textContent = this.defA.About.statusLabel.upToDate
      }
    }
    // Label: "Not supported"
    item = updatesBox.querySelector("div.about-updates-item.app-unsupported>span.about-updates-label")
    if (item && item.textContent == this.tmpltA.About.statusLabel.notSupportAutoUpdate) {
      item.textContent = this.defA.About.statusLabel.notSupportAutoUpdate
    }
    item = updatesBox.querySelector("div.about-updates-item.app-unsupported>a.about-updates-instructions")
    if (item && item.textContent == this.tmpltA.About.statusLabel.howToUpdate) {
      item.textContent = this.defA.About.statusLabel.howToUpdate
    }
    // Line #3: Button in <button classname="btn about-update-action-button">
    // let item = updatesBox.querySelector('button.btn.about-update-action-button')
    item = updatesBox.getElementsByClassName("btn about-update-action-button")?.item(0) ?? null
    if (item) {
      console.log("About-i18n: updateAboutStatus(): 2", "about-update-action-button: " + item.textContent)
      switch (item.textContent) {
        case this.tmpltA.About.updateButton.checkUpdatesNow:
          item.textContent = this.defA.About.updateButton.checkUpdatesNow
          break
        case this.tmpltA.About.updateButton.restartInstall:
          item.textContent = this.defA.About.updateButton.restartInstall
          break
      }
    }
  }

  // inner: localize About view
  static updateAbout(pane) {
    if (pane) {
      // let updateView = pane.querySelector('div[class="about-updates group-start"]')
      console.log("About-i18n.updateAbout(): 1", ", constructor.name= ", pane.constructor.name)
      // let updateView = document.getElementsByClassName('about-updates group-start')?.item(0) ?? null
      // console.log('about: updateAbout(): 1', updateView.constructor.name)
      //
      // console.log('about: updateAbout(): 1', pane.constructor.name) // -> AboutView
      // console.log('about: updateAbout(): 1', atom.views.getView(pane).constructor.name) // -> HTMLDivElement
    } else {
      console.log("About-i18n.updateAbout(): 1", ", 1st localize")
    }
    // "About" tab
    const aboutTab = document.querySelector('.tab[data-type="AboutView"]')
    const aboutI18nTab = document.querySelector('.tab[data-type="AboutViewI18n"]')
    // In the case of not 'active' then return, not active view is not localized.
    // So, the following codes are comment-out.
    // let aboutEnabled
    // if (aboutTab) {
    //   aboutEnabled = aboutTab.className.includes('active')
    // }
    // if (!(aboutTab && aboutEnabled)) {
    // Tab title: "About Atom"
    if (aboutTab) {
      aboutTab.querySelector('div[class="title icon icon-info"]').textContent = this.defA.About.tabTitle
    } else if (aboutI18nTab) {
      aboutI18nTab.querySelector('div[class="title icon icon-info"]').textContent = this.defA.About.tabTitle
    } else {
      return
    }
    // "About" pane
    const about = document.querySelector('div[class="pane-item native-key-bindings about"]')
    if (!about) {
      return
    }
    // If "About" pane is already localized, return
    if (about.getAttribute("data-localized") == "true") {
      return
    }
    // Line #1: Release Notes
    about.querySelector("div.about-header-info a.about-header-release-notes").textContent = this.defA.About.releaseNotes
    // Line #2: Show more, Hide -> can not localize, because that texts should be not changed
    // TODO: currently, "Show more" and "Hide" are not localized!
    const aboutUpdates = about.getElementsByClassName("about-updates group-start")?.item(0) ?? null
    if (!aboutUpdates) {
      return
    }
    // if (!updatesBox) { return }
    // Line #3: Label, "Check now" button
    // this.updateAboutStatus()
    /* **TODO:** 'Update Hook': writeAfterUpdate() でバグ修正するコードだが、動作検証していない
    const updatesBox = aboutUpdates.getElementsByClassName('about-updates-box')?.item(0) ?? null
    if (updatesBox) {
      // "etch" package: 'Update Hook': writeAfterUpdate()
      const hook = updatesBox.getAttribute('writeAfterUpdate')
      if (!hook && typeof hook !== 'function') {
        updatesBox.setAttribute('writeAfterUpdate', this.updateAboutStatus()) // if .bind(this), Error!
      }
    }
    */
    // Line #4: "Automatic download updates" checkbox
    const {automaticDownloadUpdates} = this.defA.About
    const autoUpdate = aboutUpdates.querySelector("div.about-auto-updates span")
    if (autoUpdate) {
      autoUpdate.textContent = automaticDownloadUpdates
    }
    // Line #5: Licesnse & Term of User
    const {license, termsOfUse, with: _with, by, andTheAwesome, atomCommunity} = this.defA.About
    const buttons = about.querySelector("div.about-actions.group-item .btn-group")
    if (buttons) {
      buttons.childNodes[0].textContent = license
      buttons.childNodes[1].textContent = termsOfUse
    }
    // Line #6: with Love by
    const loves = about.querySelector("div.about-love.group-start")
    if (loves) {
      loves.childNodes[1].textContent = _with
      loves.childNodes[3].textContent = by
    }
    // Line #7: And the awesome
    const credits = about.querySelector("div.about-credits.group-item")
    if (credits) {
      credits.querySelector("span").textContent = andTheAwesome
      credits.querySelector("a").text = atomCommunity
    }
    about.setAttribute("data-localized", "true")
  }

  // call from main.js
  static localize(defA) {
    this.defA = defA
    this.tmpltA = CSON.load(path.join(__dirname, "../def/template/about.cson"))
    // this.updateAbout.call(this) // first time localize
    this.updateAbout(null)
    /* temporally, comment-out
    this.updateAboutStatus() // if .bind(this), Error!
    */
    // When active PaneItem is changed.
    atom.workspace.onDidChangeActivePaneItem((item) => {
      if (!item) {
        return
      }
      // if (item.__proto__.constructor.name === 'AboutView') { // __proto__ is deprecated
      switch (
        item.constructor.name // 2nd time localize
      ) {
        case "AboutView":
          console.log("About-i18n.localize(): ", "AboutView")
          // setTimeout(this.updateAbout.bind(this), 0)
          //          setTimeout(this.updateAbout(item), 0)
          setTimeout(this.setUpdateStatus(item), 0)
          //          item.props.updateManager.onDidChange(() => {
          //          setTimeout(this.updateAboutStatus().bind(this), 0)
          //          })
          break
        case "UpdateView":
          // 'UpdateView'
          console.log("About-i18n.localize(): ", "UpdateView")
          break
        case "AboutViewI18n":
          console.log("About-i18n.localize(): ", "AboutViewI18n")
          //          setTimeout(this.setUpdateStatus(item), 0)
          break
      }
    })
  }
}
