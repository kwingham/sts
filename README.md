Adapted User Stories
	1. 🐿️ As a user, I want the app to be fast and responsive so that I can browse without delays.
		○ Focus: Efficient loading of itineraries, destinations, reviews, and search results for a smooth user experience.
	2. 🐿️ As a user, I want to browse and add travel destinations or activities to an itinerary so that I can plan my trips.
		○ Focus: Users can add destinations (cities, places) or activities (sightseeing, dining) to their itinerary.
	3. 🐿️ As a user, I want a simple and intuitive form for creating new itineraries so that I can effortlessly plan a trip.
		○ Focus: A form to input trip details, like destination, start/end date, places to visit, and notes.
	4. 🐿️ As a user, I want to view multiple pages so that I can easily find travel recommendations, view my itineraries, and discover new destinations.
		○ Focus: Navigation between sections for itinerary creation, community recommendations, reviews, and a map view.
	5. 🐿️ As a developer, I want to build a database schema that supports users, itineraries, destinations, reviews, and bucket lists, and seed it with realistic data for accurate testing and development.
		○ Focus: Relationships between tables (e.g., users, itineraries, destinations) and data seeding for testing.
	6. 🐿️ As a user, I want to view all travel itineraries within the community so that I can explore and get ideas for my own trips.
		○ Focus: A page where all public itineraries are listed and searchable by destination, user, or category.
	7. 🐿️ As a developer, I want to use .map() to display all itineraries and destinations to efficiently display fetched data.
		○ Focus: Using React .map() to loop over arrays of data (e.g., itineraries, destinations) to display them on the front end.
Adapted Requirements
	1. 🎯 Create a client using React.
		○ Details: The client should support itinerary creation, review browsing, bucket list additions, and destination exploration.
	2. 🎯 Use Express to create your server, using both GET and POST endpoints.
		○ Details:
			§ GET endpoints for fetching itineraries, destinations, reviews, and bucket list items.
			§ POST endpoints for creating itineraries, adding destinations to itineraries, adding reviews, and bucket list items.
	3. 🎯 Build a React form for users to create itineraries and add destinations or activities.
		○ Details: A form that allows users to input trip details like destinations, dates, and activities.
	4. 🎯 Create multiple pages using React Router.
		○ Details: Pages for viewing all itineraries, creating new itineraries, exploring destinations, and checking the user's bucket list.
	5. 🎯 Design a database schema, and seed the database with some realistic data.
		○ Details:
			§ Tables for users, itineraries, destinations, reviews, and bucket list items.
			§ Seed data representing sample users, trips, destinations, and reviews.
	6. 🎯 Use SQL to retrieve itineraries, destinations, and other data from the database in your Express server.
		○ Details: Efficient SQL queries to fetch necessary data for the app's pages.
	7. 🎯 Display all itineraries, destinations, and other data using .map().
		○ Details: Using .map() in React to display arrays of data from the server on pages like "All Itineraries," "Explore Destinations," etc.

Adapted Stretch User Stories
	1. 🐿️ As a user, I want to access different itineraries through dynamic pages so that navigation feels smooth.
		○ Details: Each itinerary should have its own page (e.g., /itineraries/:itineraryId) with detailed information and a breakdown of the planned trip.
	2. 🐿️ As a user, I want to explore destinations by category using dedicated routes so that I can easily find activities of interest.
		○ Details: Routes for different destination categories (e.g., beaches, mountains, cities) with relevant destinations listed under each.
	3. 🐿️ As a user, I want to be able to delete itineraries or destinations from my trip plan so that I can make adjustments as needed.
		○ Details: Allow users to remove itineraries or individual destinations/activities from their trip plans.
	4. 🐿️ As a user, I want to like itineraries and destinations, increasing their like count, so that I can express appreciation for helpful content.
		○ Details: A like button for users to upvote itineraries, destinations, or activities they find useful or interesting.
	5. 🐿️ As a user, I want to filter itineraries and destinations based on different criteria (e.g., location, type of activity, popularity) so that I can quickly find the most relevant content for me.
		○ Details: Search filters for destinations (e.g., type of activity) and itineraries (e.g., destination, user rating).

Adapted Stretch Requirements
	1. 🏹 Create dynamic pages using react-router-dom.
		○ Details: Each itinerary and destination should have its own dynamic route to allow for detailed pages (e.g., /itineraries/:itineraryId, /destinations/:destinationName).
	2. 🏹 Use react-router-dom to create dedicated routes for destinations, activities, and itinerary details.
		○ Details: Routes for different content types, such as /destinations/:categoryName for viewing destinations by category.
	3. 🏹 Allow users to delete itineraries and destinations from their trip plan.
		○ Details: Deletion endpoints and buttons for users to manage their itineraries and destinations.
	4. 🏹 Add ‘like’ functionality on itineraries and destinations.
		○ Details: Update database and front-end state to reflect the number of likes for an itinerary or destination.
	5. 🏹 Create additional SQL queries to show filtered content (itineraries and destinations).
		○ Details: Efficient queries to handle various filtering needs (e.g., destinations by popularity, itineraries by location).
![image](https://github.com/user-attachments/assets/7952bbdd-e574-4f36-9f6a-b706f74203dc)
