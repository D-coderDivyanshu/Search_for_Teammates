// data = [{
//     Hackathon: "Smart India Hackathon",
//     Venue: "Government of India",
//     Dates: "30 October 2023",
//     Team: "3 Members",
//     Description: "Hello SIH",
//     Link: "https://www.sih.gov.in"
// },
// {
//     Hackathon: "Smart India Hackathon",
//     Venue: "Government of India",
//     Dates: "30 October 2023",
//     Team: "3 Members",
//     Description: "Hello SIH",
//     Link: "https://www.sih.gov.in"
// },
// {
//     Hackathon: "Smart India Hackathon",
//     Venue: "Government of India",
//     Dates: "30 October 2023",
//     Team: "3 Members",
//     Description: "Hello SIH",
//     Link: "https://www.sih.gov.in"
// },
// {
//     Hackathon: "Smart India Hackathon",
//     Venue: "Government of India",
//     Dates: "30 October 2023",
//     Team: "3 Members",
//     Description: "Hello SIH",
//     Link: "https://www.sih.gov.in"
// },
// ];

// hackathon(data);
fetch('https://kontests.net/api/v1/all')
    .then((response) => response.json())
    .then((data) => {
        hackathon(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// addUsers(data);
function hackathon(data) {
    const container = document.querySelector('.container');

    data.forEach((hackathonData, index) => {
        if (index % 2 === 0) {
            // Create a new row for every two blocks
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
        }

        const block = document.createElement('div');
        block.classList.add('block');
        container.lastChild.appendChild(block);

        const header = document.createElement('header');
        header.innerText = hackathonData.name;
        block.appendChild(header);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('line');
        block.appendChild(infoDiv);

        const infoParagraphs = [
            `Name : ${hackathonData.name}`,
            `URL : <a href= "${hackathonData.url}" style="color:white;">Visit on Website</a>`,
            `Start-Time : ${hackathonData.start_time}`,
            `End-Time : ${hackathonData.end_time}`,
            `Duration : ${Math.round(hackathonData.duration / 3600)} hours`,
            `Website : ${hackathonData.site}`,
            `Status : ${hackathonData.status}`,
        ];

        infoParagraphs.forEach(info => {
            const p = document.createElement('p');
            p.classList.add('data');
            p.innerHTML = `<span class="h4">${info.split(" : ")[0]} : </span> ${info.split(" : ")[1]}`;
            infoDiv.appendChild(p);
        });

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('line');
        block.appendChild(buttonDiv);

        const createTeamButton = document.createElement('button');
        createTeamButton.classList.add('btn');
        createTeamButton.innerText = 'Create Team';
        buttonDiv.appendChild(createTeamButton);
        createTeamButton.addEventListener('click', function () {

            const filePath = ('/client/createTeam.html');
            window.open(filePath, '_self');
        });

        const registerButton = document.createElement('button');

        registerButton.classList.add('btn');
        registerButton.style.float = 'right';
        registerButton.innerText = 'Register';
        buttonDiv.appendChild(registerButton);
        registerButton.addEventListener('click', function () {
            window.open('/client/Profile&Registration_Page/getprofile.html', '_self');

        });
    });
}
