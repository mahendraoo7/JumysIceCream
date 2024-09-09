import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar, FaLessThan, FaGreaterThan } from 'react-icons/fa';

// Import images
import item1 from '../assets/asset 20.webp';
import item2 from '../assets/asset 21.webp';
import item3 from '../assets/asset 22.jpeg';
import item4 from '../assets/asset 23.jpeg';
import item5 from '../assets/asset 24.webp';
import item6 from '../assets/asset 25.webp';
import item7 from '../assets/asset 26.webp';
import item8 from '../assets/asset 27.webp';
import item9 from '../assets/asset 28.webp';
import item10 from '../assets/asset 29.webp';
import item11 from '../assets/asset 30.webp';
import item12 from '../assets/asset 31.webp';
import item13 from '../assets/asset 32.webp';
import item14 from '../assets/asset 33.jpeg';
import item15 from '../assets/asset 34.webp';
import item16 from '../assets/asset 35.jpeg';

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const CardSlider = () => {
    const [productData] = useState([
        {
            name: 'Sunshine',
            price: 1000,
            img: item1,
            img2: item2,
            re: '1 Review'
        },
        {
            name: 'Poe Apple Crisp',
            price: 1300,
            img: item3,
            img2: item4,
            re: '1 Review'
        },
        {
            name: 'Cookies In Cream',
            price: 1300,
            img: item5,
            img2: item6,
            re: '0 Review'
        },
        {
            name: 'Chocolate Mud',
            price: 1500,
            img: item7,
            img2: item8,
            re: '0 Review'
        },
        {
            name: 'Hot Toddy Sorbet',
            price: 1200,
            img: item9,
            img2: item10,
            re: '0 Review'
        },
        {
            name: 'Sorbet Street Treats',
            price: 1000,
            img: item11,
            img2: item12,
            re: '1 Review'
        },
        {
            name: 'Darkest Chocolate',
            price: 1300,
            img: item13,
            img2: item14,
            re: '1 Review'
        },
        {
            name: 'Blackout Chocolate Cake',
            price: 1200,
            img: item15,
            img2: item16,
            re: '1 Review'
        },
    ]);

    const sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="relative py-10  w-screen mx-auto">
            <Button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full border-none p-2 shadow-md">
                <FaLessThan className="text-xl"/>
            </Button>
            <Button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full border-none p-2 shadow-md">
                <FaGreaterThan className="text-xl"/>
            </Button>
            <Slider ref={sliderRef} {...sliderSettings} className="px-2">
                {productData.map((product) => (
                    <div key={product.name} className="px-2">
                        <Card className="w-full bg-white rounded-md shadow-md">
                            <div className="relative w-[400px] h-[300px]">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-t-md" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-lg font-semibold'>{product.name}</Card.Title>
                                <Card.Text>
                                    <div className="flex items-center mt-2">
                                        <div className='flex'>
                                            {[...Array(5)].map((_, index) => (
                                                <FaStar key={index} color="red" />
                                            ))}
                                        </div>
                                        <span className="ml-4">{product.re}</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='font-bold'>
                                    ${ (product.price / 100).toFixed(2) }
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CardSlider;
