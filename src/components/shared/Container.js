const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-2 md:px-5 lg:px-10 space-y-14">
      {children}
    </div>
  );
};

export default Container;
