document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image");

    function applyColorGradient() {
        // Gradien dengan variasi warna pink
        const gradient = `linear-gradient(
            135deg,
            #FFC0CB 20%,  /* Pink muda */
            #FF69B4 50%,  /* Hot pink */
            #FF1493 80%   /* Deep pink */
        )`;

        // Terapkan gradien pada seluruh viewport
        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.background = gradient;
        document.body.style.backgroundSize = "cover";
        document.body.style.transition = "background 1.5s ease"; // Efek transisi lembut
        document.body.style.overflow = "hidden";

        // Debugging untuk memastikan warna gradien
        console.log("Gradient Applied:", gradient);
    }

    // Terapkan warna gradien langsung tanpa perlu analisis gambar
    image.addEventListener("load", applyColorGradient);

    if (image.complete) {
        applyColorGradient();
    }
});