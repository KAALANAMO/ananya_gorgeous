// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "ANANYA",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "WILL YOU BE MY BEST 7 MINUTES 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'😍'😘'😉'😶‍🌫️'🫠'😮‍💨'🧿],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "IF I WOULD BE YOU MOMOS, WOULD YOU BE MY MOON?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I WANT TO BE YOUR SOULMATE ❤️"           // Secret hover message
        },
         SECOUND: {
            text: "WHEN DID YOU FELT MORE BUTTERFLIES",                                    // First interaction
            yesBtn: "WHEN YOU HEARD MY HEARTBEAT",                                             // Text for "Yes" button
            noBtn: "WHEN I FLIRT WITH",                                               // Text for "No" button
            secretAnswer: "WHEN I DRAW YOU🙈🧿🫠 "           // Secret hover message
        },
        THIRD: {
            text: "WHATS YOU PEACEFUL PLACE TO STAY FOREVER ",                                    // First interaction
            yesBtn: "MY HEART🙈🫠💗",                                             //  Text for the next button
            noBtn: "SUNSET AT BEACHES🏖️",                                               // Text for the next button
        },
       THIRD: {
            text: "WHATS DO I LOVE THE MOST IN YOU",                                    // First interaction
            yesBtn: "YOUR EYES",                                             //  Text for the next button
            noBtn: "YOUR SMILE",   
            secretAnswer: "OR YOU🙈🧿🫠 "           // Secret hover message// Text for the next button
        },
        FORTH: {
            text: "ON SCALE OF 1 TO 1000 YOUR THOUGHT ABOUT US",                          // For the love meter
            startText: "BEYOND YOUR IMAGINATION",  "INFINITE", "INFINITE TILL THE CORE OF GALAXY"                           // Text before the percentage
            nextBtn: "NEXT PLZ"                                         // Text for the next button
        },
        FIFTH: {
            text: "Will you be my Valentine FOREVER? 🌹🌻", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "INFINITE TILL THE CORE OF GALAXY 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "BEYOND YOU IMAGINATION!" 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come TAKE MY HEART AWAY, WITH A WARM HUG",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#EF97A5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ECC9CA",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#F05F7F",     // Button color (should stand out against the background)
        buttonHover: "#DF1A42",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#AF3B4D"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "10s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "40px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.7         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dhquo5ttu/video/upload/v1739446347/MAKE_YOU_MINE_y4usjf.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
