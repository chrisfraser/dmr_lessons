/* Reusable retrieval-practice quiz widget — DMR Radio Basics course.
 *
 * Usage in a lesson:
 *   <div class="quiz" data-quiz='[
 *     {"q":"...","options":["A","B","C","D"],"answer":1,"why":"..."}
 *   ]'></div>
 *   <script src="../assets/quiz.js"></script>
 *
 * Design notes:
 *  - Immediate, automatic feedback (tight feedback loop) — colours the choice and
 *    reveals the "why" the moment an option is clicked.
 *  - Retrieval practice: question shown, options unordered, no formatting tell.
 *  - Re-answerable so the user can space repetitions across sessions.
 */
(function () {
  function buildQuestion(item, idx) {
    const wrap = document.createElement("div");
    wrap.className = "quiz-q";

    const q = document.createElement("p");
    q.className = "quiz-prompt";
    q.innerHTML = "<strong>Q" + (idx + 1) + ".</strong> " + item.q;
    wrap.appendChild(q);

    const list = document.createElement("div");
    list.className = "quiz-options";

    const why = document.createElement("div");
    why.className = "quiz-why";
    why.style.display = "none";

    item.options.forEach(function (opt, i) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        const all = list.querySelectorAll(".quiz-opt");
        all.forEach(function (b) { b.classList.remove("correct", "wrong"); });
        if (i === item.answer) {
          btn.classList.add("correct");
          why.innerHTML = "<span class='ok'>&#10003; Correct.</span> " + (item.why || "");
        } else {
          btn.classList.add("wrong");
          all[item.answer].classList.add("correct");
          why.innerHTML = "<span class='no'>&#10007; Not quite.</span> " + (item.why || "");
        }
        why.style.display = "block";
      });
      list.appendChild(btn);
    });

    wrap.appendChild(list);
    wrap.appendChild(why);
    return wrap;
  }

  document.querySelectorAll(".quiz").forEach(function (el) {
    let items;
    try { items = JSON.parse(el.getAttribute("data-quiz")); }
    catch (e) { el.textContent = "[quiz failed to load]"; return; }

    const head = document.createElement("div");
    head.className = "quiz-head";
    head.textContent = "Check yourself";
    el.appendChild(head);

    items.forEach(function (item, idx) { el.appendChild(buildQuestion(item, idx)); });
  });
})();
