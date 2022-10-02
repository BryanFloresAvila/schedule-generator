export const Cell = ({ rect, children }) => {
  /* console.log('rect', rect); */
  console.log(document.activeElement);
  return (
    <div
      style={{
        top: rect?.top,
        left: rect?.left,
        width: rect?.width,
        height: rect?.height,
      }}
      className="cell">
      {children}
    </div>
  );
};
