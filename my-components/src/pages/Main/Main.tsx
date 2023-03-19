import React from "react";
import './Main.css';
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";

class Main extends React.Component {
    render(): React.ReactNode {
        return(
            <div className="main">
                <SearchBar data-testid="search-input" />
                <div className="main-cards" data-testid="card-block">
                    <Card 
                        title="Camera" 
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s" 
                        description="Device for recording an image of an object on a light-sensitive surface" 
                    />
                    <Card 
                        title="Car" 
                        img="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*" 
                        description="A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people" 
                    />
                    <Card 
                        title="Watch" 
                        img="https://cdn.shopify.com/s/files/1/0742/4487/articles/what-makes-a-dress-watch-896711_720x.jpg?v=1661493798" 
                        description="A watch is a portable timepiece intended to be carried or worn by a person" 
                    />
                    <Card 
                        title="Chocolate" 
                        img="https://www.foodandwine.com/thmb/CSymEoT8VULnc6G04fWtErI1YGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dark-chocolate-bark-roasted-almonds-and-seeds-hero-01-FT-RECIPE1222-53401fe9698f439bbbe17cefac9bef95.jpg" 
                        description="Chocolate is made from cocoa beans, the dried and fermented seeds of the cacao tree (Theobroma cacao)" 
                    />
                </div>
            </div>
        );
    }
}

export default Main;