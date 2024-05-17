import profile from '../../assets/profile.png';

const HeaderPart = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default HeaderPart;