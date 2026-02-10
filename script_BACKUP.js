// Boot sequence
setTimeout(() => {
    document.getElementById('bootScreen').classList.add('hidden');
    document.getElementById('desktop').classList.remove('hidden');
    document.getElementById('taskbar').classList.remove('hidden');
}, 3000);

// Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Loading dots animation
let dotCount = 0;
setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    document.getElementById('loadingDots').textContent = '.'.repeat(dotCount);
}, 500);

// Window management
let windows = [];
let zIndex = 100;
let selectedIcon = null;

// Start menu
document.getElementById('startBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = document.getElementById('startMenu');
    menu.classList.toggle('hidden');
});

document.addEventListener('click', () => {
    document.getElementById('startMenu').classList.add('hidden');
});

// Desktop icons
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
        selectedIcon = icon;
    });

    icon.addEventListener('dblclick', () => {
        const windowType = icon.dataset.window;
        openWindow(windowType);
    });
});

document.getElementById('desktop').addEventListener('click', () => {
    document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    selectedIcon = null;
});

// Start menu items
document.querySelectorAll('.start-menu-item[data-window]').forEach(item => {
    item.addEventListener('click', () => {
        const windowType = item.dataset.window;
        openWindow(windowType);
        document.getElementById('startMenu').classList.add('hidden');
    });
});

