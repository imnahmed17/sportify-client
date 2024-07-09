import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudent } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { TbUsersGroup } from 'react-icons/tb';

const Statistics = ({ stats }) => {
    return (
        <div className='w-full stats shadow'>
            <div className='stat'>
                <div className='stat-figure text-primary'>
                    <TbUsersGroup className='h-8 w-8' />
                </div>
                <div className='stat-title'>Total Users</div>
                <div className='stat-value text-primary'>{stats.totalUsers}</div>
                <div className='stat-desc'>21% more than last month</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <LiaChalkboardTeacherSolid className='h-8 w-8' />
                </div>
                <div className='stat-title'>Total Instructors</div>
                <div className='stat-value text-secondary'>{stats.totalInstructor}</div>
                <div className='stat-desc'>21% more than last month</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-accent'>
                    <SiGoogleclassroom className='h-8 w-8' />
                </div>
                <div className='stat-title'>Total Classes</div>
                <div className='stat-value text-accent'>{stats.totalClasses}</div>
                <div className='stat-desc'>21% more than last month</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-info'>
                    <PiStudent className='h-8 w-8' />
                </div>
                <div className='stat-title'>Total Enrollments</div>
                <div className='stat-value text-info'>{stats.totalEnrollments}</div>
                <div className='stat-desc'>21% more than last month</div>
            </div>
        </div>
    );
};

export default Statistics;