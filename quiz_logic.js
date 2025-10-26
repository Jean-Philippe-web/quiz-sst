// =========================
// Données quiz
// =========================
var questions = [
  {
    texte: "Vous arrivez sur un lieu d'accident du travail (chute d'une échelle). Quelle est votre première action ?",
    options: [
      "Sécuriser la zone pour éviter un sur-accident.",
      "Allonger immédiatement la victime et lui surélever les jambes.",
      "Secouer la victime pour vérifier si elle réagit.",
      "Prendre une photo de la scène pour le rapport d'accident."
    ],
    bonnesReponses: [0],
    justification:
      "La protection est prioritaire : supprimer ou isoler le danger (échelle instable, sol glissant) pour éviter une 2e victime."
  },
  {
    texte: "La victime répond, se plaint d'une douleur lombaire après port de charge. Que faites-vous ?",
    options: [
      "Lui demander de bouger pour voir 'si ça craque'.",
      "Immobiliser / Maintien de tête et surveiller la douleur.",
      "Proposer un antalgique trouvé dans sa poche.",
      "Alerter le 15."
    ],
    bonnesReponses: [1,3],
    justification:
      "On évite toute mobilisation inutile (risque rachidien). On rassure, on surveille, on alerte."
  },
  {
    texte: "Vous observez un saignement abondant. Votre action immédiate ?",
    options: [
      "Comprimer fortement et directement sur la plaie avec la main.",
      "Donner à boire sucré pour compenser la perte de sang.",
      "Attendre les secours sans rien faire : c'est leur rôle.",
      "Mettre la victime debout pour mieux voir la plaie."
    ],
    bonnesReponses: [0],
    justification:
      "Saignement Abondant = risque vital immédiat. Le geste clé est la compression directe pour stopper le saignement."
  },
  {
    texte: "Une victime ne répond pas mais respire normalement. Priorité ?",
    options: [
      "La mettre en Position Latérale de Sécurité (PLS) en maintenant l'axe tête-cou-tronc autant que possible.",
      "Commencer un massage cardiaque.",
      "La laisser sur le dos et aller chercher quelqu'un.",
      "La relever assise pour la surveiller plus facilement."
    ],
    bonnesReponses: [0],
    justification:
      "Ne répond pas + respire = libérer les voies aériennes et prévenir l'obstruction. PLS = Pas de choc traumatique."
  },
  {
    texte: "Une victime ne répond pas et ne respire pas. Quelles actions sont attendues du SST ?",
    options: [
      "Faire alerter / alerter immédiatement le 15.",
      "Débuter la RCP sans attendre.",
      "Mettre en PLS et attendre que ça reparte.",
      "Mettre en place le DAE dès qu'il est disponible."
    ],
    bonnesReponses: [0,1,3],
    justification:
      "Arrêt cardio-respiratoire = alerte immédiate + compressions thoraciques continues + DAE le plus tôt possible. Pas de PLS car pas de respiration."
  },
  {
    texte: "Projection de produit chimique dans l'œil d'un collègue. Quelle conduite tenir en priorité ?",
    options: [
      "Rincer immédiatement et abondamment avec de l'eau ou la solution de lavage oculaire.",
      "Faire fermer l'œil blessé pour 'laisser reposer'.",
      "Regarder l'étiquette / FDS du produit pour préciser l'alerte.",
      "Attendre le service HSE avant d'agir : on ne touche pas."
    ],
    bonnesReponses: [0,2],
    justification:
      "Le lavage immédiat limite les lésions chimiques. Identifier le produit (FDS) permet d'orienter l'alerte médicale."
  },
  {
    texte: "Un collègue s'étouffe, il est conscient mais ne peut ni parler ni tousser ni respirer. Quelle est l'action adaptée ?",
    options: [
      "L'encourager à tousser et observer.",
      "Donner 5 claques franches entre les omoplates.",
      "Réaliser immédiatement des compressions thoraciques comme en RCP.",
      "Pratiquer des compressions abdominales (manœuvre de Heimlich) si les claques ne suffisent pas."
    ],
    bonnesReponses: [1,3],
    justification:
      "Obstacle total des voies aériennes = claques dorsales puis compressions abdominales. La RCP n'arrive que si la victime s'éffondre."
  },
  {
    texte: "Brûlure thermique au niveau de l'avant-bras : rougeur intense, douleur vive, pas de cloques majeures. Gestes adaptés du SST ?",
    options: [
      "Refroidir immédiatement à l'eau tempérée.",
      "Appliquer de la glace directement sur la peau.",
      "Retirer montres / bracelets / EPI serrés si possible sans forcer.",
      "Percer les éventuelles cloques pour 'décharger la pression'."
    ],
    bonnesReponses: [0,2],
    justification:
      "Refroidir limite l'extension lésionnelle. Retirer les objets serrés avant l'œdème. Jamais glace directe, jamais percer."
  },
  {
    texte: "Après une chute de plain-pied, la victime dit 'je ne sens plus bien ma main droite' et se plaint du cou. Que doit faire le SST en priorité ?",
    options: [
      "Empêcher tout mouvement de la tête et du cou, rassurer et maintenir.",
      "Aider la victime à s'asseoir pour qu'elle soit plus confortable.",
      "Surveiller les signes neurologiques (sensibilité / motricité) en attendant les secours.",
      "Donner un café sucré pour éviter le malaise."
    ],
    bonnesReponses: [0,2],
    justification:
      "Suspicion d'atteinte rachidienne + signes neuro : on limite tout mouvement cervical, on surveille. Pas de mobilisation active."
  },
  {
    texte: "Dans l'entreprise, qui alerter en cas de situation d'urgence vitale (ex : arrêt cardiaque) ?",
    options: [
      "Le numéro d'alerte interne / poste de sécurité / PC sécurité si défini.",
      "Le responsable hiérarchique uniquement, ça suffit.",
      "Le 15.",
      "Personne, le SST agit seul jusqu'à résolution."
    ],
    bonnesReponses: [0,2],
    justification:
      "Le SST déclenche l'alerte interne du site ET engage immédiatement l'alerte aux secours externes."
  }
];

