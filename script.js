const texts = {
  it: {
    navStoria: "La nostra storia",
    navCerimonia: "Cerimonia",
    navRicevimento: "Ricevimento",
    navRSVP: "RSVP",
    navLista: "Lista nozze",

    heroSubtitle: "La nostra storia d'amore",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",

    storiaTitle: "La nostra storia",
    storiaText: "Qui raccontiamo la nostra storia d'amore...",

    cerimoniaTitle: "Villa Fondi De Sangro",
    cerimoniaText: "Dettagli sulla cerimonia...",

    ricevimentoTitle: "Villa Eliana",
    ricevimentoText: "Il ricevimento si terrà alle ore...",

    rsvpTitle: "Conferma la tua presenza",
    rsvpText: "Compila il modulo per confermare.",

    listaTitle: "Lista nozze",
    listaText: "Informazioni sulla lista nozze...",

    names: "Annapaola & Adrian",
    date: "5 Luglio 2026",
  },

  en: {
    navStoria: "Our Story",
    navCerimonia: "Ceremony",
    navRicevimento: "Reception",
    navRSVP: "RSVP",
    navLista: "Gift List",

    heroSubtitle: "Our love story",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",

    storiaTitle: "Our Story",
    storiaText: "Here we tell our love story...",

    cerimoniaTitle: "Ceremony",
    cerimoniaText: "Details about the ceremony...",

    ricevimentoTitle: "Reception",
    ricevimentoText: "Details about the reception...",

    rsvpTitle: "Confirm Your Attendance",
    rsvpText: "Fill in the form to confirm.",

    listaTitle: "Gift List",
    listaText: "Information about the gift list...",

    names: "Annapaola & Adrian",
    date: "July 5, 2026",
  },

  fr: {
    navStoria: "Notre histoire",
    navCerimonia: "Cérémonie",
    navRicevimento: "Réception",
    navRSVP: "RSVP",
    navLista: "Liste de cadeaux",

    heroSubtitle: "Notre histoire d'amour",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",

    storiaTitle: "Notre histoire",
    storiaText: "Ici nous racontons notre histoire d'amour...",

    cerimoniaTitle: "Cérémonie",
    cerimoniaText: "Détails sur la cérémonie...",

    ricevimentoTitle: "Réception",
    ricevimentoText: "Détails sur la réception...",

    rsvpTitle: "Confirmez votre présence",
    rsvpText: "Remplissez le formulaire pour confirmer.",

    listaTitle: "Liste de cadeaux",
    listaText: "Informations sur la liste de cadeaux...",

    names: "Annapaola & Adrian",
    date: "5 Juillet 2026",
  },
};

let currentLang = "it";

function updateTexts(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (texts[lang] && texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  document.getElementById("names").textContent = texts[lang].names;
  document.getElementById("date").textContent = texts[lang].date;

  // aggiorna etichette countdown
  document.querySelector('[data-key="days"]').textContent = texts[lang].days;
  document.querySelector('[data-key="hours"]').textContent = texts[lang].hours;
  document.querySelector('[data-key="minutes"]').textContent = texts[lang].minutes;
  document.querySelector('[data-key="seconds"]').textContent = texts[lang].seconds;
}

// Selettore lingua
const flags = document.querySelectorAll(".lang-flag");
flags.forEach((flag) => {
  flag.addEventListener("click", () => {
    const lang = flag.getAttribute("data-lang");
    updateTexts(lang);

    flags.forEach((f) => f.classList.remove("selected"));
    flag.classList.add("selected");
  });
});

// Countdown dinamico
function updateCountdown() {
  const eventDate = new Date("2026-07-05T15:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  if (timeLeft <= 0) {
    document.querySelector(".countdown").innerHTML = "È il grande giorno!";
    return;
  }

  const days = Math.floor(timeLeft / day);
  const hours = Math.floor((timeLeft % day) / hour);
  const minutes = Math.floor((timeLeft % hour) / minute);
  const seconds = Math.floor((timeLeft % minute) / second);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Sticky navbar scroll effetto
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Init
updateTexts("it");
flags[0].classList.add("selected");
updateCountdown();
setInterval(updateCountdown, 1000);
