const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-8 lg:px-24 space-y-24">
      {children}
    </div>
  );
};

export default Container;
