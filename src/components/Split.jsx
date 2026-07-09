export default function Split({ imageFirst = false, imageUrl, children }) {
  const image = <div className="ph reveal" style={{ backgroundImage: `url('${imageUrl}')` }} />;
  const text = <div className="txt reveal">{children}</div>;

  return (
    <div className="split">
      {imageFirst ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}