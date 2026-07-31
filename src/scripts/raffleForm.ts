export function wireRaffleForm(form: HTMLFormElement) {
  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  const originalLabel = submitBtn?.textContent ?? "Enter Raffle";

  const statusEl = document.createElement("p");
  statusEl.setAttribute("data-form-status", "");
  statusEl.className = "text-sm font-semibold text-center min-h-5";
  form.appendChild(statusEl);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      pageUrl: window.location.href,
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Entering...";
    }
    statusEl.textContent = "";

    try {
      const res = await fetch("/.netlify/functions/submit-raffle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");

      form.reset();
      statusEl.textContent = "You're entered! Good luck.";
      statusEl.className = "text-sm font-semibold text-center min-h-5 text-brand-green";
    } catch {
      statusEl.textContent = "Something went wrong — please call us at 401-425-9879 instead.";
      statusEl.className = "text-sm font-semibold text-center min-h-5 text-red-600";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    }
  });
}
