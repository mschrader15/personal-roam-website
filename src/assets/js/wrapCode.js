window.onload = function() {
    var list = document.getElementsByTagName('code');
    for (let item of list) {
        autoindent(item)
    }
};
/**
 * Auto-indent overflowing lines
 * @author Rob W http://stackoverflow.com/u/938089
 * @param code_elem HTMLCodeElement (or any element containing *plain text*)
 */
function autoindent(code_elem) {
    // Grab the lines
    var textContent = document.textContent === null ? 'textContent' : 'innerText';
    var lines = code_elem[textContent].split(RegExp(/\r?\n/)),
        fragment = document.createDocumentFragment(),
        dummy, space_width, i, prefix_len, line_elem, number_tabs;

    // Calculate the width of white space
    // Assume that inline element inherit styles from parent (<code>)
    dummy = document.createElement('span');
    code_elem.appendChild(dummy);
    // offsetWidth includes padding and border, explicitly override the style:
    dummy.style.cssText = 'border:0;padding:0;';
    dummy[textContent] = '          ';
    space_width = dummy.offsetWidth / 10;
    // Wipe contents
    code_elem.innerHTML = '';
    
    for (i=0; i<lines.length; i++) {
        // NOTE: All preceeding white space (including tabs is included)
        prefix_len = /^\s*/.exec(lines[i])[0].length;
        number_tabs = numberOfTabs(lines[i]);
        line_elem = fragment.appendChild(document.createElement('div'));
        line_elem.style.marginLeft = space_width * prefix_len + 'px';
        line_elem[textContent] = lines[i].substring(prefix_len);
    }
    // Finally, append (all elements inside) the fragment:
    code_elem.appendChild(fragment);
}

function numberOfTabs(text) {
    var count = 0;
    var index = 0;
    while (text.charAt(index++) === "\t") {
      count++;
    }
    return count;
  }