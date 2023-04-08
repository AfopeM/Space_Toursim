type Props = {
  id: string;
  title: string;
};

export default function Tagline({ id, title }: Props) {
  return (
    <h1
      className="flex gap-2 text-center font-barlow uppercase tracking-[2.7px] text-brand-light md:self-start 
       md:text-3xl md:port:text-xl"
    >
      <span className="opacity-25">{id}</span>
      {title}
    </h1>
  );
}
