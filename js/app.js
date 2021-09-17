document.addEventListener('DOMContentLoaded', function() {

    let dropmenu = document.getElementById('dropmenu');
    let link = document.getElementById('lang-link');

    link.addEventListener("click", function(event) {
        event.preventDefault();
        dropmenu.classList.toggle('active');
    });


    let accordeon =  document.querySelectorAll('.accordeon__item');

    accordeon.forEach(onDotsClick);
    function onDotsClick(dot) {
        dot.addEventListener("click", function(event) {
            event.preventDefault();

            dot.classList.toggle('active');
        });
    }

}, false);
