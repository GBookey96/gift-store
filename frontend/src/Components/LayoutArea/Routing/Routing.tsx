import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import List from "../../DataArea/List/List";
import Insert from "../../DataArea/Insert/Insert";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} />
                
                <Route path="/list" element={<List />} />
                <Route path="/insert" element={<Insert />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
