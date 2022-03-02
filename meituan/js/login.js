// 封装获取焦点事件
function focus(input, div) {
  input.onfocus = function () {
    div.style.border = '1px solid #FE8C00';
  }
}

// 封装失去焦点事件
function blur(input, div) {
  input.onblur = function () {
    div.style.border = '1px solid #aaaaaa';
  }
}
focus($('phone-input'), $('phone'));
blur($('phone-input'), $('phone'));
focus($('password-input'), $('password'));
blur($('password-input'), $('password'));