# Welcome to the APItems ReadMe!

APItems is an interactive CRUD sandbox intended for aspiring software developers. This responsive and user-friendly application is a simple-yet-effective educational tool to assist new developers with understanding the fundamentals of creating, updating, and deleting
elements and RESTful endpoints. Built with a React front-end that connects to my custom-built Laravel / PHP records web API, APItems is a must-bookmark for anyone beginning their software development journey!

# Screenshots

## Landing Page
![apitems_landing_page](https://github.com/Dschulte1982/records-api-front-end/assets/65473402/99881902-31c7-4602-94d8-5b9d37351de9)

## Detailed Item
![apitems_detailed](https://github.com/Dschulte1982/records-api-front-end/assets/65473402/66931b80-2982-46b1-a2b8-cebe4f5a8f06)

## Create Modal
![apitems_add_modal](https://github.com/Dschulte1982/records-api-front-end/assets/65473402/82810d53-ec25-4980-80d6-600162123c16)


# API Endpoints

### Items
- GET api/items
  - Returns all items
- GET api/items/${id}
  - Returns the item with the corresponding ID
- POST api/items
  - Creates an item and adds it to the API

- PUT api/items/${id}
  - Edits the item at the corresponding ID
- DELETE api/items/${id}
  - Deletes the item at the corresponding ID

<br></br>
# Sample State

{

   item: {
        id: 17,
        name: "Game Boy Advance",
        description: "The Game Boy Advance is a 32-bit handheld gaming console developed by Nintendo. Serving as the successor to the Game Boy Color, it offered a wide range of games and entertainment options.",
        price: 199.99,
        rating: 3
        createdOn: "2024-02-01",
        updatedOn: "2024-05-28"
    }

    items: {

          owned: [
            {id: 1, name: "Light Bulb", description: "A 60-watt dimmable LED light bulb that is energy-efficient and provides long-lasting...", price: 8.99, rating: 2, createdOn: "2024-02-01", updatedOn: "2024-05-28"},
            {id: 2, name: "Sunglasses", description: "Iconic black-framed Wayfarer Classics sunglasses, a timeless style since 1952. Protect...", price: 180.00, rating: 3, createdOn: "2024-02-01", updatedOn: "2024-05-28"},
            ...
          ],

}

<br></br>

# Frontend Routes

The components will be organized as such:
 - Root
    - Router
          - App
              - Routes
                  - NavBar
                  - MainContainer
                      - CardLoader
                          - Card


The following routes will render in our App between NavBar and Footer:
- /
  - Homepage with all items
- /${id}
  - Detailed item view
