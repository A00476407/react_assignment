import { useState } from "react";
import cold_img from '../cold.png';
import mild_img from '../mild.png';
import sunny_img from '../sunny.png';

/**cold.png if the temperature is 10°C or lower
mild.png if the temperature is higher than 10°C  but lower than 20°C
sunny.png if the temperature is higher than 20°C 
**/
const Weather = (props) => {
    const [isMetric, setisMetric] = useState(true);
    const [isImperial, setisImperial] = useState(false);

    return (
        <div class="weather-container">
            <div>
                <table className="weather-table">
                    <tr>
                        <td class='weather-img' rowspan="2">{(props.temp <= 10) ? <img src={cold_img} alt='cold' /> : (props.temp <= 20) ? <img src={mild_img} alt='mild' /> : <img src={sunny_img} alt='sunny' />}</td>
                        <td class='weather-temp' rowspan="2">{isMetric ? props.temp : ((props.temp * 9 / 5) + 32).toFixed(2)}</td>
                        <td>
                            <button
                                onClick={() => { setisMetric(true); setisImperial(false); }}
                                class={isMetric ? "btn-metric-show" : "btn-metric-hide"}
                            >°C
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <button
                            onClick={() => { setisMetric(false); setisImperial(true); }}
                            className={isImperial ? "btn-imperial-show" : "btn-imperial-hide"}
                        >°F
                        </button>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Weather;