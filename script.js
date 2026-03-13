/**
 * Digital Signage Initialization
 * Version: h7w2k9
 */
(function() {
    'use strict';

    const init = () => {
        console.log('Digital Signage App Initialized [Version: h7w2k9]');

        // Prevent any default interactions if they occur
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
                e.preventDefault();
            }
        });

        // Ensure orientation changes or resize events keep the layout stable
        window.addEventListener('resize', () => {
            // Force redraw or adjustment if necessary
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();