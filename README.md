# Cardamom House Restaurant Menu

A responsive restaurant menu web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** as part of the Kwill Frontend Developer trial task.

The application provides a modern digital menu experience with category navigation, responsive layouts, and different restaurant states such as open, closed, and special sold out.

---

## Live Demo

https://cardamom-house-eight.vercel.app/

---

## GitHub Repository

https://github.com/jobinthomas0523/Cardamom-House

---

## Features

- Responsive design for desktop, tablet, and mobile
- Sticky category navigation
- Active menu section highlighting while scrolling
- Hero section with restaurant information
- Today's Chef's Pick section
- Dynamic restaurant states using URL query parameters
- Weekly opening hours
- Menu grouped into categories
- Sold Out state for menu items
- Clean and accessible UI
- Built using reusable React components

---

## Supported URL States

### Default (Restaurant Open)

```
/
```

Displays:

- Open status
- Chef's Pick
- Full menu

---

### Restaurant Closed

```
/?state=closed
```

Displays:

- Closed badge
- Closed information banner
- Next opening message

---

### Today's Special Sold Out

```
/?state=special-sold-out
```

Displays:

- Chef's Pick marked as Sold Out
- Corresponding menu item marked as unavailable

---

## Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

---

## Project Structure

```
app/
components/
data/
types/
public/
```

Main reusable components include:

- Hero
- StickyNav
- MenuSection
- MenuItem
- TodaySpecial
- StatusBanner
- Footer

---

## Installation

Clone the repository

```bash
git clone https://github.com/jobinthomas0523/Cardamom-House.git
```

Navigate into the project

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

Open

```
http://localhost:3000
```

---

## Design Decisions

- Used reusable components to keep the codebase modular.
- Stored menu data separately for easier maintenance.
- Implemented restaurant states using URL query parameters to simulate different real-world scenarios.
- Used Tailwind CSS for rapid styling and responsive layouts.

---

## Future Improvements

- Dark mode support
- Search and filter menu items
- Online ordering integration
- Multi-language support
- Animations for menu interactions

---

## Author

**Jobin P Thomas**

GitHub:
https://github.com/jobinthomas0523

LinkedIn:
https://www.linkedin.com/in/jobin-p-thomas
