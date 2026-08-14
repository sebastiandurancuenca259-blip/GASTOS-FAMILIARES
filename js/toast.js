function mostrarToast(mensaje, tipo = "exito") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${tipo}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function mostrarConfirmacion(mensaje) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";

    overlay.innerHTML = `
      <div class="confirm-modal">
        <p class="confirm-modal__mensaje">${mensaje}</p>
        <div class="confirm-modal__botones">
          <button class="confirm-modal__btn confirm-modal__btn--cancelar">Cancelar</button>
          <button class="confirm-modal__btn confirm-modal__btn--aceptar">Eliminar</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".confirm-modal__btn--cancelar").addEventListener("click", () => {
      overlay.remove();
      resolve(false);
    });

    overlay.querySelector(".confirm-modal__btn--aceptar").addEventListener("click", () => {
      overlay.remove();
      resolve(true);
    });
  });
}