// =========================
// État
// =========================
var currentQuestion = 0;
var reponsesUtilisateur = [];
for (var i = 0; i < questions.length; i++) {
  reponsesUtilisateur.push([false, false, false, false]);
}

var stagiaireNom = "";
var stagiaireService = "";

// =========================
// Liens DOM
// =========================
var idStatusEl   = document.getElementById("id-status");
var nomInput     = document.getElementById("nomInput");
var serviceInput = document.getElementById("serviceInput");
var idSaveBtn    = document.getElementById("idSaveBtn");

var questionNumber = document.getElementById("question-number");
var questionText   = document.getElementById("question-text");
var questionHint   = document.getElementById("question-hint");
var optionsZone    = document.getElementById("options-zone");

var prevBtn    = document.getElementById("prevBtn");
var nextBtn    = document.getElementById("nextBtn");
var finishBtn  = document.getElementById("finishBtn");

var resultCard     = document.getElementById("result-card");
var scoreLine      = document.getElementById("score-line");
var feedbackGlobal = document.getElementById("feedback-global");
var detailsZone    = document.getElementById("details-zone");
var exportBtn      = document.getElementById("exportBtn");

// =========================
// Identité stagiaire
// =========================
idSaveBtn.onclick = function () {
  stagiaireNom = nomInput.value.trim();
  stagiaireService = serviceInput.value.trim();

  if (stagiaireNom === "") {
    idStatusEl.textContent = "Nom manquant";
    idStatusEl.style.color = "#ff8b9a";
    return;
  }

  idStatusEl.textContent = "Identité enregistrée";
  idStatusEl.style.color = "#4be1a8";
};

// =========================
// Rendu question
// =========================
function renderQuestion() {
  var q = questions[currentQuestion];

  questionNumber.textContent =
    "Question " + (currentQuestion + 1) + " / " + questions.length;

  questionText.textContent = q.texte;

  questionHint.textContent =
    (q.bonnesReponses.length > 1)
      ? "Plusieurs réponses peuvent être correctes."
      : "Choisis la seule réponse correcte.";

  optionsZone.innerHTML = "";
  var etat = reponsesUtilisateur[currentQuestion];

  for (var idx = 0; idx < q.options.length; idx++) {
    (function(idxClosure) {
      var btn = document.createElement("button");
      btn.className = "option-btn" + (etat[idxClosure] ? " active" : "");
      btn.innerHTML =
        '<div class="option-label">' +
        String.fromCharCode(65 + idxClosure) +
        "</div>" +
        '<div class="option-text">' +
        q.options[idxClosure] +
        "</div>";

      btn.onclick = function () {
        etat[idxClosure] = !etat[idxClosure];
        renderQuestion();
      };

      optionsZone.appendChild(btn);
    })(idx);
  }

  prevBtn.disabled = (currentQuestion === 0);

  if (currentQuestion === questions.length - 1) {
    nextBtn.style.display   = "none";
    finishBtn.style.display = "block";
  } else {
    nextBtn.style.display   = "block";
    finishBtn.style.display = "none";
  }
}

