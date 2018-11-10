setTimeout(i_start(), 3000);

function i_start() {
    if (!window.jQuery) {  
        return;
    }

    alert('jquery is loaded');


}
