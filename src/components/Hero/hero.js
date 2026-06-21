
import { PlusCircleIcon } from "lucide-react";
const hero = () => {
    return (
        <div>
            <div className="hero bg-white max-h-screen py-20">
                <div className="hero-content text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#64748B]">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                        <button className="btn btn-accent bg-[#244D3F] text-white"><PlusCircleIcon />Add Friends</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero