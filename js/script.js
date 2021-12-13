const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Checking if others are already open to close them
        const currentlyActiveaccordionItemHeader = document.querySelector(".accordion-item-header.accactive");
        if (currentlyActiveaccordionItemHeader && currentlyActiveaccordionItemHeader !== accordionItemHeader) {
            currentlyActiveaccordionItemHeader.classList.toggle("accactive");
            currentlyActiveaccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        // End of checking if others are already open to close them

        accordionItemHeader.classList.toggle("accactive");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("accactive")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});