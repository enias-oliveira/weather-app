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
        <div className="bg-white">
            <div className="pl-4">
                <div className="flex items-center justify-between">
                    <span>
                        {city}, {state} - {country}
                    </span>
                    <button onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div>
                    {temperature}°C {condition}
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <MdArrowDownward />
                            <span>{minTemperature}</span>
                        </div>
                        <div className="flex items-center">
                            <MdArrowUpward />
                            <span>{maxTemperature}</span>
                        </div>
                    </div>

                    <div>
                        Sensaçâo <span>{feelsLike}°</span>
                    </div>

                    <div>
                        Vento <span>{windSpeed}km/h</span>
                    </div>
                    <div>
                        Humidade <span>{humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
