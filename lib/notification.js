// "Notification" dialog
//
const path = require('path');
const CSON = require('cson');
// import etch from 'etch';

const urlHandler = "url-handler";
// const exceptionReport = "exception-report";
// const registerCommandCursor = "register-command-cursor";
// const registerCommandSyntax = "register-command-syntax";

module.exports = class Notification {
  // Private:
  static updateNotificationElement(type, message) {
    const aotmNtfs = document.getElementsByTagName("atom-notification")
    const urlHandler = this.defN.Notification.urlHandler
    for (const elm of aotmNtfs) {
      if (elm) {
        const msg = elm.querySelector("div.message.item>p");
//        const detail = elm.querySelector("div.detail.item>div.detail-content");
        const desc = elm.querySelector("div.description>p");
//        const btns = elm.querySelectorAll("div.btn-toolbar>a.btn.btn-info");
        if (msg && msg.textContent == message) {
          switch (type) {
            case urlHandler:
              msg.textContent = urlHandler.message;
              desc.textContent = urlHandler.description;
              // btns[0].textContent = urlHandler.button.yes;
              // btns[1].textContent = urlHandler.button.yesAlways;
              // btns[2].textContent = urlHandler.button.no;
              // btns[3].textContent = urlHandler.button.noNever;
              break
          }
        }
        // elm.update()
//        let view = atom.views.getView(elm);
        // etch.update(view)  // Error! not initialise() called
      }
    }
  }

  // Private
  static updateOne(notification) {
    // notification.getType() ? 'info' :
    // notification.getMessage();
    // notification.getDetail();  (=`options.detail`)
    // notification.options.description;
    // notification.options.buttons[];
    // console.log('updateOne: 1, ', notification.tagName + '\n' + notification.type);
    switch (notification.type) {
      case "info":
        if (notification.message == this.tmpltN.Notification.urlHandler.message) {
          // URL Handler
          this.updateNotificationElement(urlHandler, notification.message);
        }
        // let view = atom.views.getView(notification);
        break;
    }
  }

  // Private
  static updateNotification(notification) {
    if (notification) {
      this.updateOne(notification);
      return;
    }
    // 1st localize
    const nts = atom.notifications.getNotifications();
    if (nts) {
      console.log('updateNotification: 1', `${nts.length}`);
      for (const elt of nts) {
        this.updateOne(elt);
      }
    }
  }

  // Public: call from main.js
  static localize(defN) {
    this.defN = defN;
    this.tmpltN = CSON.load(path.join(__dirname, "../def/template/notification.cson"));
    this.updateNotification(null);
    atom.notifications.onDidAddNotification((notification) => {
      if (!notification) {
        return;
      }
      return setTimeout(() => this.updateNotification(notification), 0);
    })
  }
}
