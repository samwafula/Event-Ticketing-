import react from 'react';
import Header from '../components/Header';

function HomePage() {
    return(
        <body>
       <Header/>
    
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h2>Experience the Best Events Near You</h2>
              <div class="search-bar">
                <input type="text" placeholder="Search by location" />
                <input type="date" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </section>
    
        <section class="featured-events">
          <h2>Featured Events</h2>
          <div class="event-grid">
            <div class="event-card">
              <img src="event1.jpg" alt="Event" />
              <h3>Music Festival</h3>
              <p>Date: 12th Dec | Location: LA</p>
              <button class="buy-btn">Buy Tickets</button>
            </div>
            <div class="event-card">
              <img src="event2.jpg" alt="Event" />
              <h3>Sports Championship</h3>
              <p>Date: 20th Dec | Location: NY</p>
              <button class="buy-btn">Buy Tickets</button>
            </div>
            <div class="event-card">
              <img src="event3.jpg" alt="Event" />
              <h3>Theater Show</h3>
              <p>Date: 18th Dec | Location: Chicago</p>
              <button class="buy-btn">Buy Tickets</button>
            </div>
          </div>
        </section>
    
        <section class="categories">
          <h2>Popular Categories</h2>
          <div class="category-carousel">
            <div class="category-card">Music</div>
            <div class="category-card">Sports</div>
            <div class="category-card">Theater</div>
            <div class="category-card">Festivals</div>
          </div>
        </section>
      </body>
        

    )
}

export default HomePage;