document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    fetch("./product.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById("products-container");
        
        if (!container) {
            console.error("Container not found!");
            return;
        }

        if (!data.products || data.products.length === 0) {
            console.warn("No products found in data");
            return;
        }

        data.products.forEach(product => {
            const card = `
                <div class="sm:w-[450px] product-card bg-[#161b22] text-gray-200 hover:scale-105 duration-400 shadow-2xl hover:bg-[#1e242d] rounded-xl md:w-[350px] h-auto">
                    <img class="rounded-t-xl w-full h-[200px] object-cover" src="${product.thumbnail}" alt="${product.name}">
                    <div class="p-4">
                      <h3 class="font-extrabold text-[19px] mb-3">${product.name}</h3>
                      <p class="text-[17.5px] mb-3">${product.description}</p>

                      <div class="prices mb-3">
                          <span class="discount font-bold mb-3 text-[15px] line-through">₹${product.price}/-</span>
                          <span class="original text-[19px] font-bold animate-priceDance ml-3">₹${product.discountPrice}/-</span>
                          <span class="text-[19px] font-bold ml-1">only</span>
                      </div>

                      <button class="border-2 rounded-xl bg-gray-200 text-gray-800 cursor-pointer p-1">Add to Cart</button>
                      <button class="border-2 rounded-xl bg-gray-200 text-gray-800 cursor-pointer p-1 ml-3">View Details</button>
                    </div>
                </div>
            `;

            container.innerHTML += card;
        });
    })
    .catch(error => {
        console.error("Error loading products:", error);
    });
});