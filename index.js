document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.price-card button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Plan selected!');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-content a");
    const priceElements = document.querySelectorAll(".price");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const currency = item.textContent.trim();
            let symbol = "$10";

            switch (currency) {
                case "Dollar":
                    symbol = "$10";
                    break;
                case "Rupee":
                    symbol = "₹835.5";
                    break;
                case "Pound":
                    symbol = "£7.9";
                    break;
                case "Euro":
                    symbol = "€9.33";
                    break;
            }

            priceElements.forEach(priceElement => {
                const parts = priceElement.textContent.split('/');
                priceElement.innerHTML = `${symbol}<span>/${parts[1]}</span>`;
            });
        });
    });
});

