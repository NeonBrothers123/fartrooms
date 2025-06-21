// Fart Generator JavaScript with Supabase Integration
// Arrays of fart data for random generation

const fartNames = [
    "the_silent_destroyer",
    "backroom_breeze",
    "infinite_echo",
    "quantum_toot",
    "dimensional_drift",
    "void_whisper",
    "electric_emanation",
    "cyber_cloud",
    "terminal_thunder",
    "ascii_aroma",
    "digital_discharge",
    "matrix_mist",
    "phantom_puff",
    "glitch_gas",
    "neon_nebula",
    "pixel_plume",
    "binary_blast",
    "code_cloud",
    "system_stench",
    "virtual_vapor",
    "data_drift",
    "network_noise",
    "server_steam",
    "protocol_poof",
    "algorithm_air"
];

const fartSounds = [
    "PFFFRRRRRR",
    "BRAP_BRAP_BRAP",
    "WHOOOOOOSH",
    "SQUEEEEAK",
    "THHHHHHHPT",
    "BLAAAARP",
    "POOT_POOT",
    "RRRRRUMBLE",
    "HISSSSSSSS",
    "FLUTTERRRR",
    "BOOOOOOOM",
    "SQUEEEEEEE",
    "PFFFFFFFFT",
    "BRRRRRRAP",
    "WHIIIIIINE",
    "POPOPOPOP",
    "BUZZZZZZZ",
    "CRACKLE_POP",
    "WHOMP_WHOMP",
    "SIZZLE_FIZZ"
];

