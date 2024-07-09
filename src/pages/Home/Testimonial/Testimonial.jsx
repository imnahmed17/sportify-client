import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: testimonials = [] } = useQuery(['testimonials'], async () => {
        const res = await axiosSecure.get('/testimonials');
        return res.data;
    });
    
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     responsive: [
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 arrows: false,
    //             }
    //         }
    //     ]
    // };
    
    return (
        <section>
            <SectionTitle title="Testimonials" />
            <div className="pt-4 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                        {
                            testimonials.slice(1, 4).map((testimonial, index) => <TestimonialCard 
                                key={index} 
                                {...testimonial} 
                            />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;