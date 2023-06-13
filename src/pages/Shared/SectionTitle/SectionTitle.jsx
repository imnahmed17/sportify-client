const SectionTitle = ({ title }) => {
    return (
        <div className='w-full h-28 flex justify-center items-center bg-[#5D6B89]'>
            <h2 className='text-white text-4xl md:text-5xl font-medium'>{title}</h2>
        </div>
    );
};

export default SectionTitle;