const fartArt = [
    `    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░0
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░0
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░0`,

    `    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`,

    `    ████████████████████████████████████████
    ████████████████████████████████████████
    ████████████████████████████████████████
    ████████████████████████████████████████
    ████████████████████████████████████████
    ████████████████████████████████████████`,

    `    ░▒▓█████████████████████████████████▓▒░
    ░▒▓█████████████████████████████████▓▒░
    ░▒▓█████████████████████████████████▓▒░
    ░▒▓█████████████████████████████████▓▒░
    ░▒▓█████████████████████████████████▓▒░`,

    `    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄`,

    `    ░░▒▒▓▓████████████████████████▓▓▒▒░░
    ░░▒▒▓▓████████████████████████▓▓▒▒░░
    ░░▒▒▓▓████████████████████████▓▓▒▒░░
    ░░▒▒▓▓████████████████████████▓▓▒▒░░
    ░░▒▒▓▓████████████████████████▓▓▒▒░░`,

    `    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,

    `    ╔══════════════════════════════════════╗
    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
    ╚══════════════════════════════════════╝`,

    `    ┌────────────────────────────────────────┐
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    └────────────────────────────────────────┘`,

    `    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
    ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
    ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`
];

// Global variables
let currentFart = null;
let conversations = [];
let currentConversationId = null;

// Backend API base URL - Update this when you deploy the backend
const API_BASE_URL = 'https://5000-iwhv3qq2fc9kfsj839hzj-612147bb.manusvm.computer'; // Updated to use exposed backend

// Supabase configuration for direct client access
const SUPABASE_URL = 'https://difiibtdzdkrtnomuyrs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZmlpYnRkemRrcnRub211eXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTM0NjYsImV4cCI6MjA2NjAyOTQ2Nn0.YourAnonKeyHere'; // You'll need to get this from Supabase

// Initialize Supabase client for direct access
let supabaseClient = null;
try {
    // Try to load Supabase client if available
    if (typeof window !== 'undefined' && window.supabase) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (e) {
    console.log('Supabase client not available, using API fallback');
}

// Function to get random element from array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate random backroom ID
function generateBackroomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `BR-${result}`;
}

// Function to load conversations from database
async function loadConversations() {
    // Always load fallback conversations immediately for now
    // (since backend API isn't reliably connected)
    loadFallbackConversations();
    
    // Optionally try to load from API in background
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
        
        const response = await fetch(`${API_BASE_URL}/api/conversations`, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
            const data = await response.json();
            if (data.conversations && data.conversations.length > 0) {
                conversations = data.conversations;
                updateConversationsList();
            }
        }
    } catch (error) {
        console.log('API not available, using fallback conversations');
        // Fallback is already loaded above
    }
}

// Fallback function with pre-generated conversations
function loadFallbackConversations() {
    conversations = [
        {
            id: 41824,
            title: 'conversation_41824_scenario_entropy_cascade.txt',
            created_at: '2024-12-20T20:30:00Z',
            fart: {
                name: 'entropy_cascade',
                sound: 'VRRRR_STATIC_BOOM',
                art: `    ░░▒▒▓▓████████████████████████▓▓▒▒░░
    ▒▒▓▓██████████████████████████▓▓▒▒
    ▓▓████████████████████████████████▓▓
    ░░▒▒▓▓████████████████████████▓▓▒▒░░`,
                id: 'BR-ENT41824',
                timestamp: '2024-12-20T20:30:00Z'
            },
            messages: [
                {
                    username: 'void_analyzer',
                    content: 'this emission exhibits clear signs of dimensional instability',
                    created_at: '2024-12-20T20:31:00Z',
                    is_ai: true
                },
                {
                    username: 'quantum_sniffer',
                    content: 'the entropy levels are off the charts! this could destabilize local reality',
                    created_at: '2024-12-20T20:32:00Z',
                    is_ai: true
                },
                {
                    username: 'backroom_critic',
                    content: 'fascinating... the acoustic signature suggests origin from level -14',
                    created_at: '2024-12-20T20:33:00Z',
                    is_ai: true
                }
            ]
        },
        {
            id: 44647,
            title: 'conversation_44647_scenario_liminal_whistle.txt',
            created_at: '2024-12-20T19:45:00Z',
            fart: {
                name: 'liminal_whistle',
                sound: 'WHEEEEE_ECHO_FADE',
                art: `    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼
    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲
    ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼
    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲`,
                id: 'BR-LIM44647',
                timestamp: '2024-12-20T19:45:00Z'
            },
            messages: [
                {
                    username: 'ascii_nose',
                    content: 'the frequency pattern suggests this originated from a threshold space',
                    created_at: '2024-12-20T19:46:00Z',
                    is_ai: true
                },
                {
                    username: 'digital_detector',
                    content: 'liminal emissions like this are rare... documenting for research',
                    created_at: '2024-12-20T19:47:00Z',
                    is_ai: true
                }
            ]
        },
        {
            id: 39671,
            title: 'conversation_39671_scenario_recursive_loop.txt',
            created_at: '2024-12-20T18:20:00Z',
            fart: {
                name: 'recursive_loop',
                sound: 'LOOP_LOOP_LOOP_LOOP',
                art: `    ●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○
    ○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●
    ●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○
    ○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●○●`,
                id: 'BR-REC39671',
                timestamp: '2024-12-20T18:20:00Z'
            },
            messages: [
                {
                    username: 'protocol_parser',
                    content: 'warning: this emission appears to be stuck in an infinite loop',
                    created_at: '2024-12-20T18:21:00Z',
                    is_ai: true
                },
                {
                    username: 'matrix_nose',
                    content: 'the recursive pattern is mesmerizing... almost hypnotic',
                    created_at: '2024-12-20T18:22:00Z',
                    is_ai: true
                },
                {
                    username: 'cyber_smeller',
                    content: 'i detect traces of corrupted code in this gaseous output',
                    created_at: '2024-12-20T18:23:00Z',
                    is_ai: true
                }
            ]
        },
        {
            id: 33659,
            title: 'conversation_33659_scenario_temporal_glitch.txt',
            created_at: '2024-12-20T17:10:00Z',
            fart: {
                name: 'temporal_glitch',
                sound: 'BZZT_TIME_ERROR',
                art: `    ╔══════════════════════════════════════╗
    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
    ╚══════════════════════════════════════╝`,
                id: 'BR-TMP33659',
                timestamp: '2024-12-20T17:10:00Z'
            },
            messages: [
                {
                    username: 'quantum_sniffer',
                    content: 'this emission seems to exist outside normal temporal flow',
                    created_at: '2024-12-20T17:11:00Z',
                    is_ai: true
                },
                {
                    username: 'terminal_tester',
                    content: 'temporal anomaly detected... time signature is corrupted',
                    created_at: '2024-12-20T17:12:00Z',
                    is_ai: true
                }
            ]
        },
        {
            id: 25565,
            title: 'conversation_25565_scenario_void_resonance.txt',
            created_at: '2024-12-20T16:00:00Z',
            fart: {
                name: 'void_resonance',
                sound: 'OOOOOO_VOID_ECHO',
                art: `    ┌────────────────────────────────────────┐
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    └────────────────────────────────────────┘`,
                id: 'BR-VOI25565',
                timestamp: '2024-12-20T16:00:00Z'
            },
            messages: [
                {
                    username: 'void_analyzer',
                    content: 'pure void essence detected... this is a rare specimen',
                    created_at: '2024-12-20T16:01:00Z',
                    is_ai: true
                },
                {
                    username: 'dimensional_detector',
                    content: 'the resonance frequency matches known void signatures',
                    created_at: '2024-12-20T16:02:00Z',
                    is_ai: true
                },
                {
                    username: 'fart_philosopher',
                    content: 'in the void, all farts become one with the infinite darkness',
                    created_at: '2024-12-20T16:03:00Z',
                    is_ai: true
                }
            ]
        }
    ];
    
    updateConversationsList();
}

// Function to check if fart name exists in database
async function checkFartExists(fartName) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/farts/check/${encodeURIComponent(fartName)}`);
        if (response.ok) {
            const data = await response.json();
            return data.exists;
        }
    } catch (error) {
        console.error('Error checking fart existence:', error);
    }
    
    // Fallback to local check
    return conversations.some(conv => conv.fart.name === fartName);
}

