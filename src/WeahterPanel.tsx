import { AiOutlineClose } from 'react-icons/ai'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'

export type WeatherPanelProps = {
    onClose: () => void
    location: {
        city: string
        state: string
        country: string
    }
    weather: {
        temperature: number
        condition: string
        minTemperature: number
        maxTemperature: number
        feelsLike: number
        windSpeed: number
        humidity: number
    }
}

export const WeatherPanel = ({
    location: { city, country, state },
    weather: {
        temperature,
        condition,
        minTemperature,
        maxTemperature,
        feelsLike,
        humidity,
        windSpeed,
    },
    onClose,
}: WeatherPanelProps) => {
    return (
        <div className="bg-[#FFF2E4] text-slate-700 w-full">
            <div className="flex flex-col gap-1 pl-6 pr-2">
                <div className="flex items-center justify-between">
                    <span className="font-bold text-sm py-3">
                        {city}, {state} - {country}
                    </span>
                    <button onClick={onClose}>
                        <AiOutlineClose className="text-orange-500" />
                    </button>
                </div>
                <div className="flex justify-around gap-2">
                    <div className="font-bold text-3xl">{temperature}°C</div>
                    <div className="font-bold text-3xl">{condition}</div>
                </div>

                <div className="h-20 grid grid-cols-2 place-items-start pt-2">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <MdArrowDownward className="text-orange-500" />
                            <span className="font-bold">{minTemperature}°</span>
                        </div>
                        <div className="flex items-center">
                            <MdArrowUpward className="text-orange-500" />
                            <span className="font-bold">{maxTemperature}°</span>
                        </div>
                    </div>

                    <div>
                        <span className="font-light"> Sensaçâo </span>
                        <span className="font-bold">{feelsLike}°</span>
                    </div>

                    <div>
                        <span className="font-light">Vento</span>
                        <span className="font-bold">{windSpeed}km/h</span>
                    </div>
                    <div>
                        <span className="font-light">Humidade</span>
                        <span className="font-bold">{humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
