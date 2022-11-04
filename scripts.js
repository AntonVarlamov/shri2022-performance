(() => {
  function e(e, t, a) {
    Array.from(e).forEach(e => {
      e.addEventListener(t, a)
    })
  }

  function t(t) {
    let a = t.querySelector(".u").dataset.id;
    const r = t.querySelectorAll(".t"), n = Array.from(r).map(e => e.dataset.id), i = t.querySelector(".r");

    function c(e) {
      const r = t.querySelector(`.t[data-id=${e}]`), n = t.querySelector(`.section__panel[data-id=${e}]`),
        c = t.querySelector(".u"), s = t.querySelector(".section__panel:not(.zz)");
      a = e, c.classList.remove("u"), c.setAttribute("aria-selected", "false"), c.removeAttribute("tabindex"), r.classList.add("u"), r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0"), r.focus({preventScroll: !0}), s.classList.add("zz"), s.setAttribute("aria-hidden", "true"), n.classList.remove("zz"), n.setAttribute("aria-hidden", "false"), i.value = e
    }

    i.addEventListener("input", () => {
      c(i.value)
    }), e(r, "click", e => {
      c(e.target.dataset.id)
    }), e(r, "keydown", e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      let t = n.indexOf(a);
      switch (e.which) {
        case 37:
          --t;
          break;
        case 39:
          ++t;
          break;
        case 36:
          t = 0;
          break;
        case 35:
          t = n.length - 1;
          break;
        default:
          return
      }
      t >= n.length ? t = 0 : t < 0 && (t = n.length - 1), c(n[t]), e.preventDefault()
    })
  }

  function a(e) {
    let t = !1;
    const a = document.querySelector(".e");
    e.addEventListener("click", () => {
      t = !t, e.setAttribute("aria-expanded", t ? "true" : "false"), e.querySelector(".header__menu-text").textContent = t ? "Закрыть меню" : "Открыть меню", a.classList.toggle("g", t), a.classList.add("f")
    })
  }

  document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.querySelectorAll(".m")).forEach(t), Array.from(document.querySelectorAll(".d")).forEach(a)
  })
})();