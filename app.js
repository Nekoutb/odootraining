/* Formation Odoo : progression gardée dans le navigateur (localStorage), sans compte. */
(function () {
  var D = {"phases": [{"slug": "bases", "n": 1, "t": "Les bases d'Odoo", "lessons": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]}, {"slug": "parametrage", "n": 2, "t": "Paramétrage de la comptabilité", "lessons": ["2.1", "2.2", "2.3", "2.4", "2.5"]}, {"slug": "immobilisations", "n": 3, "t": "Immobilisations", "lessons": ["3.1", "3.2", "3.3", "3.4", "3.5"]}, {"slug": "tiers", "n": 4, "t": "Comptes de tiers", "lessons": ["4.1", "4.2", "4.3", "4.4"]}, {"slug": "journaux", "n": 5, "t": "Journaux", "lessons": ["5.1", "5.2", "5.3"]}, {"slug": "reglements", "n": 6, "t": "Règlements et encaissements", "lessons": ["6.1", "6.2", "6.3", "6.4"]}, {"slug": "achats", "n": 7, "t": "Achats", "lessons": ["7.1", "7.2", "7.3", "7.4"]}, {"slug": "cloture", "n": 8, "t": "Clôture mensuelle", "lessons": ["8.1", "8.2", "8.3", "8.4", "8.5"]}, {"slug": "etats", "n": 9, "t": "États et analyses", "lessons": ["9.1", "9.2", "9.3", "9.4", "9.5"]}], "lessons": {"1.1": {"t": "Se repérer : applications, menus et retour en arrière", "url": "lecons/1-1.html", "phase": "bases", "ex": "Ouvrez une facture client, passez à la suivante avec les flèches, puis revenez à la liste par le fil d'Ariane."}, "1.2": {"t": "Créer, modifier, enregistrer ou annuler", "url": "lecons/1-2.html", "phase": "bases", "ex": "Modifiez le téléphone d'un client, sauvegardez, puis modifiez-le de nouveau et cliquez sur Ignorer."}, "1.3": {"t": "Supprimer ou archiver un enregistrement", "url": "lecons/1-3.html", "phase": "bases", "ex": "Archivez un client de test, retrouvez-le avec le filtre Archivé, puis désarchivez-le."}, "1.4": {"t": "Sélectionner plusieurs lignes et agir en une fois", "url": "lecons/1-4.html", "phase": "bases", "ex": "Sélectionnez les trois dernières factures clients et ouvrez le menu Action sans rien valider."}, "1.5": {"t": "Rechercher, filtrer et trier une liste", "url": "lecons/1-5.html", "phase": "bases", "ex": "Affichez les factures clients non payées, triées par date d'échéance."}, "1.6": {"t": "Regrouper et totaliser", "url": "lecons/1-6.html", "phase": "bases", "ex": "Regroupez les factures clients par client, puis par mois de facturation."}, "2.1": {"t": "L'écran de configuration", "url": "lecons/2-1.html", "phase": "parametrage", "ex": "Retrouvez la section Taxes et notez la méthode d'arrondi utilisée."}, "2.2": {"t": "Paramétrer la TVA sur ventes et achats", "url": "lecons/2-2.html", "phase": "parametrage", "ex": "Ouvrez la TVA 19,25 % (achat) et vérifiez son compte."}, "2.3": {"t": "Paramétrer le précompte et l'impôt sur le revenu", "url": "lecons/2-3.html", "phase": "parametrage", "ex": "Créez une facture fournisseur test avec TVA et précompte et contrôlez le net à payer."}, "2.4": {"t": "Exonérer un client : les positions fiscales", "url": "lecons/2-4.html", "phase": "parametrage", "ex": "Créez une facture pour le client exonéré et vérifiez la taxe appliquée."}, "2.5": {"t": "Plan comptable : créer, renommer, archiver un compte", "url": "lecons/2-5.html", "phase": "parametrage", "ex": "Créez le compte 604710 Fournitures informatiques, type Charges."}, "3.1": {"t": "Paramétrer les profils d'immobilisation", "url": "lecons/3-1.html", "phase": "immobilisations", "ex": "Créez le profil Mobilier de bureau, 10 ans, comptes 244400 / 284400 / 681300."}, "3.2": {"t": "Enregistrer l'acquisition d'une immobilisation", "url": "lecons/3-2.html", "phase": "immobilisations", "ex": "Saisissez l'achat de deux climatiseurs et retrouvez leur fiche."}, "3.3": {"t": "Comptabiliser les dotations aux amortissements", "url": "lecons/3-3.html", "phase": "immobilisations", "ex": "Calculez les dotations au 30/09/2026 et contrôlez le camion de livraison."}, "3.4": {"t": "Suivre les amortissements cumulés", "url": "lecons/3-4.html", "phase": "immobilisations", "ex": "Comparez le cumul du matériel de transport au solde du 284500."}, "3.5": {"t": "Céder ou mettre au rebut un bien", "url": "lecons/3-5.html", "phase": "immobilisations", "ex": "Sortez le chariot élévateur au 30/09/2026 pour un prix de 9 000 000 (sans valider sur la base réelle)."}, "4.1": {"t": "Créer un client", "url": "lecons/4-1.html", "phase": "tiers", "ex": "Créez le client Société Exemple SARL avec son NIU et une adresse à Douala."}, "4.2": {"t": "Créer un fournisseur et vérifier ses comptes", "url": "lecons/4-2.html", "phase": "tiers", "ex": "Ouvrez Alpha Fournitures SARL et vérifiez ses deux comptes."}, "4.3": {"t": "Régime fiscal et conditions de paiement du tiers", "url": "lecons/4-3.html", "phase": "tiers", "ex": "Donnez à un client des conditions de paiement à 30 jours et vérifiez l'échéance d'une facture."}, "4.4": {"t": "Retrouver un tiers et éviter les doublons", "url": "lecons/4-4.html", "phase": "tiers", "ex": "Recherchez un fournisseur par son NIU."}, "5.1": {"t": "Comprendre les journaux", "url": "lecons/5-1.html", "phase": "journaux", "ex": "Notez le code et le compte de chaque journal de trésorerie."}, "5.2": {"t": "Créer et paramétrer un journal", "url": "lecons/5-2.html", "phase": "journaux", "ex": "Créez le journal Caisse dépenses courantes, type Espèces."}, "5.3": {"t": "Archiver ou supprimer un journal", "url": "lecons/5-3.html", "phase": "journaux", "ex": "Archivez un journal de test puis désarchivez-le."}, "6.1": {"t": "Payer un fournisseur depuis sa facture", "url": "lecons/6-1.html", "phase": "reglements", "ex": "Payez la facture de Delta Garage Auto par la banque principale."}, "6.2": {"t": "Encaisser un client depuis sa facture", "url": "lecons/6-2.html", "phase": "reglements", "ex": "Encaissez la facture de Lambda Industries par la banque principale."}, "6.3": {"t": "Payer un fournisseur par le journal de banque", "url": "lecons/6-3.html", "phase": "reglements", "ex": "Saisissez une avance de 500 000 à Béta Carburants puis imputez-la sur une facture."}, "6.4": {"t": "Encaisser un client par le journal de banque", "url": "lecons/6-4.html", "phase": "reglements", "ex": "Enregistrez un virement de 2 000 000 de Kappa Shipping et imputez-le."}, "7.1": {"t": "Créer un article lié à son compte de charges", "url": "lecons/7-1.html", "phase": "achats", "ex": "Créez l'article Papier A4 (ramette) au compte 604700."}, "7.2": {"t": "Émettre une demande de prix et un bon de commande", "url": "lecons/7-2.html", "phase": "achats", "ex": "Créez et confirmez une commande de 20 lots de fournitures."}, "7.3": {"t": "Créer la facture depuis le bon de commande", "url": "lecons/7-3.html", "phase": "achats", "ex": "Créez la facture de la commande de gasoil et comparez les montants."}, "7.4": {"t": "Rapprocher une facture reçue avec la commande", "url": "lecons/7-4.html", "phase": "achats", "ex": "Créez la facture de la dernière commande avec le remplissage automatique."}, "8.1": {"t": "Saisir une opération diverse", "url": "lecons/8-1.html", "phase": "cloture", "ex": "Saisissez une charge à payer d'électricité de 1 250 000 au 30/09."}, "8.2": {"t": "Paramétrer le valideur des écritures", "url": "lecons/8-2.html", "phase": "cloture", "ex": "Consultez la règle de validation et notez le valideur."}, "8.3": {"t": "Demander et accorder la validation", "url": "lecons/8-3.html", "phase": "cloture", "ex": "Demandez la validation de votre charge à payer."}, "8.4": {"t": "Contrôler avant la clôture", "url": "lecons/8-4.html", "phase": "cloture", "ex": "Listez les écritures non comptabilisées de septembre."}, "8.5": {"t": "Verrouiller la période", "url": "lecons/8-5.html", "phase": "cloture", "ex": "Verrouillez au 31/08/2026 pour les non-conseillers."}, "9.1": {"t": "Éditer la balance générale", "url": "lecons/9-1.html", "phase": "etats", "ex": "Éditez la balance au 30/09/2026 et exportez-la en Excel."}, "9.2": {"t": "Éditer le grand livre", "url": "lecons/9-2.html", "phase": "etats", "ex": "Éditez le grand livre du compte 284500 sur 2026."}, "9.3": {"t": "Balance âgée des clients", "url": "lecons/9-3.html", "phase": "etats", "ex": "Éditez la balance âgée clients au 30/09/2026."}, "9.4": {"t": "Balance âgée des fournisseurs", "url": "lecons/9-4.html", "phase": "etats", "ex": "Éditez la balance âgée fournisseurs au 30/09/2026."}, "9.5": {"t": "Analyser et extraire vers Excel", "url": "lecons/9-5.html", "phase": "etats", "ex": "Exportez les factures clients de septembre avec client, date, total et statut."}}};
  var K = 'odootraining.v1';
  function load() { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(K, JSON.stringify(S)); } catch (e) {} }
  var S = load(); S.done = S.done || {}; S.checks = S.checks || {};
  var root = document.body.getAttribute('data-root') || '';
  function q(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function each(sel, fn) { q(sel).forEach(fn); }
  var order = []; D.phases.forEach(function (p) { order = order.concat(p.lessons); });
  var phaseOf = {}; D.phases.forEach(function (p) { phaseOf[p.slug] = p; });

  function stats(p) { var d = 0; p.lessons.forEach(function (id) { if (S.done[id]) d++; }); return { d: d, n: p.lessons.length }; }
  function stateOf(p) {
    var s = stats(p);
    if (s.d === s.n) return 'done';
    if (s.d > 0 || (S.last && D.lessons[S.last] && D.lessons[S.last].phase === p.slug)) return 'cur';
    return 'todo';
  }
  function target() {
    if (S.last && D.lessons[S.last] && !S.done[S.last]) return S.last;
    var start = S.last ? order.indexOf(S.last) : -1;
    for (var i = 1; i <= order.length; i++) { var id = order[(start + i + order.length) % order.length]; if (!S.done[id]) return id; }
    return order[0];
  }
  var LAB = { done: 'Terminée', cur: 'En cours', todo: 'À venir' };

  function render() {
    var tot = 0, all = 0, started = false;
    D.phases.forEach(function (p) {
      var s = stats(p), st = stateOf(p); tot += s.d; all += s.n; if (st !== 'todo') started = true;
      each('[data-phase-done="' + p.slug + '"]', function (e) { e.textContent = s.d; });
      each('[data-phase-bar="' + p.slug + '"]', function (e) { e.style.width = Math.round(s.d / s.n * 100) + '%'; e.className = 'st-' + st; });
      each('[data-phase-badge="' + p.slug + '"]', function (e) { e.textContent = LAB[st]; e.className = 'badge st-' + st; });
      each('[data-phase-card="' + p.slug + '"]', function (e) { e.classList.toggle('is-cur', st === 'cur'); });
      each('[data-phase="' + p.slug + '"]', function (e) { e.classList.remove('st-done', 'st-cur', 'st-todo'); e.classList.add('st-' + st); });
      each('[data-phase-state="' + p.slug + '"]', function (e) { e.textContent = { done: 'terminée', cur: 'en cours', todo: 'à venir' }[st]; });
    });
    Object.keys(D.lessons).forEach(function (id) {
      var st = S.done[id] ? 'done' : (S.last === id ? 'cur' : 'todo');
      each('[data-lesson-badge="' + id + '"]', function (e) { e.textContent = { done: 'Terminée', cur: 'En cours', todo: 'À faire' }[st]; e.className = 'badge st-' + st; });
      each('[data-lesson-num="' + id + '"]', function (e) { e.classList.remove('st-done', 'st-cur', 'st-todo'); e.classList.add('st-' + st); });
      each('[data-lesson-row="' + id + '"]', function (e) { e.classList.toggle('is-cur', st === 'cur'); });
      each('[data-done="' + id + '"]', function (e) { e.textContent = S.done[id] ? 'Leçon terminée ✓ (cliquer pour annuler)' : 'Marquer la leçon comme terminée'; e.classList.toggle('is-done', !!S.done[id]); });
    });
    each('[data-total-done]', function (e) { e.textContent = tot; });
    each('[data-total-pct]', function (e) { e.textContent = Math.round(tot / all * 100); });
    var t = target(), L = D.lessons[t], P = phaseOf[L.phase];
    each('[data-resume-a]', function (e) { e.href = root + L.url; if (started && e.hasAttribute('data-swap')) e.textContent = 'Reprendre'; });
    each('[data-resume-phase]', function (e) { e.href = root + 'phases/' + P.slug + '.html'; e.textContent = 'Voir la phase ' + P.n; });
    each('[data-resume-ph]', function (e) { e.textContent = 'Phase ' + P.n + ' · ' + P.t + ' · leçon ' + t; });
    each('[data-resume-title]', function (e) { e.textContent = L.t; });
    if (started) {
      each('[data-resume-k]', function (e) { e.textContent = 'Reprendre là où vous en étiez'; });
      each('[data-resume-t]', function (e) { e.innerHTML = ''; e.appendChild(document.createTextNode('Phase ' + P.n + ' · ' + P.t)); e.appendChild(document.createElement('br')); var s = document.createElement('span'); s.textContent = 'Leçon ' + t + ' · ' + L.t; e.appendChild(s); });
      each('[data-prog-lead]', function (e) { e.textContent = 'Vous êtes en phase ' + P.n + ' sur 9 : ' + P.t + '. ' + tot + ' leçon' + (tot > 1 ? 's' : '') + ' terminée' + (tot > 1 ? 's' : '') + ' sur ' + all + '.'; });
    }
    each('[data-next]', function (ul) {
      ul.innerHTML = '';
      var items = [['Terminer la leçon ' + t + ' : ' + L.t, root + L.url]];
      var i = order.indexOf(t);
      for (var k = i + 1; k < order.length && items.length < 3; k++) if (!S.done[order[k]]) items.push(['Leçon ' + order[k] + ' : ' + D.lessons[order[k]].t, root + D.lessons[order[k]].url]);
      items.push(['Exercice : ' + L.ex, root + 'phases/' + P.slug + '.html']);
      items.forEach(function (it) { var li = document.createElement('li'), a = document.createElement('a'); a.href = it[1]; a.textContent = it[0]; li.appendChild(a); ul.appendChild(li); });
    });
  }

  var art = document.querySelector('[data-lesson]');
  if (art) {
    var id = art.getAttribute('data-lesson');
    S.last = id; save();
    var boxes = q('[data-check^="' + id + ':"]');
    function count() { var n = boxes.filter(function (b) { return b.checked; }).length; each('[data-check-count="' + id + '"]', function (e) { e.textContent = n; }); }
    boxes.forEach(function (b) {
      var k = b.getAttribute('data-check'); b.checked = !!S.checks[k];
      b.addEventListener('change', function () { if (b.checked) S.checks[k] = 1; else delete S.checks[k]; save(); count(); });
    });
    count();
  }
  each('[data-done]', function (b) {
    b.addEventListener('click', function () { var id = b.getAttribute('data-done'); if (S.done[id]) delete S.done[id]; else S.done[id] = 1; save(); render(); });
  });
  each('[data-reset]', function (b) {
    b.addEventListener('click', function () { if (window.confirm('Effacer votre progression sur cet ordinateur ?')) { S = { done: {}, checks: {} }; save(); location.reload(); } });
  });
  render();
})();
