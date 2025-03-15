const GridLayout = ({ children, cols = 3 }) => {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
        {children}
      </div>
    );
  };
  
  export default GridLayout;