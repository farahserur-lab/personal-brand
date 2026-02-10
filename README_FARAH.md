# 🎨 Farah Rose - Retro OS Artist Portfolio

A nostalgic, Windows 95-inspired portfolio showcasing your contemporary figurative paintings and the "Full Mind Party" exhibition.

## ✨ What I've Created For You

### 🖼️ Your Personalized Content

**About Section:**
- Featured your profile image (Self-Sunglass painting)
- Your artist bio from "Full Mind Party" 
- List of your techniques and media
- The iconic "Welcome to the party. We have fun here." tagline

**Gallery:**
- 6 of your stunning paintings displayed in a retro grid:
  - Mindfully, Mind Full
  - Ladies of Lately
  - Time Travel
  - Unphased
  - A Drink & a Dance
  - Night with the Band
- Click any artwork to view it larger with descriptions
- Descriptions I wrote based on your artistic themes

**Artist Statement:**
- Your complete "Full Mind Party" statement
- The story of the AI titling journey
- Presented in a retro notepad window

**Contact:**
- Placeholder social media links (update these with your real handles!)
- Beautiful gradient "Available for" section
- Working contact form

**Music Player:**
- Custom "Studio Playlist" with creative track names
- Painting-themed songs to match your vibe

### 🎨 Design Choices I Made

**Colors:**
- Vibrant purple-pink gradient background (matching your bold palette)
- Classic Windows 95 gray windows for contrast
- Pink/coral accents throughout (#ff6b9d)
- Yellow gradients in call-out sections

**Typography & Layout:**
- Retro monospace fonts for that 90s tech feel
- Your name "FARAH ROSE" in the Start menu
- Desktop icons renamed: "Gallery.exe", "Statement.txt", etc.
- Boot screen customized: "FARAH ROSE OS" with art-themed loading messages

**Interactive Elements:**
- Draggable windows
- Double-click desktop icons to open
- Click artwork thumbnails to view details
- Hover effects on gallery items (pink borders!)
- Working Paint app for fun

## 📁 Files Structure

```
Personalbrand.html/
├── standalone.html       ← Your main portfolio file (OPEN THIS!)
├── script.js            ← All the interactive functionality
├── images/              ← Your artwork
│   ├── profile.jpg
│   ├── mindfully-mind-full.jpg
│   ├── ladies-of-lately.jpg
│   ├── time-travel.jpg
│   ├── unphased.png
│   ├── drink-and-dance.png
│   ├── night-with-band.png
│   └── studio-trip.png
└── README.md            ← This file
```

## 🎯 How to Use It

1. **View Locally:** Just open `standalone.html` in any browser
2. **Try Everything:**
   - Double-click desktop icons
   - Drag windows around
   - Click artwork to view details
   - Use the Paint app
   - Read your artist statement in Notepad

## ✏️ What to Customize

### Update Your Contact Info

Open `script.js` and search for these lines (around line 250):

```javascript
contact: {
    title: 'Contact - Farah Rose',
    content: `
        // UPDATE THESE:
        <a href="https://instagram.com/strokesbeforefolks" 
        <a href="mailto:farahmakesart@gmail.com"
        <a href="https://farahrose.xyz"
```

Replace with your real:
- Instagram handle
- Email address  
- Website URL
- Add LinkedIn, Twitter, etc.

### Add More Artwork

In `script.js`, find the `artworkData` array (around line 505) and add your pieces:

```javascript
{
    title: 'Your Artwork Name',
    image: 'images/your-image.jpg',
    description: 'Description of your piece...'
}
```

Then add the thumbnail in the `portfolio` section (around line 125).

## 🚀 Publishing Your Portfolio

### Option 1: GitHub Pages (Free!)
1. Create a GitHub account
2. Create a new repository called "portfolio"
3. Upload all your files
4. Go to Settings → Pages
5. Select main branch
6. Your site will be live at: `yourusername.github.io/portfolio`

### Option 2: Netlify (Super Easy!)
1. Go to netlify.com
2. Drag your entire `Personalbrand.html` folder
3. Instant deployment!
4. Get a free custom domain

### Option 3: Your Own Domain
- Buy a domain (farahroseart.com?)
- Use any hosting service (Bluehost, HostGator, etc.)
- Upload your files via FTP

## 🎨 Design Philosophy

I matched the retro OS aesthetic with your bold, colorful, layered artistic style:
- **Windows 95 nostalgia** = The tactile, playful nature of your work
- **Vibrant gradients** = Your explosive color palette
- **Layered windows** = Your layered painting technique
- **"Full Mind" theme** = The chaotic, joyful desktop environment

The contrast between the structured, gray Windows 95 UI and your explosive, emotional artwork creates a fun tension—order trying to contain beautiful chaos.

## 💡 Future Ideas

- Add an "Exhibition History" window
- Include a "Shop" for prints/originals
- Add a blog/journal window
- Embed videos of your painting process
- Create a "Studio Visit" virtual tour

## 🎉 You're Done!

Your retro OS portfolio is ready to share! Just update your contact info and publish it.

**Questions?** Let me know and I'll help you customize anything!

---

*"Welcome to the party. We have fun here."* 🎨✨
