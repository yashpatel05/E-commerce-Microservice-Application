const Header = () => {

    return (
        <header className="sticky top-0 bg-blue-200 text-gray-900 py-4 z-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/images/404.png" alt="404NotFound Team Logo" className="h-16 mr-7 ml-7" />
                    <h1 className="text-2xl font-bold mx-4">404NotFound</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
