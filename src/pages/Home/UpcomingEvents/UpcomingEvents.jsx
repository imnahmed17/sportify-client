import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: events = [] } = useQuery(['events'], async () => {
        const res = await axiosSecure.get('/events');
        return res.data;
    });

    return (
        <section>
            <SectionTitle title="Upcoming Events" />
            <div className="bg-base-200 pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="mt-4 max-w-2xl text-xl text-[#9747FF]">
                        Check out our list of upcoming sporting events in the New York City area.
                    </p>
                    <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                        {
                            events.map((event, index) => <EventCard 
                                key={index} 
                                event={event} 
                            />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;