## Prerequisites

- Node.js
- npm



## Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd kickertech-task
cd backend
```

### 2. Backend install and start


```bash
npm install
npm run dev
```

Server will run at http://localhost:4000.

### 3. Frontend install and start


```bash
cd ../frontend
npm install
npm run dev
```

App will run at http://localhost:5173.


## Reflection Questions

### 1. Why did you choose your specific approach to managing state with Redux?

I put all bet-related state and actions in one slice. I used `createSelector` to filter bets based on status, which helps the app run faster and keeps the logic outside of the UI components.

### 2. How else could you have implemented the status filter feature?

I could have used React `state` or `Context` to manage the filter. That would work fine for a small app. This way, the filter logic stays close to the components and is easy to update when the user selects a different status.

### 3. What trade-offs did you consider when designing the API endpoints?

I designed the API to be simple, and easy to use, focusing quick integration with the frontend. The trade-off here was between simplicity and scalability. This approach prioritizes development speed and maintainability over advanced features, which I would consider adding with more time.

### 4. If you had more time, what additional feature or improvement would you add to this dashboard, and why?

I would add `pagination` and `server-side filtering` to make it easier to handle many bets. I would also add `optimistic updates` and save data in a real database like SQLite or PostgreSQL. A history log or activity feed would help users see what changed. I would also improve the design and make the app more accessible for all users.