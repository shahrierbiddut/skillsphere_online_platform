# 🎓 SkillSphere - Online Learning Platform

A modern, feature-rich online learning platform built with Next.js 16, React 19, and Tailwind CSS. SkillSphere enables instructors to create and manage courses while providing students with an interactive learning experience.

Live Link: (https://skillsphere-online-platform.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Routes](#api-routes)
- [Features Overview](#features-overview)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- 👤 **User Authentication** - Secure login, registration, and Google OAuth integration
- 🎥 **Course Management** - Browse, search, and view detailed course information
- 👨‍🏫 **Instructor Profiles** - Dedicated instructor profiles with ratings and reviews
- 📊 **Course Dashboard** - Complete course details with curriculum and learning outcomes
- 🔐 **Protected Routes** - Session-based authentication for course access
- 📱 **Responsive Design** - Fully responsive UI optimized for all devices
- 🎨 **Modern UI** - Beautiful gradient designs and smooth animations with Tailwind CSS
- ⚡ **Real-time Updates** - Dynamic course content and user profile management

### User Features
- User registration and login system
- Google authentication integration
- Profile creation and management
- Profile picture upload and customization
- Personalized dashboard
- Course search and filtering
- Course ratings and reviews

### Instructor Features
- Course creation and management
- Student enrollment tracking
- Course performance analytics
- Instructor profile management

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.2.4 |
| **Runtime** | React 19.2.4 |
| **Styling** | Tailwind CSS 4 with PostCSS |
| **Icons** | Lucide React 1.14.0 |
| **Linting** | ESLint 9 |
| **Node Version** | 18.x or higher |

## 📁 Project Structure

```
skillsphere_online_platform/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/                    # Authentication endpoints
│   │   │       ├── google/
│   │   │       ├── login/
│   │   │       ├── logout/
│   │   │       ├── profile/
│   │   │       ├── register/
│   │   │       └── status/
│   │   ├── Component/                   # Reusable UI components
│   │   │   ├── Auth/
│   │   │   └── Homepage/
│   │   ├── components/                  # Feature-specific components
│   │   │   ├── course-details/
│   │   │   ├── course-search/
│   │   │   ├── home/
│   │   │   ├── profile/
│   │   │   ├── toast/
│   │   │   └── trending/
│   │   ├── courses/                     # Course pages
│   │   ├── login/                       # Login page
│   │   ├── profile/                     # User profile pages
│   │   ├── register/                    # Registration page
│   │   ├── layout.js                    # Root layout
│   │   ├── page.js                      # Homepage
│   │   ├── globals.css                  # Global styles
│   │   └── loading.js                   # Loading fallback
│   ├── lib/
│   │   ├── authSession.js               # Auth session management
│   │   ├── formatters.js                # Utility formatters
│   │   ├── homeData.js                  # Data fetching utilities
│   │   └── userStore.js                 # User state management
│   └── Assets/                          # Static assets
├── public/
│   ├── course.json                      # Course data
│   ├── instructors.json                 # Instructor data
│   └── [other static files]
├── next.config.mjs                      # Next.js configuration
├── tailwind.config.js                   # Tailwind configuration
├── postcss.config.mjs                   # PostCSS configuration
├── eslint.config.mjs                    # ESLint rules
├── jsconfig.json                        # JS path aliases
├── package.json                         # Project dependencies
└── README.md                            # This file
```

## 📋 Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- Git (for version control)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/shahrierbiddut/skillsphere_online_platform.git
cd skillsphere_online_platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Verify Installation
```bash
npm run lint
```

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file in the root directory (optional):
```bash
# Add any required environment variables here
```

### Path Aliases
The project uses path aliases configured in `jsconfig.json`:
```javascript
{
  "@/*": "./src/*"
}
```

## 🎯 Getting Started

### Development Server
```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### Features to Try:
1. **Homepage** - Browse featured courses and instructors
2. **Course Search** - Search and filter courses by category
3. **Registration** - Create a new account
4. **Login** - Sign in with credentials or Google
5. **Course Details** - View detailed course information and curriculum
6. **Profile** - Manage your user profile and settings

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Webpack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🔌 API Routes

### Authentication Endpoints

#### Register
```
POST /api/auth/register
Body: { name, email, password }
```

#### Login
```
POST /api/auth/login
Body: { email, password }
```

#### Google Auth
```
GET /api/auth/google
```

#### Check Auth Status
```
GET /api/auth/status
Response: { authenticated: boolean, user?: object }
```

#### Get User Profile
```
GET /api/auth/profile
```

#### Update Profile
```
PUT /api/auth/profile
Body: { name, photoUrl }
```

#### Logout
```
POST /api/auth/logout
```

## 🎓 Features Overview

### 1. **Authentication System**
- Secure user registration with password validation
- Email-based login
- Google OAuth 2.0 integration
- Session management with cookies
- Profile management

### 2. **Course Management**
- Browse all available courses
- Search and filter by category
- Detailed course views with curriculum
- Course ratings and student reviews
- Duration and difficulty level indicators

### 3. **Instructor System**
- Instructor profiles with expertise information
- Rating system based on student reviews
- Student enrollment tracking
- Course statistics

### 4. **User Dashboard**
- Personalized user profiles
- Profile picture management
- Enrolled courses tracking
- Learning progress indicators

### 5. **Search & Discovery**
- Advanced course search
- Category filtering
- Course recommendations
- Popular courses section
- Trending courses

## 📚 Data Structure

### Course Schema
```javascript
{
  id: number,
  title: string,
  instructor: string,
  duration: string,
  rating: number,
  level: string,
  description: string,
  image: string,
  category: string
}
```

### Instructor Schema
```javascript
{
  id: number,
  name: string,
  title: string,
  expertise: string,
  experience: string,
  rating: number,
  students: number,
  courses: number,
  bio: string,
  image: string
}
```

### User Schema
```javascript
{
  name: string,
  email: string,
  photoUrl: string,
  password: string (hashed)
}
```

## 🎨 Styling

The project uses **Tailwind CSS 4** for styling with the following key features:
- Custom color scheme
- Responsive grid system
- Pre-built component utilities
- Smooth animations and transitions

Key color classes used:
- Primary: `#3154f4` (Blue)
- Background: `#f7f9ff` (Light Blue)
- Text: `#1a1a1a` (Dark)

## 🔐 Security Features

- Password-protected user accounts
- Session-based authentication
- Protected API routes
- Cookie-based session management
- Input validation and sanitization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚨 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📈 Performance

- Next.js Image Optimization
- Code splitting and lazy loading
- CSS minification
- Automatic static optimization
- Server-side rendering (SSR)

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Update README for new features

## 📄 License

This project is private and maintained by the SkillSphere team.

## 📞 Support

For issues, bugs, or feature requests, please create an issue in the GitHub repository.

## 🌐 Connect With Me

- 💼 LinkedIn: [Shahrier Hossain Biddut](https://www.linkedin.com/in/shahrier-hossain-biddut-3b847528a?
utm_source=share_via&utm_content=profile&utm_medium=member_android)

- 📘 Facebook: [Facebook Profile](https://www.facebook.com/share/1B6Hw7xVdx/)

- ▶️ YouTube: [SkillSphere Demo Video](https://www.youtube.com/watch?v=1OdHatIkFa4)

- 💻 GitHub: [@shahrierbiddut](https://github.com/shahrierbiddut)

## 👥 Team

**SkillSphere Development Team**
- Lead Developer: [@shahrierbiddut](https://github.com/shahrierbiddut)

---

<div align="center">

### Made with ❤️ using Next.js and React

**[⬆ Back to Top](#-skillsphere---online-learning-platform)**

</div>
