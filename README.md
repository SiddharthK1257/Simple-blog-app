# 📝 Simple Blog App

A lightweight, modern, and responsive blog application built with pure HTML5, CSS3, and Vanilla JavaScript. Write your thoughts, publish your stories, and manage your posts seamlessly with zero backend setup and client-side persistence.

---

## 🌟 Key Features

- **⚡ Fast & Dependency-Free**: Built with 100% vanilla web technologies (no heavy frameworks or external dependencies).
- **💾 LocalStorage Persistence**: Your blog posts are saved directly in your browser's `localStorage`, persisting across page refreshes and browser restarts.
- **🛡️ Secure DOM Manipulation**: Built with safe DOM APIs (`textContent` and `replaceChildren()`) to prevent XSS vulnerabilities.
- **🆔 Unique UUID Generation**: Utilizes modern Web Crypto API (`crypto.randomUUID()`) to generate unique IDs for every post.
- **📱 Responsive & Clean UI**: Styled with modern CSS cards, soft drop shadows, intuitive form controls, and mobile-friendly media queries.
- **🕒 Automatic Timestamps**: Automatically tags published posts with formatted local date and time stamps.
- **🗑️ Post Management**: Easily remove published posts with one-click deletion and real-time state synchronization.
- **💬 Empty State Handling**: Displays a friendly placeholder message when no posts have been created yet.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic structure and accessible form inputs |
| **CSS3** | Modern styling, card layouts, Flexbox, and responsive design |
| **Vanilla JavaScript (ES6+)** | State management, DOM rendering, Web Crypto API, and LocalStorage integration |

---

## 📂 Project Structure

```text
Simple-blog-app/
├── index.html        # Main HTML layout and application entry point
├── style.css         # Modern, responsive stylesheet
├── script.js         # Client-side logic, storage, and dynamic DOM updates
└── README.md         # Project documentation and guide
```

---

## 🚀 Getting Started

No installation, build tools, or server environments are required. You can run the app in just a few seconds:

### Option 1: Open Directly in Browser
Simply double-click the `index.html` file or drag and drop it into any modern web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Using VS Code Live Server
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (by *Ritwick Dey*).
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Using a Simple Local Server
If you prefer running a local server:

**Using Python 3:**
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

---

## 💾 Data Persistence Details

All posts are serialized and saved under the local storage key:
```javascript
const STORAGE_KEY = "simpleBlogPosts";
```

Each post object follows this structure:
```json
{
  "id": "e4f9b8c2-3e2a-4a2e-8a1a-3a4b5c6d7e8f",
  "title": "My First Blog Post",
  "content": "Writing thoughts and saving stories directly in the browser!",
  "createdAt": "2026-10-13T15:15:00.000Z"
}
```

---

## 📸 Screenshots & Preview

| Create Post & Feed | Clean Responsive Design |
| :---: | :---: |
| Clean form with title and multiline content editor | Card-based post layout with timestamps and delete buttons |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SiddharthK1257/Simple-blog-app/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
