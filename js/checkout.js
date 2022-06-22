var checkoutBtn = document.querySelector('#checkout')

checkoutBtn.addEventListener('click', function() {
    const name = document.querySelector('#product-name')
    const price = document.querySelector('#product-price')
    const size = document.querySelector('#product-size')

    // generate message
    var messageHeader = `
    Hello admin Clotish.id. Berikut pesanan saya

    Rincian Barang :
    *${name.innerText}*
    Ukuran *${size.value}*
    `

    // shipping info
    var shippingInfoText = `
    *Alamat Pengiriman*
    Nama : 
    Nomor HP : 
    email : 
    Alamat : 
    `
    var textMessage = encodeURI(messageHeader+shippingInfoText);
    // sent message
    var messageNumber = "+6285852067793"
    var uri = "https://api.whatsapp.com/send?text=" + textMessage + "&phone=" + messageNumber
    
    return window.location.href = uri;
})