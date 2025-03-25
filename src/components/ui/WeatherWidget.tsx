
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

type WeatherData = {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
};

const WeatherWidget = ({ location = "Hunder, Nubra Valley" }: { location?: string }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap's free API
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9de243494c0b295cca9337e1e96b00e2&units=metric`
        );
        
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        
        const data = await response.json();
        
        setWeather({
          location: data.name,
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        });
        
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Could not load weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <Sun className="h-10 w-10 text-amber-500" />;
      case "clouds":
        return <Cloud className="h-10 w-10 text-gray-400" />;
      case "rain":
      case "drizzle":
        return <CloudRain className="h-10 w-10 text-blue-400" />;
      case "thunderstorm":
        return <CloudLightning className="h-10 w-10 text-purple-500" />;
      case "snow":
        return <CloudSnow className="h-10 w-10 text-blue-200" />;
      default:
        return <SunMedium className="h-10 w-10 text-amber-500" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden backdrop-blur-sm", 
      loading || error ? "bg-white/90" : "bg-white/80")}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center p-4 text-stone-500">
            <p>{error}</p>
            <p className="text-sm mt-1">Please try again later</p>
          </div>
        )}
        
        {weather && !loading && !error && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-stone-800">{weather.location}</h3>
                <p className="text-3xl font-semibold">{weather.temperature}°C</p>
                <p className="text-stone-600">{weather.condition}</p>
              </div>
              <div>
                {getWeatherIcon(weather.condition)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div className="flex items-center">
                <span className="text-stone-600">Humidity:</span>
                <span className="ml-1 font-medium">{weather.humidity}%</span>
              </div>
              <div className="flex items-center">
                <span className="text-stone-600">Wind:</span>
                <span className="ml-1 font-medium">{weather.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
