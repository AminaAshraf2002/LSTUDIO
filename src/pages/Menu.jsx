import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Menu.css';
import logoImg from '../assets/blacklogo.png';

const API_URL = 'https://lstudio-menu.onrender.com/api';
const SERVER_URL = 'https://lstudio-menu.onrender.com';

function Menu() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, itemsRes] = await Promise.all([
          fetch(`${API_URL}/categories`).then((res) => res.json()),
          fetch(`${API_URL}/menuItems`).then((res) => res.json()),
        ]);
        setCategories(categoriesRes);
        setMenuItems(itemsRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="lumora-loading">
        <span>Loading Menu…</span>
      </div>
    );
  }

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const groupedItems = categories
    .map((cat) => ({
      ...cat,
      items: menuItems.filter((item) => item.category && item.category.id === cat.id),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="lumora-menu-wrapper">
      {/* Action bar — hidden on print */}
      <div className="lumora-action-bar hide-on-print">
        <RouterLink to="/services" className="lumora-back-btn">
          &larr; Back to Services
        </RouterLink>
        <button onClick={handlePrint} className="lumora-download-btn">
          Download / Print Menu
        </button>
      </div>

      {/* Cover Page */}
      <section className="lumora-cover">
        <img src={logoImg} alt="L Studio Logo" className="lumora-cover-logo" />
        <p>Premium Family Salon</p>
      </section>

      {/* Category Pages */}
      {groupedItems.map((category, index) => {
        // Chunk items so that we strictly show a maximum of 8 items per page
        const itemChunks = chunkArray(category.items, 8);
        
        return (
          <React.Fragment key={category.id}>
            {/* Page A: Category Cover Image */}
            <section
              className="lumora-page lumora-category-cover"
              style={
                category.imageUrl
                  ? { backgroundImage: `url(${category.imageUrl})` }
                  : { backgroundColor: 'var(--lumora-bg)' }
              }
            >
              <div className="lumora-category-cover-title">
                <h2>{category.name}</h2>
              </div>
            </section>

            {/* Page B: Category Pricing List (Paginated) */}
            {itemChunks.map((chunk, chunkIndex) => (
              <section 
                key={`${category.id}-chunk-${chunkIndex}`} 
                className={`lumora-page lumora-pricing-page ${index % 2 === 0 ? 'lumora-theme-dark' : 'lumora-theme-light'}`}
              >
                <div className="lumora-pricing-container">
                  {chunkIndex === 0 && (
                    <h3 className="lumora-pricing-title">{category.name}</h3>
                  )}
                  <div className="lumora-price-list">
                    {chunk.map((item) => (
                      <div key={item.id} className="lumora-price-item">
                        <div className="lumora-price-row-line">
                          <span className="lumora-item-name">{item.name}</span>
                          <span className="lumora-item-price">
                            {item.priceIsStartingFrom && (
                              <span className="lumora-item-note">from </span>
                            )}
                            ₹{item.price}
                          </span>
                        </div>
                        {item.description && (
                          <div className="lumora-item-desc">{item.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </React.Fragment>
        );
      })}

      {/* Back Cover */}
      <section className="lumora-cover lumora-back-cover">
        <div className="lumora-back-content">
          <img src={logoImg} alt="L Studio Logo" className="lumora-back-logo" />
          <p>PREMIUM FAMILY SALON</p>
          
          <div className="lumora-contact-info">
            <p>www.lstudio.in</p>
            <p>+971 52 111 2586</p>
            <br />
            <p>Moopans Mall, Near Wasl village,</p>
            <p>Industrial Area 5, Al Qusais,</p>
            <p>Dubai, UAE</p>
          </div>
        </div>
        
        <div className="lumora-qr-container">
          <svg className="lumora-qr" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#EAE0D5" fillOpacity="0" />
            <path d="M10 10H40V40H10V10ZM20 20V30H30V20H20Z" fill="#221C17" />
            <path d="M60 10H90V40H60V10ZM70 20V30H80V20H70Z" fill="#221C17" />
            <path d="M10 60H40V90H10V60ZM20 70V80H30V70H20Z" fill="#221C17" />
            <rect x="50" y="10" width="5" height="40" fill="#221C17" />
            <rect x="50" y="55" width="5" height="35" fill="#221C17" />
            <rect x="10" y="50" width="45" height="5" fill="#221C17" />
            <rect x="60" y="50" width="30" height="5" fill="#221C17" />
            <rect x="70" y="60" width="20" height="10" fill="#221C17" />
            <rect x="60" y="75" width="10" height="15" fill="#221C17" />
            <rect x="80" y="75" width="10" height="15" fill="#221C17" />
            <rect x="40" y="60" width="15" height="10" fill="#221C17" />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Menu;