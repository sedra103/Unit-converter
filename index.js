let inputEl = document.getElementById('input-value');
let ConvertBtn = document.getElementById('convert-btn');
let lengthResultEl = document.getElementById('length-result');
let volumeResultEl = document.getElementById('volume-result');
let massResultEl = document.getElementById('mass-result');
// Dark mode toggle logic
(function(){
    const toggle = document.getElementById('dark-toggle');
    const root = document.body;

    function applyTheme(theme){
        if(theme === 'dark'){
            root.classList.add('dark-mode');
            if(toggle) toggle.textContent = 'light';
            if(toggle) toggle.setAttribute('aria-pressed', 'true');
        } else {
            root.classList.remove('dark-mode');
            if(toggle) toggle.textContent = 'dark';
            if(toggle) toggle.setAttribute('aria-pressed', 'false');
        }
    }

    // initialize from saved preference or system
    try{
        const saved = localStorage.getItem('theme');
        if(saved){
            applyTheme(saved);
        } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            applyTheme('dark');
        }
    }catch(e){ /* ignore storage errors */ }

    if(toggle){
        toggle.addEventListener('click', ()=>{
            const isDark = root.classList.toggle('dark-mode');
            try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
            applyTheme(isDark ? 'dark' : 'light');
        });
    }
})();
ConvertBtn.addEventListener('click', () => {
    let inputValue = inputEl.value;
    // Add conversion logic here
    calcLength(inputValue);
    calcVolume(inputValue);
    calcMass(inputValue);
});

function calcLength(value) {
    let metersToFeet = (value * 3.281).toFixed(2);
    let feetToMeters = (value / 3.281).toFixed(2);
    lengthResultEl.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
}

function calcVolume(value) {
    let litersToGallons = (value * 0.264).toFixed(2);
    let gallonsToLiters = (value / 0.264).toFixed(2);
    volumeResultEl.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
}

function calcMass(value) {
    let kilosToPounds = (value * 2.204).toFixed(2);
    let poundsToKilos = (value / 2.204).toFixed(2);
    massResultEl.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}