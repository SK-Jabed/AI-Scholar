const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 lg:px-16 md:px-10 sm:px-4 px-6 space-y-24">
      {children}
    </div>
  );
};

export default Container;
