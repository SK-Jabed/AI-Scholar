const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-3 md:px-5 lg:px-10 space-y-20">
      {children}
    </div>
  );
};

export default Container;
