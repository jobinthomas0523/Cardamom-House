# Cardamom House

A responsive restaurant menu page built as part of the Kwill Frontend Developer Trial Task.

The application is built using Next.js 15, React 19, TypeScript, and Tailwind CSS with a focus on responsive design, accessibility, and clean component architecture.

## Live Demo

Vercel: https://cardamom-house-eight.vercel.app/

GitHub: https://github.com/jobinthomas0523/Cardamom-House

---

## Features

- Responsive design (Mobile, Tablet & Desktop)
- Sticky category navigation
- Active section highlighting while scrolling
- Today's Special section
- Open / Closed restaurant states
- Sold Out special state
- Weekly opening hours
- Accessible semantic HTML
- Smooth scrolling navigation

---

## URL States

The application supports three states through query parameters:

Default

```
/
```

Closed

```
/?state=closed
```

Special Sold Out

```
/?state=special-sold-out
```

---

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

---

## Project Structure

```
app/
components/
data/
types/
lib/
public/
```

---

## Getting Started

Clone the repository

```bash
git clone https://github.com/jobinthomas0523/Cardamom-House.git
```

Go into the project

```bash
cd Cardamom-House
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Design Decisions

- Used a warm amber color palette inspired by the restaurant branding.
- Built reusable components for maintainability.
- Implemented URL-based state management for different restaurant scenarios.
- Focused on a mobile-first responsive layout.

---

## Future Improvements

With additional time, I would add:

- Dark mode
- Dietary filters (Vegetarian / Gluten-Free)
- Print-friendly menu
- Smooth animations using Motion
- Food photography for a richer visual experience

---

## Author

**Jobin P Thomas**

GitHub:
https://github.com/jobinthomas0523

LinkedIn:
https://www.linkedin.com/in/jobin-p-thomas