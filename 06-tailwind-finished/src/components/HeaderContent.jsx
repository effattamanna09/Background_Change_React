
export default function HeaderContent({title, des}) {
  return (
    <>
      <h1 className="text-xl font-semibold tracking-widest text-center uppercase md:text-4xl text-amber-800 font-title">
       {title}
      </h1>
      <p className="text-stone-500">{des}</p></>
  );
}
