# Sachin Doodhwal — B.Tech CSE Student Portfolio

Personal portfolio website of **Sachin Doodhwal**, a 1st Year (1st Semester) B.Tech Computer Science & Engineering student at **JECRC University, Jaipur, Rajasthan**.

## Sections Included
1. **Home / Hero**: Introduction, academic standing, and interactive developer code preview.
2. **About Me**: Honest overview of academic background, programming fundamentals, and interest in AI/ML and software development.
3. **Education**:
   - **B.Tech Computer Science & Engineering** — JECRC University, Jaipur (2026 – Present, 1st Year)
   - **Class 12** — RBSE, PCM (Physics, Chemistry, Mathematics)
   - **Class 10** — CBSE
4. **Skills**:
   - **Programming**: C, Programming Fundamentals
   - **Currently Learning**: C++, Python, Data Structures & Algorithms, Web Development, Git & GitHub
   - **Areas of Interest**: Artificial Intelligence, Machine Learning, Software Development, Generative AI
5. **Projects**: Realistic student project cards (*Student Productivity / Day Planner*, *Smart Student Website*, *Beginner Programming Projects*) with placeholders for upcoming details and links.
6. **Certifications & Achievements**: Dedicated placeholders for future technical and coding certifications.
7. **Contact & Footer**: Location (Jaipur, Rajasthan, India), email placeholder (`your-email@example.com`), and GitHub/LinkedIn placeholders.

---

## How to Run Locally (React + Vite)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## How to Deploy on GitHub Pages / Vercel / Netlify

### Option A: Zero-Build Single HTML File (Easiest for GitHub Pages)
If you want to upload a single `index.html` file directly to a GitHub repository without running Node.js or build scripts:
1. Copy the file `/public/standalone-portfolio.html` and rename it to `index.html`.
2. Upload that `index.html` file to your GitHub repository.
3. Go to **Settings → Pages** in your GitHub repository, select the `main` branch, and click **Save**.

### Option B: Full React + TypeScript Repository
1. Push all files in this project to your GitHub repository.
2. Connect the repository to **Vercel**, **Netlify**, or **GitHub Pages (via GitHub Actions)** with build command `npm run build` and output directory `dist`.
