/* Desktop navigation: vertical scrolling appears horizontal in this layout. */
const container = document.getElementById('container');
const sectionLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = sectionLinks.map(link => document.querySelector(link.hash));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function sectionPosition(section) {
    return container.scrollTop + section.getBoundingClientRect().left
        - container.getBoundingClientRect().left - container.clientTop;
}

function updateCurrentSection() {
    let closest = 0;
    sections.forEach((section, index) => {
        if (Math.abs(sectionPosition(section) - container.scrollTop)
            < Math.abs(sectionPosition(sections[closest]) - container.scrollTop)) {
            closest = index;
        }
    });
    sectionLinks.forEach((link, index) => {
        if (index === closest) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
}

sectionLinks.forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        container.scrollTo({
            top: sectionPosition(sections[index]),
            behavior: reducedMotion.matches ? 'instant' : 'smooth'
        });
    });
});
container.addEventListener('scroll', updateCurrentSection, { passive: true });
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();

/* Follow actual playback state, including loading failures. */
const audio = document.getElementById('audio');
const musicButton = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
audio.volume = 0.5;

function updateMusicButton() {
    musicButton.textContent = audio.paused ? 'Play music' : 'Pause music';
}

function showAudioError() {
    updateMusicButton();
    musicStatus.textContent = 'Music could not load. You can try again.';
}

musicButton.addEventListener('click', async () => {
    musicStatus.textContent = '';
    if (!audio.paused) {
        audio.pause();
        return;
    }
    musicButton.textContent = 'Cancel loading';
    try {
        if (audio.error) audio.load();
        await audio.play();
    } catch (error) {
        if (error.name !== 'AbortError') showAudioError();
    } finally {
        updateMusicButton();
    }
});
audio.addEventListener('playing', () => {
    musicStatus.textContent = '';
    updateMusicButton();
});
audio.addEventListener('pause', updateMusicButton);
audio.addEventListener('ended', updateMusicButton);
audio.addEventListener('error', showAudioError);

/* Match the companion indicator to direct links and browser Back/Forward. */
const friendLinks = [...document.querySelectorAll('.encounternav a')];
function updateCurrentFriend() {
    const current = friendLinks.find(link => link.hash === window.location.hash)
        || friendLinks[0];
    friendLinks.forEach(link => {
        if (link === current) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
    });
}
window.addEventListener('hashchange', updateCurrentFriend);
updateCurrentFriend();
