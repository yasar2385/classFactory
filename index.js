// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1><div id="ModelDialogAppend"><div>demo</div></div>`;
window.iGetFragment = (_String, Options = {}) => {
  /* 
      ! THIS FUNCTION THE RETURN DOM EITHER FRAGMENT ELEMENT
          ? 1) IF NO - PARAMETER CREATE FRAGMENT AND RETURN
          ? 2) IF PARAMETER COMES WITH TAG NAME - RETURN ELEMENT WITH APPEND WITH FRAG DATA
  */
  try {
    console.log('-GetFragment-');
    let frag = document.createRange().createContextualFragment(_String);
    if (Object.keys(Options).length == 0) {
      return frag;
    } else if (Options.tag) {
      let elm = document.createElement(Options.tag);
      elm.append(frag);
      return elm;
    } else return frag;
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('iFragment', err.message);
  }
};
class factoryModule {
  constructor(template, _id) {
    this._template = template;
    this._Id = _id;
    this.Model_DOM = document.getElementById('ModelDialogAppend');
    console.log('-constructor-');
    this.args = {
      Panel: this.Setter_template(),
      openButton: document.querySelector('.chatbox__button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.send__button'),
    };
    this.state = false;
    this.messages = [];
  }

  Setter_template() {
    try {
      console.log('-_templateSetter-');
      this.Model_DOM.appendChild(this.GetFragment(this._template));
      return this.Model_DOM.querySelector(`#${this._Id}`) || null;
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('_templateSetter', err.message);
    }
  }
}
factoryModule.prototype.GetFragment = iGetFragment;

var feedback = new factoryModule(
  `<div id="surveyfeeback"><div>Feedback Form</div></div>`,
  'surveyfeeback'
);

console.log(feedback);
