import React, { useEffect, useRef, useState } from 'react';
import { propertyInfo, theme } from '../config/propertyConfig';

const Map = () => {
    const mapRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadScript = (url) => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            script.id = "googleMapsScript";
            script.async = true;
            script.defer = true;

            script.onload = () => {
                initMap();
            };

            script.onerror = () => {
                setError("Unable to load Google Maps. Please check your internet connection.");
            };

            document.body.appendChild(script);
        };

        const initMap = () => {
            if (!mapRef.current || !window.google) return;

            try {
                // Default location if not provided
                const location = propertyInfo.map || { lat: 32.8242, lng: -96.8285 };

                const mapOptions = {
                    center: location,
                    zoom: 15,
                    disableDefaultUI: true,
                    zoomControl: true,
                    scrollwheel: false,
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [{ "visibility": "off" }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
                        }
                    ]
                };

                const map = new window.google.maps.Map(mapRef.current, mapOptions);

                // Add Marker
                new window.google.maps.Marker({
                    position: location,
                    map: map,
                    title: propertyInfo.address,
                    animation: window.google.maps.Animation.DROP
                });


            } catch (err) {
                setError("Error loading map. Please refresh the page.");
            }
        };

        if (window.google && window.google.maps) {
            initMap();
        } else {
            // Try multiple sources for API key in order of preference:
            const apiKey = propertyInfo.googleMapsApiKey
                || import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                || 'AIzaSyDFBUJSmoJccQw1ZMDUwiBAibiXgwkhxlo';

            if (apiKey) {
                const existingScript = document.getElementById("googleMapsScript");
                if (!existingScript) {
                    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`);
                } else {
                    const checkGoogle = setInterval(() => {
                        if (window.google && window.google.maps) {
                            clearInterval(checkGoogle);
                            initMap();
                        }
                    }, 100);
                    return () => clearInterval(checkGoogle);
                }
            } else {
                setError("Google Maps configuration error.");
            }
        }

    }, []);

    return (
        <section className="map-section">
            {error ? (
                <div className="map-error">
                    <p>Unable to load map</p>
                    <small>{error}</small>
                </div>
            ) : (
                <div ref={mapRef} className="map-container"></div>
            )}
            <style>{`
                .map-section {
                    width: 100%;
                    height: 450px; 
                }
                .map-container {
                    width: 100%;
                    height: 100%;
                }
                .map-error {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f5f5f5;
                    color: #666;
                    text-align: center;
                    padding: 2rem;
                }
                .map-error p {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                .map-error small {
                    font-size: 0.8rem;
                    color: #999;
                }
                
                @media (max-width: 768px) {
                    .map-section {
                        height: 350px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Map;
