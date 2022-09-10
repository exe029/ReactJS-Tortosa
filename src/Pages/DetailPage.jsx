import React from "react";
import { useParams, Link } from 'react-router-dom';
import ItemDetailContainer from "../Components/ItemDetailContainer";

const DetailPage = () => {
    let {product} = useParams();
    return (
        <main>
            <ItemDetailContainer product={product} />
            <Link to="/">Home</Link>

        </main>

    );



};
export default DetailPage;