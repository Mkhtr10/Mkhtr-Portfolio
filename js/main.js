// Smooth Inertia Scroll (Vanilla JS)
(function () {
    let targetScroll = window.pageYOffset; 
    let currentScroll = window.pageYOffset; 
    let ease = 0.05; // كل ما تقلل الرقم تبقى أبطأ

    function smoothScroll() {
        currentScroll += (targetScroll - currentScroll) * ease;
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(smoothScroll);
    }

    window.addEventListener(
        "wheel",
        function (e) {
        e.preventDefault(); // منع السكرول العادي
        targetScroll += e.deltaY; // حركة الماوس

        // ممنوع يخرج برة حدود الصفحة
        targetScroll = Math.max(
            0,
            Math.min(
            targetScroll,
            document.body.scrollHeight - window.innerHeight
            )
        );
        },
        { passive: false }
    );

    smoothScroll();
})();
