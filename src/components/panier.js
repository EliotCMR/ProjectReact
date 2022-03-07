function Panier() {
    const croissantPrice = 1.10
    const petitpainPrice = 1.00
    const olivesPrice = 1.90

    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>Croissant: {croissantPrice}€</li>
                <li>Petit-pain: {petitpainPrice}€</li>
                <li>Olives: {olivesPrice}€</li>
            </ul>
            Total: {croissantPrice + petitpainPrice + olivesPrice}€
        </div>)
}

export default Panier;
