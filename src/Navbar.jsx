const Navbar = () => {
    return ( 
        <nav className="bg-white shadow-lg rounded  py-2 flex fixed top-0 left-0 right-0 justify-center">
            <div>
                <a href="/"><h1 className="text-3xl font-bold font-logo mt-[-5px]"><span className="text-orange-600">John</span>N</h1></a>
            </div>
            <div className="flex">
                    <div>
                      <a className="navbarLinks" href="/">Who am I ?</a>
                      <a className="navbarLinks" href="/services">Services</a>
                      <a className="navbarLinks" href="/blog">Blog</a>
                      <a className="navbarLinks" href="/contact">Contact</a>
                    </div>
                    <div className="pl-[500px] flex items-center">
                      <a className="px-4 pb-1 rounded-md font-semibold text-xl border-2 border-orange-600 bg-red-50 hover:bg-orange-600 hover:text-white" href="/login">Sign in</a>
                    </div> 
            </div>
        </nav>
     );
}
export default Navbar;
