function Card({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="card bg-base-100 w-86 h-86 shadow-sm">
      <figure className="h-full bg-slate-800 p-5">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