// Window templates
const windowContents = {
    about: {
        title: 'About Me - Farah Rose',
        content: `
            <div style="display: flex; gap: 20px; align-items: start;">
                <img src="images/profile.jpg" style="width: 200px; height: auto; border: 3px solid #000080; box-shadow: 4px 4px 0px rgba(0,0,0,0.3);">
                <div style="flex: 1;">
                    <h2 style="color: #000080; margin-bottom: 16px; font-size: 24px; font-weight: bold;">Farah Rose</h2>
                    <p style="margin-bottom: 8px;"><strong>Artist & Creator</strong></p>
                    <p style="margin-bottom: 8px; font-size: 12px;">Contemporary Figurative Painter</p>
                    
                    <div style="margin: 16px 0; line-height: 1.7; font-size: 13px;">
                        <p style="margin-bottom: 12px;">
                            My mind is a party where everyone is talking at once, the music is slightly too loud, 
                            and the guest list was lost years ago.
                        </p>
                        <p style="margin-bottom: 12px;">
                            <strong>Full Mind Party</strong> is an exploration of the intricate, often overwhelming 
                            landscape of contemporary consciousness. It's a visual record of the friction created 
                            when the desire for presence meets the reality of digital noise.
                        </p>
                        <p>
                            My work captures the beautiful chaos of modern life through bold colors, layered 
                            compositions, and figures caught in moments of introspection, celebration, and 
                            connection.
                        </p>
                    </div>
                    
                    <div style="background: #C0C0C0; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 12px; margin-top: 16px;">
                        <h3 style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">Media & Techniques:</h3>
                        <div style="font-size: 11px; columns: 2; column-gap: 16px;">
                            <div>• Oil & Acrylic Painting</div>
                            <div>• Mixed Media</div>
                            <div>• Contemporary Figurative</div>
                            <div>• Collage & Layering</div>
                            <div>• Bold Color Theory</div>
                            <div>• Digital Art Integration</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, #ff6b9d, #c06c84); color: white; border-radius: 4px; font-size: 12px; text-align: center; font-style: italic;">
                "Welcome to the party. We have fun here."
            </div>
        `
    },
    portfolio: {
        title: 'Gallery - Full Mind Party',
        content: `
            <div id="portfolioView">
                <div id="portfolioGrid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 12px;">
                    <div class="artwork-thumb" onclick="viewArtwork(0)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/mindfully-mind-full.jpg" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">Mindfully, Mind Full</div>
                    </div>
                    <div class="artwork-thumb" onclick="viewArtwork(1)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/ladies-of-lately.jpg" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">Ladies of Lately</div>
                    </div>
                    <div class="artwork-thumb" onclick="viewArtwork(2)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/time-travel.jpg" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">Time Travel</div>
                    </div>
                    <div class="artwork-thumb" onclick="viewArtwork(3)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/unphased.png" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">Unphased</div>
                    </div>
                    <div class="artwork-thumb" onclick="viewArtwork(4)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/drink-and-dance.png" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">A Drink & a Dance</div>
                    </div>
                    <div class="artwork-thumb" onclick="viewArtwork(5)" style="cursor: pointer; border: 3px solid #808080; transition: border-color 0.2s;">
                        <img src="images/night-with-band.png" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                        <div style="padding: 8px; background: #C0C0C0; text-align: center; font-size: 11px; font-weight: bold;">Night with the Band</div>
                    </div>
                </div>
            </div>
        `
    },
    music: {
        title: 'Studio Playlist',
        content: `
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 16px; height: 100%; display: flex; flex-direction: column;">
                <div style="background: #C0C0C0; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 16px; margin-bottom: 16px;">
                    <div style="background: black; color: #ff6b9d; padding: 16px; text-align: center; font-size: 12px; margin-bottom: 12px;">
                        <div style="font-size: 16px; margin-bottom: 8px;">♪ Full Mind Ambient ♪</div>
                        <div style="font-size: 11px; color: #feca57;">Studio Sessions</div>
                        <div style="margin-top: 12px; display: flex; justify-content: space-between; color: #00ff00;">
                            <span>0:00</span>
                            <span>4:27</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 12px;">
                        <button class="win95-button" style="font-size: 18px; width: 40px; height: 32px;">⏮</button>
                        <button class="win95-button" style="font-size: 18px; width: 40px; height: 32px;">▶</button>
                        <button class="win95-button" style="font-size: 18px; width: 40px; height: 32px;">⏭</button>
                        <button class="win95-button" style="font-size: 18px; width: 40px; height: 32px;">⏹</button>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 11px;">
                        <span>🔊</span>
                        <input type="range" min="0" max="100" value="70" style="flex: 1;">
                        <span>70</span>
                    </div>
                </div>
                <div style="background: white; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 8px; flex: 1; overflow: auto;">
                    <div style="font-size: 11px; font-weight: bold; margin-bottom: 8px;">🎨 Painting Playlist:</div>
                    <div style="padding: 8px; background: linear-gradient(90deg, #ff6b9d, #feca57); color: white; font-size: 11px; margin-bottom: 2px; cursor: pointer; font-weight: bold;">1. Full Mind Ambient - Studio Sessions</div>
                    <div style="padding: 8px; font-size: 11px; cursor: pointer; border-bottom: 1px solid #e0e0e0;">2. Creative Flow - Brainstorm Beats</div>
                    <div style="padding: 8px; font-size: 11px; cursor: pointer; border-bottom: 1px solid #e0e0e0;">3. Color Theory - Jazz Vibes</div>
                    <div style="padding: 8px; font-size: 11px; cursor: pointer; border-bottom: 1px solid #e0e0e0;">4. Brushstroke Rhythm - Lo-fi Hip Hop</div>
                    <div style="padding: 8px; font-size: 11px; cursor: pointer; border-bottom: 1px solid #e0e0e0;">5. Layered Thoughts - Ambient Electronic</div>
                    <div style="padding: 8px; font-size: 11px; cursor: pointer; border-bottom: 1px solid #e0e0e0;">6. Party Mind - Indie Dance</div>
                </div>
            </div>
        `
    },
    paint: {
        title: 'Paint',
        content: `
            <div style="display: flex; height: 100%; background: #C0C0C0;">
                <div style="width: 80px; border-right: 2px solid #808080; padding: 8px; display: flex; flex-direction: column; gap: 8px;">
                    <button class="win95-button" style="font-size: 24px; padding: 8px;" title="Pen">✏️</button>
                    <button class="win95-button" style="font-size: 24px; padding: 8px;" title="Eraser">🧹</button>
                    <button class="win95-button" style="font-size: 24px; padding: 8px;" onclick="clearCanvas()" title="Clear">🗑️</button>
                    <div style="border-top: 2px solid #808080; margin: 8px 0;"></div>
                    <div style="font-size: 10px; text-align: center;">Size</div>
                    <input type="range" min="1" max="20" value="3" id="brushSize" style="width: 100%;">
                </div>
                <div style="flex: 1; padding: 8px; display: flex; flex-direction: column;">
                    <div style="background: white; border: 2px solid; border-color: #808080 #ffffff #ffffff #808080; padding: 8px; flex: 1;">
                        <canvas id="paintCanvas" width="480" height="320"></canvas>
                    </div>
                    <div style="background: #C0C0C0; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 8px; margin-top: 8px;">
                        <div style="font-size: 10px; margin-bottom: 4px;">Colors:</div>
                        <div style="display: flex; gap: 4px;" id="colorPalette">
                            ${['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#C0C0C0']
                                .map(color => `<button class="win95-button color-btn" style="width: 32px; height: 32px; background: ${color};" data-color="${color}"></button>`)
                                .join('')}
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    contact: {
        title: 'Contact - Farah Rose',
        content: `
            <h2 style="color: #000080; margin-bottom: 20px; font-size: 20px;">Let's Connect</h2>
            <div style="margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <span style="font-size: 28px;">🎨</span>
                    <div>
                        <div style="font-size: 11px; color: #666; margin-bottom: 4px;">Instagram</div>
                        <a href="https://instagram.com/strokesbeforefolks" target="_blank" style="font-size: 13px; color: #0000FF; text-decoration: underline;">@strokesbeforefolks</a>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <span style="font-size: 28px;">📧</span>
                    <div>
                        <div style="font-size: 11px; color: #666; margin-bottom: 4px;">Email</div>
                        <a href="mailto:farahmakesart@gmail.com" style="font-size: 13px; color: #0000FF; text-decoration: underline;">farahmakesart@gmail.com</a>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <span style="font-size: 28px;">🌐</span>
                    <div>
                        <div style="font-size: 11px; color: #666; margin-bottom: 4px;">Website</div>
                        <a href="https://farahrose.xyz" target="_blank" style="font-size: 13px; color: #0000FF; text-decoration: underline;">farahrose.xyz</a>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #ff6b9d, #feca57); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="font-weight: bold; margin-bottom: 12px; font-size: 14px; color: white;">Available for:</h3>
                <div style="font-size: 12px; color: white; line-height: 1.8;">
                    ✦ Commissioned Artwork<br>
                    ✦ Gallery Exhibitions<br>
                    ✦ Art Collaborations<br>
                    ✦ Studio Visits<br>
                    ✦ Speaking Engagements
                </div>
            </div>
            
            <div style="background: #C0C0C0; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 16px;">
                <h3 style="font-weight: bold; margin-bottom: 12px; font-size: 14px;">Send a Message</h3>
                <form style="display: flex; flex-direction: column; gap: 12px;" onsubmit="event.preventDefault(); alert('Thanks for your message! I\'ll get back to you soon.');">
                    <div>
                        <label style="font-size: 11px; display: block; margin-bottom: 4px;">Name:</label>
                        <input type="text" placeholder="Your name" style="width: 100%; padding: 6px; font-size: 12px;" required>
                    </div>
                    <div>
                        <label style="font-size: 11px; display: block; margin-bottom: 4px;">Email:</label>
                        <input type="email" placeholder="your@email.com" style="width: 100%; padding: 6px; font-size: 12px;" required>
                    </div>
                    <div>
                        <label style="font-size: 11px; display: block; margin-bottom: 4px;">Message:</label>
                        <textarea rows="4" placeholder="Tell me about your project or inquiry..." style="width: 100%; padding: 6px; resize: none; font-size: 12px;" required></textarea>
                    </div>
                    <button type="submit" class="win95-button" style="padding: 8px 16px; font-weight: bold; align-self: flex-start;">Send Message</button>
                </form>
            </div>
        `
    },
    notepad: {
        title: 'Artist Statement.txt',
        content: `
            <textarea style="width: 100%; height: calc(100% - 30px); border: none; padding: 12px; resize: none; font-size: 12px; outline: none; line-height: 1.6;" spellcheck="false" readonly>FULL MIND PARTY: Artist Statement

My exhibition, Full Mind Party, is an exploration of the intricate, often overwhelming landscape of contemporary consciousness. It is a playful depiction of attempts to be "mindful" when one's mind is perpetually "full"—a constant cacophony of intentions, creative friction, and digital noise.

We are told to be mindful. We are sold the image of the "empty" mind—a white-walled gallery of a brain where thoughts are hung neatly, spaced perfectly apart, silent and still. But my mind has never looked like that. My mind is a party where everyone is talking at once, the music is slightly too loud, and the guest list was lost years ago.

Ironically, the very process of naming two pieces of this collection became a microcosm of the show's theme. What began as a simple task to title "Mindfully, Mind Full" and "Mind, Fully Mindful" quickly devolved into a two-hour, multi-iteration dialogue with an AI. This very exchange, a testament to the spiraling nature of creative thought (and perhaps, the modern condition), became its own "full mind party"—a rabbit hole of linguistic gymnastics, grammatical debates, and philosophical detours into the precise punctuation required to articulate ironic chaos.

Each suggestion, each pivot, each "last last question" was a brushstroke in an unseen, conceptual artwork. Nothing will ever feel complete, but eventually you have to find a stopping point. The titles you see today are not merely labels; they are artifacts of this very process. They carry the weight of that delightful, frustrating, and utterly human (even with AI assistance) journey from concept to clarity—or, in this case, from full mind to... still a pretty full mind.

This exhibition is not just about the finished canvases, but about the mental landscape they represent, a landscape I navigate, often with difficulty, daily, and in silo. By putting them on the page, the silo opens up. The "Full Mind" is no longer a burden; it's an invitation.

Welcome to the party. We have fun here.

— Farah Rose</textarea>
            <div style="background: #C0C0C0; border-top: 2px solid; border-color: #ffffff #000000; padding: 6px 12px; font-size: 10px; display: flex; justify-content: space-between;">
                <span>Artist Statement</span>
                <span>Full Mind Party 2026</span>
            </div>
        `
    }
};

// Open window function
function openWindow(type) {
    const existingWindow = windows.find(w => w.type === type);
    if (existingWindow) {
        bringToFront(existingWindow.element);
        return;
    }

    const windowData = windowContents[type];
    const windowEl = document.createElement('div');
    windowEl.className = 'win95-window';
    windowEl.style.width = '600px';
    windowEl.style.height = '500px';
    windowEl.style.top = `${100 + windows.length * 30}px`;
    windowEl.style.left = `${150 + windows.length * 30}px`;
    windowEl.style.zIndex = ++zIndex;

    windowEl.innerHTML = `
        <div class="win95-titlebar">
            <span>${windowData.title}</span>
            <div class="window-controls">
                <button class="win95-button minimize-btn">_</button>
                <button class="win95-button maximize-btn">□</button>
                <button class="win95-button close-btn">×</button>
            </div>
        </div>
        <div class="menu-bar">
            <span class="menu-item">File</span>
            <span class="menu-item">Edit</span>
            <span class="menu-item">View</span>
            <span class="menu-item">Help</span>
        </div>
        <div class="window-content" style="height: calc(100% - 62px);">
            ${windowData.content}
        </div>
    `;

    document.getElementById('windowsContainer').appendChild(windowEl);

    const window = { type, element: windowEl };
    windows.push(window);

    // Make draggable
    makeDraggable(windowEl);

    // Window controls
    windowEl.querySelector('.close-btn').addEventListener('click', () => closeWindow(window));
    windowEl.querySelector('.minimize-btn').addEventListener('click', () => minimizeWindow(window));

    windowEl.addEventListener('mousedown', () => bringToFront(windowEl));

    // Add to taskbar
    addToTaskbar(window);

    // Initialize specific window features
    if (type === 'paint') {
        initPaint();
    }
}

function closeWindow(window) {
    window.element.remove();
    windows = windows.filter(w => w !== window);
    removeFromTaskbar(window);
}

function minimizeWindow(window) {
    window.element.style.display = 'none';
    window.isMinimized = true;
}

function restoreWindow(window) {
    window.element.style.display = 'block';
    window.isMinimized = false;
    bringToFront(window.element);
}

function bringToFront(windowEl) {
    windowEl.style.zIndex = ++zIndex;
}

function addToTaskbar(window) {
    const btn = document.createElement('button');
    btn.className = 'win95-button task-button';
    btn.textContent = windowContents[window.type].title;
    btn.onclick = () => {
        if (window.isMinimized) {
            restoreWindow(window);
        } else {
            bringToFront(window.element);
        }
    };
    window.taskButton = btn;
    document.getElementById('taskButtons').appendChild(btn);
}

function removeFromTaskbar(window) {
    if (window.taskButton) {
        window.taskButton.remove();
    }
}

// Make windows draggable
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const titleBar = element.querySelector('.win95-titlebar');

    titleBar.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + 'px';
        element.style.left = (element.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Paint app functionality
let isDrawing = false;
let currentColor = '#000000';
let brushSize = 3;

function initPaint() {
    const canvas = document.getElementById('paintCanvas');
    const ctx = canvas.getContext('2d');
    
    // Fill white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Color selection
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentColor = btn.dataset.color;
        });
    });

    // Brush size
    document.getElementById('brushSize').addEventListener('input', (e) => {
        brushSize = e.target.value;
    });

    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }

    function draw(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
    }

    function stopDrawing() {
        isDrawing = false;
    }
}

function clearCanvas() {
    const canvas = document.getElementById('paintCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// Artwork viewing functionality
const artworkData = [
    {
        title: 'Mindfully, Mind Full',
        image: 'images/mindfully-mind-full.jpg',
        description: 'A visual exploration of the "full mind" experience—where figures navigate overlapping thoughts, conversations, and the beautiful chaos of contemporary consciousness.'
    },
    {
        title: 'Ladies of Lately',
        image: 'images/ladies-of-lately.jpg',
        description: 'Bold, layered composition capturing the energy and complexity of modern femininity, social connection, and the moments we share.'
    },
    {
        title: 'Time Travel',
        image: 'images/time-travel.jpg',
        description: 'A surreal journey through memory and perception, where past and present collapse into a single, layered moment.'
    },
    {
        title: 'Unphased',
        image: 'images/unphased.png',
        description: 'An intimate study of composure and multiplicity—the many faces we hold simultaneously, unphased by the noise around us.'
    },
    {
        title: 'A Drink & a Dance',
        image: 'images/drink-and-dance.png',
        description: 'Capturing the fleeting joy of connection—a moment of celebration, presence, and shared experience.'
    },
    {
        title: 'Night with the Band',
        image: 'images/night-with-band.png',
        description: 'An intimate gathering filled with color, texture, and the warmth of creative community and late-night conversations.'
    }
];

function viewArtwork(index) {
    const artwork = artworkData[index];
    const portfolioWindow = windows.find(w => w.type === 'portfolio');
    
    if (portfolioWindow) {
        const contentDiv = portfolioWindow.element.querySelector('.window-content');
        contentDiv.innerHTML = `
            <div style="padding: 16px;">
                <button class="win95-button" onclick="backToGallery()" style="margin-bottom: 16px; padding: 6px 12px;">
                    ← Back to Gallery
                </button>
                <h2 style="color: #000080; font-size: 20px; margin-bottom: 12px;">${artwork.title}</h2>
                <img src="${artwork.image}" style="width: 100%; max-height: 400px; object-fit: contain; border: 3px solid #000; margin-bottom: 16px;">
                <div style="background: #C0C0C0; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; padding: 16px;">
                    <p style="font-size: 13px; line-height: 1.6;">${artwork.description}</p>
                </div>
            </div>
        `;
    }
}

function backToGallery() {
    const portfolioWindow = windows.find(w => w.type === 'portfolio');
    
    if (portfolioWindow) {
        const contentDiv = portfolioWindow.element.querySelector('.window-content');
        contentDiv.innerHTML = windowContents.portfolio.content;
    }
}
