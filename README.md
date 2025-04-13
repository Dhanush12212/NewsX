Here’s your updated `README.md` file content with backend integration included. I’ve assumed you're using Express.js for the backend and you're routing News API requests through it for security (based on your previous mention). Let me know if you’re using a different backend setup.

---

# NewsX

**NewsX** is a real-time news application that fetches and displays the latest news articles using a secure backend proxy for the News API. The application features a responsive frontend built with React.js and styled using Bootstrap.

---

## 🚀 Features

1. **Real-time News Updates**  
   Fetches the latest news through a secure backend using News API.

2. **Secure API Handling**  
   API key is securely stored in the backend and not exposed to the frontend.

3. **Responsive Design**  
   Built with Bootstrap to ensure compatibility across all devices — desktops, tablets, and smartphones.

4. **Category Filters**  
   Browse news by categories such as Technology, Sports, Business, and more.

5. **Fast & Lightweight**  
   Optimized React frontend ensures smooth performance and fast loading times.

---

## 🛠 Tech Stack

- **Frontend:** React.js (with Vite)
- **Styling:** Bootstrap
- **Backend:** Node.js, Express.js
- **API:** News API

---

## 🧩 Project Structure

```
NewsX/
├── client/           # React frontend (Vite)
├── server/           # Express backend
├── .env              # Backend environment variables
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Dhanush12212/NewsX.git
cd NewsX
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```
NEWS_API_KEY=your_api_key_here
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client` directory:

```
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
npm run dev
```

---

## 📬 API Key

You can get your free API key from [NewsAPI.org](https://newsapi.org/). Make sure to keep your key secret by storing it in the backend `.env` file only.

Free API key cannot be used in the Production!!

---
 
