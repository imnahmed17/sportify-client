const TestimonialCard = ({ name, title, photo, message }) => {
    return (
        <div className="bg-base-100 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={photo} alt={name} />
                </div>
                <div className="mt-4">
                    <h3 className="text-lg leading-6 font-medium">{name}</h3>
                    <p className="mt-2 text-base leading-6">{title}</p>
                </div>
                <div className="mt-5">
                    <p className="text-base leading-6">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;