(function () {
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const page = path.split("/").pop() || "index.html";
  const isHome = page === "" || page === "index.html" || path.endsWith("/gti-website");

  const links = [
    ["about.html", "About"],
    ["solutions.html", "Solutions"],
    ["metrex.html", "Metrex"],
    ["rtex.html", "RT-EX"],
    ["etrology.html", "Etrology"],
    ["contact.html", "Contact"],
  ];

  function active(href) {
    return page === href ? ' class="active"' : "";
  }

  const nav = document.getElementById("site-nav");
  if (nav) {
    nav.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="brand">
          <span class="brand-mark">GTI</span>
          <span class="brand-sub">Green Technology Investments</span>
        </a>
        <nav>
          <ul class="nav-links">
            ${links.map(([h, l]) => `<li><a href="${h}"${active(h)}>${l}</a></li>`).join("")}
            <li><a class="nav-cta" href="quote.html">Get a quote</a></li>
          </ul>
        </nav>
        <button class="menu-btn" type="button" id="menu-btn" aria-label="Menu">Menu</button>
      </div>`;
  }

  const mobile = document.getElementById("mobile-panel");
  if (mobile) {
    mobile.innerHTML = `<div class="container"><ul>
      ${links.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}
      <li><a href="quote.html">Get a quote</a></li>
    </ul></div>`;
  }

  const btn = document.getElementById("menu-btn");
  if (btn && mobile) {
    btn.addEventListener("click", () => {
      mobile.classList.toggle("open");
      btn.textContent = mobile.classList.contains("open") ? "Close" : "Menu";
    });
  }

  const foot = document.getElementById("site-footer");
  if (foot) {
    const year = new Date().getFullYear();
    foot.innerHTML = `
      <div class="container footer-grid">
        <div>
          <h4>GTI</h4>
          <p>High-performance metrology, remanufactured SEM platforms, and global support for semiconductor manufacturers of every size.</p>
        </div>
        <div>
          <h4>Divisions</h4>
          <ul>
            <li><a href="metrex.html">Metrex</a></li>
            <li><a href="rtex.html">RT Experts</a></li>
            <li><a href="etrology.html">Etrology</a></li>
            <li><a href="solutions.html">Solutions</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:sales@gt3i.com">sales@gt3i.com</a></li>
            <li><a href="tel:+14804006910">480-400-6910</a></li>
            <li><a href="tel:+18006084834">800-608-4834</a></li>
            <li>15936 N 78th St, Scottsdale, AZ 85260</li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">© ${year} Green Technology Investments, LLC. Redesign of gt3i.com for Tal Levin.</div>`;
  }

  document.querySelectorAll("form[data-formsubmit]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const statusEl = form.querySelector("[data-status]");
      const btn = form.querySelector('[type="submit"]');
      const subject = form.dataset.subject || "GTI website form";
      const data = new FormData(form);
      data.append("_subject", subject);
      data.append("_template", "table");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
      try {
        const res = await fetch("https://formsubmit.co/ajax/sales@gt3i.com", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("fail");
        form.reset();
        if (statusEl) {
          statusEl.hidden = false;
          statusEl.className = "form-success";
          statusEl.textContent = "Thanks — message sent. We will reply shortly.";
        }
        form.querySelectorAll("label, button, .form-row, .form-note").forEach((el) => {
          if (!el.matches("[data-status]")) el.style.display = "none";
        });
      } catch {
        if (statusEl) {
          statusEl.hidden = false;
          statusEl.className = "form-error";
          statusEl.textContent = "Could not send. Email sales@gt3i.com or call 480-400-6910.";
        }
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Try again";
        }
      }
    });
  });
})();
