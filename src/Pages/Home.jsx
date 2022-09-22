import React from "react";
import ItemListContainer from "../Components/ItemListContainer";

const Home = () => {
    return (
        <main className=" h-min-main pb-6">
            <div className=" py-2 text-center bg-gradient-to-b bg-cyan-700 from-cyan-400 shadow-md w-full">
                <div>
                 <p className="text-lg text-slate-100 uppercase font-semibold">¡Es hora de jugar!</p>
                </div>
            </div>
            <ItemListContainer />
        </main>
    )


};
export default Home;