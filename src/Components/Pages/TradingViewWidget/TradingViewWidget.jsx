import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  const widgetConfig = {
    width: '100%',
    height: '100%',
    currencies: [
      'EUR',
      'USD',
      'JPY',
      'GBP',
      'CHF',
      'AUD',
      'CAD',
      'NZD',
      'CNY',
      'SEK',
      'ZAR',
    ],
    isTransparent: false,
    colorTheme: 'light',
    locale: 'en',
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.innerHTML = JSON.stringify(widgetConfig);
  
    const container = document.querySelector('.tradingview-widget-container');
    container.appendChild(script);
  
    return () => {
      // Check if the script element is still present in the DOM before removing it
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);
  

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
  //   script.async = true;
  //   script.innerHTML = JSON.stringify(widgetConfig);

  //   const container = document.querySelector('.tradingview-widget-container');
  //   container.appendChild(script);

  //   return () => {
  //     container.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;