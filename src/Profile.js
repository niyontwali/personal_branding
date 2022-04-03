import profile from './img/profile.jpg'
const Profile = () => {
    return ( 
        <div className='h-screen'>
            <div className='flex my-16 mx-[200px]'>
                <div className='flex-1 flex justify-start'>
                    <img src={profile} alt="Profile" className='w-[250px] h-[300px] rounded-full mt-10' />
                </div>
                <div className='flex-2 flex justify-start'>
                    <div className='mt-16 max-w-xl rounded overflow-hidden shadow-sm'>
                        <h1 className='text-3xl font-bold text-orange-700 text-center shadow-'>---Hello!---</h1>
                        <h2 className='text-xl font-bold text-orange-900 text-center mt-5'>My name is John Niyontwali</h2>
                        <p className='text-xl text-gray-700 text-center mt-2'>My mission is to enhance my professional software engineering skills and help business build scalable web  applications <br/> to facilitate in their business services </p>
                        <div className='flex justify-evenly my-6'>
                            <button className='hireMeBtn'>Hire Me!</button>
                            <button className='hireMeBtn'>Download my CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-md bg-gray-100 shadow-lg rounded-lg mx-auto text-center py-8 mt-16 hover:bg-gray-50">
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                    Sign up to join my Forum 
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md bg-white shadow ">
                        <a href="/register" className="signUpBtn">
                            Continue...
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;