function calculateGSM() {
    const count = document.getElementById('yarnCount').value;
    const sl = document.getElementById('stitchLength').value;
    
    if(count && sl) {
        // Standard Formula: (Stitch Length * Constant) / Yarn Count
        // Note: Constant varies by machine/fabric type, using a standard 590.5 for Ne
        const gsm = (sl * 590.5) / (count * 10); // Simplified logic
        document.getElementById('gsmResult').innerText = `Estimated GSM: ${gsm.toFixed(2)}`;
    } else {
        alert("Please fill all fields");
    }
}

function calculateWeight() {
    const length = document.getElementById('fabLength').value;
    const width = document.getElementById('fabWidth').value;
    const gsm = document.getElementById('inputGSM').value;

    if(length && width && gsm) {
        // Formula: (Length in m * Width in m * GSM) / 1000
        const widthInMeter = width * 0.0254;
        const weight = (length * widthInMeter * gsm) / 1000;
        document.getElementById('weightResult').innerText = `Total Weight: ${weight.toFixed(2)} KG`;
    } else {
        alert("Please fill all fields");
    }
}

