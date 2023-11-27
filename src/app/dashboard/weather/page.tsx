
import Forecasts from "./components/Forecasts";
import RefreshBtn from "./components/RefreshBtn";


const page = () => {
    return (
        <div>
           <RefreshBtn />
            <Forecasts />
        </div>
    );
};

export default page;