const PriceDisplay = ({ price, currency = '€', size = 'lg' }) => {
    const sizes = {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl'
    };
  
    return (
      <div className={`font-bold ${sizes[size]} text-blue-600`}>
        <span className="text-sm align-top">{currency}</span>
        {price.toFixed(2)}
      </div>
    );
  };
  
  export default PriceDisplay;