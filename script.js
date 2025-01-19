function calculatePrice() {
    const screenCount = parseInt(document.getElementById('screenCount').value);
    const pricePerScreen = 15000; // Base price per screen
    let screensToPayFor = screenCount; // Default to paying for all screens
    let discount = 0;
  
    // Discount logic
    if (screenCount >= 5 && screenCount <= 9) {
      screensToPayFor = screenCount - 1; // 1 screen free
    } else if (screenCount >= 10 && screenCount <= 14) {
      screensToPayFor = screenCount - 2; // 2 screens free
    } else if (screenCount >= 15 && screenCount <= 19) {
      screensToPayFor = screenCount - 3; // 3 screens free
    } else if (screenCount === 20) {
      screensToPayFor = screenCount - 4; // 4 screens free
    }
  
    const basePrice = screenCount * pricePerScreen; // Cost without discount
    const totalPriceWithoutExtras = screensToPayFor * pricePerScreen; // Final cost without extras
    discount = basePrice - totalPriceWithoutExtras; // Calculate discount
  
    // Calculate optional features cost
    const paymentGatewayCost = document.getElementById('paymentGateway').checked
      ? parseInt(document.getElementById('paymentGateway').value)
      : 0;
  
    const playStoreCost = document.getElementById('playStore').checked
      ? parseInt(document.getElementById('playStore').value)
      : 0;
  
    const appStoreCost = document.getElementById('appStore').checked
      ? parseInt(document.getElementById('appStore').value)
      : 0;
  
    const optionalCost = paymentGatewayCost + playStoreCost + appStoreCost;
    const finalTotalPrice = totalPriceWithoutExtras + optionalCost;
  
    // Update results in the UI
    document.getElementById('basePrice').querySelector('span').textContent = basePrice.toLocaleString();
    document.getElementById('discount').querySelector('span').textContent = discount.toLocaleString();
    document.getElementById('optionalCost').querySelector('span').textContent = optionalCost.toLocaleString();
    document.getElementById('totalPrice').querySelector('span').textContent = finalTotalPrice.toLocaleString();
  }
  