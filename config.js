// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "TANISHKA",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️" // Secret hover message
        },
        second: {
            text: "How much do you love me?",
            startText: "TO LITTLE",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "SO BASICALLY LOT LESS THAN I DO BUT ALRIGHT💝",
        high: "FEELS LIKE I'M SECOND TO YOUR COFFEE💝",
        normal: "MEH :( "
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "SINCE YOU'VE ENTERED MY LIFE, I'M THE LUCKIEST PERSON IN THE WORLD💓",
        message: "I LOVE YOU SO MUCH MY HOT, BEAUTIFUL, SMARTASS, GENIUS, SEXY , LOVING AND KIND TANISHKA ",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// --------------------------------------------
// Secret Hover Message Styling & Display
// --------------------------------------------

// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function() {
    // Select the first question container
    const firstQuestionContainer = document.querySelector(".question-container");

    if(firstQuestionContainer) {
        // Create secret answer element
        const secret = document.createElement("p");
        secret.className = "secret-answer";
        secret.textContent = CONFIG.questions.first.secretAnswer;

        // Style it
        secret.style.display = "none";
        secret.style.marginTop = "5px";
        secret.style.color = "#ff4757";
        secret.style.fontSize = "1.2em";

        // Append below the main question
        firstQuestionContainer.appendChild(secret);

        // Show secret on hover
        firstQuestionContainer.addEventListener("mouseenter", () => {
            secret.style.display = "block";
        });
        firstQuestionContainer.addEventListener("mouseleave", () => {
            secret.style.display = "none";
        });
    }
});

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;
