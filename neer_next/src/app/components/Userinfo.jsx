export default function Userinfo (){
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-3 my-6">
                <div>
                    Name: <span> Neer</span>
                </div>
                <div>
                    Email: <span> neer@gmail.com</span>
                </div>
                <div className="bg-red-500 w-fit px-2 py-2">
                    <button>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}