export const Loader = ({ size = 'md' }) => {
    const sizes = {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-12 w-12'
    };
  
    return (
      <div className="flex justify-center items-center">
        <div
          className={`${sizes[size]} animate-spin rounded-full border-4 border-solid border-current border-r-transparent`}
          role="status"
          aria-label="loading"
        />
      </div>
    );
  };
  
  export const PageLoader = () => (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Loader size="lg" />
    </div>
  );