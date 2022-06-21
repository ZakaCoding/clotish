window.addEventListener("DOMContentLoaded", (event) => {
    // read link
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product_name = urlParams.get('name')

    switch (product_name) {
        case "abaya":
            generateComponent("component/abaya.html", product_name)
            break;
        case "outter kimono":
            generateComponent("component/outter-kimono.html", product_name)
            break;
        case "luna dress":
            generateComponent("component/luna-dress.html", product_name)
            break;
        default:
            generateComponent("component/not-found.html","")
            break;
    }
})

function generateComponent(sourceFile, productName)
{
    // get element title
    var productTitle = document.querySelector('#product-title')
    productTitle.innerText = productName.toUpperCase()

    // return source file component
    return $('#product-container').load(sourceFile)
}