// =========================
// Évaluation
// =========================
function questionIsCorrect(qIndex) {
  var q = questions[qIndex];
  var rep = reponsesUtilisateur[qIndex];

  for (var i = 0; i < q.bonnesReponses.length; i++) {
    var idxBon = q.bonnesReponses[i];
    if (!rep[idxBon]) { return false; }
  }

  for (var j = 0; j < rep.length; j++) {
    var coche = rep[j];
    var estBonne = (q.bonnesReponses.indexOf(j) !== -1);
    if (coche && !estBonne) { return false; }
  }

  return true;
}

function calculScore() {
  var bonnes = 0;
  for (var k = 0; k < questions.length; k++) {
    if (questionIsCorrect(k)) bonnes++;
  }
  return bonnes;
}

function afficherResultats() {
  var total  = questions.length;
  var bonnes = calculScore();

  scoreLine.textContent = "Score : " + bonnes + " / " + total;

  var ratio = bonnes / total;
  var feedback;
  if (ratio === 1) {
    feedback = "Excellent niveau opérationnel SST. Les réflexes sont en place.";
  } else if (ratio >= 0.7) {
    feedback = "Très bon niveau. Poursuivez.";
  } else if (ratio >= 0.5) {
    feedback = "Bases présentes mais réflexes pas encore automatiques. On renforce la chaîne alerte → geste vital.";
  } else {
    feedback = "On doit retravailler ensemble les fondamentaux. C'est un point de départ pédagogique, pas un jugement.";
  }
  feedbackGlobal.textContent = feedback;

  detailsZone.innerHTML = "";

  for (var qIndex = 0; qIndex < questions.length; qIndex++) {
    var q = questions[qIndex];
    var rep = reponsesUtilisateur[qIndex];
    var ok = questionIsCorrect(qIndex);

    var bloc = document.createElement("div");
    bloc.className = "detail-block";

    var head = document.createElement("div");
    head.className = "detail-head";
    head.innerHTML =
      '<span>Q' + (qIndex + 1) + '. ' + q.texte + '</span>' +
      '<span class="' + (ok ? 'badge-ok' : 'badge-err') + '">' +
      (ok ? "OK" : "À revoir") +
      "</span>";
    bloc.appendChild(head);

    for (var opti = 0; opti < q.options.length; opti++) {
      var estBonne = (q.bonnesReponses.indexOf(opti) !== -1);
      var aCoche  = rep[opti];

      var line = document.createElement("div");
      line.style.marginBottom = "6px";
      line.innerHTML =
        "<strong>" + String.fromCharCode(65 + opti) + ".</strong> " +
        q.options[opti] +
        (aCoche ? " <em>(choisi)</em>" : "") +
        (estBonne ? " ✅" : "");
      bloc.appendChild(line);
    }

    var just = document.createElement("div");
    just.className = "justif";
    just.textContent = q.justification;
    bloc.appendChild(just);

    detailsZone.appendChild(bloc);
  }

  resultCard.style.display = "block";
  resultCard.scrollIntoView({ behavior: "smooth" });
}

