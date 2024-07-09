const SectionTitle = ({ title }) => {
    return (
        <div className='w-full h-36 flex justify-center items-center'>
            <h1 className='text-4xl md:text-5xl font-bold'>{title}</h1>
        </div>
    );
};

export default SectionTitle;