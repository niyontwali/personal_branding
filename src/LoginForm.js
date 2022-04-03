const LoginForm = () => {
    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-16 py-8 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold">Login to your account</h3> 
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" type="email">Email</label>
                                    <input type="text" placeholder="Email"
                                        className="w-[300px] px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                                    <input type="password" placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700">Login</button>
                            <a href="/" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginForm;