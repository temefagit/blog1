"use client";

type Props = {
  name: string;
  body: string;
};
export const Comments: React.FC<Props> = (props: Props) => {
  const { name, body } = props;

  return (
    <div className="bg-white flex items-start justify-center rounded-lg shadow-md font-roboto text-left">
      <div className="flex flex-col pl-6 p-4 text-left">
        <h3 className="pb-2 text-sm font-bold text-left">{name.toUpperCase()}</h3>
        <p className="text-sm leading-tight text-left">{body}</p>
      </div>
    </div>
  );
};