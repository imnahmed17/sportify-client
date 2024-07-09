import { IoIosMail } from 'react-icons/io';
import { IoFlash } from 'react-icons/io5';
import { FaMobileAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <div>
                        <div className='md:flex justify-center'>
                            <IoFlash style={{ color: '#00BFFF' }} size={70} />
                        </div>
                        <p className="font-bold tracking-wide text-xl text-gray-600">Sportify</p>
                    </div>
                    <p>Sportify Ltd.<br/>Providing reliable services since 2015</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Training programs</a> 
                    <a className="link link-hover">Coaching</a> 
                    <a className="link link-hover">Physical assessments</a> 
                    <a className="link link-hover">Nutrition and wellness</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                    <a className="link link-hover">Developers</a>
                </div> 
                <div>
                    <span className="footer-title">Address</span> 
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow className='mt-0.5' />
                        <a className="link link-hover">South Lane, East Berne</a> 
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaMobileAlt className='mt-0.5' />
                        <a className="link link-hover">+880 1234567890</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoIosMail className='mt-1' />
                        <a className="link link-hover">info@sportify.com</a>
                    </div>
                </div>
                <div className='md:hidden lg:block'>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label> 
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 border-t bg-base-200 text-base-content border-base-300">
                <div>
                    <p>Copyright © 2023 - All right reserved by Sportify Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;