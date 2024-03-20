function vortex() {
    const r = new rive.Rive({
        src: "assets/images/vortex.riv",
        canvas: document.getElementById("vortex"),
        autoplay: true,
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
    });
}

vortex()