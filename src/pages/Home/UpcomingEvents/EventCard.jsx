const EventCard = ({ event }) => {
    return (
        <div className="bg-base-100 rounded-lg overflow-hidden shadow group">
            <figure className="overflow-hidden">
                <img className="w-full h-52 object-cover group-hover:scale-125 transition" src={event.image} alt={event.title} />
            </figure>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-gray-700 text-base mb-4">{event.date}</p>
                <p className="text-gray-700 text-base">{event.location}</p>
                <div className="mt-6">
                    <a href="" className="text-indigo-500 font-semibold hover:text-indigo-600">
                        Learn more &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCard;