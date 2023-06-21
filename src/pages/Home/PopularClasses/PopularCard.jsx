import { Fade } from 'react-awesome-reveal';

const PopularCard = ({ classData }) => {
    const { image, className, instructorName, enrollCount, availableSeats, price } = classData;

    return (
        <div className="card bg-base-100 shadow-xl group">
            <figure>
                <img src={image} alt="" className="w-full h-60 group-hover:scale-125 transition" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-primary text-white rounded-xl">${price}</p>
            <div className="card-body">
                <Fade cascade damping={1e-1} triggerOnce={true}>
                    <h3 className="tracking-widest text-sm title-font font-medium text-gray-400">Taken By:- {instructorName}</h3>
                    <h2 className="card-title">{className}</h2>
                    <p>
                        <span className="font-medium">Enrolled Students:</span> {enrollCount} <br />
                        <span className="font-medium">Available Seats:</span> {availableSeats} <br />
                    </p>
                </Fade>
                <div className="card-actions">
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;