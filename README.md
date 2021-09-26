# LiftOffProject
LaunchCode LiftOff Project: Angular, Bootstrap front-end. Java Spring Boot, Hibernate, MySQL back-end.

## Collector Catalog

Collector Catalog is a web app allowing users to store and organize thier collections of a single type. The initial MVP will limit the type of collection to die cast vehicles.

Users will be able to input various aspects of thier collection to be saved in a database. Details can be retrieved with a search and displayed in a table formatted list where items can also be sorted, updated, and deleted.

Additional features presently considered include additional collection types (e.g., comic books, coins, stamps, albums), allowing users to add custom inputs and images, user log in and out, editable user profiles, and dispaying lists of links related to the collection type being viewed.

I hope to deploy this project to the web as soon as the MVP is ready and before implementing additional features.

Collector Catalog utilizes an Angular front-end for user interaction and client side validation. Bootstrap is employed to manage CSS. Some custom CSS is expected. Java Spring Boot will implement Hibernate to communicate with a MySQL database. VSCode, IntilliJ, and MySQL Workbench are being used to create this project. For this project I am also using Git for version control and Trello for progress tracking.

The app can be accessed at https://eyetyrant.github.io/collectorui/ with your Firefox browser,
(not yet compatible with Safari, Chrome, or Edge).
## OR
From Dockerhub:  
    
With docker installed, type the following commands in your cli to interact with the app:

1. docker pull eyetyrant/collectorapi:v1.0
2. docker pull eyetyrant/collectorui:v1.0
3. docker run  --rm -d -p 8080:8080 eyetyrant/collectorapi:v1.0
4. docker run --rm -d -p 4200:80 eyetyrant/collectorui:v1.0
5. Navigate to localhost:4200 in your browser to interact.
6. Register.
7. Login.
8. Click on "Your Collections" to CRUD your collection.

To pull images from the github repositories instead of Dockerhub, add the prefix ghcr.io/

---
An initial wireframe example of a single page version created with Adobe Illustrator is displayed below and other examples considered can be found [here](https://github.com/EyeTyrant/liftOffProject/tree/master/wireframes).

![Single page with sidebar](https://github.com/EyeTyrant/liftOffProject/blob/master/wireframes/collectorSingleSideBar.png)
