export default function Stepper({
    quantity,
    setQuantity,
    stock,
    className = "",
}) {
    function decrement() {
        setQuantity((quantity) => Math.max(quantity - 1, 1));
    }

    function increment() {
        setQuantity((quantity) => Math.min(quantity + 1, stock));
    }

    return (
        <div className={`flex items-center text-base ${className}`}>
            <p className="text-info font-semibold">Quantity</p>
            <button
                className="w-8 h-8 rounded-l"
                disabled={!stock}
                onClick={decrement}
            >
                &minus;
            </button>
            <span className="font-bold">{quantity}</span>
            <button
                className="w-8 h-8 rounded-r"
                disabled={!stock}
                onClick={increment}
            >
                +
            </button>
        </div>
    );
}
