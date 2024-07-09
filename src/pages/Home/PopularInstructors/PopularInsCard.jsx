const PopularInsCard = ({ people }) => {
    const { image, name, email, enrollCount } = people;

    return (
        <div className="card bg-base-100 shadow-md">
            <figure>
                <img src={image} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    <span className="font-medium">{email}</span> <br />
                    <span className="font-medium">Enrolled Students:</span> {enrollCount} <br />
                </p>
                <div className="card-actions">
                    
                </div>
            </div>
        </div>
    );
};

export default PopularInsCard;