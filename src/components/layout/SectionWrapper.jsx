const SectionWrapper = ({ title, children }) => {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {children}
      </section>
    );
  };
  
  export default SectionWrapper;