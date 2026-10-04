/* kathymlong.com — small, no dependencies */
(function () {
  'use strict';

  /* ---- Site-wide settings. Edit these, nothing else needs to change. ---- */
  var LINKS = {
    linkedin: 'https://www.linkedin.com/in/kathymlong',
    youtube: 'https://www.youtube.com/@NixItAI',
    substack: 'https://substack.com/@kathylongnixit',   // profile link shown in the footer
    substackPublication: ''                             // once the newsletter exists, e.g. 'https://kathymlong.substack.com'; signups then post there instead of the inbox
  };

  /* ---- Footer year ---- */
  var y = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = y; });

  /* ---- Social links (hide any that aren't set yet) ---- */
  function wire(selector, url) {
    document.querySelectorAll(selector).forEach(function (a) {
      if (url) { a.href = url; a.target = '_blank'; }
      else { a.hidden = true; }
    });
  }
  wire('[data-linkedin]', LINKS.linkedin);
  wire('[data-youtube]', LINKS.youtube);
  wire('[data-substack-home]', LINKS.substack);

  /* ---- Newsletter signups ----
     With a Substack publication set, the box posts straight to Substack.
     Without one, signups go to the inbox through Web3Forms and confirm inline. */
  document.querySelectorAll('form[data-newsletter]').forEach(function (f) {
    if (LINKS.substackPublication) {
      f.action = LINKS.substackPublication.replace(/\/+$/, '') + '/api/v1/free?nojs=true';
      f.querySelectorAll('input[type="hidden"], input[name="botcheck"]').forEach(function (i) { i.remove(); });
      return;
    }
    f.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return;
      e.preventDefault();
      var btn = f.querySelector('button[type="submit"]');
      var email = f.querySelector('input[type="email"]');
      var note = f.querySelector('.form-status') || f.appendChild(Object.assign(document.createElement('p'), { className: 'form-status' }));
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        note.className = 'form-status err'; note.textContent = 'That email address doesn\u2019t look right.'; email.focus(); return;
      }
      var label = btn.textContent; btn.disabled = true; btn.textContent = 'Adding';
      fetch(f.action, { method: 'POST', body: new FormData(f), headers: { 'Accept': 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && j.success === false) throw new Error('fail');
          f.reset(); note.className = 'form-status ok'; note.textContent = 'You\u2019re on the list.';
        })
        .catch(function () { note.className = 'form-status err'; note.textContent = 'That didn\u2019t go through. Try again in a minute.'; })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    });
  });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus();
      }
    });
  }

  /* ---- Copy buttons (bios, boilerplate) ---- */
  document.querySelectorAll('.copy-btn[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy'));
      if (!src) return;
      var text = Array.prototype.map.call(src.querySelectorAll('p'), function (p) { return p.textContent.trim(); }).join('\n\n');
      var done = function () {
        var label = btn.textContent;
        btn.textContent = 'Copied'; btn.setAttribute('data-done', 'true');
        setTimeout(function () { btn.textContent = label; btn.removeAttribute('data-done'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  });
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---- Contact form: intent chips + inline submit ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var radios = form.querySelectorAll('input[name="about"]');
    var groups = form.querySelectorAll('.intent-fields');
    var subject = document.getElementById('form-subject');
    var status = document.getElementById('form-status');

    function applyIntent(value) {
      groups.forEach(function (g) {
        var on = g.getAttribute('data-for') === value;
        g.hidden = !on;
        g.querySelectorAll('input, textarea, select').forEach(function (i) { i.disabled = !on; });
      });
      if (subject) subject.value = 'kathymlong.com: ' + value;
    }

    radios.forEach(function (r) { r.addEventListener('change', function () { if (r.checked) applyIntent(r.value); }); });

    // Preselect from ?about=speaking|podcast|investing|press|other
    var about = new URLSearchParams(location.search).get('about');
    if (about) {
      about = about.toLowerCase();
      radios.forEach(function (r) { if (r.value.toLowerCase() === about) r.checked = true; });
    }
    var checked = form.querySelector('input[name="about"]:checked');
    applyIntent(checked ? checked.value : 'Other');

    form.addEventListener('submit', function (e) {
      // Basic validation with clear messages
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var msg = form.querySelector('[name="message"]');
      var missing = [name, email, msg].filter(function (f) { return !f.value.trim(); });
      if (missing.length || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        e.preventDefault();
        status.className = 'form-status err';
        status.textContent = missing.length ? 'Name, email, and message are required.' : 'That email address doesn’t look right.';
        (missing[0] || email).focus();
        return;
      }
      if (!window.fetch || !window.FormData) return; // let the browser post normally

      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.disabled = true; btn.textContent = 'Sending';
      status.className = 'form-status'; status.textContent = '';

      var fd = new FormData(form);
      var sel = form.querySelector('input[name="about"]:checked');
      if (sel && subject) fd.set('subject', 'kathymlong.com: ' + sel.value + ' from ' + name.value.trim());
      fd.delete('redirect');

      fetch(form.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.success !== false, body: j }; }); })
        .then(function (res) {
          if (res.ok) {
            form.reset(); applyIntent(sel ? sel.value : 'Other');
            status.className = 'form-status ok';
            status.textContent = 'Sent. You’ll hear back within a week.';
          } else {
            throw new Error((res.body && res.body.message) || 'Send failed');
          }
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'That didn’t send. Try again in a minute, or email directly.';
        })
        .then(function () { btn.disabled = false; btn.textContent = original; });
    });
  }
})();
