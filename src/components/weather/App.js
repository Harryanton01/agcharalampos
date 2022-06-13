import React from "react";
import { Card, CardContent } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

class WeatherComp extends React.Component{
  _isMounted = false;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: null,
      forecast: null,
      error:null,
      date:null,
      temperature: null,
      windSpeed: null,
      humidity: null,
      icon: null
    };
  }
  handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: Location " + (response.statusText).toLowerCase());
    }
  }
  
  async getWeather() {
    return fetch(
      'https://api.openweathermap.org/data/2.5/weather/?q=Corinth&units=metric&APPID=153a1c128c0ba51f2db9029e27e4a33c'
    )
      .then(res => this.handleResponse(res))
      .then(weather => {
        if (Object.entries(weather).length) {
          const mappedData = this.mapDataToWeatherInterface(weather);
          return mappedData;
        }
      });
  }
  
  async getForecast() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast/lat=37.9322417&lon=23.0337205&APPID=153a1c128c0ba51f2db9029e27e4a33c`
      )
      .then(res => this.handleResponse(res))
      .then(result => {
        if (Object.entries(result).length) {
          const forecast = [];
          for (let i = 0; i < result.list.length; i += 8) {
            forecast.push(this.mapDataToWeatherInterface(result.list[i + 4]));
          }
          return forecast;
        }
      });
  }
  formatToGreekDate(){
    //Expected date format yyyy-mm-dd hh:MM:ss
    var today = new Date();
    const greekMonths = ['Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου'];
    const greekdays = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'];

    var date = today.getDate() + " " + greekMonths[ today.getMonth() ] + " " + greekdays[ today.getDay() ];
    //var time = today.getHours() + ":" + today.getMinutes();
    return  date;
}
  mapDataToWeatherInterface(data) {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      humidity: data.main.humidity,
      icon_id: data.weather[0].id,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
      condition: data.cod
    };
  
    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }
  
    if (data.weather[0].icon) {
      mapped.icon = data.weather[0].icon;
    }
  
    if (data.main.temp_min && data.main.temp_max) {
      mapped.max = data.main.temp_max;
      mapped.min = data.main.temp_min;
    }
  
    // remove undefined fields
    Object.keys(mapped).forEach(
      key => mapped[key] === undefined && delete data[key]
    );
  
    return mapped;
  }
  componentDidMount(){
    this._isMounted = true;
    this.getWeather().then(weather => {
        if(this._isMounted){
          this.setState({
            ...this.state,
            currentWeather: weather,
            error: null,
            date: this.formatToGreekDate(),
            temperature: weather.temperature,
            windSpeed: weather.wind_speed,
            humidity: weather.humidity,
            icon: 'https://openweathermap.org/img/w/'+weather.icon+'.png'
          });
        }
      })
      .catch(err => {
        console.log(err)
        
      });
      this.getForecast()
      .then(data => {
        if(this._isMounted){
          this.setState({
            ...this.state,
            forecast: data,
            error: null
          });
        }
        
      })
      .catch(err => {
        console.log(err)
      });
   
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    if ((this.state.currentWeather && Object.keys(this.state.currentWeather).length) || (this.state.forecast && Object.keys(this.state.forecast).length)) {
      console.log(this.state.currentWeather)
      console.log(this.state.icon)
      return(
        <div>
          <Card>
            <CardContent>
              <div className={'container'}>
                <div className={'row'}>
                  <div className={'col'}>
                  <h4 style={{marginBottom:'0'}}>'Αγιος Χαράλαμπος</h4>
                  <div>Ίσθμια - Καλαμάκι</div>
                  <h4 style={{paddingBottom:'0.5em'}}>Κορινθίας</h4>
                    {this.state.date}
                    <h1>{this.state.temperature}&#8451;</h1>
                    <img style={{minHeight:'80px'}} src={this.state.icon} alt='weather' />
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col-7'}>
                    <p style={{fontSize:'10px'}}>Ταχύτητα Ανέμου</p>
                    {this.state.windSpeed}km/h
                  </div>
                  <div className={'col-5'}>
                    <p style={{fontSize:'10px'}}>Υγρασία</p>
                    {this.state.humidity}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> 
      );
    } else {
      return(
        <div>
          <CircularProgress color={this.state.error ? "secondary" : "primary"} />
          {this.state.error ? <p>{this.state.error}</p> : ""}
        </div>
      );
    }
  }
}
export default WeatherComp;