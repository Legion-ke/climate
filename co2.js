document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'fUdNqbITxPVaE3pM4aLMlw'; // Replace with your Carbon Interface API key
    const emissionsContainer = document.getElementById('emissions');

    // Fetch current CO2 emissions data using the Carbon Interface API
    fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${fUdNqbITxPVaE3pM4aLMlw}`,
        },
        body: JSON.stringify({
            type: 'electricity',
            electricity_unit: 'kwh',
            electricity_value: 1000, // Replace with your energy consumption value in kWh
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.attributes && data.data.attributes.carbon_g) {
                const carbonEmissions = data.data.attributes.carbon_g;
                emissionsContainer.textContent = `Current CO2 Emissions: ${carbonEmissions} gCO2`;
            } else {
                console.error('Error fetching emissions data.');
                emissionsContainer.textContent = 'Error fetching emissions data.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            emissionsContainer.textContent = 'Error fetching emissions data.';
        });
});