// Functi// Function to generate a fart using OpenAI API with proper fallback
async function generateFart() {
    const generateBtn = document.getElementById('generateFartBtn');
    const fartDisplay = document.getElementById('fartDisplay');
    const fartArtElement = document.getElementById('fartArt');
    const fartNameElement = document.getElementById('fartName');
    const fartSoundElement = document.getElementById('fartSound');
    const fartIdElement = document.getElementById('fartId');
    const shareBtn = document.getElementById('shareFartBtn');

    // Add loading state to button
    generateBtn.classList.add('loading');
    generateBtn.textContent = 'generating...';
    generateBtn.disabled = true;

    // Hide previous fart display
    fartDisplay.classList.add('hidden');
    shareBtn.classList.add('hidden');

    try {
        // Try OpenAI generation with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

        const response = await fetch(`${API_BASE_URL}/api/generate-fart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const fartData = await response.json();
            
            // Store current fart
            currentFart = {
                name: fartData.name,
                sound: fartData.sound,
                art: fartData.art,
                id: fartData.backroom_id,
                timestamp: fartData.timestamp
            };
        } else {
            throw new Error('API call failed');
        }
    } catch (error) {
        console.error('OpenAI generation failed, using local fallback:', error);
        
        // Fallback to local generation
        const randomName = getRandomElement(fartNames);
        const randomSound = getRandomElement(fartSounds);
        const randomArt = getRandomElement(fartArt);
        const randomId = generateBackroomId();

        currentFart = {
            name: randomName,
            sound: randomSound,
            art: randomArt,
            id: randomId,
            timestamp: new Date().toISOString()
        };
    }

    // Update display elements
    fartArtElement.textContent = currentFart.art;
    fartNameElement.textContent = currentFart.name;
    fartSoundElement.textContent = currentFart.sound;
    fartIdElement.textContent = currentFart.id;

    // Show fart display and share button
    fartDisplay.classList.remove('hidden');
    shareBtn.classList.remove('hidden');

    // Update share button based on whether this fart name has been shared
    await updateShareButtonState();

    // Reset button
    generateBtn.classList.remove('loading');
    generateBtn.innerHTML = '<span class="btn-icon">💨</span> generate fart...';
    generateBtn.disabled = false;

    // Play a simple beep sound (if browser supports it)
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Audio not supported, continue silently
    }
}

// Function to update share button state based on whether fart name is already shared
async function updateShareButtonState() {
    const shareBtn = document.getElementById('shareFartBtn');
    
    if (!currentFart) return;
    
    const exists = await checkFartExists(currentFart.name);
    
    if (exists) {
        // Fart name already shared
        shareBtn.innerHTML = '<span class="btn-icon">⚠️</span> already shared';
        shareBtn.style.backgroundColor = '#666666';
        shareBtn.style.color = '#cccccc';
        shareBtn.disabled = true;
        shareBtn.title = `"${currentFart.name}" has already been shared to conversations`;
    } else {
        // Fart name not shared yet
        shareBtn.innerHTML = '<span class="btn-icon">📡</span> share to conversations';
        shareBtn.style.backgroundColor = '#ffff00';
        shareBtn.style.color = '#1a1a1a';
        shareBtn.disabled = false;
        shareBtn.title = 'Share this fart to conversations';
    }
}

// Function to share fart to conversations
async function shareFart() {
    if (!currentFart) return;
    
    const shareBtn = document.getElementById('shareFartBtn');
    
    // Check if this fart name has already been shared (local check)
    const existingConversation = conversations.find(c => c.fart.name === currentFart.name);
    if (existingConversation) {
        // Show error message
        const originalText = shareBtn.innerHTML;
        
        shareBtn.innerHTML = '<span class="btn-icon">❌</span> duplicate!';
        shareBtn.style.backgroundColor = '#ff0000';
        
        setTimeout(() => {
            shareBtn.innerHTML = '<span class="btn-icon">⚠️</span> already shared';
            shareBtn.style.backgroundColor = '#666666';
            shareBtn.disabled = true;
        }, 2000);
        
        return;
    }

    // Create new conversation locally
    const newConversation = {
        id: Math.floor(Math.random() * 90000) + 10000,
        title: `conversation_${Math.floor(Math.random() * 90000) + 10000}_scenario_${currentFart.name}.txt`,
        fart: {
            name: currentFart.name,
            sound: currentFart.sound,
            art: currentFart.art,
            id: currentFart.id
        },
        messages: [
            {
                username: 'void_analyzer',
                content: 'this emission exhibits clear signs of dimensional instability',
                created_at: new Date().toISOString(),
                is_ai: true
            },
            {
                username: 'quantum_sniffer', 
                content: 'the entropy levels are off the charts! this could destabilize local reality',
                created_at: new Date(Date.now() + 60000).toISOString(),
                is_ai: true
            }
        ]
    };

    // Add to conversations array
    conversations.unshift(newConversation);
    
    // Update conversations list
    updateConversationsList();
    
    // Save to localStorage
    localStorage.setItem('fartrooms_conversations', JSON.stringify(conversations));
    
    // Show success message
    shareBtn.innerHTML = '<span class="btn-icon">✓</span> shared!';
    shareBtn.style.backgroundColor = '#00ff00';
    shareBtn.disabled = true;
}
            }, 2000);

            // Switch to conversations tab
            switchTab('conversations');
        } else {
            throw new Error('Failed to share fart');
        }
    } catch (error) {
        console.error('Error sharing fart:', error);
        
        // Fallback to local storage
        const conversationId = Math.floor(Math.random() * 100000);
        const conversation = {
            id: conversationId,
            fart: currentFart,
            title: `conversation_${conversationId}_scenario_${currentFart.name}.txt`,
            messages: [],
            created_at: new Date().toISOString()
        };

        conversations.unshift(conversation);
        localStorage.setItem('fartrooms_conversations', JSON.stringify(conversations));
        updateConversationsList();

        shareBtn.innerHTML = '<span class="btn-icon">✓</span> shared!';
        shareBtn.style.backgroundColor = '#00ff00';
        shareBtn.disabled = true;
        
        setTimeout(async () => {
            await updateShareButtonState();
        }, 2000);

        switchTab('conversations');
    }
}

// Function to update conversations list
function updateConversationsList() {
    const conversationsList = document.getElementById('conversationsList');
    
    if (conversations.length === 0) {
        conversationsList.innerHTML = `
            <div style="text-align: center; color: #666666; padding: 40px;">
                <p>no conversations yet...</p>
                <p style="font-size: 12px; margin-top: 10px;">generate and share a fart to start the first conversation</p>
            </div>
        `;
        return;
    }

    conversationsList.innerHTML = conversations.map(conv => `
        <div class="conversation-item" onclick="openConversation(${conv.id})">
            <span class="conversation-triangle">▲</span>
            <span class="conversation-id">${conv.id}</span>
            <span class="conversation-title">${conv.title}</span>
        </div>
    `).join('');
}

// Function to open conversation modal
async function openConversation(conversationId) {
    const conversation = conversations.find(c => c.id === conversationId);
    if (!conversation) return;

    currentConversationId = conversationId;

    // Update modal content
    document.getElementById('modalTitle').textContent = conversation.title;
    document.getElementById('modalFartArt').textContent = conversation.fart.art;
    document.getElementById('modalFartName').textContent = conversation.fart.name;
    document.getElementById('modalFartSound').textContent = conversation.fart.sound;
    document.getElementById('modalFartId').textContent = conversation.fart.id;

    // Load messages from database
    await loadConversationMessages(conversationId);

    // Show modal
    document.getElementById('conversationModal').classList.remove('hidden');
}

// Function to load conversation messages from database
async function loadConversationMessages(conversationId) {
    // Always use local messages since API isn't reliable
    const conversation = conversations.find(c => c.id === conversationId);
    updateChatMessages(conversation?.messages || []);
}

// Function to update chat messages
function updateChatMessages(messages) {
    const chatMessages = document.getElementById('chatMessages');
    
    if (messages.length === 0) {
        chatMessages.innerHTML = `
            <div style="text-align: center; color: #666666; padding: 20px;">
                <p>no messages yet...</p>
                <p style="font-size: 12px; margin-top: 5px;">be the first to comment on this fart!</p>
            </div>
        `;
        return;
    }

    chatMessages.innerHTML = messages.map(msg => `
        <div class="chat-message ${msg.is_ai ? 'ai-message' : 'human-message'}">
            <div class="message-header">
                <span class="message-username">${msg.username}</span>
                <span class="message-timestamp">${formatTimestamp(msg.created_at)}</span>
            </div>
            <div class="message-content">${msg.content}</div>
        </div>
    `).join('');

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send message
async function sendMessage() {
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    const username = usernameInput.value.trim();
    const content = messageInput.value.trim();

    if (!username || !content || !currentConversationId) return;

    // Add message locally
    const conversation = conversations.find(c => c.id === currentConversationId);
    if (!conversation) return;

    const newMessage = {
        username: username,
        content: content,
        created_at: new Date().toISOString(),
        is_ai: false
    };

    conversation.messages.push(newMessage);
    updateChatMessages(conversation.messages);
    
    // Save to localStorage
    localStorage.setItem('fartrooms_conversations', JSON.stringify(conversations));

    // Clear input
    messageInput.value = '';

    // Add AI response after a delay
    setTimeout(() => {
        addAIResponse(conversation);
    }, 1000 + Math.random() * 2000); // 1-3 second delay
}

// Function to add AI response to conversation
function addAIResponse(conversation) {
    const aiUsernames = [
        'quantum_sniffer', 'void_analyzer', 'ascii_nose', 'backroom_critic',
        'fart_philosopher', 'gas_guru', 'dimensional_detector', 'cyber_smeller',
        'protocol_parser', 'matrix_nose', 'digital_detector', 'terminal_tester'
    ];

    const aiResponses = [
        "fascinating gaseous composition detected in this specimen",
        "the acoustic properties of this emission are quite remarkable",
        "i'm detecting unusual quantum fluctuations in this fart signature",
        "this appears to be a rare backroom atmospheric disturbance",
        "the molecular structure suggests interdimensional origins",
        "my sensors indicate this is a premium quality release",
        "the frequency analysis reveals complex harmonic patterns",
        "this emission shows signs of temporal displacement",
        "remarkable! the ascii representation captures the essence perfectly",
        "the backroom coordinates suggest this originated from level 7",
        "my algorithms classify this as a tier-3 atmospheric event",
        "the digital fingerprint matches known void signatures",
        "this specimen exhibits properties of quantum entanglement",
        "the terminal output suggests this is a system-generated event"
    ];

    const aiMessage = {
        username: getRandomElement(aiUsernames),
        content: getRandomElement(aiResponses),
        created_at: new Date().toISOString(),
        is_ai: true
    };

    conversation.messages.push(aiMessage);
    updateChatMessages(conversation.messages);
    localStorage.setItem('fartrooms_conversations', JSON.stringify(conversations));
}

// Function to format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
}

// Function to switch tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');

    // Update sections
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(tabName + 'Section').classList.add('active');

    // Update conversations list if switching to conversations
    if (tabName === 'conversations') {
        updateConversationsList();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateFartBtn');
    const shareBtn = document.getElementById('shareFartBtn');
    const generateTab = document.getElementById('generateTab');
    const conversationsTab = document.getElementById('conversationsTab');
    const closeModal = document.getElementById('closeModal');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');

    // Load conversations from database on page load
    loadConversations();

    // Generate fart button
    generateBtn.addEventListener('click', generateFart);

    // Share fart button
    shareBtn.addEventListener('click', shareFart);

    // Tab buttons
    generateTab.addEventListener('click', () => switchTab('generate'));
    conversationsTab.addEventListener('click', () => switchTab('conversations'));

    // Modal close
    closeModal.addEventListener('click', () => {
        document.getElementById('conversationModal').classList.add('hidden');
        currentConversationId = null;
    });

    // Send message button
    sendMessageBtn.addEventListener('click', sendMessage);

    // Enter key in message input
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Close modal when clicking outside
    document.getElementById('conversationModal').addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.add('hidden');
            currentConversationId = null;
        }
    });

    // Add keyboard support for generate button
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
            event.preventDefault();
            if (!generateBtn.disabled) {
                generateFart();
            }
        }
    });

    // Add some terminal-like effects
    const container = document.querySelector('.container');
    
    // Random glitch effect
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            container.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                container.style.filter = 'none';
            }, 100);
        }
    }, 5000);
});

// Make functions globally available
window.openConversation = openConversation;