// =========================
// Export bilan stagiaire
// =========================
function genererHtmlBilan() {
  var total  = questions.length;
  var bonnes = calculScore();

  var ratio = bonnes / total;
  var feedback;
  if (ratio === 1) {
    feedback = "Excellent niveau opérationnel SST. Les réflexes sont en place.";
  } else if (ratio >= 0.7) {
    feedback = "Très bon niveau. Consolider arrêt vital / chimique / rachis.";
  } else if (ratio >= 0.5) {
    feedback = "Bases présentes mais réflexes pas encore automatiques. Chaîne alerte → geste vital à renforcer.";
  } else {
    feedback = "Les fondamentaux doivent être retravaillés. Ce bilan sert de point de départ pédagogique.";
  }

  var detailsHtml = "";
  for (var qIndex = 0; qIndex < questions.length; qIndex++) {
    var q = questions[qIndex];
    var rep = reponsesUtilisateur[qIndex];
    var ok = questionIsCorrect(qIndex);

    detailsHtml += '<div style="border:1px solid #999;padding:10px;border-radius:6px;margin-bottom:12px;font-size:13px;font-family:Arial, sans-serif;line-height:1.4;">';

    detailsHtml += '<div style="font-weight:bold;margin-bottom:6px;font-size:13px;display:flex;justify-content:space-between;">';
    detailsHtml += '<span>Q' + (qIndex + 1) + '. ' + q.texte + '</span>';
    detailsHtml += '<span style="font-size:11px;padding:2px 6px;border-radius:4px;'
                + (ok
                    ? 'background:#e8fff5;border:1px solid #4be1a8;color:#136644;'
                    : 'background:#fff2f4;border:1px solid #ff8b9a;color:#7a0017;')
                + '">'
                + (ok ? 'OK' : 'À revoir')
                + '</span>';
    detailsHtml += '</div>';

    for (var opti = 0; opti < q.options.length; opti++) {
      var estBonne = (q.bonnesReponses.indexOf(opti) !== -1);
      var aCoche  = rep[opti];

      detailsHtml += '<div style="margin-bottom:4px;font-size:13px;">'
        + '<strong>' + String.fromCharCode(65 + opti) + '.</strong> '
        + q.options[opti]
        + (aCoche ? ' <em>(choisi)</em>' : '')
        + (estBonne ? ' ✅' : '')
        + '</div>';
    }

    detailsHtml += '<div style="font-size:12px;font-style:italic;color:#444;margin-top:6px;">'
      + q.justification + '</div>';

    detailsHtml += '</div>';
  }

  var identHtml = '';
  identHtml += '<div style="font-size:13px;line-height:1.5;margin-bottom:12px;">';
  identHtml += '<div><strong>Nom / Prénom :</strong> ' + (stagiaireNom || '(non renseigné)') + '</div>';
  identHtml += '<div><strong>Fonction / Service :</strong> ' + (stagiaireService || '(non renseigné)') + '</div>';
  identHtml += '</div>';

  var htmlComplet =
    '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">' +
    '<title>Bilan SST - ' + (stagiaireNom || 'stagiaire') + '</title>' +
    '<style>' +
    'body{font-family:Arial,sans-serif;background:#ffffff;color:#000;margin:20px;line-height:1.5;font-size:14px;}' +
    '.header{border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:20px;}' +
    '.brand{font-size:16px;font-weight:bold;color:#000;}' +
    '.sub{font-size:12px;color:#555;}' +
    '.section{margin-bottom:24px;}' +
    '.section-title{font-size:15px;font-weight:bold;margin-bottom:8px;color:#000;}' +
    '.box{border:1px solid #000;padding:12px;border-radius:6px;font-size:13px;line-height:1.4;}' +
    '</style></head><body>' +

    '<div class="header">' +
      '<div class="brand">Jean-Philippe FAGET – Formation SST</div>' +
      '<div class="sub">Traçabilité pédagogique / Maintien des compétences SST</div>' +
    '</div>' +

    '<div class="section">' +
      '<div class="section-title">Stagiaire</div>' +
      '<div class="box">' +
        identHtml +
      '</div>' +
    '</div>' +

    '<div class="section">' +
      '<div class="section-title">Score global</div>' +
      '<div class="box">' +
        '<div><strong>Score :</strong> ' + calculScore() + ' / ' + questions.length + '</div>' +
        '<div><strong>Lecture pédagogique :</strong><br>' + feedback + '</div>' +
      '</div>' +
    '</div>' +

    '<div class="section">' +
      '<div class="section-title">Analyse question par question</div>' +
      detailsHtml +
    '</div>' +

    '<div class="section" style="font-size:11px;color:#555;">' +
      'Ce document est un support pédagogique interne. Il ne remplace pas une évaluation certificative officielle SST.' +
    '</div>' +

    '</body></html>';

  return htmlComplet;
}

function telechargerBilan() {
  var contenu = genererHtmlBilan();
  var blob = new Blob([contenu], { type: "text/html" });

  var nomFichier = "Bilan_SST_" + (stagiaireNom || "stagiaire") + ".html";
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = nomFichier;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

// =========================
// Navigation
// =========================
prevBtn.onclick = function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
};

nextBtn.onclick = function () {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
};

finishBtn.onclick = function () {
  afficherResultats();
};

exportBtn.onclick = telechargerBilan;

// =========================
// Lancement
// =========================
renderQuestion();
