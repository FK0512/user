Overview
The User Directory app is a mobile application built using React Native that fetches a list of users from the public JSONPlaceholder API. It displays the users' names and emails in a list. When a user taps on an entry, it navigates to a detail screen displaying additional information about the user such as their address and company. The app also supports infinite scrolling to load more users as the user scrolls down.

Features
1.User List Screen: Displays a list of users fetched from the API, showing the user's name and email.
2.Infinite Scrolling: As the user scrolls down, additional users are fetched from the API and appended to the list.
3.User Details Screen: Tapping a user takes you to a screen displaying more detailed information such as the user's name, email, address, and company.
4.Loading State: A loading spinner is displayed while users are being fetched.
5.Error Handling: If there is an issue fetching data, an error message is displayed.
6.Navigation: React Navigation is used for navigating between the User List screen and the User Details screen.
7.Back Navigation: Users can navigate back to the User List screen from the User Details screen.
Core Technologies
1.React Native: For building the mobile app.
2.Axios: For making API requests.
3.React Navigation: For navigating between screens.
4.FlatList: For rendering the list of users efficiently with support for infinite scrolling.
5.Activity Indicator: For showing loading state when fetching data.
Installation and Setup
Clone the Repository

git clone https://github.com/your-github-username/user-directory-app.git
Install Dependencies Navigate to the project folder and install the required dependencies.


cd user-directory-app
npm install
Run the App To start the app, use the following command:

npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
API Used The app fetches user data from the JSONPlaceholder API:

Endpoint: https://jsonplaceholder.typicode.com/users?_page={page}&_limit=10
App Flow
User List Screen:

Displays a list of users with their name and email.
Users can scroll to load more users using infinite scrolling.
Tapping a user navigates to the User Details Screen.
User Details Screen:

Displays detailed information about the selected user:
Name
Email
Address (Street, City, Zip)
Company Name
A back button allows navigation back to the User List screen.
UI/UX Design
The design follows a clean and simple structure for better user experience.
The app is responsive and works well on different screen sizes.
The FlatList component is used for efficient rendering of user data.
