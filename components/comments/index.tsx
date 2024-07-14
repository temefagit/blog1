import style from "./comments.module.css";

export const Comments: React.FC = () => {
  return (
    <div className='bg-white flex items-start justify-center rounded-lg shadow-md font-roboto'>
      <div className='flex flex-col pl-6 p-4'>
        <h3 className='pb-2'>عنوان نظر</h3>
        <p className='text-sm leading-5'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
        </p>
      </div>
    </div>
  );
};
